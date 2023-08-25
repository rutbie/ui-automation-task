import { defineConfig } from "@playwright/test";

export default defineConfig({
	testDir: "./src/tests",
	fullyParallel: true,
	retries: 0,
	workers: 2,
	reporter: [["html", { open: "never", outputFolder: "test-reports" }]],
	use: {
		browserName: "chromium",
		headless: true,
		viewport: {
			width: 1366,
			height: 768,
		},
		ignoreHTTPSErrors: true,
		acceptDownloads: true,
		screenshot: "only-on-failure",
		trace: "retain-on-failure",
	},
});
