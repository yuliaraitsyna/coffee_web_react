import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    base: '/coffee_web_react/',
    plugins: [
      react(),
    ],
    define: {
      'process.env': env
    }
  };
});