import Todos from "./todos-creator.js";
import todosRemover from "./todos-remover.js";
import todosStorer from "./todos-storer.js";

export default function todosManager(someTodo) {

    //receives a "todo" object from user to make todos
    let newTodo = new Todos(someTodo.title, someTodo.description, someTodo.dueDate, someTodo.priority, someTodo.notes, someTodo.checklist);

    //store created todos in local storage using Todos storer
    // todosStorer(newTodo);
    // we will refactor this to store todos in a existing or new project

    //remove a todos data in local storage using Todos remover
    // if a user clicks remove todo, invoke the following:
    // todosRemover(newTodo);
    }