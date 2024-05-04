import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import copy from 'vite-plugin-copy'; // Import the copy plugin

import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  base: '/coffee_web_react/',
  plugins: [
    react(),
    copy({
      targets: [
        { src: 'data/menu.json', dest: 'dist/data' },
        { src: 'data/text.json', dest: 'dist/data' },
      ],
      verbose: true,
    }),
  ],
  
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'src/login/index.html'),
        menu: resolve(__dirname, 'src/menu/index.html'),
        generator: resolve(__dirname, 'src/generator/index.html'),
        about: resolve(__dirname, 'src/about/index.html')
      }
    }
  }
});
