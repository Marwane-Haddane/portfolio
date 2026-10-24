import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    manifest: true,
    modulePreload: {
      polyfill: false, // Modern browsers don't need this
    },
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Desktop hero background loads these libraries on demand.
          'vendor-3d': ['three', 'postprocessing'],
          // GSAP is used by multiple jsrepo components
          'vendor-gsap': ['gsap'],
          // Motion/framer-motion for RotatingText
          'vendor-motion': ['motion'],
          // React core stays in main bundle (needed immediately)
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
