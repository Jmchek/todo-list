/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form-storer.js":
/*!****************************!*\
  !*** ./src/form-storer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_storer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-storer */ "./src/projects-storer.js");
/* harmony import */ var _todos_storer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-storer */ "./src/todos-storer.js");



document.getElementById('formTemplate').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const notes = document.getElementById('notes').value;
    const checklist = document.getElementById('checklist').value;

    const formData = {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: notes,
        checklist : checklist
    };

    // console.log(formData);
    // console.log("saveFormData is working");

    // if it's a todo LOGIC HERE
    // todosStorer(formData);
    // else if it's a project
    //projectsStorer(formData);
});

// function saveFormData(formData) {
//     const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

//     storedFormData.push(formData);

//     localStorage.setItem('formData', JSON.stringify(storedFormData));
// }

/***/ }),

/***/ "./src/projects-creator.js":
/*!*********************************!*\
  !*** ./src/projects-creator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Projects)
/* harmony export */ });
class Projects {

    //title, progress, and priority
    constructor(title, progress, priority, todos) {
      this.title = title;
      this.progress = progress;
      this.priority = priority;
      this.todos = todos;
    }

    //GET
    get title() {
      return this._title;
    }

    get progress() {
        return this._progress;
      }

    get priority() {
      return this._priority;
    }

    get todos() {
        return this._todos;
      }
    
    //SET
    set title(value) {
      this._title = value;
    }

    set progress(value) {
        this._progress = value;
      }

    set priority(value) {
      this._priority = value;
    }

    set todos(value) {
        this._todos = value;
      }
  
  }

/***/ }),

/***/ "./src/projects-manager.js":
/*!*********************************!*\
  !*** ./src/projects-manager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectsManager)
/* harmony export */ });
/* harmony import */ var _projects_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-creator.js */ "./src/projects-creator.js");
/* harmony import */ var _projects_remover_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-remover.js */ "./src/projects-remover.js");
/* harmony import */ var _projects_storer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-storer.js */ "./src/projects-storer.js");




function projectsManager(someProject) {

    //receives a "projects" object from user to make projects
    let newProject = new _projects_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"](someProject.title, someProject.progress, someProject.priority, someProject.todos);

    console.log(someProject);
    console.log("projects manager is working");
    }

/***/ }),

/***/ "./src/projects-remover.js":
/*!*********************************!*\
  !*** ./src/projects-remover.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectsRemover)
/* harmony export */ });
function projectsRemover(someProject) {

    localStorage.removeItem(someProject.title);
    
    }

/***/ }),

/***/ "./src/projects-storer.js":
/*!********************************!*\
  !*** ./src/projects-storer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectsStorer)
/* harmony export */ });
function projectsStorer(someProject) {
    const storedFormData = JSON.parse(localStorage.getItem(someProject.title)) || [];

    storedFormData.push(someProject);

    localStorage.setItem(someProject.title, JSON.stringify(storedFormData));
    }

/***/ }),

/***/ "./src/todos-creator.js":
/*!******************************!*\
  !*** ./src/todos-creator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todos)
/* harmony export */ });
class Todos {

    constructor(project,title, description, dueDate, priority, notes, checklist) {
      this.project = project;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.checklist = checklist;
    }

    //GET
    get project() {
      return this._project;
    }

    get title() {
      return this._title;
    }

    get description() {
      return this._description;
    }

    get dueDate() {
      return this._dueDate;
    }

    get priority() {
      return this._priority;
    }

    get notes() {
      return this._notes;
    }

    get checklist() {
      return this._checklist;
    }
    
    //SET
    set project(value) {
      this._project = value;
    }

    set title(value) {
      this._title = value;
    }

    set description(value) {
      this._description = value;
    }

    set dueDate(value) {
      this._dueDate = value;
    }

    set priority(value) {
      this._priority = value;
    }

    set notes(value) {
      this._notes = value;
    }

    set checklist(value) {
      this._checklist = value;
    }
  
  }

/***/ }),

