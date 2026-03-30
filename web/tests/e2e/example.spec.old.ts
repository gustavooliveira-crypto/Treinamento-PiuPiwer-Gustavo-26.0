import { test, expect } from '@playwright/test'

test('should navigate to the cadastro page', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await Promise.all([
    page.waitForURL(/.*\/cadastro/),
    page.getByText('Cadastro', { exact: true }).click(),
  ])

  await expect(page.locator('h2')).toContainText('Aprenda se divertindo!')
})