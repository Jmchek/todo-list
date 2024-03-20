import Todos from "./todos-creator.js";
import todosManager from "./todos-manager.js";
import Projects from "./projects-creator.js";
import projectsManager from "./projects-manager.js";

import saveFormData from "./form-storer.js";
import todosStorer from "./todos-storer.js";
import projectsStorer from "./projects-storer.js";
import todosRemover from "./todos-remover.js";
import projectsRemover from "./projects-remover.js";

import projectsModule from "./project-module.js";

import formMaker from "./form-module.js";
import "./todo-list.css";

//testing here
let user = new Todos("Barney", "foo", "bar", "2014-02-09", "33", "dasdf", ["cl", "test", "cltest"]);
let user2 = new Todos("Barney", "asdfasd", "badasdr", "2043-21-02", "bar", "asdfcc", ["cl", "test", "cltest"]);
let user3 = new Todos("Barney", "test", "asdf", "1998-24-11", "btestar", "bbbbb", ["cl", "test", "cltest"]);
let user4 = new Todos("Newie", "foo", "bar", "2022-06-04", "43", "foo");
let someProject = new Projects("Barney", user);

user.notes = "hothead";
someProject.todos = [user, user2, user3];


// let testClassGrbbr = document.querySelector(".testClass");
// testClassGrbbr.addEventListener("click", x => {
//     // projectsManager(someProject);
// });

// console.log(JSON.parse(localStorage.getItem('test'))[2]);
// // localStorage.getItem('test')[2].todos[1] = user3;
// console.log(JSON.parse(localStorage.getItem('test'))[2]._todos);

// JSON.parse(localStorage.getItem('test'))[2]._todos.push('test');

// console.log(JSON.parse(localStorage.getItem('test'))[2]._todos);

// document.getElementById('formTemplate').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const dueDate = document.getElementById('dueDate').value;
//     const priority = document.getElementById('priority').value;
//     const notes = document.getElementById('notes').value;
//     const checklist = document.getElementById('checklist');

//     const formData = {
//         project: 'test',
//         title: title,
//         description: description,
//         dueDate: dueDate,
//         priority: priority,
//         notes: notes,
//         checklist : checklist
//     };

//     // todosStorer(formData);
//     // projectsStorer(someProject);

// // console.log(localStorage);
// // console.log(JSON.parse(localStorage.getItem('test')));
// // console.log(JSON.parse(localStorage.getItem('test')).find(x => x.title == 'test' ));

//     // let test = JSON.parse(localStorage.getItem('test'));
    
//     // for (let i = 0; i < test.length; i++) {
//     //     if (test[i] == 'hello pls work') {
//     //         test.splice(i, 1);
//     //     }
//     // }
    
//     // localStorage.setItem('test', JSON.stringify(test));

//     // for (let i in localStorage.getItem('test')) {
//     //     i++
//     //     for (let j in localStorage.getItem('test')[i].models) {
//     //       x += myObj.cars[i].models[j];
//     //     }
//     //   }
// });

// formMaker();

localStorage.clear();

// console.log(localStorage);

projectsStorer(someProject);
// todosStorer(someProject);

// projectsManager();


// projectsModule();
projectsModule(someProject.title, someProject.todos);
projectsModule(someProject.title, someProject.todos);