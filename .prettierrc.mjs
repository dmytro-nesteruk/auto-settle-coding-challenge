/** @type {import("prettier").Config} */
export default {
	plugins: [
		'@trivago/prettier-plugin-sort-imports',
		'prettier-plugin-tailwindcss',
		'prettier-plugin-astro',
		'prettier-plugin-svelte',
	],
	useTabs: true,
	singleQuote: true,
	semi: true,
	bracketSpacing: true,
	bracketSameLine: false,
	endOfLine: 'lf',
	arrowParens: 'always',
	trailingComma: 'es5',
	tabWidth: 2,
	printWidth: 100,
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	importOrder: [
		'^node.*?',
		'<THIRD_PARTY_MODULES>',
		'^@widgets/(?!.*(sc|sa|c)ss)',
		'^@features/(?!.*(sc|sa|c)ss)',
		'^@entities/(?!.*(sc|sa|c)ss)',
		'^@shared/(?!.*(sc|sa|c)ss)',
		'^../(?!.*(sc|sa|c)ss)',
		'^./(?!.*(sc|sa|c)ss)',
		'(.*).(sc|sa|c)ss$',
	],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
		{
			files: '*.svelte',
			options: {
				parser: 'svelte',
			},
		},
	],
};
