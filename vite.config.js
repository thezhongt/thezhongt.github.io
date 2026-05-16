import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        work: resolve(__dirname, 'work.html'),
        blog: resolve(__dirname, 'blog.html'),
        'projects-ai-safety': resolve(__dirname, 'projects/ai-safety.html'),
        'projects-auditing': resolve(__dirname, 'projects/auditing.html'),
        'projects-malware': resolve(__dirname, 'projects/malware.html'),
      },
    },
  },
});
