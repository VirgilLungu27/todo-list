import _ from 'lodash';
import './style.css';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = 
    `<div class="hero">
        <div class="todo">
            <div><h3>Todo List</h3></div>
            
            <div><h4>Buy cat food</h4></div>
            <div><h4>Play games</h4></div>
            <div><h4>Learn JavaScript</h4></div>
            <div><h4>Listen to heavy metal</h4></div>
            <div><h4>Learn Python</h4></div>
        </div>
    </div>
    `
  
    return element;
  }
  
document.body.appendChild(component());