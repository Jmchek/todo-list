import projectsModule from "./project-module";

export default function projectsManager() {

   if (localStorage.length > 1) {
    Object.keys(localStorage).forEach(function(key){
        projectsModule(key, JSON.parse(localStorage.getItem(key)));
     });
   } else {
    projectsModule();
   }
}