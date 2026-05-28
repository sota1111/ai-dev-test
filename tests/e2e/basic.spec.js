const { test, expect } = require('@playwright/test');

test('トップページ基本表示確認', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('AI Dev Control Plane');
  await expect(page.getByText('AI Dev Control Plane').first()).toBeVisible();
  await expect(page.getByText('Running').first()).toBeVisible();
  const lastUpdated = page.locator('#last-updated');
  await expect(lastUpdated).toBeVisible();
});

test('Health Checkページ基本表示確認', async ({ page }) => {
  await page.goto('/health.html');
  await expect(page).toHaveTitle('Health Check');
  await expect(page.getByRole('heading', { name: 'Health Check' })).toBeVisible();
  await expect(page.getByText('OK').first()).toBeVisible();
});
