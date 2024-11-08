import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts',
    coverage: {
      provider: 'v8',
      exclude: ['**/.eslintrc.cjs', 'vitest.config.ts', 'next.config.js', '.next', 'dist', '**/*.test.{js,jsx,ts,tsx}'],
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
