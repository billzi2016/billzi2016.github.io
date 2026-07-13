import { expect, test } from "@playwright/test";

test("home page supports language and theme toggles", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Ziqian Bi" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Site Guide" })).toBeVisible();

  await page.getByRole("button", { name: /中文|switch language/i }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "zh-CN");
  await expect(page.getByRole("heading", { name: "站点导览" })).toBeVisible();

  await page.getByRole("button", { name: /深色|dark|switch theme/i }).click();
  await expect(page.locator("html")).toHaveClass(/dark-theme/);
});

test("core pages render their primary content", async ({ page }) => {
  const cases = [
    ["/experience.html", "Industry Experience"],
    ["/projects.html", "Repository Ranking"],
    ["/publications.html", "Selected Publications"],
    ["/personal.html", "Hobby"],
    ["/music.html", "Listening Room"],
  ] as const;

  for (const [url, heading] of cases) {
    await page.goto(url);
    await expect(page.getByRole("heading", { name: heading })).toBeVisible();
  }
});

test("music page exposes playlist controls without console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });

  await page.goto("/music.html");

  await expect(page.locator("#site-audio-player")).toBeAttached();
  await expect(page.locator(".playlist-item")).toHaveCount(8);
  await expect(page.getByRole("button", { name: /Shuffle Next/i })).toBeVisible();
  expect(errors).toEqual([]);
});

test("site search returns local results", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("#site-search-widget")).toBeVisible();
  await page.locator("#site-search-input").fill("Astro");
  await page.locator("#site-search-form").evaluate((form) => {
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
  });

  await expect(page.locator("#site-search-results")).toContainText(/Results|No matching results/);
});

test("project gallery opens and closes the lightbox", async ({ page }) => {
  await page.goto("/projects.html");

  await page.locator(".project-image-button").first().click();
  await expect(page.locator(".pswp")).toBeVisible();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.locator(".pswp__button--zoom")).toBeVisible();

  await page.keyboard.press("Escape");
  await expect(page.locator(".pswp")).not.toBeVisible();
});
