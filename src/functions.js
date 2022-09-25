import _ from 'lodash';


function homeLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="hero">
        <div class="main">
            <h3>Welcome to your todo list. Use the menu on the left to organize your projects.</h3>
            <div class="addtask">
                <h4><span id="add"><img src="../src/addemoji.png"></span>Add task below.</h4>
                <div class="addhere"><input type="text" id="name" name="name" minlength="3" maxlength="40"><span id="date"><i class="fa fa-save"></i></span></div>
            </div>
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
            <div class="today"><h3 id="todayh3">Find today's projects. The date is: </h3></div>
            <div class="addtask">
                <h4><span id="add"><img src="../src/addemoji.png"></span>Add task below.</h4>
                <div class="addhere"><input type="text" id="name" name="name" minlength="3" maxlength="40"><span id="date"><i class="fa fa-save"></i></span></div>
            </div>
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
    <div class="hero">
        <div class="main">
            <h3>Find your project notes.</h3>
          <div class="addtask">
            <h4><span id="add"><img src="../src/addemoji.png"></span>Add task below.</h4>
            <div class="addhere"><input type="text" id="name" name="name" minlength="3" maxlength="40"><span id="date"><i class="fa fa-save"></i></span></div>
          </div>
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

function projectsLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="hero">
        <div class="main">
            <h3>Find all of your projects and project ideas.</h3>
            <div class="addtask">
              <h4><span id="add"><img src="../src/addemoji.png"></span>Add task below.</h4>
              <div class="addhere"><input type="text" id="name" name="name" minlength="3" maxlength="40"><span id="date"><i class="fa fa-save"></i></span></div>
            </div>
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

function thisWeekLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="hero">
        <div class="main">
            <div class="thisweek"><h3 id="thisweekh3">Find your tasks for this week below. The current week number of the year is: </h3></div>
            <div class="addtask">
              <h4><span id="add"><img src="../src/addemoji.png"></span>Add task below.</h4>
              <div class="addhere"><input type="text" id="name" name="name" minlength="3" maxlength="40"><span id="date"><i class="fa fa-save"></i></span></div>
            </div>
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

function tomorrowLoad() {
    const element = document.createElement('div');
    element.className = 'content';
    element.innerHTML = `
    <div class="hero">
        <div class="main">
            <div class="tomorrow"><h3 id="tomorrowh3">Find your todo list for tomorrow down below. Tomorrow will be: </h3></div>
            <div class="addtask">
                <h4><span id="add"><img src="../src/addemoji.png"></span>Add task below.</h4>
                <div class="addhere"><input type="text" id="name" name="name" minlength="3" maxlength="40"><span id="date"><i class="fa fa-save"></i></span></div>
        </div>
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

const todayDate = () => {
    const dateSpan = document.getElementById('todayh3')
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    dateSpan.innerHTML += year + "/" + month + "/" + day;
}

const tomorrowDate = () => {
    const dateSpan = document.getElementById('tomorrowh3')
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate() + 1;
    dateSpan.innerHTML += year + "/" + month + "/" + day;
}


// used stack overflow to find the following function to get week

const getWeekNumber = (d) => {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [weekNo];
}



function addButtonLoad() {
    const elementAdd = document.createElement('div');
    elementAdd.className = 'addhere'
    elementAdd.innerHTML = `<input type="text" id="name" name="name" minlength="3" maxlength="40"><span id="date></span>`
    return elementAdd;
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
        todayDate();
        addListeners();
    })

    tomorrowDiv.addEventListener('click', function tomorrowChange() {
        document.body.removeChild(document.body.children[2]);
        document.body.appendChild(tomorrowLoad());
        tomorrowDate();
        addListeners();
    })

    thisWeekDiv.addEventListener('click', function thisWeekChange() {
        document.body.removeChild(document.body.children[2]);
        document.body.appendChild(thisWeekLoad());
        const dateSpan = document.getElementById('thisweekh3')
        let result = getWeekNumber(new Date());
        dateSpan.innerHTML += result;
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
    addNewTask();
}

const addNewTask = () => {
    const addButton = document.getElementById('add')
    let array_collection = Array.from(document.body.getElementsByClassName('addhere'))
    addButton.addEventListener('click', function addInput() {
        array_collection[0].parentNode.insertBefore(addButtonLoad(), array_collection[0]);
    })
}


export { addListeners, todayDate };