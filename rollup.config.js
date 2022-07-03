import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import livereload from 'rollup-plugin-livereload';

const production = !process.env.ROLLUP_WATCH;

function serve() {
    // keep a reference to a spawned server process
    let server;

    function toExit() {
        // kill the server if it exists
        if (server) server.kill(0);
    }

    return {
        writeBundle() {
            if (server) return;
            // spawn a child server process
            server = require('child_process').spawn(
                'npm',
                ['run', 'start', '--', '--dev'],
                {
                    stdio: ['ignore', 'inherit', 'inherit'],
                    shell: true,
                }
            );

            // Kill server on process termination or exit
            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        },
    }
}

export default {
    // the entry point for the bundle
    input: 'src/main.ts',
    output: {
        // the destination for our bundled JavaScript
        file: 'public/build/bundle.js',
        // our bundle will be an immediately-invoked function expression
        format: 'iife',
        // the IIFE return value will be assigned into a variable called `app`
        name: 'app',
        sourcemap: !production
    },
    plugins: [
        svelte({
            preprocess: sveltePreprocess({
                sourceMap: !production
            }),
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production
            },
            // tells the svelte plugin where our svelte files are located
            include: 'src/**/*.svelte',
        }),
        css({
            // any component CSS is combined into a single bundled css file - better for performance
            output: 'bundle.css'
        }),
        // tells any third-party plugins we're building for the browser
        resolve({
            browser: true,
            dedupe: ['svelte']
        }),
        commonjs(),
        typescript({
            sourceMap: !production,
            inlineSources: !production,
        }),

        // in dev mode, call `npm run start` once the bundle has been generated
        !production && serve(),
        
        // in dev mode, watch `public` directory and refresh browser on changes
        !production && livereload('public'),
        
        // in production mode (npm run build), minify our JS/TS code
        production && terser(),
    ],
    watch: {
        clearScreen: false
    }
}
