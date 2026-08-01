import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'esnext',
    modulePreload: {
      polyfill: false, // Modern browsers don't need this
    },
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js + postprocessing into their own chunk (loaded by Hyperspeed & GridScan)
          'vendor-3d': ['three', 'postprocessing'],
          // face-api.js is huge (~500KB) and only used when webcam is enabled
          'vendor-face': ['face-api.js'],
          // GSAP is used by multiple jsrepo components
          'vendor-gsap': ['gsap'],
          // Lottie is only used in Contact section
          'vendor-lottie': ['lottie-react'],
          // Motion/framer-motion for RotatingText
          'vendor-motion': ['motion'],
          // React core stays in main bundle (needed immediately)
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
