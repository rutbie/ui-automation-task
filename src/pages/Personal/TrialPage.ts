import { Locator, Page, expect } from '@playwright/test';

const pageRoute = '/try-premium';

export default class TrialPage {
	readonly page: Page;
	readonly emailInput: Locator;
	readonly getStartedBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.emailInput = page.locator('[name = email]').first();
		this.getStartedBtn = page.locator('button', { hasText: 'Get started' }).first();
	}

	navigate = async () => {
		await this.page.goto(pageRoute);
	}

	fillEmailInput = async (email: string) => {
		await this.emailInput.fill(email);
	}

	clickGetStartedBtn = async () => {
		await this.getStartedBtn.click();
	}

	assertPageOpened = async () => {
		await expect(this.emailInput).toBeVisible();
		await expect(this.page.url()).toContain(pageRoute);
	}
}