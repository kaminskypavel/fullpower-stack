import { test } from "@playwright/test";

test("should navigate to main page and click boop", async ({ page }) => {
  await page.goto("/");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch((e) => {
      console.error(e);
    });
  });
  await page.getByRole("button", { name: "Boop" }).click();
});
