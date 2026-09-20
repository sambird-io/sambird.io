import { site } from "../../lib/content";
import { getAllPosts } from "../../lib/posts";
import { allRoutes, articleRoutes, projectRoutes, test, expect } from "./fixtures";

test("RSS publishes the articles with valid XML and canonical links", async ({ request, page }) => {
  const response = await request.get("/feed.xml");
  expect(response.status()).toBe(200);
  expect(response.headers()["content-type"]).toContain("application/rss+xml");
  const parsed = await page.evaluate((xml) => {
    const document = new DOMParser().parseFromString(xml, "application/xml");
    return {
      errors: document.querySelectorAll("parsererror").length,
      titles: Array.from(document.querySelectorAll("item > title"), (node) => node.textContent),
      links: Array.from(document.querySelectorAll("item > link"), (node) => node.textContent),
    };
  }, await response.text());
  expect(parsed.errors).toBe(0);
  expect(parsed.titles).toEqual(getAllPosts().map((post) => post.title));
  expect(parsed.links).toEqual(articleRoutes.map((route) => `${site.url}${route}`));
});

test("sitemap and robots expose all public pages to crawlers", async ({ request, page }) => {
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const parsed = await page.evaluate((xml) => {
    const document = new DOMParser().parseFromString(xml, "application/xml");
    return {
      errors: document.querySelectorAll("parsererror").length,
      urls: Array.from(document.querySelectorAll("url > loc"), (node) => node.textContent),
    };
  }, await sitemap.text());
  expect(parsed.errors).toBe(0);
  expect(parsed.urls.map((url) => new URL(url!).pathname).sort()).toEqual([...allRoutes].sort());
  expect(parsed.urls.every((url) => new URL(url!).origin === site.url)).toBe(true);
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${site.url}/sitemap.xml`);
  expect(await robots.text()).toMatch(/Allow: \/\s/);
});

test("home, case study and article share cards are real images", async ({ page, request }) => {
  for (const route of ["/", projectRoutes[0], articleRoutes[0]]) {
    await test.step(route, async () => {
      await page.goto(route);
      const image = page.locator('meta[property="og:image"]').first();
      await expect(image).toHaveAttribute("content", /^https:\/\/sambird\.io\//);
      const imageURL = new URL((await image.getAttribute("content"))!);
      const response = await request.get(`${imageURL.pathname}${imageURL.search}`);
      expect(response.status()).toBe(200);
      expect(response.headers()["content-type"]).toContain("image/");
      expect((await response.body()).length).toBeGreaterThan(1000);
    });
  }
});
