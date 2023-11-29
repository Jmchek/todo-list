export default function todosStorer(someTodo) {
    const storedFormData = JSON.parse(localStorage.getItem(someTodo.title)) || [];

    storedFormData.push(someTodo);

    localStorage.setItem(someTodo.title, JSON.stringify(storedFormData));

}