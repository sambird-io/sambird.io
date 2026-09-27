import { site } from "../../lib/content";
import { getAllPosts } from "../../lib/posts";
import { projects } from "../../lib/projects";
import { allRoutes, test, expect } from "./fixtures";

for (const route of allRoutes) {
  test(`renders ${route} with working assets and canonical metadata`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(200);
    await expect(page).toHaveTitle(/Sam Bird/);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("main")).toBeVisible();
    expect(await page.locator("body").evaluate((element) => getComputedStyle(element).backgroundColor)).not.toBe("rgba(0, 0, 0, 0)");
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute("href", /^https:\/\/sambird\.io/);
    expect(new URL((await canonical.getAttribute("href"))!).href).toBe(new URL(route, site.url).href);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /\S.{20,}/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("main")).not.toContainText(/\bTODO\b/);

    // Lazy-loaded images must also be exercised before declaring a page healthy.
    for (const image of await page.getByRole("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect(image).toHaveJSProperty("complete", true);
      await expect.poll(() => image.evaluate((element) => (element as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1);
  });
}

test("navigation exposes the current page and opens every primary destination", async ({ page, isMobile }) => {
  await page.goto("/");
  await expect(page.getByRole("banner").getByRole("link", { name: /Sam Bird/ })).toBeVisible();

  for (const label of ["Projects", "Writing", "About", "Speaking", "Uses", "Contact"]) {
    if (isMobile) await page.getByRole("button", { name: "Open menu", exact: true }).click();
    const link = page.getByRole("banner").getByRole("link", { name: label, exact: true }).filter({ visible: true });
    await link.click();
    await expect(page).toHaveURL(new RegExp(`/${label.toLowerCase()}$`));
    if (isMobile) {
      await expect(page.getByRole("button", { name: "Open menu", exact: true })).toHaveAttribute("aria-expanded", "false");
      await page.getByRole("button", { name: "Open menu", exact: true }).click();
    }
    await expect(link).toHaveAttribute("aria-current", "page");
    if (isMobile) await page.getByRole("button", { name: "Close menu", exact: true }).click();
  }

  for (const label of ["Speaking", "Uses"]) {
    await expect(page.getByRole("contentinfo").getByRole("link", { name: label, exact: true })).toBeVisible();
  }
});

test("mobile menu closes with Escape and restores keyboard focus", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  const close = page.getByRole("button", { name: "Close menu", exact: true });
  await expect(close).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Escape");
  const open = page.getByRole("button", { name: "Open menu", exact: true });
  await expect(open).toHaveAttribute("aria-expanded", "false");
  await expect(open).toBeFocused();
});

test("theme choice survives navigation and reload", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/\blight\b/);
  const themeToggle = page.getByRole("button", { name: "Dark theme", exact: true });
  await expect(themeToggle).toHaveAttribute("aria-pressed", "false");
  await themeToggle.click();
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  await expect(themeToggle).toHaveAttribute("aria-pressed", "true");
  await page.getByRole("main").locator('a[href="/projects"]').first().click();
  await expect(page).toHaveURL(/\/projects$/);
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/\bdark\b/);
  await themeToggle.click();
  await expect(page.locator("html")).toHaveClass(/\blight\b/);
  await expect(themeToggle).toHaveAttribute("aria-pressed", "false");
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/\blight\b/);
});

test("keyboard users can skip directly to the main content", async ({ page, browserName }) => {
  await page.goto("/");
  // Safari on macOS uses Option-Tab to include links in keyboard navigation.
  // https://support.apple.com/guide/safari/cpsh003/mac
  await page.keyboard.press(browserName === "webkit" && process.platform === "darwin" ? "Alt+Tab" : "Tab");
  const skip = page.getByRole("link", { name: /skip to (main )?content/i });
  await expect(skip).toBeFocused();
  await expect(skip).toBeVisible();
  await skip.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
  await expect(page.locator("#main-content")).toBeFocused();
});

