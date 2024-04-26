import projectsModule from "./project-module";

export default function projectsManager() {

    let keyFromStorage;

   if (localStorage.length >= 1) {
    Object.keys(localStorage).forEach(key => {
      if(localStorage.getItem(key) != undefined && localStorage.getItem(key)){
        keyFromStorage = JSON.parse(localStorage.getItem(key));
      } else {
        keyFromStorage = [];
      }

      projectsModule(key, keyFromStorage);
    });
   } else {
    projectsModule();
   }
}