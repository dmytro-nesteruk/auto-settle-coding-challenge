import pluginJs from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import pluginImport from 'eslint-plugin-import';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		plugins: {
			import: pluginImport,
		},
		rules: {
			'import/no-self-import': 'error',
			'import/no-duplicates': 'error',

			'import/no-extraneous-dependencies': 'off',
			'import/prefer-default-export': 'off',
			'import/no-unresolved': 'off',
			'import/extensions': 'off',
			'import/named': 'off',
		},
	},
	{
		rules: {
			'no-var': 'error',
			'no-console': 'error',
			'no-debugger': 'error',

			'no-unused-vars': 'off',
			'no-duplicate-imports': 'off',
			'no-shadow': 'off',
			'no-underscore-dangle': 'off',

			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/no-shadow': 'error',
		},
	},
	{
		files: ['**/pages/**/*.astro'],
		rules: {
			'no-console': 'off',
		},
	},
	{
		ignores: [
			'.DS_Store',
			'node_modules',
			'build',
			'dist',
			'.env',
			'.env.*',
			'!.env.example',
			'tailwind.config.*',

			// Ignore files for PNPM, NPM and YARN
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
		],
	},
];
