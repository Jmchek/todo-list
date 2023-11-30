import Todos from "./todos-creator.js";
import todosManager from "./todos-manager.js";
import Projects from "./projects-creator.js";
import projectsManager from "./projects-manager.js";

import saveFormData from "./form-storer.js";
import todosStorer from "./todos-storer.js";
import projectsStorer from "./projects-storer.js";

//example of local storage working, can remove
// localStorage.colorSetting = "#a4509b";

// console.log(localStorage.colorSetting);

// localStorage.colorSetting = "hello there";

// console.log(localStorage.colorSetting);


//testing here
let user = new Todos("Barney", "foo", "bar", "foo", "bar", "foo");
let user2 = new Todos("Gumpy", "foo", "bar", "foo", "bar", "foo");
let user3 = new Todos("Kleetus", "foo", "bar", "foo", "bar", "foo");
let someProject = new Projects("test", "foo", "bar", user);



// console.log(user);
// console.log(typeof(user));
// console.log(user.title);
// console.log(user.notes);
user.notes = "hothead";
someProject.todos = {user, user2, user3};



// function makeTodo(someName) {
//     let someTodo = new Todos(someName);

//     return someTodo;
// }


let testClassGrbbr = document.querySelector(".testClass");
testClassGrbbr.addEventListener("click", x => {
    // projectsManager(someProject);
});

// document.getElementById('formTemplate').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const dueDate = document.getElementById('dueDate').value;

//     const formData = {
//         title: title,
//         description: description,
//         dueDate: dueDate
//     };

//     console.log(formData);

//     saveFormData(formData);
// });

document.getElementById('formTemplate').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const notes = document.getElementById('notes').value;
    const checklist = document.getElementById('checklist');

    const formData = {
        project: 'test',
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: notes,
        checklist : checklist
    };

    console.log(formData);

    todosStorer(formData);
    projectsStorer(someProject);
});
