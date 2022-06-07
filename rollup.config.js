import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
    // the entry point for the bundle
    input: 'src/main.js',
    output: {
        // the destination for our bundled JavaScript
        file: 'public/build/bundle.js',
        // our bundle will be an immediately-invoked function expression
        format: 'iife',
        // the IIFE return value will be assigned into a variable called `app`
        name: 'app',
    },
    plugins: [
        svelte({
            // tells the svelte plugin where our svelte files are located
            include: 'src/**/*.svelte',
        }),
        // tells any third-party plugins we're building for the browser
        resolve({ browser: true }),
    ],
}