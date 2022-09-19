import _ from 'lodash';
import './style.css';
import { homeLoad } from './home.js';

const element = document.createElement('div');
element.className = 'content';

function component() {
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 
    `<div class="hero">
        <div class="todo">
            <div><h3>Todo List</h3></div>
            
            <div id="homepage"><h4>Home</h4></div>
            <div><h4>Play games</h4></div>
            <div><h4>Learn JavaScript</h4></div>
            <div><h4>Listen to heavy metal</h4></div>
            <div><h4>Learn Python</h4></div>
        </div>
    </div>`

    return element;
}

document.body.appendChild(component());

const homeDiv = document.getElementById('homepage')

homeDiv.addEventListener('click', function homeChange() {
    document.body.removeChild(component());
    document.body.appendChild(homeLoad());
})