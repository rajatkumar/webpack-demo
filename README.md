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
