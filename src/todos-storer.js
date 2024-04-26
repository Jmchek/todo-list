export default function todosStorer(someTodo, keyForUpdating, projName) {
    let storedProjData;

    if(localStorage.getItem(someTodo.project)){
        storedProjData = JSON.parse(localStorage.getItem(someTodo.project)) || [];
    } else {
        storedProjData = [];
    }
    const todoTitle = someTodo.title;
    let found = false;
    let index = 0;

    if(keyForUpdating && keyForUpdating != undefined){
        storedProjData[keyForUpdating] = someTodo;
        localStorage.setItem(someTodo.project, JSON.stringify(storedProjData));
    } else if (projName){
        if(localStorage.getItem(someTodo.project)){
            storedProjData = JSON.parse(localStorage.getItem(someTodo.project)) || [];
        } else {
            storedProjData = [];
        }
        storedProjData.push(someTodo);
        localStorage.setItem(projName, JSON.stringify(storedProjData));
    } else {
        storedProjData.forEach(todo => {
            for (let y in todo){
                if(todo[y] == todoTitle){
                    found = true;
                    index = storedProjData.indexOf(todo);
                }
            }
        });
    
        if (storedProjData != [] && found){
            storedProjData[index] = someTodo;
            localStorage.setItem(someTodo.project, JSON.stringify(storedProjData));
        } else {
            storedProjData.push(someTodo);
            localStorage.setItem(someTodo.project, JSON.stringify(storedProjData));
        }
    }
}