import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const mfe = () => federation({
  name: 'checkout',
  filename: 'remoteEntry.js',
  exposes: {
      './Checkout': './src/RemoteApp',
  },
  shared: ['react', 'react-dom']
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mfe()],
  build: {
    target: 'esnext'
  }
})
