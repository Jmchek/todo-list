export default function todosStorer(someTodo) {
localStorage.setItem(someTodo.title, JSON.stringify(someTodo));

}