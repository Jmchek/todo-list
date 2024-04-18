export default function todosRemover(someProject, indexForDel) {

    const storedFormData = JSON.parse(localStorage.getItem(someProject)) || [];

    storedFormData.splice(indexForDel, 1);

    localStorage.setItem(someProject, JSON.stringify(storedFormData));
    
}