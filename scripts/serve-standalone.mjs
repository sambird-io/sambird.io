import { spawn } from "node:child_process";
import { access, cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const standalone = path.join(root, ".next", "standalone");
const server = path.join(standalone, "server.js");

try {
  await access(server);
} catch {
  console.error("Standalone build missing. Run npm run build before the E2E tests.");
  process.exit(1);
}

// Match the Docker runner: Next's standalone output omits these assets.
await mkdir(path.join(standalone, ".next"), { recursive: true });
for (const directory of ["public", ".next/static"]) {
  const destination = path.join(standalone, directory);
  await rm(destination, { recursive: true, force: true });
  await cp(path.join(root, directory), destination, { recursive: true });
}

const child = spawn(process.execPath, [server], {
  cwd: standalone,
  stdio: "inherit",
  env: {
    ...process.env,
    NODE_ENV: "production",
    HOSTNAME: process.env.HOSTNAME || "127.0.0.1",
    PORT: process.env.PORT || "3100",
  },
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
child.on("error", (error) => {
  console.error(error);
  process.exitCode = 1;
});
child.on("exit", (code, signal) => {
  process.exitCode = code ?? (signal === "SIGTERM" || signal === "SIGINT" ? 0 : 1);
});
