import _ from 'lodash';

function component() {
    let element = document.createElement('div');
    // Now, we make it obvious that  we are importing lodash from somewhere
    element.innerHTML = _.join(['Hello', 'World', 'Webpack'], '*-*');
    return element;
}

document.body.appendChild(component());
