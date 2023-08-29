import { expect, Locator, Page } from '@playwright/test';

const pageRoute = '/downloading/';

export default class DownloadingPage {
	readonly page: Page;
	readonly successHeader: Locator;

	constructor(page: Page) {
		this.page = page;
		this.successHeader = page.locator('h1', { hasText: 'Thanks for choosing NordPass' });
	}

	navigate = async () => {
		await this.page.goto(pageRoute);
	}

	assertDownloadFile = async () => {
		this.page.on('download', download => { expect(download.path()).toBeTruthy(); });
	}

	assertPageOpened = async () => {
		await expect(this.successHeader).toBeVisible();
		await expect(this.page.url()).toContain(pageRoute);
	}
}