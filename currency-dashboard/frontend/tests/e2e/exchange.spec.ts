import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/api/exchange?from=TWD&to=USD', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({
        rate: 0.0315,
        series: Array.from({ length: 30 }, (_, index) => ({
          date: `2026-02-${String(index + 1).padStart(2, '0')}`,
          rate: 0.03 + index * 0.0001,
        })),
      }),
    });
  });
});

test('homepage shows exchange widget and conversion works', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('TWD → USD')).toBeVisible();
  await expect(page.getByText('0.0315')).toBeVisible();

  const input = page.getByLabel('twd-input');
  await input.fill('1000');

  await expect(page.getByText('31.50 USD')).toBeVisible();
});

test('exchange API request returns 200 via mocked backend', async ({ page }) => {
  const responsePromise = page.waitForResponse('**/api/exchange?from=TWD&to=USD');
  await page.goto('/');
  const response = await responsePromise;
  expect(response.status()).toBe(200);
});
