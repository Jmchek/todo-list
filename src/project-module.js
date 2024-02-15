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

export default function projectsModule(key, todos) {
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
    } else if (projContGrbbr.childElementCount != 0) {
        
        let cardCntr = document.querySelectorAll('.card-container');
        let prjCard = document.querySelectorAll('.project-card');

        

        //have to figure out how this works when there are no children under the project container

        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container');

        let projectCounter = projContGrbbr.childElementCount;
        console.log(projectCounter);
        console.log(typeof(projectCounter));
        console.log(cardCntr);
        console.log(prjCard);

        cardCntr.item(projectCounter).appendChild(document.createElement('div')).setAttribute('class', 'project-card');

        cardCntr[projectCounter].appendChild(document.createElement('input')).setAttribute('class', 'proj-button-delete');

        document.querySelector('.proj-button-delete').setAttribute('type', 'button');
        document.querySelector('.proj-button-delete').setAttribute('value', 'Delete Project');

        prjCard[projectCounter].appendChild(document.createElement('h3')).setAttribute('class', 'project-title');

        document.querySelector('.project-title').innerText = key;

        prjCard[projectCounter].appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

        prjCard[projectCounter].appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        document.querySelector('.todo-btn-add').setAttribute('type', 'button');
        document.querySelector('.todo-btn-add').setAttribute('value', 'Add Todo');
    } else {
        // projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container');

        // document.querySelector('.card-container').appendChild(document.createElement('div')).setAttribute('class', 'project-card');

        // document.querySelector('.card-container').appendChild(document.createElement('input')).setAttribute('class', 'proj-button-delete');

        // document.querySelector('.proj-button-delete').setAttribute('type', 'button');
        // document.querySelector('.proj-button-delete').setAttribute('value', 'Delete Project');

        // document.querySelector('.project-card').appendChild(document.createElement('h3')).setAttribute('class', 'project-title');

        // document.querySelector('.project-title').innerText = "Default";

        // document.querySelector('.project-card').appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

        // document.querySelector('.project-card').appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        // document.querySelector('.todo-btn-add').setAttribute('type', 'button');
        // document.querySelector('.todo-btn-add').setAttribute('value', 'Add Todo');
    }
}