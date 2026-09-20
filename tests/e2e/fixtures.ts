import { test as base, expect } from "@playwright/test";
import { projects } from "../../lib/projects";
import { getAllPosts } from "../../lib/posts";

export const staticRoutes = [
  "/",
  "/about",
  "/projects",
  "/writing",
  "/speaking",
  "/uses",
  "/contact",
];

export const projectRoutes = projects.map((project) => `/projects/${project.slug}`);
export const articleRoutes = getAllPosts().map((post) => `/writing/${post.slug}`);
export const allRoutes = [...staticRoutes, ...projectRoutes, ...articleRoutes];

export const test = base.extend<{ healthyBrowser: void }>({
  healthyBrowser: [
    async ({ page, baseURL }, use, testInfo) => {
      const errors: string[] = [];
      const origin = new URL(baseURL!).origin;

      page.on("pageerror", (error) => errors.push(`JavaScript: ${error.message}`));
      page.on("requestfailed", (request) => {
        const failure = request.failure()?.errorText ?? "Unknown network error";
        // Browsers cancel prefetches when a user changes routes; that is expected.
        if (
          new URL(request.url()).origin === origin &&
          !/ERR_ABORTED|cancelled|canceled/i.test(failure)
        ) {
          errors.push(`Request: ${request.url()} (${failure})`);
        }
      });
      page.on("response", (response) => {
        // Document status is asserted by each route test, including intentional 404s.
        if (
          new URL(response.url()).origin === origin &&
          response.request().resourceType() !== "document" &&
          response.status() >= 400
        ) {
          errors.push(`Asset: ${response.status()} ${response.url()}`);
        }
      });

      await use();

      if (errors.length) {
        await testInfo.attach("browser-errors", {
          body: errors.join("\n"),
          contentType: "text/plain",
        });
      }
      expect(errors, "Browser runtime and same-origin requests should be healthy").toEqual([]);
    },
    { auto: true },
  ],
});

export { expect };
