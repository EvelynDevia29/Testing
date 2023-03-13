import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.rappi.com.co/');
  await page.getByRole('link', { name: 'Restaurantes Restaurantes' }).click();
  await page.getByRole('link', { name: 'McDonald\'s' }).click();
  await page.getByText('Combo Grande Pollo Mccrispy Classic').first().click();
  });