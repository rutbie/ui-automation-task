import { defineConfig, selectors } from '@playwright/test';
import dotenv from 'dotenv';

export const storageStatePath = 'state/storageState.json';

selectors.setTestIdAttribute('data-testid');

dotenv.config();

export default defineConfig({
	testDir: './src/tests',
	fullyParallel: true,
	retries: 0,
	workers: 1,
	reporter: [['html', { open: 'never', outputFolder: 'test-reports' }]],
	use: {
		baseURL: process.env.WWW_URL,
		headless: true,
		viewport: {
			width: 1366,
			height: 768,
		},
		ignoreHTTPSErrors: true,
		acceptDownloads: true,
		screenshot: 'only-on-failure',
		trace: 'retain-on-failure',
	},
	timeout: 45000,
	expect: {
		timeout: 15000,
	},
	projects: [
		{
			name: 'setup',
			testMatch: 'setup/cookiesSetup.ts',
		},
		{
			name: 'main suite (chrome)',
			use: {
				browserName: 'chromium',
				storageState: storageStatePath,
			},
			dependencies: ['setup'],
		}
	]
});
