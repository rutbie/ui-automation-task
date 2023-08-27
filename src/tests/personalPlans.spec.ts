import { test } from '@playwright/test';
import { PERIODS } from '../utils/constants';
import { PLANS_EUR } from '../resources/testData';
import PersonalPage from '../pages/Personal/PersonalPage';
import PlansPage from '../pages/Personal/PlansPage';
import CheckoutPage from '../pages/Personal/CheckoutPage';

test('see available personal plans in plan page', async ({ page }) => {
	const personalPage = new PersonalPage(page);
	await personalPage.navigate();
	await personalPage.clickCheckPlansBtn();

	const plansPage = new PlansPage(page);
	await plansPage.assertPlansVisible();
});

for (const planKey in PLANS_EUR) {
	const plan = PLANS_EUR[planKey];
	const period = PERIODS.ONE_YEAR;
	test(`initiate purchase for ${plan.name} plan for ${period.name} period`, async ({ page, context }) => {
		const plansPage = new PlansPage(page);
		await plansPage.navigate();
		await plansPage.select1yTab();
		const newPage = await plansPage.clickGetPaidPlanBtn(plan.name, context);
		
		const checkoutPage = new CheckoutPage(newPage);
		await checkoutPage.assertPageOpened();
		await checkoutPage.assertOrderSummaryCorrect(plan.name, plan.price1y, period.months);
	});
}
