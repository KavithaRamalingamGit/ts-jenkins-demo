
import { test, expect } from '@playwright/test';

//Create a test using screenshot validation for the page https://nop-qa.portnov.com/notebooks
test('Full page test', async ({ page }) => {

    await page.goto('https://nop-qa.portnov.com/notebooks')

    await expect(page).toHaveScreenshot('notebooks.png', {
      fullPage: true,
      animations: 'disabled',
      maxDiffPixelRatio: 0.01,
    });

});

