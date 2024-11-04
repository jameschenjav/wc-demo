import { env } from 'node:process';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteSingleFile } from 'vite-plugin-singlefile';
import mockServer from 'vite-plugin-mock-server';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8123,
    proxy: {
      '/api/.+': {

        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  },
  root: env.SERVER_MODE === 'production' ? './dist/' : '.',
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('wc-'),
        },
      },
    }),
    mockServer({
      urlPrefixes: ['/api/'],
      mockRootDir: './mock',
    }),
    viteSingleFile(),
  ],
});
