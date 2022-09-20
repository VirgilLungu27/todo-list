import _ from 'lodash';

function tomorrowLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div>
    This is a test for the tomorrow page.</div>
    `
    return element;
}

export { tomorrowLoad } ;