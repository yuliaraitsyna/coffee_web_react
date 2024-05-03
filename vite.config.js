import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
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
})