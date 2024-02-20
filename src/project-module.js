//the intent behind the project-module will be to provide an anchor for the form to attach to, and a display area for todos/local storage.


//create a div grid system, we will have to adjust the html file, then manipulate dom elements with this module

//this might have been made redundant SEE README.md

// nevermind we are making this a module, see README.md

{/* <div class="card-container">
        <div class="project-card">
            <h3 class="project-title">Default</h3>
            <div class="projects-display"></div>
            <input class="todo-btn-add" type="button" value="Add Todo">
        </div>
        <input class="proj-button-delete" type="button" value="Delete Project">
    </div> 

<div class="card-container-add-proj">
            <input class="proj-button-add" type="button" value="Add Project">  
        </div> -->*/}

// bodyGrbbr.appendChild(document.createElement('form')).setAttribute('class', 'formTemplate');

// const formAnchorGrbbr = document.querySelector('.formTemplate');

// formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
// formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'title');
// document.querySelector('.title').setAttribute('type', 'text');
// document.querySelector('[for="title"]').innerText = "Title: ";

// formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'description');
// formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'description');
// document.querySelector('[for="description"]').innerText = "Description: ";

// formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'dueDate');
// formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'dueDate');
// document.querySelector('.dueDate').setAttribute('type', 'date');
// document.querySelector('[for="dueDate"]').innerText = "Due Date: ";

// formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'priority');

// formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'priorityContainer');
// document.querySelector('.priorityContainer').appendChild(document.createElement('input')).setAttribute('class', 'priority');
// document.querySelector('.priorityContainer').appendChild(document.createElement('output')).setAttribute('class', 'value');
// document.querySelector(".priority").setAttribute('value', '50');

export default function projectsModule(project, todos) {
    // this function receives a local storage key and todos, it will create an html display and append it to 

    const projContGrbbr = document.querySelector('.projects-container');

    //default project
    if (arguments.length == 0) {
        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container');

        document.querySelector('.card-container').appendChild(document.createElement('div')).setAttribute('class', 'project-card');

        document.querySelector('.card-container').appendChild(document.createElement('input')).setAttribute('class', 'proj-button-delete');

        document.querySelector('.proj-button-delete').setAttribute('type', 'button');
        document.querySelector('.proj-button-delete').setAttribute('value', 'Delete Project');

        document.querySelector('.project-card').appendChild(document.createElement('h3')).setAttribute('class', 'project-title');

        document.querySelector('.project-title').innerText = "Default";

        document.querySelector('.project-card').appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

        document.querySelector('.project-card').appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        document.querySelector('.todo-btn-add').setAttribute('type', 'button');
        document.querySelector('.todo-btn-add').setAttribute('value', 'Add Todo');


        //add a project card
        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container-add-proj');

        document.querySelector('.card-container-add-proj').appendChild(document.createElement('input')).setAttribute('class', 'proj-button-add');

        document.querySelector('.proj-button-add').setAttribute('type', 'button');
        document.querySelector('.proj-button-add').setAttribute('value', 'Add Project');
    } else {
       
        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container');

        let cardCntr = Array.from(document.querySelectorAll('.card-container'));

        let latestCardCntr = cardCntr.slice(-1);

        latestCardCntr[0].appendChild(document.createElement('div')).setAttribute('class', 'project-card');

        let prjCard = Array.from(document.querySelectorAll('.project-card'));
        let latestPrjCard = prjCard.slice(-1);

        latestCardCntr[0].appendChild(document.createElement('input')).setAttribute('class', 'proj-button-delete');

        latestCardCntr[0].children[1].setAttribute('type', 'button');
        latestCardCntr[0].children[1].setAttribute('value', 'Delete Project');

        latestPrjCard[0].appendChild(document.createElement('h3')).setAttribute('class', 'project-title');

        latestPrjCard[0].children[0].innerText = project;

        latestPrjCard[0].appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

        latestPrjCard[0].children[1].appendChild(document.createElement('ul')).setAttribute('class', 'projects-display-ul');

        Object.entries(todos).forEach(([key, value]) => {
            console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);

            latestPrjCard[0].children[1].children[0].appendChild(document.createElement('li')).innerText = `${JSON.stringify(value.title)}, ${JSON.stringify(value.dueDate)}`;

            latestPrjCard[0].children[1].children[0].children[key].setAttribute('class', 'hidden');

            latestPrjCard[0].children[1].children[0].children[key].classList.add('todos-li');

            latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'edit-btn-todos-li');

            latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'close-btn-todos-li');

            latestPrjCard[0].children[1].children[0].children[key].children[0].setAttribute('type', 'button');

            latestPrjCard[0].children[1].children[0].children[key].children[1].setAttribute('type', 'button');
            
            
            latestPrjCard[0].children[1].children[0].children[key].addEventListener('click', x => {
                latestPrjCard[0].children[1].children[0].children[key].classList.toggle('hidden');
            });
        });

        latestPrjCard[0].appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        latestPrjCard[0].children[2].setAttribute('type', 'button');
        latestPrjCard[0].children[2].setAttribute('value', 'Add Todo');
    }
}