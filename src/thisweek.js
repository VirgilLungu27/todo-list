import _ from 'lodash';

function thisWeekLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div>
    This is a test for this week page.</div>
    `
    return element;
}

export { thisWeekLoad } ;