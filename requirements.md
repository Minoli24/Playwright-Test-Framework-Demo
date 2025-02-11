# Requirements for Playwright Test Framework

## 1. Prerequisites

Before setting up the Playwright test framework, ensure that you have the following installed:

- **Node.js (v16 or later)** – [Download](https://nodejs.org/)
- **npm or yarn** – Comes with Node.js
- **Git** – [Download](https://git-scm.com/)

## 2. Installing Playwright

To install Playwright and required dependencies, run the following command:
```sh
npm init playwright@latest
```
Or, if adding Playwright to an existing project:
```sh
npm install --save-dev @playwright/test
npx playwright install
```

## 3. Project Dependencies

Ensure the following dependencies are added to your `package.json`:
```json
"devDependencies": {
  "@playwright/test": "latest"
}
```

Additional dependencies required for testing may include:
```sh
npm install dotenv faker jest-allure
```

## 4. Environment Variables

Create a `.env` file in the root directory for storing sensitive configurations like:
```
BASE_URL=https://yourapp.com
USERNAME=your_username
PASSWORD=your_password
```

## 5. Running Tests

Execute the test cases using:
```sh
npx playwright test
```
Run a specific test file:
```sh
npx playwright test tests/example.spec.js
```
Run tests with headed mode:
```sh
npx playwright test --headed
```

## 6. Generating Reports

To generate an HTML report:
```sh
npx playwright test --reporter=html
```

To generate an Allure report (if installed):
```sh
npx playwright test --reporter=line,allure-playwright
```

## 7. Folder Structure
```
/playwright-project
│── tests/
│   ├── login.spec.js
│   ├── dashboard.spec.js
│── resources/
│   ├── requirements.md
│── playwright.config.js
│── package.json
│── .env
```

## 8. Additional Configuration
Modify `playwright.config.js` for custom settings:
```js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  use: {
    baseURL: process.env.BASE_URL || 'https://yourapp.com',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'on',
  },
});
```


