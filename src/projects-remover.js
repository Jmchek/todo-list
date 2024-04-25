export default function projectsRemover(someProject) {
    let storedProj = localStorage.getItem(someProject) || [];
                
    if(storedProj.length > 0){
        storedProj = JSON.parse(storedProj);
    }
    
    if (storedProj && someProject) {
        localStorage.removeItem(someProject);
    } else {
        throw console.error("Project not found!");
    } 
}