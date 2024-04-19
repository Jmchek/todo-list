export default function projectsRemover(someProject) {
    
    if (JSON.parse(localStorage.getItem(someProject))) {
        localStorage.removeItem(someProject.title);
    } else {
        throw console.error("Project not found!");
    } 
}