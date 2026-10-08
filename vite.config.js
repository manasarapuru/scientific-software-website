import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// On GitHub Pages a site is served from /<repository name>/, so the built files need that prefix.
// The publish job tells us which repository it is building for, which lets the same code be
// published from more than one repository. (A repository named <user>.github.io is served from
// the root.) The local dev server keeps serving from the root.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'scientific-software-website';
const pagesBase = repository.endsWith('.github.io') ? '/' : `/${repository}/`;

export default defineConfig(({ command }) => ({
  base: command === 'build' ? pagesBase : '/',
  plugins: [react()],
}));
