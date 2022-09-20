import _ from 'lodash';

function notesLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div>
    This is a test for the notes page.</div>
    `
    return element;
}

export { notesLoad } ;