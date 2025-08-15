Playwright JS Automation Project: OpenCart & The Internet App
Overview
This project is a Playwright-based automation framework implemented in JavaScript for testing two web applications:
1.	OpenCart – E-commerce platform for testing shopping workflows.
2.	The Internet App – A sample app used for practicing UI automation scenarios (e.g., Dynamic Controls, File Downloads, Basic Auth, Context Menus).

________________________________________
Table of Contents
•	Project Structure
•	Installation
•	Running Tests
•	Running Specific Tests
•	Test Reports
•	Notes
________________________________________
Project Structure
.
├── tests/
│   ├── internetapp/
│   │   ├── Basic_Interaction/
│   │   │   ├── checkboxes.spec.js
│   │   │   └── dynamic-loading.spec.js
│   │   └── Advanced_Interaction/
│   │       ├── dynamicControls.spec.js
│   │       └── infiniteScroll.spec.js
├── pages/
│   ├── base/
│   │   └── BasePage.js
│   └── internet/
│       ├── CheckboxesPage.js
│       ├── DynamicLoadingPage.js
│       ├── DynamicControlsPage.js
│       └── InfiniteScrollPage.js
├── playwright.config.js
└── package.json
•	tests/ – Contains all test files grouped by feature.
•	pages/ – Page Object Model files containing reusable functions.
•	playwright.config.js – Playwright configuration file.
________________________________________
Installation
1.	Clone the repository:
git clone <repository_url>
cd <repository_folder>
2.	Install dependencies:
npm install
3.	Install Playwright browsers:
npx playwright install --with-deps
________________________________________
Running Tests
•	Run all tests:
npx playwright test
•	Run tests in headed mode to see the browser:
npx playwright test --headed
•	Run tests in specific browser:
npx playwright test --project=firefox
npx playwright test --project=chromium
npx playwright test --project=webkit
________________________________________
Running Specific Tests
•	Run a single test file:
npx playwright test tests/internetapp/Basic_Interaction/checkboxes.spec.js
•	Run a specific test by name:
npx playwright test -g "Verify checkbox state changes and persistence"
•	Use test.only() in a test file to run only that test:
test.only('Test name', async ({ page }) => {
  // test code
});
________________________________________
Test Reports
•	HTML report:
npx playwright show-report
•	Playwright automatically saves screenshots and videos for failed tests in test-results/.
________________________________________
Contributing
1.	Fork the repository.
2.	Create a new feature branch:
git checkout -b feature/YourFeature
3.	Commit your changes:
git commit -m "Add new feature"
4.	Push to your branch and open a Pull Request.
________________________________________
Tech Stack
•	Language: JavaScript (ES6+)
•	Automation Tool: Playwright
•	Test Runner: Playwright Test
•	Browser Support: Chromium, Firefox, WebKit
•	Utilities: Node.js, npm
________________________________________
Architecture Decisions & Design Patterns
•	Page Object Model (POM): Each page has its own class with reusable methods.
•	Utility Functions: Common functions like waits, retries, and file handling are centralized.
•	Error Handling: Custom retry mechanisms and comprehensive logging for flaky elements.
•	Separation of Concerns: Tests, pages, and utilities are organized in separate folders.
_______________________________________

Notes
•	This project uses Page Object Model for maintainable and reusable test code.
•	Make sure you have a stable internet connection when running tests because the website is hosted on Herokuapp.
•	Adjust timeouts in playwright.config.js if tests fail due to slow loading:
use: {
  navigationTimeout: 60000,
  actionTimeout: 30000
}

