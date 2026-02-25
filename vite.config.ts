import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
    // Load env variables from .env to make them available in the config
    const env = loadEnv(mode, process.cwd(), '');

    return {
        plugins: [tailwindcss(), sveltekit()],
        server: {
            port: env.PORT ? parseInt(env.PORT, 10) : 5173
        }
    };
});
