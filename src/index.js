import _ from 'lodash';
import './style.css';
import { addListeners, addButtonLoad } from './functions.js';


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
            <div class="addtask">
                <h4><span id="add"><img src="../src/addemoji.png"></span>Add task below.</h4>
                <div class="addhere"><input type="text" id="name" name="name" minlength="3" maxlength="40"></div>
            </div>
        </div>
    </div>`

    return element;
}

document.body.appendChild(component());
addListeners();
// this is to remove last child and insert the new elements of the todo list page depending on what the user selects.

const addButton = document.getElementById('add')
let array_collection = Array.from(document.body.getElementsByClassName('addhere'))
console.log(array_collection)

addButton.addEventListener('click', function addInput() {
    array_collection[0].parentNode.insertBefore(addButtonLoad(), array_collection[0]);
})