/***/ "./src/todos-manager.js":
/*!******************************!*\
  !*** ./src/todos-manager.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todosManager)
/* harmony export */ });
/* harmony import */ var _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-creator.js */ "./src/todos-creator.js");
/* harmony import */ var _todos_remover_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-remover.js */ "./src/todos-remover.js");
/* harmony import */ var _todos_storer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos-storer.js */ "./src/todos-storer.js");




function todosManager(someTodo) {

    //receives a "todo" object from user to make todos
    let newTodo = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"](someTodo.title, someTodo.description, someTodo.dueDate, someTodo.priority, someTodo.notes, someTodo.checklist);

    //store created todos in local storage using Todos storer
    // todosStorer(newTodo);
    // we will refactor this to store todos in a existing or new project

    //remove a todos data in local storage using Todos remover
    // if a user clicks remove todo, invoke the following:
    // todosRemover(newTodo);
    }

/***/ }),

/***/ "./src/todos-remover.js":
/*!******************************!*\
  !*** ./src/todos-remover.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todosRemover)
/* harmony export */ });
function todosRemover(someTodo) {

    localStorage.removeItem(someTodo.title);
    
    }

/***/ }),

/***/ "./src/todos-storer.js":
/*!*****************************!*\
  !*** ./src/todos-storer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todosStorer)
/* harmony export */ });
function todosStorer(someTodo) {
    // const storedFormData = JSON.parse(localStorage.getItem(someTodo.project)) || [];

    // storedFormData.push(someTodo);

    // localStorage.setItem(someTodo.project, JSON.stringify(storedFormData));

    let found = false;
    let ogProject = someTodo.project;
    let currentProjectTodoCount = 0;
    ogProject = ogProject.replace(/[0-9]/g, "");

    //this tells us how many entries are in a project if it's there, if not we store
    if(localStorage.getItem(ogProject)){
        let n = 1;

        while(!found) {
            if(!localStorage.getItem(ogProject + n.toString())) {
                found = true;
                currentProjectTodoCount = n;
            }
            n++;
        } 
        
        const storedFormData = JSON.parse(localStorage.getItem(ogProject)) || [];

        storedFormData.push(someTodo);
    
        localStorage.setItem(ogProject + currentProjectTodoCount, JSON.stringify(storedFormData));

    } 
    
    // else if(!localStorage.getItem(ogProject)) {
    //     const storedFormData = [];

    //     storedFormData.push(someTodo);

    //     localStorage.setItem(someTodo.project, JSON.stringify(storedFormData));
    // }
}


//check what project it belongs to DONE
// how many entries are in the project DONE, might turn into module
// set the todos "in" the project as project1, project2, etc BREAKDOWN BELOW

// receive the todo
// get the project todo
// check if project exists by checking ogProject in local stroage
// if it does, find the count of entries (how many todos so far) then add the todo to it with that number + 1

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-creator.js */ "./src/todos-creator.js");
/* harmony import */ var _todos_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-manager.js */ "./src/todos-manager.js");
/* harmony import */ var _projects_creator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-creator.js */ "./src/projects-creator.js");
/* harmony import */ var _projects_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-manager.js */ "./src/projects-manager.js");
/* harmony import */ var _form_storer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-storer.js */ "./src/form-storer.js");
/* harmony import */ var _todos_storer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos-storer.js */ "./src/todos-storer.js");
/* harmony import */ var _projects_storer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-storer.js */ "./src/projects-storer.js");









//example of local storage working, can remove
// localStorage.colorSetting = "#a4509b";

// console.log(localStorage.colorSetting);

// localStorage.colorSetting = "hello there";

// console.log(localStorage.colorSetting);


//testing here
let user = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "foo", "bar", "foo", "bar", "foo");
let user2 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Gumpy", "foo", "bar", "foo", "bar", "foo");
let user3 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Kleetus", "foo", "bar", "foo", "bar", "foo");
let someProject = new _projects_creator_js__WEBPACK_IMPORTED_MODULE_2__["default"]("test", "foo", "bar", user);



// console.log(user);
// console.log(typeof(user));
// console.log(user.title);
// console.log(user.notes);
user.notes = "hothead";
someProject.todos = {user, user2, user3};



