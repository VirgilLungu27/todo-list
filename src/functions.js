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
        <button id="back">Go back</button>

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
    <div class="hero">
        <div class="main">
            <h3>Find your project notes below.</h3>
        </div>
        <button id="back">Go back</button>

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

function projectsLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="hero">
        <div class="main">
            <h3>Find all of your projects and project ideas below.</h3>
        </div>
        <button id="back">Go back</button>

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

function thisWeekLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="hero">
        <div class="main">
            <h3>Find your tasks for this week below.</h3>
        </div>
        <button id="back">Go back</button>

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

function tomorrowLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="hero">
        <div class="main">
            <h3>Find your todo list for tomorrow down below.</h3>
        </div>
        <button id="back">Go back</button>

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

function addListeners() {
    const homeDiv = document.getElementById('homepage')
    const todayDiv = document.getElementById('today')
    const tomorrowDiv = document.getElementById('tomorrow')
    const thisWeekDiv = document.getElementById('thisweek')
    const projectsDiv = document.getElementById('projects')
    const notesDiv = document.getElementById('notes')

    homeDiv.addEventListener('click', function homeChange() {
        document.body.removeChild(document.body.children[2]);
        document.body.appendChild(homeLoad());
        addListeners();
    })

    todayDiv.addEventListener('click', function todayChange() {
        document.body.removeChild(document.body.children[2]);
        document.body.appendChild(todayLoad());
        addListeners();
    })

    tomorrowDiv.addEventListener('click', function tomorrowChange() {
        document.body.removeChild(document.body.children[2]);
        document.body.appendChild(tomorrowLoad());
        addListeners();
    })

    thisWeekDiv.addEventListener('click', function thisWeekChange() {
        document.body.removeChild(document.body.children[2]);
        document.body.appendChild(thisWeekLoad());
        addListeners();
    })

    projectsDiv.addEventListener('click', function projectsChange() {
        document.body.removeChild(document.body.children[2]);
        document.body.appendChild(projectsLoad());
        addListeners();
    })

    notesDiv.addEventListener('click', function notesChange() {
        document.body.removeChild(document.body.children[2]);
        document.body.appendChild(notesLoad());
        addListeners();
    })
  
}

export { homeLoad } ;
export { todayLoad } ;
export { notesLoad } ;
export { projectsLoad } ;
export { thisWeekLoad } ;
export { tomorrowLoad } ;
export { addListeners };