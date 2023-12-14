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
    
    if (JSON.parse(localStorage.getItem(someProject.title))) {
        localStorage.removeItem(someProject.title);
    } else {
        throw console.error("Project not found!");
    } 
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
    if (JSON.parse(localStorage.getItem(someProject.title))){
        throw console.error("Project already exists!");
    } else {
        localStorage.setItem(someProject.title, []);
    }
    
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

    const storedFormData = JSON.parse(localStorage.getItem(someTodo.project)) || [];

    storedFormData.forEach((x, index) => {
        console.log(x.title);
        console.log(someTodo.title);
        if (x.title == someTodo.title) {
            storedFormData.splice(index, 1);
        }
    });

    localStorage.setItem(someTodo.project, JSON.stringify(storedFormData));
    
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
    const storedFormData = JSON.parse(localStorage.getItem(someTodo.project)) || [];

    storedFormData.push(someTodo);

    localStorage.setItem(someTodo.project, JSON.stringify(storedFormData));
}

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
/* harmony import */ var _todos_remover_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todos-remover.js */ "./src/todos-remover.js");
/* harmony import */ var _projects_remover_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects-remover.js */ "./src/projects-remover.js");











//testing here
let user = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "foo", "bar", "foo", "bar", "foo");
let user2 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Gumpy", "foo", "bar", "foo", "bar", "foo");
let user3 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Kleetus", "foo", "bar", "foo", "bar", "foo");
let user4 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("test", "test", "bar", "foo", "bar", "foo");
let someProject = new _projects_creator_js__WEBPACK_IMPORTED_MODULE_2__["default"]("test", "foo", "bar", user);

user.notes = "hothead";
someProject.todos = [user, user2, user3];


let testClassGrbbr = document.querySelector(".testClass");
testClassGrbbr.addEventListener("click", x => {
    // projectsManager(someProject);
});

// console.log(JSON.parse(localStorage.getItem('test'))[2]);
// // localStorage.getItem('test')[2].todos[1] = user3;
// console.log(JSON.parse(localStorage.getItem('test'))[2]._todos);

// JSON.parse(localStorage.getItem('test'))[2]._todos.push('test');

// console.log(JSON.parse(localStorage.getItem('test'))[2]._todos);

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

    // todosStorer(formData);
    // projectsStorer(someProject);

// console.log(localStorage);
// console.log(JSON.parse(localStorage.getItem('test')));
// console.log(JSON.parse(localStorage.getItem('test')).find(x => x.title == 'test' ));

    // let test = JSON.parse(localStorage.getItem('test'));
    
    // for (let i = 0; i < test.length; i++) {
    //     if (test[i] == 'hello pls work') {
    //         test.splice(i, 1);
    //     }
    // }
    
    // localStorage.setItem('test', JSON.stringify(test));

    // for (let i in localStorage.getItem('test')) {
    //     i++
    //     for (let j in localStorage.getItem('test')[i].models) {
    //       x += myObj.cars[i].models[j];
    //     }
    //   }
});

