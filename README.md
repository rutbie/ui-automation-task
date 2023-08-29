# ui-automation-task

### Preconditions

* Must have node & npm installed
* Preferred IDE: VS code

### Setup & run

* Install dependencies: ``npm install``.

* Check .env file. It is not prepared for tests, yet some data might be adjusted if needed (EMAIL_PREFIX) or changing env (WWW_URL or CHECKOUT_URL).

* To run all tests, use ``npm test`` command. In order to run in headed mode (since headless is default), use ``npm run test:headed`` command.

* To run single test, add ``test.only`` on your desired test and run with test run command.

* In order to lint project files in one format, use ``npm run lint`` (for checking) and ``npm run lint:fix`` (for fixing) commands.

### Approach

Main framework configuration can be found (and changed) in ``playwright.config.ts`` file. The approach is such:
* For setup (specific cookies adding, to create needed environment), ``cookiesSetup.ts`` is being run. It saves cookies value in file which is later reused in all tests (en locale, no cookies banner). (project - setup)
* For further run, chrome browser is being used. (project - main suite (chrome)).
* Reporter is default html. It can be found in ``test-reports`` directory or simply opened via ``npm run report:open`` command (closed with ctrl+c).
* **Limitation:** one limitation worth-mentioning is that prices test data is prepared for EURs, so in case other currency is used (e.g. USD, GBP, etc.) test would fail. This would require better solution (either ability to adjust country code, select prices based on it or adjust tests based on server/expected IP address).