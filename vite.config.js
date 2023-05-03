import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';
import ssr from 'vite-plugin-ssr/plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.tsx',
            refresh: true,
        }),
        react(),
        ssr(),
        vercel()
    ],
});
