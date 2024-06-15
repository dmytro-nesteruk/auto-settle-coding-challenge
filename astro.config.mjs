import path from 'node:path';

import node from '@astrojs/node';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), svelte()],
	vite: {
		resolve: {
			alias: [
				{
					find: '@public',
					replacement: path.resolve('public'),
				},
				{
					find: '@widgets',
					replacement: path.resolve('src', 'widgets'),
				},
				{
					find: '@features',
					replacement: path.resolve('src', 'features'),
				},
				{
					find: '@entities',
					replacement: path.resolve('src', 'entities'),
				},
				{
					find: '@shared',
					replacement: path.resolve('src', 'shared'),
				},
			],
		},
	},
	server: {
		host: '0.0.0.0',
		port: 3000,
		open: true,
	},
	output: 'hybrid',
	adapter: node({
		mode: 'standalone',
	}),
});
