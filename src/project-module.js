import formMaker from "./form-module";

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

            latestPrjCard[0].children[1].children[0].appendChild(document.createElement('li')).innerText = `${JSON.stringify(value.title).replaceAll('"', '')}, ${JSON.stringify(value.dueDate).replaceAll('"', '')}`;

            latestPrjCard[0].children[1].children[0].children[key].classList.add('todos-li');

            latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'edit-btn-todos-li');

            //edit button
            latestPrjCard[0].children[1].children[0].children[key].children[0].addEventListener('click', editEle => {
                if (!document.querySelector('.edit-btn-div-form')) {
                    projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'edit-btn-div-form');

                    document.querySelector('.edit-btn-div-form').appendChild(document.createElement('h3')).setAttribute('class', 'edit-btn-div-form-header');
                    document.querySelector('.edit-btn-div-form-header').innerText = "Edit Todo";

                    document.querySelector('.edit-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'edit-btn-div-form-btn');
                    document.querySelector('.edit-btn-div-form-btn').setAttribute('type', 'button');
                    document.querySelector('.edit-btn-div-form-btn').value = "X";

                    formMaker(document.querySelector('.edit-btn-div-form'),todos[key]);
    
                    document.querySelector('.edit-btn-div-form-btn').addEventListener('click', editEleFocus => {
                        document.querySelector('.edit-btn-div-form').remove();
                    });
                }
                
            });

            latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'del-btn-todos-li');

            // latestPrjCard[0].children[1].children[0].children[key].children[1].appendChild(document.createElement('img')).src = DelButton;

            latestPrjCard[0].children[1].children[0].children[key].children[0].setAttribute('type', 'button');

            latestPrjCard[0].children[1].children[0].children[key].children[1].setAttribute('type', 'button');
            
            //expanded view
            latestPrjCard[0].children[1].children[0].children[key].addEventListener('click', x => {
                if (x.target.tagName == "LI") {
                    let newItem = document.createElement('div');
                    let oldItem = latestPrjCard[0].children[1].children[0].children[key];
                    
                    newItem.setAttribute('class', 'expanded-view');
    
                    Object.entries(todos[key]).forEach(([newItemKey, newItemValue]) => {
    
                        if(newItemKey != "project" && typeof(newItemValue) == "string"){
                            let paraChild = document.createElement('p');
                            newItem.appendChild(paraChild);
                            paraChild.setAttribute('class', 'expanded-view-paras');
                            paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": " + JSON.stringify(newItemValue).replaceAll('"', '');
                        } else if (newItemKey != "project") {
                            let paraChild = document.createElement('p');
                            newItem.appendChild(paraChild);
                            paraChild.setAttribute('class', 'expanded-view-paras');
                            paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": ";
                        }
                    });
    
                    newItem.addEventListener('click', y => {
                        if(latestPrjCard[0].children[1].children[0].children[key].classList.contains('expanded-view')) {
                            latestPrjCard[0].children[1].children[0].replaceChild(oldItem, latestPrjCard[0].children[1].children[0].children[key]);
                        } else {
                            latestPrjCard[0].children[1].children[0].replaceChild(newItem, latestPrjCard[0].children[1].children[0].children[key]);
                        }
                    });
    
                    if(latestPrjCard[0].children[1].children[0].children[key].classList.contains('expanded-view')) {
                        latestPrjCard[0].children[1].children[0].replaceChild(oldItem, latestPrjCard[0].children[1].children[0].children[key]);
                    } else {
                        latestPrjCard[0].children[1].children[0].replaceChild(newItem, latestPrjCard[0].children[1].children[0].children[key]);
                    }
                }
                
            });
        });

        latestPrjCard[0].appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        latestPrjCard[0].children[2].setAttribute('type', 'button');
        latestPrjCard[0].children[2].setAttribute('value', 'Add Todo');
        
    }
}