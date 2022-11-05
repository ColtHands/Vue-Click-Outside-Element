import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

module.exports = defineConfig({
    base: './',
    plugins: [vue()],
    optimizeDeps: {
        entries: [path.resolve(__dirname, './dist/vue-click-outside-element.umd.js')],
        force: true
    },
    build: {
        minify: 'terser',
        target: 'es6',
        outDir: 'dist',
        terserOptions: {
            compress: {
                drop_console: true
            }
        },
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: 'vue-click-outside-element',
            formats: ['es', 'umd']
        },
        rollupOptions: {
            output: {
                exports: 'named',
                compact: true
            }
        }
    }
})