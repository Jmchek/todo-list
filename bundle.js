/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    localStorage.setItem(someProject.title, JSON.stringify(someProject));
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

    constructor(title, description, dueDate, priority, notes, checklist) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
      this.notes = notes;
      this.checklist = checklist;
    }

    //GET
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
localStorage.setItem(someTodo.title, JSON.stringify(someTodo));

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





//example of local storage working, can remove
// localStorage.colorSetting = "#a4509b";

// console.log(localStorage.colorSetting);

// localStorage.colorSetting = "hello there";

// console.log(localStorage.colorSetting);


//testing here
let user = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "foo", "bar", "foo", "bar", "foo");
let user2 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Gumpy", "foo", "bar", "foo", "bar", "foo");
let user3 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Kleetus", "foo", "bar", "foo", "bar", "foo");
let someProject = new _projects_creator_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Barney", "foo", "bar", user);



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
    (0,_projects_manager_js__WEBPACK_IMPORTED_MODULE_3__["default"])(someProject);
});

document.getElementById('formTemplate').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const dueDate = document.getElementById('dueDate').value;

    const formData = {
        title: title,
        description: description,
        dueDate: dueDate
    };

    console.log(formData);

    // saveFormData(formData);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QzZDO0FBQ087QUFDRjs7QUFFbkM7O0FBRWY7QUFDQSx5QkFBeUIsNERBQVE7O0FBRWpDO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNYZTs7QUFFZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0ZlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0R1QztBQUNPO0FBQ0Y7O0FBRTdCOztBQUVmO0FBQ0Esc0JBQXNCLHlEQUFLOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEJlOztBQUVmO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNKZTtBQUNmOztBQUVBOzs7Ozs7VUNIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnVDO0FBQ087QUFDRDtBQUNPOztBQUVwRDtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBLGVBQWUseURBQUs7QUFDcEIsZ0JBQWdCLHlEQUFLO0FBQ3JCLGdCQUFnQix5REFBSztBQUNyQixzQkFBc0IsNERBQVE7Ozs7QUFJOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7OztBQUlyQjtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLGdFQUFlO0FBQ25CLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtcmVtb3Zlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1yZW1vdmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1zdG9yZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcblxuICAgIC8vdGl0bGUsIHByb2dyZXNzLCBhbmQgcHJpb3JpdHlcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJvZ3Jlc3MsIHByaW9yaXR5LCB0b2Rvcykge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH1cblxuICAgIC8vR0VUXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIGdldCBwcm9ncmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xuICAgICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCB0b2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9zO1xuICAgICAgfVxuICAgIFxuICAgIC8vU0VUXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBwcm9ncmVzcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wcm9ncmVzcyA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB0b2Rvcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b2RvcyA9IHZhbHVlO1xuICAgICAgfVxuICBcbiAgfSIsImltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0cy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNSZW1vdmVyIGZyb20gXCIuL3Byb2plY3RzLXJlbW92ZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0c1N0b3JlciBmcm9tIFwiLi9wcm9qZWN0cy1zdG9yZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNNYW5hZ2VyKHNvbWVQcm9qZWN0KSB7XG5cbiAgICAvL3JlY2VpdmVzIGEgXCJwcm9qZWN0c1wiIG9iamVjdCBmcm9tIHVzZXIgdG8gbWFrZSBwcm9qZWN0c1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3RzKHNvbWVQcm9qZWN0LnRpdGxlLCBzb21lUHJvamVjdC5wcm9ncmVzcywgc29tZVByb2plY3QucHJpb3JpdHksIHNvbWVQcm9qZWN0LnRvZG9zKTtcblxuICAgIGNvbnNvbGUubG9nKHNvbWVQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhcInByb2plY3RzIG1hbmFnZXIgaXMgd29ya2luZ1wiKTtcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNSZW1vdmVyKHNvbWVQcm9qZWN0KSB7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzb21lUHJvamVjdC50aXRsZSk7XG4gICAgXG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzU3RvcmVyKHNvbWVQcm9qZWN0KSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc29tZVByb2plY3QudGl0bGUsIEpTT04uc3RyaW5naWZ5KHNvbWVQcm9qZWN0KSk7XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9zIHtcblxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICB0aGlzLm5vdGVzID0gbm90ZXM7XG4gICAgICB0aGlzLmNoZWNrbGlzdCA9IGNoZWNrbGlzdDtcbiAgICB9XG5cbiAgICAvL0dFVFxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0IG5vdGVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25vdGVzO1xuICAgIH1cblxuICAgIGdldCBjaGVja2xpc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2hlY2tsaXN0O1xuICAgIH1cbiAgICBcbiAgICAvL1NFVFxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUodmFsdWUpIHtcbiAgICAgIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IG5vdGVzKHZhbHVlKSB7XG4gICAgICB0aGlzLl9ub3RlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBjaGVja2xpc3QodmFsdWUpIHtcbiAgICAgIHRoaXMuX2NoZWNrbGlzdCA9IHZhbHVlO1xuICAgIH1cbiAgXG4gIH0iLCJpbXBvcnQgVG9kb3MgZnJvbSBcIi4vdG9kb3MtY3JlYXRvci5qc1wiO1xuaW1wb3J0IHRvZG9zUmVtb3ZlciBmcm9tIFwiLi90b2Rvcy1yZW1vdmVyLmpzXCI7XG5pbXBvcnQgdG9kb3NTdG9yZXIgZnJvbSBcIi4vdG9kb3Mtc3RvcmVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zTWFuYWdlcihzb21lVG9kbykge1xuXG4gICAgLy9yZWNlaXZlcyBhIFwidG9kb1wiIG9iamVjdCBmcm9tIHVzZXIgdG8gbWFrZSB0b2Rvc1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG9zKHNvbWVUb2RvLnRpdGxlLCBzb21lVG9kby5kZXNjcmlwdGlvbiwgc29tZVRvZG8uZHVlRGF0ZSwgc29tZVRvZG8ucHJpb3JpdHksIHNvbWVUb2RvLm5vdGVzLCBzb21lVG9kby5jaGVja2xpc3QpO1xuXG4gICAgLy9zdG9yZSBjcmVhdGVkIHRvZG9zIGluIGxvY2FsIHN0b3JhZ2UgdXNpbmcgVG9kb3Mgc3RvcmVyXG4gICAgLy8gdG9kb3NTdG9yZXIobmV3VG9kbyk7XG4gICAgLy8gd2Ugd2lsbCByZWZhY3RvciB0aGlzIHRvIHN0b3JlIHRvZG9zIGluIGEgZXhpc3Rpbmcgb3IgbmV3IHByb2plY3RcblxuICAgIC8vcmVtb3ZlIGEgdG9kb3MgZGF0YSBpbiBsb2NhbCBzdG9yYWdlIHVzaW5nIFRvZG9zIHJlbW92ZXJcbiAgICAvLyBpZiBhIHVzZXIgY2xpY2tzIHJlbW92ZSB0b2RvLCBpbnZva2UgdGhlIGZvbGxvd2luZzpcbiAgICAvLyB0b2Rvc1JlbW92ZXIobmV3VG9kbyk7XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zUmVtb3Zlcihzb21lVG9kbykge1xuXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc29tZVRvZG8udGl0bGUpO1xuICAgIFxuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2Rvc1N0b3Jlcihzb21lVG9kbykge1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oc29tZVRvZG8udGl0bGUsIEpTT04uc3RyaW5naWZ5KHNvbWVUb2RvKSk7XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvcy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgdG9kb3NNYW5hZ2VyIGZyb20gXCIuL3RvZG9zLW1hbmFnZXIuanNcIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0cy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RzLW1hbmFnZXIuanNcIjtcblxuLy9leGFtcGxlIG9mIGxvY2FsIHN0b3JhZ2Ugd29ya2luZywgY2FuIHJlbW92ZVxuLy8gbG9jYWxTdG9yYWdlLmNvbG9yU2V0dGluZyA9IFwiI2E0NTA5YlwiO1xuXG4vLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuY29sb3JTZXR0aW5nKTtcblxuLy8gbG9jYWxTdG9yYWdlLmNvbG9yU2V0dGluZyA9IFwiaGVsbG8gdGhlcmVcIjtcblxuLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmNvbG9yU2V0dGluZyk7XG5cblxuLy90ZXN0aW5nIGhlcmVcbmxldCB1c2VyID0gbmV3IFRvZG9zKFwiQmFybmV5XCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIpO1xubGV0IHVzZXIyID0gbmV3IFRvZG9zKFwiR3VtcHlcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIik7XG5sZXQgdXNlcjMgPSBuZXcgVG9kb3MoXCJLbGVldHVzXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIpO1xubGV0IHNvbWVQcm9qZWN0ID0gbmV3IFByb2plY3RzKFwiQmFybmV5XCIsIFwiZm9vXCIsIFwiYmFyXCIsIHVzZXIpO1xuXG5cblxuLy8gY29uc29sZS5sb2codXNlcik7XG4vLyBjb25zb2xlLmxvZyh0eXBlb2YodXNlcikpO1xuLy8gY29uc29sZS5sb2codXNlci50aXRsZSk7XG4vLyBjb25zb2xlLmxvZyh1c2VyLm5vdGVzKTtcbnVzZXIubm90ZXMgPSBcImhvdGhlYWRcIjtcbnNvbWVQcm9qZWN0LnRvZG9zID0ge3VzZXIsIHVzZXIyLCB1c2VyM307XG5cblxuXG4vLyBmdW5jdGlvbiBtYWtlVG9kbyhzb21lTmFtZSkge1xuLy8gICAgIGxldCBzb21lVG9kbyA9IG5ldyBUb2Rvcyhzb21lTmFtZSk7XG5cbi8vICAgICByZXR1cm4gc29tZVRvZG87XG4vLyB9XG5cblxubGV0IHRlc3RDbGFzc0dyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXN0Q2xhc3NcIik7XG50ZXN0Q2xhc3NHcmJici5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgeCA9PiB7XG4gICAgcHJvamVjdHNNYW5hZ2VyKHNvbWVQcm9qZWN0KTtcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSB7XG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlXG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcblxuICAgIC8vIHNhdmVGb3JtRGF0YShmb3JtRGF0YSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==