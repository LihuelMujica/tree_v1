import { defineConfig } from 'vite';
import appConfig from './apps/web/vite.config.js';

export default defineConfig({
	...appConfig,
	root: 'apps/web',
	publicDir: 'apps/web/public',
	build: {
		...appConfig.build,
		outDir: '../../dist',
	},
});
