import _ from 'lodash';

function homeLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div>
    This is a test for the home page.</div>
    `
    return element;
}

export { homeLoad } ;