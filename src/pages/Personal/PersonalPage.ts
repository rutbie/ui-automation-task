import { Locator, Page } from '@playwright/test';

const pageRoute = '/personal-password-manager';

export default class PersonalPage {
	readonly page: Page;
	readonly checkPlansBtn: Locator;
	readonly startFreeTrialBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.checkPlansBtn = page.locator('a', { hasText: 'Check plans' }).first();
		this.startFreeTrialBtn = page.locator('a', { hasText: 'Start Free Trial' }).first();
	}

	navigate = async () => {
		await this.page.goto(pageRoute);
	}

	clickCheckPlansBtn = async () => {
		await this.checkPlansBtn.click();
	}

	clickStartFreeTrialBtn = async () => {
		await this.startFreeTrialBtn.click();
	}
}