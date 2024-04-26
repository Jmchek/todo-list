import projectsModule from "./project-module";

export default function projectsManager() {

    let keyFromStorage;

   if (localStorage.length >= 1) {
    Object.keys(localStorage).forEach(function(key){
        if(localStorage.getItem(key) == []) {
            keyFromStorage = [];
        } else {
            JSON.parse(keyFromStorage);
        }
        projectsModule(key, keyFromStorage);
     });
   } else {
    projectsModule();
   }
}