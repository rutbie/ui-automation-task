import { Locator, Page, expect } from '@playwright/test';

const pageUrl = process.env.CHECKOUT_URL;

export default class CheckoutPage {
	readonly page: Page;
	readonly signUpForm: Locator;
	readonly planName: Locator;
	readonly planMonthlyPrice: Locator;
	readonly planTotalPrice: Locator;

	constructor(page: Page) {
		this.page = page;
		this.signUpForm = page.locator('#SignupForm');
		this.planName = page.getByTestId('NordPassCartSummarySelectedItem');
		this.planMonthlyPrice = page.getByTestId('SelectedCartSummaryCard-atomic-price');
		this.planTotalPrice = page.getByTestId('SelectedCartSummaryCard-total-price');
	}

	assertPageOpened = async () => {
		await expect(this.signUpForm).toBeVisible();
		await expect(this.page.url()).toContain(pageUrl);
	}

	assertOrderSummaryCorrect = async (planName: string, monthlyPrice: number, months: number) => {
		await expect(this.planName).toContainText(planName);
		await expect(this.planMonthlyPrice).toContainText(monthlyPrice.toString());
		await expect(this.planTotalPrice).toContainText((monthlyPrice * months).toString());
	}
}