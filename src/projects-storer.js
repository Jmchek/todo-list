export default function projectsStorer(someProject) {
    const storedFormData = JSON.parse(localStorage.getItem(someProject.title)) || [];

    storedFormData.push(someProject);

    localStorage.setItem(someProject.title, JSON.stringify(storedFormData));
    }