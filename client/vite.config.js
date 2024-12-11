import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory matches Vercel's requirements
    rollupOptions: {
      external: [             
        'node:*' 
      ],
  },
  },
  server: {
    port: 3000, // Optional: Set a default dev server port
  },
  
});
