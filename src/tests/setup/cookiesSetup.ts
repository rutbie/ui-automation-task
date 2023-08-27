import { test as setup } from '@playwright/test';
import { setCookie } from '../../utils/helpers';
import { storageStatePath} from '../../../playwright.config';

setup('set cookies', async ({ page, context }) => {
	await page.goto('/');
	await context.addCookies([setCookie('locale', 'en'), setCookie('cookieconsent_status', 'dismiss'), setCookie('consent', '{}')] );
	await page.context().storageState({ path: storageStatePath });
});