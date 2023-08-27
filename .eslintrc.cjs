/* eslint-env node */
module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	rules: {
		'@typescript-eslint/indent': [
			'error',
			'tab',
		],
		'no-tabs': [
			'error',
			{
				allowIndentationTabs: true,
			},
		],
		'max-len': [
			'warn',
			{
				code: 160,
				tabWidth: 4,
			},
		],
		quotes: [
			'error',
			'single',
		],
	}
};