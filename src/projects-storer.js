export default function projectsStorer(someProject) {
    localStorage.setItem(someProject.title, JSON.stringify(someProject));
    }