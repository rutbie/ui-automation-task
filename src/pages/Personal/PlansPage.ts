import { BrowserContext, Locator, Page, expect } from '@playwright/test';
import { PLANS_EUR } from '../../resources/testData';

const pageRoute = '/plans';

export default class PlansPage {
	readonly page: Page;
	readonly plan1yTab: Locator;
	readonly plan2yTab: Locator;
	readonly getStartedFreeBtn: Locator;

	constructor(page: Page) {
		this.page = page;
		this.plan1yTab = page.locator('button', { hasText: '1-year plan' }).first();
		this.plan2yTab = page.locator('button', { hasText: '2-year plan' }).first();
		this.getStartedFreeBtn = page.locator('a', { hasText: 'Get Started' }).locator('visible = true').first();
	}

	getPaidPlanBtn (planName: string) {
		return this.page.locator('a', { hasText: `Get ${planName} Plan`}).locator('visible = true').first();
	}

	navigate = async () => {
		await this.page.goto(pageRoute);
	}

	select1yTab = async () => {
		await this.plan1yTab.click();
	}

	select2yTab = async () => {
		await this.plan2yTab.click();
	}

	clickGetStartedFreeBtn = async () => {
		await this.getStartedFreeBtn.click();
	}
    
	clickGetPaidPlanBtn = async (planName: string, context: BrowserContext) => {
		const pagePromise = context.waitForEvent('page');
		await this.getPaidPlanBtn(planName).click();
		const newPage = await pagePromise;
		return newPage;
	}

	assertPlansVisible = async () => {
		await expect(this.getStartedFreeBtn).toBeVisible();
		await expect(this.getPaidPlanBtn(PLANS_EUR.PREMIUM.name)).toBeVisible();
		await expect(this.getPaidPlanBtn(PLANS_EUR.FAMILY.name)).toBeVisible();
	}
}