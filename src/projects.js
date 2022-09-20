import _ from 'lodash';

function projectsLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div>
    This is a test for the projects page.</div>
    `
    return element;
}

export { projectsLoad } ;