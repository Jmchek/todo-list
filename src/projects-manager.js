import Projects from "./projects-creator.js";
import projectsRemover from "./projects-remover.js";
import projectsStorer from "./projects-storer.js";

export default function projectsManager(someProject) {

    //receives a "projects" object from user to make projects
    let newProject = new Projects(someProject.title, someProject.progress, someProject.priority, someProject.todos);

    console.log(someProject);
    console.log("projects manager is working");
    }