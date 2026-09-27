import { site } from "../../lib/content";
import { getAllPosts } from "../../lib/posts";
import { projects } from "../../lib/projects";
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
      entries: Array.from(document.querySelectorAll("url"), (node) => ({
        url: node.querySelector("loc")?.textContent ?? "",
        lastModified: node.querySelector("lastmod")?.textContent ?? null,
      })),
    };
  }, await sitemap.text());
  expect(parsed.errors).toBe(0);
  expect(parsed.entries.map(({ url }) => new URL(url).pathname).sort()).toEqual([...allRoutes].sort());
  expect(parsed.entries.every(({ url }) => new URL(url).origin === site.url)).toBe(true);
  const lastModifiedByPath = new Map(parsed.entries.map(({ url, lastModified }) => [new URL(url).pathname, lastModified]));
  for (const route of allRoutes.filter((path) => !articleRoutes.includes(path))) {
    expect(lastModifiedByPath.get(route), `${route} has no known significant-update date`).toBeNull();
  }
  for (const post of getAllPosts()) {
    expect(lastModifiedByPath.get(`/writing/${post.slug}`)).toMatch(new RegExp(`^${post.date}`));
  }
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain(`Sitemap: ${site.url}/sitemap.xml`);
  expect(await robots.text()).toMatch(/Allow: \/\s/);
});

test("social previews match route titles, descriptions and canonical URLs", async ({ page }) => {
  const titles = new Map<string, string>([
    ["/", `${site.name} · ${site.role}`],
    ...["About", "Projects", "Writing", "Speaking", "Uses", "Contact"].map((title): [string, string] => [
      `/${title.toLowerCase()}`,
      `${title} · ${site.name}`,
    ]),
    ...projects.map((project): [string, string] => [`/projects/${project.slug}`, `${project.title} · ${site.name}`]),
    ...getAllPosts().map((post): [string, string] => [`/writing/${post.slug}`, `${post.title} · ${site.name}`]),
  ]);

  for (const route of allRoutes) {
    await test.step(route, async () => {
      await page.goto(route);
      const expectedTitle = titles.get(route)!;
      const expectedDescription = await page.locator('meta[name="description"]').getAttribute("content");
      const expectedURL = new URL(route, site.url).href;
      await expect(page).toHaveTitle(expectedTitle);
      await expect(page.locator('meta[property="og:title"]')).toHaveAttribute("content", expectedTitle);
      await expect(page.locator('meta[property="og:description"]')).toHaveAttribute("content", expectedDescription!);
      const socialURL = await page.locator('meta[property="og:url"]').getAttribute("content");
      expect(new URL(socialURL!).href).toBe(expectedURL);
      await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
        "content",
        projectRoutes.includes(route) || articleRoutes.includes(route) ? "article" : "website",
      );
      await expect(page.locator('meta[name="twitter:title"]')).toHaveAttribute("content", expectedTitle);
      await expect(page.locator('meta[name="twitter:description"]')).toHaveAttribute("content", expectedDescription!);
    });
  }
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
