import todosManager from "./todos-manager.js";
import Todos from "./todos-creator.js";
import Projects from "./projects-creator.js";
//example of local storage working, can remove
// localStorage.colorSetting = "#a4509b";

// console.log(localStorage.colorSetting);

// localStorage.colorSetting = "hello there";

// console.log(localStorage.colorSetting);


//testing here
let user = new Todos("Barney", "foo", "bar", "foo", "bar", "foo");
let user2 = new Todos("Gumpy", "foo", "bar", "foo", "bar", "foo");
let user3 = new Todos("Kleetus", "foo", "bar", "foo", "bar", "foo");
let someProject = new Projects("Barney", "foo", "bar", user);



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
    console.log(someProject);
});
