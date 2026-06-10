import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
	base: '/BoweJordyn_1.9MemoryLane/',
	plugins: [react(), tailwindcss(), nodePolyfills()],
	build: {
		rolldownOptions: {
			onwarn(warning, warn) {
				// gray-matter's JS-frontmatter engine uses eval; we only use YAML so suppress it
				if (warning.code === 'EVAL') return;
				warn(warning);
			},
			output: {
				manualChunks(id) {
					if (!id.includes('node_modules')) return;
					if (
						id.includes('react-markdown') ||
						id.includes('remark') ||
						id.includes('rehype') ||
						id.includes('unified') ||
						id.includes('micromark') ||
						id.includes('mdast') ||
						id.includes('hast')
					) return 'markdown';
					if (
						id.includes('react-router') ||
						id.includes('react-dom') ||
						id.includes('/react/')
					) return 'react-vendor';
					return 'vendor';
				},
			},
		},
	},
});
