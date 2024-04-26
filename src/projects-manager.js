import projectsModule from "./project-module";

export default function projectsManager() {

    let keyFromStorage;

   if (localStorage.length >= 1) {
    Object.keys(localStorage).forEach(function(key){
        keyFromStorage = JSON.parse(localStorage.getItem(key)) || [];

        projectsModule(key, keyFromStorage);
     });
   } else {
    projectsModule();
   }
}