/*
- it is not obvious that this file depends on `lodash` (an external lib)
- if `lodash` is missing the app will not work
- if additional external libs are added, the browser will load those
even if those files are never needed/used/executed
*/
function component() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'World', 'Webpack'], '*-*');
    return element;
}

document.body.appendChild(component());
