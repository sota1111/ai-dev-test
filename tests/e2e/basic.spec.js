const { test, expect } = require('@playwright/test');

test('トップページ基本表示確認', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('AI Dev Control Plane');
  await expect(page.getByText('AI Dev Control Plane').first()).toBeVisible();
  await expect(page.getByText('Running').first()).toBeVisible();
  const lastUpdated = page.locator('#last-updated');
  await expect(lastUpdated).toBeVisible();

  // New Health Status elements
  await expect(page.locator('#health-status')).toContainText('OK');
  const checkedAt = page.locator('#health-checked-at');
  await expect(checkedAt).toBeVisible();

  // Check Health button
  const btn = page.locator('#check-health-btn');
  await expect(btn).toBeVisible();
  await btn.click();
  await expect(checkedAt).not.toContainText('—');
});

test('Health Checkページ基本表示確認', async ({ page }) => {
  await page.goto('/health.html');
  await expect(page).toHaveTitle('Health Check');
  await expect(page.getByRole('heading', { name: 'Health Check' })).toBeVisible();
  
  // Updated element IDs
  await expect(page.locator('#health-status')).toContainText('OK');
  await expect(page.locator('#health-checked-at')).toBeVisible();
});
