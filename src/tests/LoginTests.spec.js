import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

let Login;

test('TC_001 - Successful login with valid credentials', async ({ page }) => {
  Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.enterUsername('rahulsheyacademy');
  await Login.enterPassword('learning');
  await Login.PickRoleAsUser();
  await Login.selectAgreeButton();
  await Login.clickSubmit();
  // Assertions
  await expect(Login.successLoginText).toBeVisible();
  await page.close();

});

test('TC_002 - Login with invalid username', async ({ page }) => {
  Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.enterUsername('rahulshetty123');
  await Login.enterPassword('learning');
  await Login.PickRoleAsUser();
  await Login.selectAgreeButton();
  await Login.clickSubmit();
  await expect(Login.errorMessage).toBeVisible(); // Assertion
  await page.close();

});

test('TC_003 - Login with empty username', async ({ page }) => {
  Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.enterUsername('');
  await Login.enterPassword('learning');
  await Login.PickRoleAsUser();
  await Login.selectAgreeButton();
  await Login.clickSubmit();
  await expect(Login.emptyErrorMessage).toBeVisible();
  await page.close();

});

test('TC_004 - Login with incorrect uppercase username', async ({ page }) => {
  Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.enterUsername('RAHULSHETTYACADEMY');
  await Login.enterPassword('learning');
  await Login.PickRoleAsUser();
  await Login.selectAgreeButton();
  await Login.clickSubmit();
  // Assertion
  await expect(Login.errorMessage).toBeVisible();
  await page.close();

});

test('TC_005 - Login with empty password', async ({ page }) => {
  Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.enterUsername('rahulshettyacademy');
  await Login.enterPassword('');
  await Login.PickRoleAsUser();
  await Login.selectAgreeButton();
  await Login.clickSubmit();
  // Assertion
  await expect(Login.emptyErrorMessage).toBeVisible();
  await page.close();

});

test('TC_006 - Login with incorrect password', async ({ page }) => {
  Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.enterUsername('rahulshettyacademy');
  await Login.enterPassword('learning123');
  await Login.PickRoleAsUser();
  await Login.selectAgreeButton();
  await Login.clickSubmit();
  await page.waitForTimeout(1000);
  // Assertion
  await expect(Login.errorMessage).toBeVisible();
  await page.close();

});

test('TC_007 - Login with invalid username and password', async ({ page }) => {
  Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.enterUsername('rahulshetty123');
  await Login.enterPassword('learning123');
  await Login.PickRoleAsUser();
  await Login.selectAgreeButton();
  await Login.clickSubmit();
  await expect(Login.errorMessage).toBeVisible(); // Assertion
  await page.close();

});

test('TC_008 - Login without entering any credentials', async ({ page }) => {
  Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.enterUsername('');
  await Login.enterPassword('');
  await Login.PickRoleAsUser();
  await Login.selectAgreeButton();
  await Login.clickSubmit();
  await expect(Login.emptyErrorMessage).toBeVisible(); // Assertion
  await page.close();
});

test('TC_009 - Login with user role', async ({ page }) => {
  Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.enterUsername('rahulshettyacademy');
  await Login.enterPassword('learning');
  await Login.PickRoleAsAdmin();
  await Login.acceptUserAlert();
  await Login.selectAgreeButton();
  await Login.clickSubmit();
  await page.waitForTimeout(5000);
  await expect(Login.successLoginText).toBeVisible(); // Assertion
  await page.close();
});

test('TC_010 - Login without agreeing to terms', async ({ page }) => {
  Login = new LoginPage(page);
  await Login.gotoLoginPage();
  await Login.enterUsername('rahulshettyacademy');
  await Login.enterPassword('learning');
  await Login.PickRoleAsUser();
  await Login.clickSubmit();
  await page.waitForTimeout(5000);
  await expect(Login.successLoginText).not.toBeAttached(); // Assertion
  await page.close();

});












