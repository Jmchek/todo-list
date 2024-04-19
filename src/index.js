import Todos from "./todos-creator.js";
import Projects from "./projects-creator.js";
import projectsStorer from "./projects-storer.js";
import projectsModule from "./project-module.js";
import "./todo-list.css";

//testing here
let user = new Todos("Barney", "foo", "bar", "2014-02-09", "33", "dasdf", ["cl", "test", "cltest"]);
let user2 = new Todos("Barney", "asdfasd", "badasdr", "2023-01-02", "70", "asdfcc", ["cl", "test", "cltest"]);
let user3 = new Todos("Barney", "test", "asdf", "1998-04-11", "21", "bbbbb", ["cl", "test", "cltest"]);
let user4 = new Todos("Barney", "just added", "here", "2022-06-04", "99", "a;sldkf", ["cl", "test", "cltest"]);
let someProject = new Projects("Barney", user);

user.notes = "hothead";
someProject.todos = [user, user2, user3];

localStorage.clear();

// projectsStorer(someProject);

// projectsModule(someProject.title, someProject.todos);

projectsModule();