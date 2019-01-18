# webpack-demo

## Stage 1: Simple Project

branch: stage-1

The problems with this approach:

-   it is not obvious that this `index.js` file depends on `lodash` (an external lib)
-   if `lodash` is missing the app will not work
-   if additional external libs are added, the browser will load those even if those files are
    never needed/used/executed