test("flagship case study can be opened and returned to the project index", async ({ page }) => {
  const flagship = projects.find((project) => project.slug === "inside-the-kubernetes-cluster")!;
  await page.goto("/");
  await page.getByRole("main").locator(`a[href="/projects/${flagship.slug}"]`).first().click();
  await expect(page).toHaveURL(new RegExp(`/projects/${flagship.slug}$`));
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(flagship.title);
  await expect(page.getByRole("main").locator(`a[href="${flagship.repo}"]`)).toBeVisible();
  await page.getByRole("main").getByRole("link", { name: /all projects/i }).click();
  await expect(page).toHaveURL(/\/projects$/);
  for (const project of projects) {
    await expect(page.getByRole("main").locator(`a[href="/projects/${project.slug}"]`)).toBeVisible();
  }
});

test("the homepage leads to measured professional impact and its source", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await page.getByRole("link", { name: "See selected impact" }).click();
  await expect(page).toHaveURL(/#selected-impact$/);
  const impact = page.getByRole("region", { name: "Selected impact" });
  await expect(impact).toBeInViewport();
  for (const metric of ["4h → 2h", "½ day → <30 min", "1 week → <5 min"]) {
    await expect(impact).toContainText(metric);
  }
  await impact.locator('a[href="/projects/terraform-pipeline-performance"]').click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Halving a Terraform Provisioning Pipeline");
  for (const heading of ["The constraint", "The decision", "The result"]) {
    await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
  }
  await expect(page.getByRole("main")).toContainText("Senior DevOps Consultant · Publicis Sapient");
  await page.getByRole("link", { name: "Read the full Terraform pipeline story" }).click();
  await expect(page).toHaveURL(/\/writing\/terraform-pipeline-4h-to-2h$/);
});

test("impact links land on the matching experience evidence", async ({ page }) => {
  for (const [anchor, outcome] of [
    ["ibm", "under 30 minutes"],
    ["john-lewis", "under 5 minutes"],
  ]) {
    await page.goto("/");
    await page.locator(`#selected-impact a[href="/about#${anchor}"]`).click();
    await expect(page).toHaveURL(new RegExp(`/about#${anchor}$`));
    const experience = page.locator(`#${anchor}`);
    await expect(experience).toBeInViewport();
    await expect(experience).toContainText(outcome);
  }
});

test("projects distinguish production work from runnable independent builds", async ({ page }) => {
  await page.goto("/projects");
  const professional = page.getByRole("region", { name: "Professional impact" });
  const independent = page.getByRole("region", { name: "Independent builds" });
  await expect(professional.locator('a[href="/projects/terraform-pipeline-performance"]')).toBeVisible();
  await expect(independent.locator('a[href="/projects/inside-the-kubernetes-cluster"]')).toBeVisible();
  await independent.locator('a[href="/projects/inside-the-kubernetes-cluster"]').click();
  await expect(page.getByRole("heading", { name: "Architecture" })).toBeVisible();
  await expect(page.getByText("make demo-all VERSION=v1", { exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: "Run the local demo" })).toHaveAttribute("href", /github\.com\/sambird-io\/inside-the-k8s-cluster/);
});

test("readers can open an article and return to all writing", async ({ page }) => {
  const post = getAllPosts()[0];
  await page.goto("/writing");
  await page.getByRole("main").locator(`a[href="/writing/${post.slug}"]`).first().click();
  await expect(page).toHaveURL(new RegExp(`/writing/${post.slug}$`));
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(post.title);
  await expect(page.getByRole("article").locator("time")).toHaveAttribute("datetime", post.date);
  await expect(page.getByRole("article").getByRole("heading", { level: 2 }).first()).toBeVisible();
  await page.getByRole("main").getByRole("link", { name: /all writing/i }).click();
  await expect(page).toHaveURL(/\/writing$/);
});

test("contact destinations are valid and external profiles open safely", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("main").locator(`a[href="mailto:${site.email}"]`)).toBeVisible();
  for (const destination of Object.values(site.links)) {
    const link = page.getByRole("main").locator(`a[href="${destination}"]`);
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute("target", "_blank");
    await expect(link).toHaveAttribute("rel", /noopener/);
    await expect(link).toHaveAttribute("rel", /noreferrer/);
  }
});

test("all pages fit a 360px viewport without horizontal scrolling", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  for (const route of allRoutes) {
    await test.step(route, async () => {
      await page.goto(route);
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth)).toBeLessThanOrEqual(1);
    });
  }
});

for (const route of ["/not-a-real-page", "/projects/not-a-real-project", "/writing/not-a-real-article"]) {
  test(`unknown route ${route} returns a real 404`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("main")).toContainText(/404|not found|couldn.t find/i);
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
  });
}
