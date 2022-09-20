import _ from 'lodash';
import './style.css';
import { homeLoad } from './home.js';
import { notesLoad } from './notes.js';
import { todayLoad } from './today.js';
import { tomorrowLoad } from './tomorrow.js';
import { projectsLoad } from './projects.js';
import { thisWeekLoad } from './thisweek.js';

const element = document.createElement('div');
element.className = 'content';

function component() {  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 
    `<div class="hero">
        <div class="todo">
            <div><h3>Todo List</h3></div>
            
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

document.body.appendChild(component());

const homeDiv = document.getElementById('homepage')
const todayDiv = document.getElementById('today')
const tomorrowDiv = document.getElementById('tomorrow')
const thisWeekDiv = document.getElementById('thisweek')
const projectsDiv = document.getElementById('projects')
const notesDiv = document.getElementById('notes')

homeDiv.addEventListener('click', function homeChange() {
    document.body.removeChild(component());
    document.body.appendChild(homeLoad());
})

todayDiv.addEventListener('click', function todayChange() {
    document.body.removeChild(component());
    document.body.appendChild(todayLoad());
})

tomorrowDiv.addEventListener('click', function tomorrowChange() {
    document.body.removeChild(component());
    document.body.appendChild(tomorrowLoad());
})

thisWeekDiv.addEventListener('click', function thisWeekChange() {
    document.body.removeChild(component());
    document.body.appendChild(thisWeekLoad());
})

projectsDiv.addEventListener('click', function projectsChange() {
    document.body.removeChild(component());
    document.body.appendChild(projectsLoad());
})

notesDiv.addEventListener('click', function notesChange() {
    document.body.removeChild(component());
    document.body.appendChild(notesLoad());
})