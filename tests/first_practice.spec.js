import { test,expect } from "allure-playwright";
test('first program ',async({page})=>{
    await page.goto('https://automationexercise.com/')
    await page.locator('//a[text()=" Products"]').click();
    await page.locator('(//a[text()="View Product"])[4]').click();
    await page.pause();

})