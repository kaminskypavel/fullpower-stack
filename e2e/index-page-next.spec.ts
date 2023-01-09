import { test, expect } from "@playwright/test";

test.describe("index page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/");
    await page.waitForLoadState("networkidle");
  });
  test("@smoke", async ({ page }) => {
    const isFinished = (response) =>
      response.url().includes("/cat") && response.status() === 200;
    await page.getByRole("button", { name: "Load Cat" }).click();
    const response = await page.waitForResponse(isFinished);
    const json = await response.json();
    expect(json.result.data).toBeDefined();
  });

  test("@visual", async ({ page }) => {
    await page.screenshot({
      animations: "disabled",
      path: `screenshots/index-page-next.png`,
      fullPage: true,
    });
  });
});
