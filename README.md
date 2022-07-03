# Svelte Starter App

My personal Svelte app template, with TypeScript, Rollup, and Sirv CLI. Supports live reload out of the box. Draws heavily from the starter app described in the blog post https://typeofnan.dev/how-to-set-up-a-svelte-app-with-rollup/ as well as the official svelte template at https://github.com/sveltejs/template. I keep changing my mind about my templates, so expect this to change often and maybe veer away from these sources as I learn more about these technologies. So if you end up liking it at a certain point in time, go ahead and fork it because I may end up changing it.


## Initialization

Install NPM dependencies with

    npm install

## Running this app

Run the app with auto Rollup bundling and live reload with

    npm run dev

Run the app with initial Rollup bundling and no live reload with

    npm run start

## Using this template

It's much easier to use code in git repos if you use this scaffolding tool called **degit**. More info here: https://www.npmjs.com/package/degit

Install **degit** using

    npm install -g degit

Then use this repo as a template by calling

    npx degit cadamsmith/svelte_starter_app TARGET-DIRECTORY

Set **TARGET-DIRECTORY** to whatever you want your folder to be called. This will create a new directory named **TARGET-DIRECTORY** with the code from this repo.

Note that you will still have to initialize this new folder as a git repo, if you wish to do so.

## Contributing

Feel free to suggest edits or enhancements, raise issues, or fork this repo and create your own version. The sky is the limit.
