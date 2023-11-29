import todosStorer from "./todos-storer";

document.getElementById('formTemplate').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    const formData = {
        title: title,
        description: description,
        dueDate: dueDate
    };

    console.log(formData);
    console.log("saveFormData is working");

    todosStorer(formData);
});

// function saveFormData(formData) {
//     const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

//     storedFormData.push(formData);

//     localStorage.setItem('formData', JSON.stringify(storedFormData));
// }