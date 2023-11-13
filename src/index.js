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
console.log(user.sayHi(title));