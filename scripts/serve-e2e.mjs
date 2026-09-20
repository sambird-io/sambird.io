import { spawn, execFileSync } from "node:child_process";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { createServer } from "node:https";
import { request } from "node:http";
import { tmpdir } from "node:os";
import path from "node:path";

// Exercise the production CSP over HTTPS, just as Fly's TLS proxy does.
// Safari upgrades HTTP loopback assets when upgrade-insecure-requests is set.
const directory = await mkdtemp(path.join(tmpdir(), "sambird-e2e-"));
const keyPath = path.join(directory, "key.pem");
const certPath = path.join(directory, "cert.pem");
try {
  execFileSync("openssl", ["req", "-x509", "-newkey", "rsa:2048", "-nodes", "-keyout", keyPath, "-out", certPath, "-subj", "/CN=localhost", "-days", "1"], { stdio: "ignore" });
} catch (error) {
  await rm(directory, { recursive: true, force: true });
  throw error;
}

const child = spawn(process.execPath, ["scripts/serve-standalone.mjs"], {
  stdio: "inherit",
  env: { ...process.env, HOSTNAME: "127.0.0.1", PORT: "3101" },
});
const proxy = createServer({ key: await readFile(keyPath), cert: await readFile(certPath) }, (incoming, outgoing) => {
  const upstream = request({ hostname: "127.0.0.1", port: 3101, path: incoming.url, method: incoming.method, headers: { ...incoming.headers, "x-forwarded-proto": "https" } }, (response) => {
    outgoing.writeHead(response.statusCode ?? 502, response.headers);
    response.pipe(outgoing);
  });
  upstream.on("error", () => {
    if (!outgoing.headersSent) outgoing.writeHead(502);
    outgoing.end("Standalone server is starting");
  });
  incoming.pipe(upstream);
});
proxy.listen(3100, "127.0.0.1");
proxy.on("error", (error) => { console.error(error); child.kill("SIGTERM"); process.exitCode = 1; });
for (const signal of ["SIGINT", "SIGTERM"]) process.on(signal, () => child.kill(signal));
child.on("exit", async (code, signal) => {
  proxy.closeAllConnections();
  proxy.close();
  await rm(directory, { recursive: true, force: true });
  process.exitCode = code ?? (signal === "SIGTERM" || signal === "SIGINT" ? 0 : 1);
});
child.on("error", (error) => { console.error(error); proxy.close(); process.exitCode = 1; });
