export default function projectsStorer(someProject) {

    if (localStorage.getItem(someProject.title)){
        throw console.error("Project already exists!");
    } else {
        localStorage.setItem(someProject, []);
    }
    
}