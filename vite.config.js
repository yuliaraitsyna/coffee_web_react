import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/coffee_web_react/',
  plugins: [
    react(),
  ],
});
