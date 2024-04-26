import formMaker from "./form-module";
import todosRemover from "./todos-remover";
import projectsRemover from "./projects-remover";
import projFormMaker from "./project-form";
import projectsStorer from "./projects-storer";

export default function projectsModule(project, todos) {

    const projContGrbbr = document.querySelector('.projects-container');

    //default project
    if (arguments.length == 0) {
        projectsStorer("Default");

        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container');

        let cardCntr = Array.from(document.querySelectorAll('.card-container'));
        let latestCardCntr = cardCntr.slice(-1);

        document.querySelector('.card-container').appendChild(document.createElement('div')).setAttribute('class', 'project-card');

        //del proj btn
        document.querySelector('.card-container').appendChild(document.createElement('input')).setAttribute('class', 'proj-button-delete');

        document.querySelector('.proj-button-delete').setAttribute('type', 'button');
        document.querySelector('.proj-button-delete').setAttribute('value', 'Delete Project');

        latestCardCntr[0].children[1].addEventListener('click', x => {

            let projName = x.target.parentNode.children[0].children[0].innerText;

            if(confirm("Are you sure?")){
                if(confirm("Super sure?")){
                    projectsRemover(projName);
                    x.target.parentNode.remove();
                    alert("Project " + projName + " has been deleted.");
                }
            }
        });

        document.querySelector('.project-card').appendChild(document.createElement('h3')).setAttribute('class', 'project-title');

        document.querySelector('.project-title').innerText = "Default";

        document.querySelector('.project-card').appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

        document.querySelector('.project-card').appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        document.querySelector('.todo-btn-add').setAttribute('type', 'button');
        document.querySelector('.todo-btn-add').setAttribute('value', 'Add Todo');

        let prjCard = Array.from(document.querySelectorAll('.project-card'));
        let latestPrjCard = prjCard.slice(-1);

        //add todo btn
        latestPrjCard[0].children[2].addEventListener('click', x => {

            if (!document.querySelector('.add-btn-div-form')) {
                let storedProj = JSON.parse(localStorage.getItem(x.target.parentNode.children[0].innerText)) || [];

                projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'add-btn-div-form');

                document.querySelector('.add-btn-div-form').appendChild(document.createElement('h3')).setAttribute('class', 'add-btn-div-form-header');
                document.querySelector('.add-btn-div-form-header').innerText = "Add a Todo";

                //close button for edit window
                document.querySelector('.add-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'add-btn-div-form-btn');
                document.querySelector('.add-btn-div-form-btn').setAttribute('type', 'button');
                document.querySelector('.add-btn-div-form-btn').value = "X";

                formMaker(document.querySelector('.add-btn-div-form'), x.target.parentNode.children[0].innerText, storedProj);

                document.querySelector('.add-btn-div-form-btn').addEventListener('click', editEleFocus => {
                    document.querySelector('.add-btn-div-form').remove();
                });
            }
        });


        //add project button
        if(document.querySelector('.card-container-add-proj')){
            projContGrbbr.appendChild(document.querySelector('.card-container-add-proj'));
        }
        if(!document.querySelector('.card-container-add-proj')){
            projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container-add-proj');

            document.querySelector('.card-container-add-proj').appendChild(document.createElement('input')).setAttribute('class', 'proj-button-add');

            document.querySelector('.proj-button-add').setAttribute('type', 'button');
            document.querySelector('.proj-button-add').setAttribute('value', 'Add Project');

            document.querySelector('.proj-button-add').addEventListener('click', x => {

                if (!document.querySelector('.add-proj-btn-div-form')) {
                    projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'add-proj-btn-div-form');

                    document.querySelector('.add-proj-btn-div-form').appendChild(document.createElement('h3')).setAttribute('class', 'add-btn-div-form-header');
                    document.querySelector('.add-btn-div-form-header').innerText = "Add a Project";

                    //close button for add window
                    document.querySelector('.add-proj-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'add-btn-div-form-btn');
                    document.querySelector('.add-btn-div-form-btn').setAttribute('type', 'button');
                    document.querySelector('.add-btn-div-form-btn').value = "X";

                    projFormMaker(document.querySelector('.add-proj-btn-div-form'));

                    document.querySelector('.add-btn-div-form-btn').addEventListener('click', editEleFocus => {
                        document.querySelector('.add-proj-btn-div-form').remove();
                    });
                }
                
            });
        }

    } else {
        //CARD UPDATER
        let projCards = document.querySelectorAll('.card-container');
        let dupeFound = false;
        let dupe;
        let dupeIndex;

        projCards.forEach((card, indx) => {
            if (card.children[0].children[0].textContent == project) {
                dupeFound = true;
                dupe = projCards[indx];
                dupeIndex = indx;
            }
        });

        if (dupeFound && todos){
            //update the card if dupe found
            dupe.children[0].children[1].remove();

            let prjCard = Array.from(document.querySelectorAll('.project-card'));
            let latestPrjCard = [prjCard[dupeIndex]];

            latestPrjCard[0].insertBefore(document.createElement('div'), latestPrjCard[0].children[1]).setAttribute('class', 'projects-display');

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
                        
                        formMaker(document.querySelector('.edit-btn-div-form'),todos[key],todos, key);
        
                        document.querySelector('.edit-btn-div-form-btn').addEventListener('click', editEleFocus => {
                            document.querySelector('.edit-btn-div-form').remove();
                        });
                    }
                    
                });
    
                latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'del-btn-todos-li');
    
                latestPrjCard[0].children[1].children[0].children[key].children[0].setAttribute('type', 'button');

                latestPrjCard[0].children[1].children[0].children[key].children[1].setAttribute('type', 'button');

                //delete todo btn
                latestPrjCard[0].children[1].children[0].children[key].children[1].addEventListener('click', x => {
                    let todosProjectName = x.target.parentNode.parentNode.parentNode.previousElementSibling.innerText;

                    function getDomIndex (target) {
                        return [].slice.call(target.parentNode.children).indexOf(target)
                    }

                    if(confirm("Are you sure?")){
                        todosRemover(todosProjectName, getDomIndex(x.target.parentNode));
                        x.target.parentNode.remove();
                    }
                });
                
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
                            } else if (newItemKey != "project" && newItemKey != "checklist") {
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": ";
                            } else if (newItemKey == "checklist") {
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": ";
    
                                let i = 0;
    
                                while (i < newItemValue.length) {
                                    if (newItemValue.length - i != 1){
                                        paraChild.innerText += newItemValue[i] + ", ";
                                    } else {
                                        paraChild.innerText += newItemValue[i];
                                    }
                                    
                                    i++;
                                }
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

        } else {
        //CREATE A NEW CARD FOR PROJECT
        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container');

        let cardCntr = Array.from(document.querySelectorAll('.card-container'));

        let latestCardCntr = cardCntr.slice(-1);

        latestCardCntr[0].appendChild(document.createElement('div')).setAttribute('class', 'project-card');

        let prjCard = Array.from(document.querySelectorAll('.project-card'));
        let latestPrjCard = prjCard.slice(-1);

        //del proj btn
        latestCardCntr[0].appendChild(document.createElement('input')).setAttribute('class', 'proj-button-delete');

        latestCardCntr[0].children[1].setAttribute('type', 'button');
        latestCardCntr[0].children[1].setAttribute('value', 'Delete Project');
        
        latestCardCntr[0].children[1].addEventListener('click', x => {

            let projName = x.target.parentNode.children[0].children[0].innerText;

            if(confirm("Are you sure?")){
                if(confirm("Super sure?")){
                    projectsRemover(projName);
                    x.target.parentNode.remove();
                    alert("Project " + projName + " has been deleted.");
                }
            }
        });

        latestPrjCard[0].appendChild(document.createElement('h3')).setAttribute('class', 'project-title');

        latestPrjCard[0].children[0].innerText = project;

        latestPrjCard[0].appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

        latestPrjCard[0].children[1].appendChild(document.createElement('ul')).setAttribute('class', 'projects-display-ul');

        if(todos) {
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
    
                        //close button for edit window
                        document.querySelector('.edit-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'edit-btn-div-form-btn');
                        document.querySelector('.edit-btn-div-form-btn').setAttribute('type', 'button');
                        document.querySelector('.edit-btn-div-form-btn').value = "X";
    
                        formMaker(document.querySelector('.edit-btn-div-form'), todos[key], todos, key);
        
                        document.querySelector('.edit-btn-div-form-btn').addEventListener('click', editEleFocus => {
                            document.querySelector('.edit-btn-div-form').remove();
                        });
                    }
                    
                });
    
                latestPrjCard[0].children[1].children[0].children[key].children[0].setAttribute('type', 'button');
    
                latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'del-btn-todos-li');
    
                latestPrjCard[0].children[1].children[0].children[key].children[1].setAttribute('type', 'button');
    
                //delete todo btn
                latestPrjCard[0].children[1].children[0].children[key].children[1].addEventListener('click', x => {
                    let todosProjectName = x.target.parentNode.parentNode.parentNode.previousElementSibling.innerText;
    
                    function getDomIndex (target) {
                        return [].slice.call(target.parentNode.children).indexOf(target)
                    }
    
                    if(confirm("Are you sure?")){
                        todosRemover(todosProjectName, getDomIndex(x.target.parentNode));
                        x.target.parentNode.remove();
                    }
                });
                
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
                            } else if (newItemKey != "project" && newItemKey != "checklist") {
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": ";
                            } else if (newItemKey == "checklist") {
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": ";
    
                                let i = 0;
    
                                while (i < newItemValue.length) {
                                    if (newItemValue.length - i != 1){
                                        paraChild.innerText += newItemValue[i] + ", ";
                                    } else {
                                        paraChild.innerText += newItemValue[i];
                                    }
                                    
                                    i++;
                                }
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
        }

        //add todo btn
        latestPrjCard[0].appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        latestPrjCard[0].children[2].setAttribute('type', 'button');
        latestPrjCard[0].children[2].setAttribute('value', 'Add Todo');

        latestPrjCard[0].children[2].addEventListener('click', x => {

            if (!document.querySelector('.add-btn-div-form')) {
                let storedProj = localStorage.getItem(x.target.parentNode.children[0].innerText) || [];
                
                if(storedProj.length > 0){
                    storedProj = JSON.parse(storedProj);
                }

                projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'add-btn-div-form');

                document.querySelector('.add-btn-div-form').appendChild(document.createElement('h3')).setAttribute('class', 'add-btn-div-form-header');
                document.querySelector('.add-btn-div-form-header').innerText = "Add a Todo";

                //close button for add window
                document.querySelector('.add-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'add-btn-div-form-btn');
                document.querySelector('.add-btn-div-form-btn').setAttribute('type', 'button');
                document.querySelector('.add-btn-div-form-btn').value = "X";

                formMaker(document.querySelector('.add-btn-div-form'), x.target.parentNode.children[0].innerText, storedProj);

                document.querySelector('.add-btn-div-form-btn').addEventListener('click', editEleFocus => {
                    document.querySelector('.add-btn-div-form').remove();
                });
            }
        });

         //add project button
         if(document.querySelector('.card-container-add-proj')){
            projContGrbbr.appendChild(document.querySelector('.card-container-add-proj'));
        }
        
         if(!document.querySelector('.card-container-add-proj')){
            projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container-add-proj');

            document.querySelector('.card-container-add-proj').appendChild(document.createElement('input')).setAttribute('class', 'proj-button-add');
    
            document.querySelector('.proj-button-add').setAttribute('type', 'button');
            document.querySelector('.proj-button-add').setAttribute('value', 'Add Project');
    
            document.querySelector('.proj-button-add').addEventListener('click', x => {
    
                if (!document.querySelector('.add-proj-btn-div-form')) {
                    projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'add-proj-btn-div-form');
    
                    document.querySelector('.add-proj-btn-div-form').appendChild(document.createElement('h3')).setAttribute('class', 'add-btn-div-form-header');
                    document.querySelector('.add-btn-div-form-header').innerText = "Add a Project";
    
                    //close button for add window
                    document.querySelector('.add-proj-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'add-btn-div-form-btn');
                    document.querySelector('.add-btn-div-form-btn').setAttribute('type', 'button');
                    document.querySelector('.add-btn-div-form-btn').value = "X";
    
                    projFormMaker(document.querySelector('.add-proj-btn-div-form'));
    
                    document.querySelector('.add-btn-div-form-btn').addEventListener('click', editEleFocus => {
                        document.querySelector('.add-proj-btn-div-form').remove();
                    });
                }
                
            });
         }
        }       
    }
}