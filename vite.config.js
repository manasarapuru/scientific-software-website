import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// On GitHub Pages the site is served from /scientific-software-website/, so the built files
// need that prefix. The local dev server keeps serving from the root.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/scientific-software-website/' : '/',
  plugins: [react()],
}));
