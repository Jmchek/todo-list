# todo-list

1. let's try local storage extension DONE
2. think of how to organize/use the modules we have created
3. need to get the modules working before placing them in a UI
4. we will create the todos creator first then go from there
5. now working on todos-storer.js
6. something new has come up while working on todos-storer.js...localStorage is read-only, so we will have to just add/retrieve data instead of CRUD
7. todos-updater now changed to todos-remover to reflect this change
8. now we will incorporate the todos modules into todos-manager
9. did the same but for all projects
10. now have to create a form to gather user data inputs (maybe a module that creats html forms whenever needed, like we just added a todo)
11. write up form-creator.js file, first in html
12. when the user hits submit (complete?), we will fire form-storer to get the data to process then use todos-storer.js module to take the new data into localstorage if it's a todo, projects-storer.js will do the same for projects, etc
13. GOAL(DONE): get projects-storer and todos-storer working without ui, take the form data and store it under a "project", then take another form data and store under same project
14. todos are now stored under the project name as the 'key', we would have to find the project name somehow
15. seems like we have todos-storer.js and projects-storer.js working correctly in storing locally 
16. GOAL: be able to delete todos and projects from local storage
17. due to the nature of local storage, we will now store todos by the project-name+{number} (e.g. shopping1, shopping2), commence refactoring
18. need to figure out how to store it

UX/UI stuff
1. user opens page to a blank project with a plus icon
2. pluc icon clicked, todo object is added in the project and EXPANDED to add details 



~~~~~ Planning ~~~~~
1. we will have local storage
1. we have a module/factory that creates "projects"
2. projects house the "todos" objects(also created in module) that hold the following properties
3. title, description, dueDate and priority. You might also want to include notes or even a checklist
4. user creates a project, then adds todos(objects) to it(the project contains the entire list)
5. we will first create the logic/modules that will dynamically create our projects and allow the user to add "todos" to it


modules:
1. Todos creator, all this module does is create a todo with all the properties
2. Projects creator, creates new projects
3. Projects manager, manages the logic of projects
4. Todos manager, manages the logic of todos
5. index.js

~~~ Todos manager ~~~ DONE FOR NOW
1. export to index.js
2. use todos-creator to make todos
3. store created todos in a project using Todos storer
4. remove a todos data in local storage using Todos remover

~~~ Todos creator ~~~ DONE
1. exports to index.js
2. a constructor/class that creates an object with title, description, dueDate and priority. You might also want to include notes or even a checklist

~~~ Todos storer ~~~ DONE
1. stores a todo object locally
1. takes a todo object as a parameter
2. take the object and stores it locally under the title?

~~~ Todos remover ~~~ DONE
1. For now, will remove requested todo from storage
2. the idea being, mark todo as complete (UI), then can remove with remover

~~~ Projects creator ~~~ DONE
1. exports to index.js
2. a constructor/class that creates an object with title, progress, and priority that we will add objects to (todos)

~~~ Projects manager ~~~ DONE FOR NOW
1. exports to index.js
2. manage the storing and retrieving of projects in storage
2. use projects-creator to make projects
3. store created projects in local storage using Projects storer
4. remove projects data in local storage using Projects remover

~~~ Projects remover ~~~ DONE
1. exports to index.js
2. removes any projects object in a locally stored project

~~~ Projects storer ~~~ DONE
1. takes a project object and stores it locally


~~~ Form creator ~~~
1. form-creator.js will create an html form and append it to a target object

~~~ form storer ~~~
1. receive data from a form and store it either into an already existing project or create a new project