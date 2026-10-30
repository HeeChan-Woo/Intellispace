import { expect, test } from "@playwright/test";

async function revealAll(page: import("@playwright/test").Page) {
  for (const section of await page.locator(".reveal").all()) {
    await section.scrollIntoViewIfNeeded();
    await page.waitForTimeout(80);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
}

test("desktop home matches the intended structure", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Ideas become/ })).toBeVisible();
  await expect(page.locator("#services")).toBeVisible();
  await expect(page.locator("body")).toHaveJSProperty("scrollWidth", 1440);
  await revealAll(page);
  await page.screenshot({ path: "artifacts/home-desktop.png", fullPage: true });
});

test("mobile home has no horizontal overflow and menu works", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await page.getByRole("button", { name: "메뉴 열기" }).click();
  await expect(page.getByRole("navigation", { name: "모바일 메뉴" })).toBeVisible();
  await page.getByRole("button", { name: "메뉴 열기" }).click();
  await revealAll(page);
  await page.screenshot({ path: "artifacts/home-mobile.png", fullPage: true });
});

test("contact form validates and never reports an unconfigured delivery as success", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contact");
  await page.getByRole("button", { name: /프로젝트 문의 보내기/ }).click();
  await expect(page.getByText("성함을 2자 이상 입력해 주세요.")).toBeVisible();
  await page.getByLabel("담당자 성함 *").fill("홍길동");
  await page.getByLabel("이메일 *").fill("hello@example.com");
  await page.getByLabel("프로젝트 내용 *").fill("AI 기반 업무 자동화 프로젝트 상담을 요청드리고 싶습니다.");
  await page.getByText("개인정보 수집·이용 안내를 확인하고 동의합니다.").click();
  await page.getByRole("button", { name: /프로젝트 문의 보내기/ }).click();
  await expect(page.getByText(/현재 문의 전송 서비스가 설정되지 않았습니다/)).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await page.screenshot({ path: "artifacts/contact-mobile.png", fullPage: true });
});

test("desktop contact keeps the Figma two-column layout", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/contact");
  await expect(page.getByRole("heading", { name: /Your next idea/ })).toBeVisible();
  await expect(page.locator(".inquiry-guide")).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(1440);
  await page.screenshot({ path: "artifacts/contact-desktop.png", fullPage: true });
});
