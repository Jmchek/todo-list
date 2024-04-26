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
19. todos-storer.js is now working correctly, time to code removing the todos with todos-remover.js
20. projects will function like array/objects in which they will have a "count" of todos in them, and just like arrays we can splice (w/e it's called) and push the others into formation
21. having said that, todos-storer should be refactored from sequenced adding to finding the project under the key and locating the count within the project object for the todo in question, e.g. remove todo#3 > project.todos.count > project.todos.splice[2, 4] > we need to refactor todos-storer.js AGAIN
22. we're testing in index.js to try to change a todo within a project without storing multiple projects
23. what if we have a key for a project, and the value is an array we store to, the first 5 or so entries are the todo properties and the rest of the array are todos added to the project? Need to convert code to support this, try the storer modules
24. what we learned from testing is that we can do #23 and store all of the project into one key/value pair. To remove a todo, we will copy the project into an array, iterate over the array to determine which one to remove (e.g. user clicks on todo, we mark the event and which # it is in the array and proceed to use todos-remover.js to find it and delete it). Double confirmed by splicing one thing out of the array, as well as several others.
25.  GOAL: be able to delete todos and projects from local storage DONE
26. What's next? NEW GOAL: be able to effectively store user inputs pulled in from the form, and remove them
27. fixing up todos-remover.js to correctly seek out a todo within a project and remove it DONE
28. What's next? Now that we have the storers and removers working correctly, we will have to work on the form to work 100%, we are trying to figure out the checklist area in that the goal is for it to be dynamic. Ultimate goal is for the form to be in a js module to be dynamic

FORM MODULE SECTION
29. For the checkbox addition in the forms, I am thinking of adding a button next to a text box to add one dynamically with the id/name being whatever is inputted into text box, can keep adding
30. Made priority look better with a number near it, now working more on checkbox and then we can complete the form segment
31. gonna change checklist to a ul, following this w3: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_todo
32. i have to change my ids to classes, reason why being that there will be multiple instances which can cause huge issues down the line, should be easier to transition to
33. Trying to figure out how to get the submissions from the user for a list, if we take the todo and put every answer into an array, we can submit that array into storage to be called.
34. Putting event listeners for every input, once the "submit" button is pressed, we will collect all the data in the form and store it locally
34. creating the submit button first
35. gonna undo the mass change to classes...let's see if we even need to do that, okay i might be just fine since this won't be a traditional form
36. So far we can pull all the input from the user, we are going to keep the checklist simple to complete the project. NEXT: try to take the data, clear the fields, and store the input, BUT FIRST let's make the submit button NOT look like shit
37. Everything looks better, working on past NEXT goal
38. Fields can be cleared, time to store
39. we can store the fields properly, now we'll have to work on a project-module to house the todo. Currently, the forms-module has to latch on to an anchor of some kind, the intent behind the project-module will be to provide an anchor for the form to attach to, and a display area for todos/local storage. Gonna set the git tree up for that so we can start work on it

PROJECT MODULE SECTION
40. we have drawn a rough model of our display layout, first things first, we will have to display the locally stored todos in a project div. Let us first create this and build inside out
41. we built a rough skeleton of our display, now we are working on displaying a project in local storage
42. right now i'm trying to figure out how to use the storing modules, all they do is store, but there needs to be a logic to dictate which project a todo goes to...
43. when a user enters the main page, 
- they will see all projects laid out, this is where projects manager comes in
- projects manager will go through local storage, find existing projects and put them in a display (if there are no projects, a default one will be made and presented)
- put them in a display means, it will put all the projects in an object with key/value pairs being project name/todos
- we can assign a 'card' to each project entry
- div title will be the project title, todos will be listed in projects-display (will create a module to do this) then added to the display window div by div (grid styles controlling the flow)
- Then adding to it will select THIS from the button, 
- from there we will take the project title
- find the project title in local storage and loop through the todos, add to them and re-display
44. Looks like we will have to turn project module into a "card"-maker, the idea being projects manager looks through localStorage, if it finds a key and a value pair, it will send the data over to project-module to create a container. Project-module will accept a key, and a value as arguments then process them
45. now that we have the project-module correctly placing divs, let's setup the todos display within the project card
46. MINI-SECTION: thinking of making the todo title and dueDate like the project says, but we have three things that i want to do to it. First, click on the todo to expand and see the full thing. Second, add an edit button to change todo things (maybe pre-fill a form and once submitted update the data within localStorage?). Lastly, delete a todo within the list.
47. we have made the expanded view, now we will find a way to properly display each section of the expanded todo in the div.
48. the expanded view now working fine (click open see details, click close and back to less detail)
49. we are now working on an edit button for each todo
50. we will have to create a div box when edit is clicked that won't close until it's out of focus or the submit button is hit, updating the todo in either case. 
51. we have added the edit window successfully, focusing on the functionality of the form, once it is submitted we want to update the localStorage with the data in the fields
52. check form-module, working on updating localStorage with checklist items specifically
53. we can update the data in localstorage with the edit window. Now, we will have to figure out a way to update the data in the proj card within the proj container. We can try having the card be replaced if there is already an existing proj title (as in we can update it).
54. find a way to use the new function
55. first going to allow expanded view to show the checklist
56. update the li currently in place for the todo in the card, and find the todo within the project in localStorage and update that as well (find by title, and if title is changed, find by old title then update)
57. errors: checklist adds but does not remove FIXED; once submit btn is pressed, the checklist preview does not show FIXED; 
58. fixing errors DONE; add todo does not work FIXED; delete project does not work
59. for add todo btn, we will create a blank form when the button is pressed (similar to edit window but blank), once the blank form is submitted, it will check what project the todo is under (target project name from btn's parent container), then add a todo using the todoStorer under that project in localStorage DONE
60. can store addBtn todo but the todo itself is missing the project key FIXED
61. error: add todo btn getting shrunk on more todos being added FIXED
62. MERGING, going to now work on delete todo and delete project buttons

DELETE TODO SECTION
63. project module will send the todo info to todos-remover.js to remove the data from localStorage while deleting the todo in the actual project display card

DELETE PROJECT SECTION
64. DONE

ADD PROJECT SECTION
65. we will have to delete the old add project button (or move it somewhere) when adding newer projects
66. functioning as expected
67. ERROR when we have multiple cards, deleting a project results in the card being removed but the localStorage remaining unchanged FIXED
68. MERGING

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