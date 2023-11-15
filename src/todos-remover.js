export default function todosRemover(someTodo) {

    localStorage.removeItem(someTodo.title);
    
    }