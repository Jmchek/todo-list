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
/* harmony import */ var _todos_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-manager.js */ "./src/todos-manager.js");
/* harmony import */ var _todos_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-creator.js */ "./src/todos-creator.js");
/* harmony import */ var _projects_creator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-creator.js */ "./src/projects-creator.js");
/* harmony import */ var _projects_storer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-storer.js */ "./src/projects-storer.js");
/* harmony import */ var _projects_remover_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects-remover.js */ "./src/projects-remover.js");






//example of local storage working, can remove
// localStorage.colorSetting = "#a4509b";

// console.log(localStorage.colorSetting);

// localStorage.colorSetting = "hello there";

// console.log(localStorage.colorSetting);


//testing here
let user = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Barney", "foo", "bar", "foo", "bar", "foo");
let user2 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Gumpy", "foo", "bar", "foo", "bar", "foo");
let user3 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Kleetus", "foo", "bar", "foo", "bar", "foo");
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
    (0,_projects_storer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(someProject);
    console.log(localStorage);
    // projectsRemover(someProject);
    // console.log(localStorage);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1Q2U7O0FBRWY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNGZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdEdUM7QUFDTztBQUNGOztBQUU3Qjs7QUFFZjtBQUNBLHNCQUFzQix5REFBSzs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hCZTs7QUFFZjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjs7QUFFQTs7Ozs7O1VDSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDUDtBQUNNO0FBQ0s7QUFDRTs7QUFFcEQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQSxlQUFlLHlEQUFLO0FBQ3BCLGdCQUFnQix5REFBSztBQUNyQixnQkFBZ0IseURBQUs7QUFDckIsc0JBQXNCLDREQUFROzs7O0FBSTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7Ozs7QUFJckI7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSSwrREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLXJlbW92ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLXN0b3Jlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MtcmVtb3Zlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3Mtc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0cyB7XG5cbiAgICAvL3RpdGxlLCBwcm9ncmVzcywgYW5kIHByaW9yaXR5XG4gICAgY29uc3RydWN0b3IodGl0bGUsIHByb2dyZXNzLCBwcmlvcml0eSwgdG9kb3MpIHtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgIHRoaXMucHJvZ3Jlc3MgPSBwcm9ncmVzcztcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgIHRoaXMudG9kb3MgPSB0b2RvcztcbiAgICB9XG5cbiAgICAvL0dFVFxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBnZXQgcHJvZ3Jlc3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9ncmVzcztcbiAgICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXQgdG9kb3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b2RvcztcbiAgICAgIH1cbiAgICBcbiAgICAvL1NFVFxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgcHJvZ3Jlc3ModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcHJvZ3Jlc3MgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgdG9kb3ModmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdG9kb3MgPSB2YWx1ZTtcbiAgICAgIH1cbiAgXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0c1JlbW92ZXIoc29tZVByb2plY3QpIHtcblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHNvbWVQcm9qZWN0LnRpdGxlKTtcbiAgICBcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNTdG9yZXIoc29tZVByb2plY3QpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lUHJvamVjdC50aXRsZSwgSlNPTi5zdHJpbmdpZnkoc29tZVByb2plY3QpKTtcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNoZWNrbGlzdCkge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xuICAgIH1cblxuICAgIC8vR0VUXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIGdldCBkZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXQgZHVlRGF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xuICAgIH1cblxuICAgIGdldCBwcmlvcml0eSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXQgbm90ZXMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbm90ZXM7XG4gICAgfVxuXG4gICAgZ2V0IGNoZWNrbGlzdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jaGVja2xpc3Q7XG4gICAgfVxuICAgIFxuICAgIC8vU0VUXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgbm90ZXModmFsdWUpIHtcbiAgICAgIHRoaXMuX25vdGVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGNoZWNrbGlzdCh2YWx1ZSkge1xuICAgICAgdGhpcy5fY2hlY2tsaXN0ID0gdmFsdWU7XG4gICAgfVxuICBcbiAgfSIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvcy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgdG9kb3NSZW1vdmVyIGZyb20gXCIuL3RvZG9zLXJlbW92ZXIuanNcIjtcbmltcG9ydCB0b2Rvc1N0b3JlciBmcm9tIFwiLi90b2Rvcy1zdG9yZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NNYW5hZ2VyKHNvbWVUb2RvKSB7XG5cbiAgICAvL3JlY2VpdmVzIGEgXCJ0b2RvXCIgb2JqZWN0IGZyb20gdXNlciB0byBtYWtlIHRvZG9zXG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kb3Moc29tZVRvZG8udGl0bGUsIHNvbWVUb2RvLmRlc2NyaXB0aW9uLCBzb21lVG9kby5kdWVEYXRlLCBzb21lVG9kby5wcmlvcml0eSwgc29tZVRvZG8ubm90ZXMsIHNvbWVUb2RvLmNoZWNrbGlzdCk7XG5cbiAgICAvL3N0b3JlIGNyZWF0ZWQgdG9kb3MgaW4gbG9jYWwgc3RvcmFnZSB1c2luZyBUb2RvcyBzdG9yZXJcbiAgICAvLyB0b2Rvc1N0b3JlcihuZXdUb2RvKTtcbiAgICAvLyB3ZSB3aWxsIHJlZmFjdG9yIHRoaXMgdG8gc3RvcmUgdG9kb3MgaW4gYSBleGlzdGluZyBvciBuZXcgcHJvamVjdFxuXG4gICAgLy9yZW1vdmUgYSB0b2RvcyBkYXRhIGluIGxvY2FsIHN0b3JhZ2UgdXNpbmcgVG9kb3MgcmVtb3ZlclxuICAgIC8vIGlmIGEgdXNlciBjbGlja3MgcmVtb3ZlIHRvZG8sIGludm9rZSB0aGUgZm9sbG93aW5nOlxuICAgIC8vIHRvZG9zUmVtb3ZlcihuZXdUb2RvKTtcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NSZW1vdmVyKHNvbWVUb2RvKSB7XG5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzb21lVG9kby50aXRsZSk7XG4gICAgXG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zU3RvcmVyKHNvbWVUb2RvKSB7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lVG9kby50aXRsZSwgSlNPTi5zdHJpbmdpZnkoc29tZVRvZG8pKTtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRvZG9zTWFuYWdlciBmcm9tIFwiLi90b2Rvcy1tYW5hZ2VyLmpzXCI7XG5pbXBvcnQgVG9kb3MgZnJvbSBcIi4vdG9kb3MtY3JlYXRvci5qc1wiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzLWNyZWF0b3IuanNcIjtcbmltcG9ydCBwcm9qZWN0c1N0b3JlciBmcm9tIFwiLi9wcm9qZWN0cy1zdG9yZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0c1JlbW92ZXIgZnJvbSBcIi4vcHJvamVjdHMtcmVtb3Zlci5qc1wiO1xuXG4vL2V4YW1wbGUgb2YgbG9jYWwgc3RvcmFnZSB3b3JraW5nLCBjYW4gcmVtb3ZlXG4vLyBsb2NhbFN0b3JhZ2UuY29sb3JTZXR0aW5nID0gXCIjYTQ1MDliXCI7XG5cbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5jb2xvclNldHRpbmcpO1xuXG4vLyBsb2NhbFN0b3JhZ2UuY29sb3JTZXR0aW5nID0gXCJoZWxsbyB0aGVyZVwiO1xuXG4vLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuY29sb3JTZXR0aW5nKTtcblxuXG4vL3Rlc3RpbmcgaGVyZVxubGV0IHVzZXIgPSBuZXcgVG9kb3MoXCJCYXJuZXlcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIik7XG5sZXQgdXNlcjIgPSBuZXcgVG9kb3MoXCJHdW1weVwiLCBcImZvb1wiLCBcImJhclwiLCBcImZvb1wiLCBcImJhclwiLCBcImZvb1wiKTtcbmxldCB1c2VyMyA9IG5ldyBUb2RvcyhcIktsZWV0dXNcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIik7XG5sZXQgc29tZVByb2plY3QgPSBuZXcgUHJvamVjdHMoXCJCYXJuZXlcIiwgXCJmb29cIiwgXCJiYXJcIiwgdXNlcik7XG5cblxuXG4vLyBjb25zb2xlLmxvZyh1c2VyKTtcbi8vIGNvbnNvbGUubG9nKHR5cGVvZih1c2VyKSk7XG4vLyBjb25zb2xlLmxvZyh1c2VyLnRpdGxlKTtcbi8vIGNvbnNvbGUubG9nKHVzZXIubm90ZXMpO1xudXNlci5ub3RlcyA9IFwiaG90aGVhZFwiO1xuc29tZVByb2plY3QudG9kb3MgPSB7dXNlciwgdXNlcjIsIHVzZXIzfTtcblxuXG5cbi8vIGZ1bmN0aW9uIG1ha2VUb2RvKHNvbWVOYW1lKSB7XG4vLyAgICAgbGV0IHNvbWVUb2RvID0gbmV3IFRvZG9zKHNvbWVOYW1lKTtcblxuLy8gICAgIHJldHVybiBzb21lVG9kbztcbi8vIH1cblxuXG5sZXQgdGVzdENsYXNzR3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlc3RDbGFzc1wiKTtcbnRlc3RDbGFzc0dyYmJyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB4ID0+IHtcbiAgICBwcm9qZWN0c1N0b3Jlcihzb21lUHJvamVjdCk7XG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgICAvLyBwcm9qZWN0c1JlbW92ZXIoc29tZVByb2plY3QpO1xuICAgIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==