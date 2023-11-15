export default function todosStorer(someTodo) {
localStorage.setItem(someTodo.title, JSON.stringify(someTodo));
console.log(localStorage.getItem(someTodo.title));

// console.log(someTodo.title);
console.log(localStorage);
// console.log(localStorage[someTodo.title]);

}