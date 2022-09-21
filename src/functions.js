import _ from 'lodash';

function homeLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="hero">
        <div class="main">
            <h3>Welcome to your todo list. Use the menu on the left to organize your projects.</h3>
        </div>
        <div class="todo">
            <div class="todofirst"><h3>Todo List</h3></div>
        
            <div id="homepage"><h4>Home</h4></div>
            <div id="today"><h4>Today</h4></div>
            <div id="tomorrow"><h4>Tomorrow</h4></div>
            <div id="thisweek"><h4>This week</h4></div>
            <div id="projects"><h4>Projects</h4></div>
            <div id="notes"><h4>Notes</h4></div>
        </div>
    </div>`
    return element;
}

function todayLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="hero">
        <div class="main">
            <h3>Find today's projects below.</h3>
        </div>
        <div class="todo">
            <div class="todofirst"><h3>Todo List</h3></div>
        
            <div id="homepage"><h4>Home</h4></div>
            <div id="today"><h4>Today</h4></div>
            <div id="tomorrow"><h4>Tomorrow</h4></div>
            <div id="thisweek"><h4>This week</h4></div>
            <div id="projects"><h4>Projects</h4></div>
            <div id="notes"><h4>Notes</h4></div>
        </div>
    </div>
    `
    return element;
}

function notesLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div>
    This is a test for the notes page.</div>
    `
    return element;
}

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

function thisWeekLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div>
    This is a test for this week page.</div>
    `
    return element;
}

function tomorrowLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div>
    This is a test for the tomorrow page.</div>
    `
    return element;
}

export { homeLoad } ;
export { todayLoad } ;
export { notesLoad } ;
export { projectsLoad } ;
export { thisWeekLoad } ;
export { tomorrowLoad } ;
