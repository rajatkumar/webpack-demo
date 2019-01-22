# webpack-demo

## Stage 1: Simple Project

branch: stage-1

The problems with this approach:

-   it is not obvious that this `index.js` file depends on `lodash` (an external lib)
-   if `lodash` is missing the app will not work
-   if additional external libs are added, the browser will load those even if those files are
    never needed/used/executed

## Stage 2: Creating a bundle

branch: stage-2

Changes:

-   we explicitly installed `lodash`
-   separated out `/dist` and `/src`
-   generate a bundle using `npx webpack --mode development`

Webpack will take `src/index.js` as the entrypoint and generates `dist/main.js`

## Stage 3: Modules and Configuration

branch: stage-3

Changes:

-   add `webpack.config.js` with

```
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
};
```

-   run `npx webpack --config webpack.config.js`
-   `--config` is optional, it will autamatically pick the config if the config file is named `webpack.config.js`
-   we can also run `npm run build`
-   `import` and `export` are supported by webpack
-   Webpack transpiles `import`/`export` to `require` statements but does not alter any other part of the code
-   directory structure looks like:

```
.
├── README.md
├── dist
│   ├── index.html
│   └── main.js
├── node_modules [346 entries exceeds filelimit, not opening dir]
├── package.json
├── src
│   └── index.js
├── webpack.config.js
└── yarn.lock
```