(0,_projects_storer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(someProject);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELCtEQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0tc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1yZW1vdmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1zdG9yZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLXJlbW92ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLXN0b3Jlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByb2plY3RzU3RvcmVyIGZyb20gXCIuL3Byb2plY3RzLXN0b3JlclwiO1xuaW1wb3J0IHRvZG9zU3RvcmVyIGZyb20gXCIuL3RvZG9zLXN0b3JlclwiO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKS52YWx1ZTtcbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0JykudmFsdWU7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgICAgbm90ZXM6IG5vdGVzLFxuICAgICAgICBjaGVja2xpc3QgOiBjaGVja2xpc3RcbiAgICB9O1xuXG4gICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2F2ZUZvcm1EYXRhIGlzIHdvcmtpbmdcIik7XG5cbiAgICAvLyBpZiBpdCdzIGEgdG9kbyBMT0dJQyBIRVJFXG4gICAgLy8gdG9kb3NTdG9yZXIoZm9ybURhdGEpO1xuICAgIC8vIGVsc2UgaWYgaXQncyBhIHByb2plY3RcbiAgICAvL3Byb2plY3RzU3RvcmVyKGZvcm1EYXRhKTtcbn0pO1xuXG4vLyBmdW5jdGlvbiBzYXZlRm9ybURhdGEoZm9ybURhdGEpIHtcbi8vICAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1EYXRhJykpIHx8IFtdO1xuXG4vLyAgICAgc3RvcmVkRm9ybURhdGEucHVzaChmb3JtRGF0YSk7XG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybURhdGEnLCBKU09OLnN0cmluZ2lmeShzdG9yZWRGb3JtRGF0YSkpO1xuLy8gfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcblxuICAgIC8vdGl0bGUsIHByb2dyZXNzLCBhbmQgcHJpb3JpdHlcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJvZ3Jlc3MsIHByaW9yaXR5LCB0b2Rvcykge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH1cblxuICAgIC8vR0VUXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIGdldCBwcm9ncmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xuICAgICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCB0b2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9zO1xuICAgICAgfVxuICAgIFxuICAgIC8vU0VUXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBwcm9ncmVzcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wcm9ncmVzcyA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB0b2Rvcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b2RvcyA9IHZhbHVlO1xuICAgICAgfVxuICBcbiAgfSIsImltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0cy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNSZW1vdmVyIGZyb20gXCIuL3Byb2plY3RzLXJlbW92ZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0c1N0b3JlciBmcm9tIFwiLi9wcm9qZWN0cy1zdG9yZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNNYW5hZ2VyKHNvbWVQcm9qZWN0KSB7XG5cbiAgICAvL3JlY2VpdmVzIGEgXCJwcm9qZWN0c1wiIG9iamVjdCBmcm9tIHVzZXIgdG8gbWFrZSBwcm9qZWN0c1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3RzKHNvbWVQcm9qZWN0LnRpdGxlLCBzb21lUHJvamVjdC5wcm9ncmVzcywgc29tZVByb2plY3QucHJpb3JpdHksIHNvbWVQcm9qZWN0LnRvZG9zKTtcblxuICAgIGNvbnNvbGUubG9nKHNvbWVQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhcInByb2plY3RzIG1hbmFnZXIgaXMgd29ya2luZ1wiKTtcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNSZW1vdmVyKHNvbWVQcm9qZWN0KSB7XG4gICAgXG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVByb2plY3QudGl0bGUpKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzb21lUHJvamVjdC50aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcihcIlByb2plY3Qgbm90IGZvdW5kIVwiKTtcbiAgICB9IFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzU3RvcmVyKHNvbWVQcm9qZWN0KSB7XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVByb2plY3QudGl0bGUpKSl7XG4gICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoXCJQcm9qZWN0IGFscmVhZHkgZXhpc3RzIVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lUHJvamVjdC50aXRsZSwgW10pO1xuICAgIH1cbiAgICBcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuXG4gICAgY29uc3RydWN0b3IocHJvamVjdCx0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2tsaXN0KSB7XG4gICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xuICAgIH1cblxuICAgIC8vR0VUXG4gICAgZ2V0IHByb2plY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCBub3RlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ub3RlcztcbiAgICB9XG5cbiAgICBnZXQgY2hlY2tsaXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrbGlzdDtcbiAgICB9XG4gICAgXG4gICAgLy9TRVRcbiAgICBzZXQgcHJvamVjdCh2YWx1ZSkge1xuICAgICAgdGhpcy5fcHJvamVjdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUodmFsdWUpIHtcbiAgICAgIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IG5vdGVzKHZhbHVlKSB7XG4gICAgICB0aGlzLl9ub3RlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBjaGVja2xpc3QodmFsdWUpIHtcbiAgICAgIHRoaXMuX2NoZWNrbGlzdCA9IHZhbHVlO1xuICAgIH1cbiAgXG4gIH0iLCJpbXBvcnQgVG9kb3MgZnJvbSBcIi4vdG9kb3MtY3JlYXRvci5qc1wiO1xuaW1wb3J0IHRvZG9zUmVtb3ZlciBmcm9tIFwiLi90b2Rvcy1yZW1vdmVyLmpzXCI7XG5pbXBvcnQgdG9kb3NTdG9yZXIgZnJvbSBcIi4vdG9kb3Mtc3RvcmVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zTWFuYWdlcihzb21lVG9kbykge1xuXG4gICAgLy9yZWNlaXZlcyBhIFwidG9kb1wiIG9iamVjdCBmcm9tIHVzZXIgdG8gbWFrZSB0b2Rvc1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG9zKHNvbWVUb2RvLnRpdGxlLCBzb21lVG9kby5kZXNjcmlwdGlvbiwgc29tZVRvZG8uZHVlRGF0ZSwgc29tZVRvZG8ucHJpb3JpdHksIHNvbWVUb2RvLm5vdGVzLCBzb21lVG9kby5jaGVja2xpc3QpO1xuXG4gICAgLy9zdG9yZSBjcmVhdGVkIHRvZG9zIGluIGxvY2FsIHN0b3JhZ2UgdXNpbmcgVG9kb3Mgc3RvcmVyXG4gICAgLy8gdG9kb3NTdG9yZXIobmV3VG9kbyk7XG4gICAgLy8gd2Ugd2lsbCByZWZhY3RvciB0aGlzIHRvIHN0b3JlIHRvZG9zIGluIGEgZXhpc3Rpbmcgb3IgbmV3IHByb2plY3RcblxuICAgIC8vcmVtb3ZlIGEgdG9kb3MgZGF0YSBpbiBsb2NhbCBzdG9yYWdlIHVzaW5nIFRvZG9zIHJlbW92ZXJcbiAgICAvLyBpZiBhIHVzZXIgY2xpY2tzIHJlbW92ZSB0b2RvLCBpbnZva2UgdGhlIGZvbGxvd2luZzpcbiAgICAvLyB0b2Rvc1JlbW92ZXIobmV3VG9kbyk7XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zUmVtb3Zlcihzb21lVG9kbykge1xuXG4gICAgY29uc3Qgc3RvcmVkRm9ybURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvbWVUb2RvLnByb2plY3QpKSB8fCBbXTtcblxuICAgIHN0b3JlZEZvcm1EYXRhLmZvckVhY2goKHgsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHgudGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhzb21lVG9kby50aXRsZSk7XG4gICAgICAgIGlmICh4LnRpdGxlID09IHNvbWVUb2RvLnRpdGxlKSB7XG4gICAgICAgICAgICBzdG9yZWRGb3JtRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lVG9kby5wcm9qZWN0LCBKU09OLnN0cmluZ2lmeShzdG9yZWRGb3JtRGF0YSkpO1xuICAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zU3RvcmVyKHNvbWVUb2RvKSB7XG4gICAgY29uc3Qgc3RvcmVkRm9ybURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvbWVUb2RvLnByb2plY3QpKSB8fCBbXTtcblxuICAgIHN0b3JlZEZvcm1EYXRhLnB1c2goc29tZVRvZG8pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc29tZVRvZG8ucHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkRm9ybURhdGEpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvcy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgdG9kb3NNYW5hZ2VyIGZyb20gXCIuL3RvZG9zLW1hbmFnZXIuanNcIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0cy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RzLW1hbmFnZXIuanNcIjtcblxuaW1wb3J0IHNhdmVGb3JtRGF0YSBmcm9tIFwiLi9mb3JtLXN0b3Jlci5qc1wiO1xuaW1wb3J0IHRvZG9zU3RvcmVyIGZyb20gXCIuL3RvZG9zLXN0b3Jlci5qc1wiO1xuaW1wb3J0IHByb2plY3RzU3RvcmVyIGZyb20gXCIuL3Byb2plY3RzLXN0b3Jlci5qc1wiO1xuaW1wb3J0IHRvZG9zUmVtb3ZlciBmcm9tIFwiLi90b2Rvcy1yZW1vdmVyLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNSZW1vdmVyIGZyb20gXCIuL3Byb2plY3RzLXJlbW92ZXIuanNcIjtcblxuLy90ZXN0aW5nIGhlcmVcbmxldCB1c2VyID0gbmV3IFRvZG9zKFwiQmFybmV5XCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIpO1xubGV0IHVzZXIyID0gbmV3IFRvZG9zKFwiR3VtcHlcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIik7XG5sZXQgdXNlcjMgPSBuZXcgVG9kb3MoXCJLbGVldHVzXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIpO1xubGV0IHVzZXI0ID0gbmV3IFRvZG9zKFwidGVzdFwiLCBcInRlc3RcIiwgXCJiYXJcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIik7XG5sZXQgc29tZVByb2plY3QgPSBuZXcgUHJvamVjdHMoXCJ0ZXN0XCIsIFwiZm9vXCIsIFwiYmFyXCIsIHVzZXIpO1xuXG51c2VyLm5vdGVzID0gXCJob3RoZWFkXCI7XG5zb21lUHJvamVjdC50b2RvcyA9IFt1c2VyLCB1c2VyMiwgdXNlcjNdO1xuXG5cbmxldCB0ZXN0Q2xhc3NHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVzdENsYXNzXCIpO1xudGVzdENsYXNzR3JiYnIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHggPT4ge1xuICAgIC8vIHByb2plY3RzTWFuYWdlcihzb21lUHJvamVjdCk7XG59KTtcblxuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKVsyXSk7XG4vLyAvLyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpWzJdLnRvZG9zWzFdID0gdXNlcjM7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpWzJdLl90b2Rvcyk7XG5cbi8vIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSlbMl0uX3RvZG9zLnB1c2goJ3Rlc3QnKTtcblxuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKVsyXS5fdG9kb3MpO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKS52YWx1ZTtcbiAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0Jyk7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICAgICAgcHJvamVjdDogJ3Rlc3QnLFxuICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbiAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuICAgICAgICBub3Rlczogbm90ZXMsXG4gICAgICAgIGNoZWNrbGlzdCA6IGNoZWNrbGlzdFxuICAgIH07XG5cbiAgICAvLyB0b2Rvc1N0b3Jlcihmb3JtRGF0YSk7XG4gICAgLy8gcHJvamVjdHNTdG9yZXIoc29tZVByb2plY3QpO1xuXG4vLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKSk7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpLmZpbmQoeCA9PiB4LnRpdGxlID09ICd0ZXN0JyApKTtcblxuICAgIC8vIGxldCB0ZXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKTtcbiAgICBcbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3QubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgaWYgKHRlc3RbaV0gPT0gJ2hlbGxvIHBscyB3b3JrJykge1xuICAgIC8vICAgICAgICAgdGVzdC5zcGxpY2UoaSwgMSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgXG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3QnLCBKU09OLnN0cmluZ2lmeSh0ZXN0KSk7XG5cbiAgICAvLyBmb3IgKGxldCBpIGluIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpIHtcbiAgICAvLyAgICAgaSsrXG4gICAgLy8gICAgIGZvciAobGV0IGogaW4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKVtpXS5tb2RlbHMpIHtcbiAgICAvLyAgICAgICB4ICs9IG15T2JqLmNhcnNbaV0ubW9kZWxzW2pdO1xuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG59KTtcblxucHJvamVjdHNTdG9yZXIoc29tZVByb2plY3QpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9