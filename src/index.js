import Todos from "./todos-creator.js";

//example of local storage working, can remove
localStorage.colorSetting = "#a4509b";

console.log(localStorage.colorSetting);

localStorage.colorSetting = "hello there";

console.log(localStorage.colorSetting);


//testing here
let user = new Todos("Joe");



console.log(user);
console.log(typeof(user));



function makeTodo(someName) {
    let someTodo = new Todos(someName);

    return someTodo.title;
}


let testClassGrbbr = document.querySelector(".testClass");
testClassGrbbr.addEventListener("click", x => {
    console.log(makeTodo("Joe"));
});
