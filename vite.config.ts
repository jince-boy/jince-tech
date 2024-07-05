import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import basicSsl from "@vitejs/plugin-basic-ssl"
// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0',
        https: true
    },
    plugins: [
        vue(),
        basicSsl()
    ],
})
