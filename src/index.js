import Todos from "./todos-creator.js";
import todosManager from "./todos-manager.js";
import Projects from "./projects-creator.js";
import projectsManager from "./projects-manager.js";

import saveFormData from "./form-storer.js";
import todosStorer from "./todos-storer.js";
import projectsStorer from "./projects-storer.js";

//testing here
let user = new Todos("Barney", "foo", "bar", "foo", "bar", "foo");
let user2 = new Todos("Gumpy", "foo", "bar", "foo", "bar", "foo");
let user3 = new Todos("Kleetus", "foo", "bar", "foo", "bar", "foo");
let someProject = new Projects("test", "foo", "bar", user);

user.notes = "hothead";
someProject.todos = [user, user2, user3];


let testClassGrbbr = document.querySelector(".testClass");
testClassGrbbr.addEventListener("click", x => {
    // projectsManager(someProject);
});

// console.log(JSON.parse(localStorage.getItem('test'))[2]);
// // localStorage.getItem('test')[2].todos[1] = user3;
// console.log(JSON.parse(localStorage.getItem('test'))[2]._todos);

// JSON.parse(localStorage.getItem('test'))[2]._todos.push('test');

// console.log(JSON.parse(localStorage.getItem('test'))[2]._todos);

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

    todosStorer(formData);
    // projectsStorer(someProject);

    let existing = localStorage.getItem('test');
// existing = existing ? existing.split(',') : [];
existing.push(JSON.stringify(user));
// localStorage.setItem('test', existing.toString());

console.log(localStorage);

    // for (let i in localStorage.getItem('test')) {
    //     i++
    //     for (let j in localStorage.getItem('test')[i].models) {
    //       x += myObj.cars[i].models[j];
    //     }
    //   }
});
