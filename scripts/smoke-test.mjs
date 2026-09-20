import assert from "node:assert/strict";
import { setTimeout } from "node:timers/promises";

const baseURL = new URL(process.env.BASE_URL || "http://127.0.0.1:3000");
const expectedRevision = process.env.EXPECTED_REVISION;

async function get(path) {
  const url = new URL(path, baseURL);
  let failure;
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(15_000), cache: "no-store" });
      assert.equal(response.status, 200, `${url} returned ${response.status}`);
      return response;
    } catch (error) {
      failure = error;
      if (attempt < 5) await setTimeout(3000);
    }
  }
  throw failure;
}

// A successful response from the previous release isn't a successful deployment.
let health;
for (let attempt = 0; attempt < 6; attempt++) {
  health = await (await get("/health")).json();
  if (!expectedRevision || health.revision === expectedRevision) break;
  if (attempt < 5) await setTimeout(3000);
}
assert.equal(health.status, "ok");
if (expectedRevision) assert.equal(health.revision, expectedRevision, "Deployed revision does not match this commit");
console.log(`Healthy build: ${health.revision}`);

const routes = ["/", "/about", "/projects", "/writing", "/speaking", "/uses", "/contact", "/projects/inside-the-kubernetes-cluster", "/writing/terraform-pipeline-4h-to-2h"];
let home;
for (const route of routes) {
  const response = await get(route);
  assert.match(response.headers.get("content-type") || "", /text\/html/);
  const html = await response.text();
  assert.match(html, /<h1[\s>]/, `${route} is missing its heading`);
  assert.match(html, /Sam Bird/, `${route} returned unexpected content`);
  assert.doesNotMatch(html, /\bTODO\b/);
  if (route === "/") {
    home = html;
    assert.equal(response.headers.get("x-content-type-options"), "nosniff");
    assert.match(response.headers.get("content-security-policy") || "", /frame-ancestors 'none'/);
  }
  console.log(`OK ${route}`);
}

const stylesheet = home.match(/href="([^\"]+\.css(?:\?[^\"]*)?)"/);
assert.ok(stylesheet, "Homepage is missing its stylesheet");
const css = await get(stylesheet[1].replaceAll("&amp;", "&"));
assert.match(css.headers.get("content-type") || "", /text\/css/);
assert.ok((await css.text()).length > 1000, "Stylesheet is unexpectedly empty");
for (const [route, type] of [["/feed.xml", /xml/], ["/sitemap.xml", /xml/], ["/robots.txt", /text\/plain/], ["/opengraph-image", /image\/png/]]) {
  const response = await get(route);
  assert.match(response.headers.get("content-type") || "", type);
  assert.ok((await response.arrayBuffer()).byteLength > 0);
  console.log(`OK ${route}`);
}
if (baseURL.hostname === "sambird.io") {
  const redirect = await fetch("https://www.sambird.io/projects", { redirect: "manual", signal: AbortSignal.timeout(15_000) });
  assert.equal(redirect.status, 308);
  assert.equal(redirect.headers.get("location"), "https://sambird.io/projects");
  console.log("OK www canonical redirect");
}
