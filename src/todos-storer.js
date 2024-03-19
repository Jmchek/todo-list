export default function todosStorer(someTodo) {
    let storedProjData = JSON.parse(localStorage.getItem(someTodo.project)) || [];
    const todoTitle = someTodo.title;
    let found = false;
    let index = 0;

    console.log(storedProjData);

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