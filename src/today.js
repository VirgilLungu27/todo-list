import _ from 'lodash';

function todayLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div>
    This is a test for the today page.</div>
    `
    return element;
}

export { todayLoad } ;