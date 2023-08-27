import { test } from '@playwright/test';
import { generateRandomEmail } from '../utils/helpers';
import PersonalPage from '../pages/Personal/PersonalPage';
import DownloadingPage from '../pages/Personal/DownloadingPage';
import TrialPage from '../pages/Personal/TrialPage';
import PlansPage from '../pages/Personal/PlansPage';

test('get app trial from trial page', async ({ page }) => {
	const personalPage = new PersonalPage(page);
	await personalPage.navigate();
	await personalPage.clickStartFreeTrialBtn();

	const trialPage = new TrialPage(page);
	await trialPage.fillEmailInput(generateRandomEmail(process.env.EMAIL_PREFIX));
	await trialPage.clickGetStartedBtn();

	const downloadingPage = new DownloadingPage(page);
	await downloadingPage.assertDownloadFile();
	await downloadingPage.assertPageOpened();
});

test('check app trial availability from plans page', async ({ page }) => {
	const plansPage = new PlansPage(page);
	await plansPage.navigate();
	await plansPage.clickGetStartedFreeBtn();

	const trialPage = new TrialPage(page);
	await trialPage.assertPageOpened();
});
