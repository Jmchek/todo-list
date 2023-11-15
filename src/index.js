import Todos from "./todos-creator.js";
import todosStorer from "./todos-storer.js";

//example of local storage working, can remove
// localStorage.colorSetting = "#a4509b";

// console.log(localStorage.colorSetting);

// localStorage.colorSetting = "hello there";

// console.log(localStorage.colorSetting);


//testing here
let user = new Todos("Barney", "foo", "bar");



// console.log(user);
// console.log(typeof(user));
// console.log(user.title);
// console.log(user.notes);
user.notes = "hothead";



// function makeTodo(someName) {
//     let someTodo = new Todos(someName);

//     return someTodo;
// }


let testClassGrbbr = document.querySelector(".testClass");
testClassGrbbr.addEventListener("click", x => {
    todosStorer(user);
});
