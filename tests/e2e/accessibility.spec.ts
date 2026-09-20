import AxeBuilder from "@axe-core/playwright";
import { articleRoutes, projectRoutes, staticRoutes, test, expect } from "./fixtures";

const representativeRoutes = [...staticRoutes, projectRoutes[0], articleRoutes[0]];

for (const theme of ["light", "dark"]) {
  for (const route of representativeRoutes) {
    test(`${route} has no automated accessibility violations in ${theme} theme`, async ({ page }, testInfo) => {
      await page.addInitScript((chosenTheme) => {
        window.localStorage.setItem("theme", chosenTheme);
      }, theme);
      await page.goto(route);
      await expect(page.locator("html")).toHaveClass(new RegExp(`\\b${theme}\\b`));
      await expect(page.getByRole("button", { name: "Toggle color theme", exact: true })).toBeVisible();
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();
      if (results.violations.length) {
        await testInfo.attach("accessibility-violations", {
          body: JSON.stringify(results.violations, null, 2),
          contentType: "application/json",
        });
      }
      expect(results.violations).toEqual([]);
    });
  }
}

test("expanded mobile navigation has no automated accessibility violations", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open menu", exact: true }).click();
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});
