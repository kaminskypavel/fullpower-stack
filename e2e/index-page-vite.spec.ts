import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test.describe("index page tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
    await page.waitForLoadState("networkidle");
  });
  test("@smoke", async ({ page }) => {
    const randomEmail = faker.internet.email();
    const randomName = faker.name.fullName();
    const isFinished = (response) =>
      response.url().includes("/list") && response.status() === 200;
    await page.getByPlaceholder("name").fill(randomName);
    await page.getByPlaceholder("Email address").fill(randomEmail);
    await page.getByRole("button", { name: "Save" }).click();
    const response = await page.waitForResponse(isFinished);
    const json = await response.json();
    expect(json.result.data.users).toBeDefined();
    const email = await page.getByText(randomEmail).count();
    const name = await page.getByText(randomName).count();
    expect(email).toBe(1);
    expect(name).toBe(1);
  });

  test("@visual", async ({ page }) => {
    await page.screenshot({
      animations: "disabled",
      path: `screenshots/index-page-vite.png`,
      fullPage: true,
    });
  });
});
