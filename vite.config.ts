import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { checker } from 'vite-plugin-checker';
import stylelintPlugin from 'vite-plugin-stylelint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    checker({
      typescript: true,
    }),
    stylelintPlugin({
      include: ['src/**/*.css', 'src/**/*.scss'], // Only lint styles in the src directory
      exclude: ['node_modules/**'], // Exclude styles in node_modules
      fix: true, // Automatically fix solvable issues
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
