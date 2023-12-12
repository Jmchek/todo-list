export default function todosStorer(someTodo) {
    const storedFormData = JSON.parse(localStorage.getItem(someTodo.project)) || [];

    storedFormData.push(someTodo);

    localStorage.setItem(someTodo.project, JSON.stringify(storedFormData));

    // let found = false;
    // let ogProject = someTodo.project;
    // let currentProjectTodoCount = 0;
    // ogProject = ogProject.replace(/[0-9]/g, "");

    // //this tells us how many entries are in a project if it's there, if not we store
    // if(localStorage.getItem(ogProject)){
    //     let n = 1;

    //     while(!found) {
    //         if(!localStorage.getItem(ogProject + n.toString())) {
    //             found = true;
    //             currentProjectTodoCount = n;
    //         }
    //         n++;
    //     } 
        
    //     const storedFormData = JSON.parse(localStorage.getItem(ogProject)) || [];

    //     storedFormData.push(someTodo);
    
    //     localStorage.setItem(ogProject + currentProjectTodoCount, JSON.stringify(storedFormData));

    // } 
    
    // else if(!localStorage.getItem(ogProject)) {
    //     create a new project
    // }
}


//check what project it belongs to DONE
// how many entries are in the project DONE, might turn into module
// set the todos "in" the project as project1, project2, etc BREAKDOWN BELOW

// receive the todo
// get the project todo
// check if project exists by checking ogProject in local stroage 
// if it does, find the count of entries (how many todos so far) then add the todo to it with that number + 1