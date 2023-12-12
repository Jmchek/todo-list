export default function todosRemover(someTodo) {

    localStorage.removeItem(someTodo.title);
    
    }




// todos-remover
// how it works...

// user clicks delete/remove/etc and the todo itself is sent to todos-remover
// we search and confirm which project it is part of and which number
// get the todo, find the project it is in, then delete the project entry
// if an entry in the middle of the series gets removed, bump the others?