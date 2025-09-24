import { defineConfig } from 'vite';
import nunjucks from 'vite-plugin-nunjucks';

export default defineConfig({
  plugins: [nunjucks({
    templatesDir: 'src/templates',
    outputDir: 'dist'
  })],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});