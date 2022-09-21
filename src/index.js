import _ from 'lodash';
import './style.css';
import { homeLoad, todayLoad, notesLoad, tomorrowLoad, projectsLoad, thisWeekLoad } from './functions.js';

const element = document.createElement('div');
element.className = 'content';

function component() {  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 
    `<div class="hero">
        <div class="todo">
            <div class="todofirst"><h3>Todo List</h3></div>
            
            <div id="homepage"><h4>Home</h4></div>
            <div id="today"><h4>Today</h4></div>
            <div id="tomorrow"><h4>Tomorrow</h4></div>
            <div id="thisweek"><h4>This week</h4></div>
            <div id="projects"><h4>Projects</h4></div>
            <div id="notes"><h4>Notes</h4></div>
        </div>
        <div class="main">
            <h3>Welcome to your todo list. Use the menu on the left to organize your projects.</h3>
        </div>
        <button id="back">Go back</button>

    </div>`

    return element;
}

document.body.appendChild(component());

// this is to remove last child and insert the new elements of the todo list page depending on what the user selects.

const homeDiv = document.getElementById('homepage')
const todayDiv = document.getElementById('today')
const tomorrowDiv = document.getElementById('tomorrow')
const thisWeekDiv = document.getElementById('thisweek')
const projectsDiv = document.getElementById('projects')
const notesDiv = document.getElementById('notes')

homeDiv.addEventListener('click', function homeChange() {
    document.body.removeChild(document.body.children[2]);
    document.body.appendChild(homeLoad());
})

todayDiv.addEventListener('click', function todayChange() {
    document.body.removeChild(document.body.children[2]);
    document.body.appendChild(todayLoad());
})

tomorrowDiv.addEventListener('click', function tomorrowChange() {
    document.body.removeChild(document.body.children[2]);
    document.body.appendChild(tomorrowLoad());
})

thisWeekDiv.addEventListener('click', function thisWeekChange() {
    document.body.removeChild(document.body.children[2]);
    document.body.appendChild(thisWeekLoad());
})

projectsDiv.addEventListener('click', function projectsChange() {
    document.body.removeChild(document.body.children[2]);
    document.body.appendChild(projectsLoad());
})

notesDiv.addEventListener('click', function notesChange() {
    document.body.removeChild(document.body.children[2]);
    document.body.appendChild(notesLoad());
})

const backButton = document.getElementById('back');
backButton.addEventListener('click', function homeChange() {
    document.body.removeChild(document.body.children[2]);
    document.body.appendChild(homeLoad());
});

let array_collection = Array.from(document.body.children)
console.log(array_collection)