// function makeTodo(someName) {
//     let someTodo = new Todos(someName);

//     return someTodo;
// }


let testClassGrbbr = document.querySelector(".testClass");
testClassGrbbr.addEventListener("click", x => {
    // projectsManager(someProject);
});

// document.getElementById('formTemplate').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const dueDate = document.getElementById('dueDate').value;

//     const formData = {
//         title: title,
//         description: description,
//         dueDate: dueDate
//     };

//     console.log(formData);

//     saveFormData(formData);
// });

document.getElementById('formTemplate').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;
    const priority = document.getElementById('priority').value;
    const notes = document.getElementById('notes').value;
    const checklist = document.getElementById('checklist');

    const formData = {
        project: 'test',
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        notes: notes,
        checklist : checklist
    };

    console.log(formData);

    (0,_todos_storer_js__WEBPACK_IMPORTED_MODULE_5__["default"])(formData);
    // projectsStorer(someProject);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJOztBQUVKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLDREQUFXO0FBQ2Y7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0tc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1yZW1vdmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1zdG9yZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLXJlbW92ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLXN0b3Jlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2plY3RzU3RvcmVyIGZyb20gXCIuL3Byb2plY3RzLXN0b3JlclwiO1xuaW1wb3J0IHRvZG9zU3RvcmVyIGZyb20gXCIuL3RvZG9zLXN0b3JlclwiO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKS52YWx1ZTtcbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0JykudmFsdWU7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgbm90ZXM6IG5vdGVzLFxuICAgICAgICBjaGVja2xpc3QgOiBjaGVja2xpc3RcbiAgICB9O1xuXG4gICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2F2ZUZvcm1EYXRhIGlzIHdvcmtpbmdcIik7XG5cbiAgICAvLyBpZiBpdCdzIGEgdG9kbyBMT0dJQyBIRVJFXG4gICAgLy8gdG9kb3NTdG9yZXIoZm9ybURhdGEpO1xuICAgIC8vIGVsc2UgaWYgaXQncyBhIHByb2plY3RcbiAgICAvL3Byb2plY3RzU3RvcmVyKGZvcm1EYXRhKTtcbn0pO1xuXG4vLyBmdW5jdGlvbiBzYXZlRm9ybURhdGEoZm9ybURhdGEpIHtcbi8vICAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1EYXRhJykpIHx8IFtdO1xuXG4vLyAgICAgc3RvcmVkRm9ybURhdGEucHVzaChmb3JtRGF0YSk7XG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybURhdGEnLCBKU09OLnN0cmluZ2lmeShzdG9yZWRGb3JtRGF0YSkpO1xuLy8gfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcblxuICAgIC8vdGl0bGUsIHByb2dyZXNzLCBhbmQgcHJpb3JpdHlcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJvZ3Jlc3MsIHByaW9yaXR5LCB0b2Rvcykge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH1cblxuICAgIC8vR0VUXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIGdldCBwcm9ncmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xuICAgICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCB0b2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9zO1xuICAgICAgfVxuICAgIFxuICAgIC8vU0VUXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBwcm9ncmVzcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wcm9ncmVzcyA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB0b2Rvcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b2RvcyA9IHZhbHVlO1xuICAgICAgfVxuICBcbiAgfSIsImltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0cy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNSZW1vdmVyIGZyb20gXCIuL3Byb2plY3RzLXJlbW92ZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0c1N0b3JlciBmcm9tIFwiLi9wcm9qZWN0cy1zdG9yZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNNYW5hZ2VyKHNvbWVQcm9qZWN0KSB7XG5cbiAgICAvL3JlY2VpdmVzIGEgXCJwcm9qZWN0c1wiIG9iamVjdCBmcm9tIHVzZXIgdG8gbWFrZSBwcm9qZWN0c1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3RzKHNvbWVQcm9qZWN0LnRpdGxlLCBzb21lUHJvamVjdC5wcm9ncmVzcywgc29tZVByb2plY3QucHJpb3JpdHksIHNvbWVQcm9qZWN0LnRvZG9zKTtcblxuICAgIGNvbnNvbGUubG9nKHNvbWVQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhcInByb2plY3RzIG1hbmFnZXIgaXMgd29ya2luZ1wiKTtcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNSZW1vdmVyKHNvbWVQcm9qZWN0KSB7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzb21lUHJvamVjdC50aXRsZSk7XG4gICAgXG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzU3RvcmVyKHNvbWVQcm9qZWN0KSB7XG4gICAgY29uc3Qgc3RvcmVkRm9ybURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvbWVQcm9qZWN0LnRpdGxlKSkgfHwgW107XG5cbiAgICBzdG9yZWRGb3JtRGF0YS5wdXNoKHNvbWVQcm9qZWN0KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvbWVQcm9qZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShzdG9yZWRGb3JtRGF0YSkpO1xuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvcyB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpIHtcbiAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgfVxuXG4gICAgLy9HRVRcbiAgICBnZXQgcHJvamVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0IG5vdGVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25vdGVzO1xuICAgIH1cblxuICAgIGdldCBjaGVja2xpc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2hlY2tsaXN0O1xuICAgIH1cbiAgICBcbiAgICAvL1NFVFxuICAgIHNldCBwcm9qZWN0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcm9qZWN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgbm90ZXModmFsdWUpIHtcbiAgICAgIHRoaXMuX25vdGVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGNoZWNrbGlzdCh2YWx1ZSkge1xuICAgICAgdGhpcy5fY2hlY2tsaXN0ID0gdmFsdWU7XG4gICAgfVxuICBcbiAgfSIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvcy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgdG9kb3NSZW1vdmVyIGZyb20gXCIuL3RvZG9zLXJlbW92ZXIuanNcIjtcbmltcG9ydCB0b2Rvc1N0b3JlciBmcm9tIFwiLi90b2Rvcy1zdG9yZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NNYW5hZ2VyKHNvbWVUb2RvKSB7XG5cbiAgICAvL3JlY2VpdmVzIGEgXCJ0b2RvXCIgb2JqZWN0IGZyb20gdXNlciB0byBtYWtlIHRvZG9zXG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kb3Moc29tZVRvZG8udGl0bGUsIHNvbWVUb2RvLmRlc2NyaXB0aW9uLCBzb21lVG9kby5kdWVEYXRlLCBzb21lVG9kby5wcmlvcml0eSwgc29tZVRvZG8ubm90ZXMsIHNvbWVUb2RvLmNoZWNrbGlzdCk7XG5cbiAgICAvL3N0b3JlIGNyZWF0ZWQgdG9kb3MgaW4gbG9jYWwgc3RvcmFnZSB1c2luZyBUb2RvcyBzdG9yZXJcbiAgICAvLyB0b2Rvc1N0b3JlcihuZXdUb2RvKTtcbiAgICAvLyB3ZSB3aWxsIHJlZmFjdG9yIHRoaXMgdG8gc3RvcmUgdG9kb3MgaW4gYSBleGlzdGluZyBvciBuZXcgcHJvamVjdFxuXG4gICAgLy9yZW1vdmUgYSB0b2RvcyBkYXRhIGluIGxvY2FsIHN0b3JhZ2UgdXNpbmcgVG9kb3MgcmVtb3ZlclxuICAgIC8vIGlmIGEgdXNlciBjbGlja3MgcmVtb3ZlIHRvZG8sIGludm9rZSB0aGUgZm9sbG93aW5nOlxuICAgIC8vIHRvZG9zUmVtb3ZlcihuZXdUb2RvKTtcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NSZW1vdmVyKHNvbWVUb2RvKSB7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzb21lVG9kby50aXRsZSk7XG4gICAgXG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zU3RvcmVyKHNvbWVUb2RvKSB7XG4gICAgLy8gY29uc3Qgc3RvcmVkRm9ybURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvbWVUb2RvLnByb2plY3QpKSB8fCBbXTtcblxuICAgIC8vIHN0b3JlZEZvcm1EYXRhLnB1c2goc29tZVRvZG8pO1xuXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oc29tZVRvZG8ucHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkRm9ybURhdGEpKTtcblxuICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgIGxldCBvZ1Byb2plY3QgPSBzb21lVG9kby5wcm9qZWN0O1xuICAgIGxldCBjdXJyZW50UHJvamVjdFRvZG9Db3VudCA9IDA7XG4gICAgb2dQcm9qZWN0ID0gb2dQcm9qZWN0LnJlcGxhY2UoL1swLTldL2csIFwiXCIpO1xuXG4gICAgLy90aGlzIHRlbGxzIHVzIGhvdyBtYW55IGVudHJpZXMgYXJlIGluIGEgcHJvamVjdCBpZiBpdCdzIHRoZXJlLCBpZiBub3Qgd2Ugc3RvcmVcbiAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShvZ1Byb2plY3QpKXtcbiAgICAgICAgbGV0IG4gPSAxO1xuXG4gICAgICAgIHdoaWxlKCFmb3VuZCkge1xuICAgICAgICAgICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKG9nUHJvamVjdCArIG4udG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY3VycmVudFByb2plY3RUb2RvQ291bnQgPSBuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbisrO1xuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgY29uc3Qgc3RvcmVkRm9ybURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKG9nUHJvamVjdCkpIHx8IFtdO1xuXG4gICAgICAgIHN0b3JlZEZvcm1EYXRhLnB1c2goc29tZVRvZG8pO1xuICAgIFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShvZ1Byb2plY3QgKyBjdXJyZW50UHJvamVjdFRvZG9Db3VudCwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkRm9ybURhdGEpKTtcblxuICAgIH0gXG4gICAgXG4gICAgLy8gZWxzZSBpZighbG9jYWxTdG9yYWdlLmdldEl0ZW0ob2dQcm9qZWN0KSkge1xuICAgIC8vICAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IFtdO1xuXG4gICAgLy8gICAgIHN0b3JlZEZvcm1EYXRhLnB1c2goc29tZVRvZG8pO1xuXG4gICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvbWVUb2RvLnByb2plY3QsIEpTT04uc3RyaW5naWZ5KHN0b3JlZEZvcm1EYXRhKSk7XG4gICAgLy8gfVxufVxuXG5cbi8vY2hlY2sgd2hhdCBwcm9qZWN0IGl0IGJlbG9uZ3MgdG8gRE9ORVxuLy8gaG93IG1hbnkgZW50cmllcyBhcmUgaW4gdGhlIHByb2plY3QgRE9ORSwgbWlnaHQgdHVybiBpbnRvIG1vZHVsZVxuLy8gc2V0IHRoZSB0b2RvcyBcImluXCIgdGhlIHByb2plY3QgYXMgcHJvamVjdDEsIHByb2plY3QyLCBldGMgQlJFQUtET1dOIEJFTE9XXG5cbi8vIHJlY2VpdmUgdGhlIHRvZG9cbi8vIGdldCB0aGUgcHJvamVjdCB0b2RvXG4vLyBjaGVjayBpZiBwcm9qZWN0IGV4aXN0cyBieSBjaGVja2luZyBvZ1Byb2plY3QgaW4gbG9jYWwgc3Ryb2FnZVxuLy8gaWYgaXQgZG9lcywgZmluZCB0aGUgY291bnQgb2YgZW50cmllcyAoaG93IG1hbnkgdG9kb3Mgc28gZmFyKSB0aGVuIGFkZCB0aGUgdG9kbyB0byBpdCB3aXRoIHRoYXQgbnVtYmVyICsgMSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvZG9zIGZyb20gXCIuL3RvZG9zLWNyZWF0b3IuanNcIjtcbmltcG9ydCB0b2Rvc01hbmFnZXIgZnJvbSBcIi4vdG9kb3MtbWFuYWdlci5qc1wiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzLWNyZWF0b3IuanNcIjtcbmltcG9ydCBwcm9qZWN0c01hbmFnZXIgZnJvbSBcIi4vcHJvamVjdHMtbWFuYWdlci5qc1wiO1xuXG5pbXBvcnQgc2F2ZUZvcm1EYXRhIGZyb20gXCIuL2Zvcm0tc3RvcmVyLmpzXCI7XG5pbXBvcnQgdG9kb3NTdG9yZXIgZnJvbSBcIi4vdG9kb3Mtc3RvcmVyLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNTdG9yZXIgZnJvbSBcIi4vcHJvamVjdHMtc3RvcmVyLmpzXCI7XG5cbi8vZXhhbXBsZSBvZiBsb2NhbCBzdG9yYWdlIHdvcmtpbmcsIGNhbiByZW1vdmVcbi8vIGxvY2FsU3RvcmFnZS5jb2xvclNldHRpbmcgPSBcIiNhNDUwOWJcIjtcblxuLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmNvbG9yU2V0dGluZyk7XG5cbi8vIGxvY2FsU3RvcmFnZS5jb2xvclNldHRpbmcgPSBcImhlbGxvIHRoZXJlXCI7XG5cbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5jb2xvclNldHRpbmcpO1xuXG5cbi8vdGVzdGluZyBoZXJlXG5sZXQgdXNlciA9IG5ldyBUb2RvcyhcIkJhcm5leVwiLCBcImZvb1wiLCBcImJhclwiLCBcImZvb1wiLCBcImJhclwiLCBcImZvb1wiKTtcbmxldCB1c2VyMiA9IG5ldyBUb2RvcyhcIkd1bXB5XCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIpO1xubGV0IHVzZXIzID0gbmV3IFRvZG9zKFwiS2xlZXR1c1wiLCBcImZvb1wiLCBcImJhclwiLCBcImZvb1wiLCBcImJhclwiLCBcImZvb1wiKTtcbmxldCBzb21lUHJvamVjdCA9IG5ldyBQcm9qZWN0cyhcInRlc3RcIiwgXCJmb29cIiwgXCJiYXJcIiwgdXNlcik7XG5cblxuXG4vLyBjb25zb2xlLmxvZyh1c2VyKTtcbi8vIGNvbnNvbGUubG9nKHR5cGVvZih1c2VyKSk7XG4vLyBjb25zb2xlLmxvZyh1c2VyLnRpdGxlKTtcbi8vIGNvbnNvbGUubG9nKHVzZXIubm90ZXMpO1xudXNlci5ub3RlcyA9IFwiaG90aGVhZFwiO1xuc29tZVByb2plY3QudG9kb3MgPSB7dXNlciwgdXNlcjIsIHVzZXIzfTtcblxuXG5cbi8vIGZ1bmN0aW9uIG1ha2VUb2RvKHNvbWVOYW1lKSB7XG4vLyAgICAgbGV0IHNvbWVUb2RvID0gbmV3IFRvZG9zKHNvbWVOYW1lKTtcblxuLy8gICAgIHJldHVybiBzb21lVG9kbztcbi8vIH1cblxuXG5sZXQgdGVzdENsYXNzR3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlc3RDbGFzc1wiKTtcbnRlc3RDbGFzc0dyYmJyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB4ID0+IHtcbiAgICAvLyBwcm9qZWN0c01hbmFnZXIoc29tZVByb2plY3QpO1xufSk7XG5cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGVtcGxhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbi8vICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4vLyAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG5cbi8vICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbi8vICAgICAgICAgdGl0bGU6IHRpdGxlLFxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4vLyAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGVcbi8vICAgICB9O1xuXG4vLyAgICAgY29uc29sZS5sb2coZm9ybURhdGEpO1xuXG4vLyAgICAgc2F2ZUZvcm1EYXRhKGZvcm1EYXRhKTtcbi8vIH0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKS52YWx1ZTtcbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0Jyk7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgcHJvamVjdDogJ3Rlc3QnLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICBub3Rlczogbm90ZXMsXG4gICAgICAgIGNoZWNrbGlzdCA6IGNoZWNrbGlzdFxuICAgIH07XG5cbiAgICBjb25zb2xlLmxvZyhmb3JtRGF0YSk7XG5cbiAgICB0b2Rvc1N0b3Jlcihmb3JtRGF0YSk7XG4gICAgLy8gcHJvamVjdHNTdG9yZXIoc29tZVByb2plY3QpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=