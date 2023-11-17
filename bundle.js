/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


//example of local storage working, can remove
// localStorage.colorSetting = "#a4509b";

// console.log(localStorage.colorSetting);

// localStorage.colorSetting = "hello there";

// console.log(localStorage.colorSetting);


//testing here
let user = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Barney", "foo", "bar", "foo", "bar", "foo");



// console.log(user);
// console.log(typeof(user));
// console.log(user.title);
// console.log(user.notes);
user.notes = "hothead";



// function makeTodo(someName) {
//     let someTodo = new Todos(someName);

//     return someTodo;
// }


let testClassGrbbr = document.querySelector(".testClass");
testClassGrbbr.addEventListener("click", x => {
    (0,_todos_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"])(user);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RHVDO0FBQ087QUFDRjs7QUFFN0I7O0FBRWY7QUFDQSxzQkFBc0IseURBQUs7O0FBRTNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoQmU7O0FBRWY7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ0plO0FBQ2Y7O0FBRUE7Ozs7OztVQ0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQ1A7QUFDdkM7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQSxlQUFlLHlEQUFLOzs7O0FBSXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLDZEQUFZO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MtcmVtb3Zlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3Mtc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvcyB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2tsaXN0KSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgfVxuXG4gICAgLy9HRVRcbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCBub3RlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ub3RlcztcbiAgICB9XG5cbiAgICBnZXQgY2hlY2tsaXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrbGlzdDtcbiAgICB9XG4gICAgXG4gICAgLy9TRVRcbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGRlc2NyaXB0aW9uKHZhbHVlKSB7XG4gICAgICB0aGlzLl9kZXNjcmlwdGlvbiA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBkdWVEYXRlKHZhbHVlKSB7XG4gICAgICB0aGlzLl9kdWVEYXRlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBub3Rlcyh2YWx1ZSkge1xuICAgICAgdGhpcy5fbm90ZXMgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgY2hlY2tsaXN0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9jaGVja2xpc3QgPSB2YWx1ZTtcbiAgICB9XG4gIFxuICB9IiwiaW1wb3J0IFRvZG9zIGZyb20gXCIuL3RvZG9zLWNyZWF0b3IuanNcIjtcbmltcG9ydCB0b2Rvc1JlbW92ZXIgZnJvbSBcIi4vdG9kb3MtcmVtb3Zlci5qc1wiO1xuaW1wb3J0IHRvZG9zU3RvcmVyIGZyb20gXCIuL3RvZG9zLXN0b3Jlci5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2Rvc01hbmFnZXIoc29tZVRvZG8pIHtcblxuICAgIC8vcmVjZWl2ZXMgYSBcInRvZG9cIiBvYmplY3QgZnJvbSB1c2VyIHRvIG1ha2UgdG9kb3NcbiAgICBsZXQgbmV3VG9kbyA9IG5ldyBUb2Rvcyhzb21lVG9kby50aXRsZSwgc29tZVRvZG8uZGVzY3JpcHRpb24sIHNvbWVUb2RvLmR1ZURhdGUsIHNvbWVUb2RvLnByaW9yaXR5LCBzb21lVG9kby5ub3Rlcywgc29tZVRvZG8uY2hlY2tsaXN0KTtcblxuICAgIC8vc3RvcmUgY3JlYXRlZCB0b2RvcyBpbiBsb2NhbCBzdG9yYWdlIHVzaW5nIFRvZG9zIHN0b3JlclxuICAgIC8vIHRvZG9zU3RvcmVyKG5ld1RvZG8pO1xuICAgIC8vIHdlIHdpbGwgcmVmYWN0b3IgdGhpcyB0byBzdG9yZSB0b2RvcyBpbiBhIGV4aXN0aW5nIG9yIG5ldyBwcm9qZWN0XG5cbiAgICAvL3JlbW92ZSBhIHRvZG9zIGRhdGEgaW4gbG9jYWwgc3RvcmFnZSB1c2luZyBUb2RvcyByZW1vdmVyXG4gICAgLy8gaWYgYSB1c2VyIGNsaWNrcyByZW1vdmUgdG9kbywgaW52b2tlIHRoZSBmb2xsb3dpbmc6XG4gICAgLy8gdG9kb3NSZW1vdmVyKG5ld1RvZG8pO1xuICAgIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2Rvc1JlbW92ZXIoc29tZVRvZG8pIHtcblxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHNvbWVUb2RvLnRpdGxlKTtcbiAgICBcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NTdG9yZXIoc29tZVRvZG8pIHtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvbWVUb2RvLnRpdGxlLCBKU09OLnN0cmluZ2lmeShzb21lVG9kbykpO1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdG9kb3NNYW5hZ2VyIGZyb20gXCIuL3RvZG9zLW1hbmFnZXIuanNcIjtcbmltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvcy1jcmVhdG9yLmpzXCI7XG4vL2V4YW1wbGUgb2YgbG9jYWwgc3RvcmFnZSB3b3JraW5nLCBjYW4gcmVtb3ZlXG4vLyBsb2NhbFN0b3JhZ2UuY29sb3JTZXR0aW5nID0gXCIjYTQ1MDliXCI7XG5cbi8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5jb2xvclNldHRpbmcpO1xuXG4vLyBsb2NhbFN0b3JhZ2UuY29sb3JTZXR0aW5nID0gXCJoZWxsbyB0aGVyZVwiO1xuXG4vLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuY29sb3JTZXR0aW5nKTtcblxuXG4vL3Rlc3RpbmcgaGVyZVxubGV0IHVzZXIgPSBuZXcgVG9kb3MoXCJCYXJuZXlcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIik7XG5cblxuXG4vLyBjb25zb2xlLmxvZyh1c2VyKTtcbi8vIGNvbnNvbGUubG9nKHR5cGVvZih1c2VyKSk7XG4vLyBjb25zb2xlLmxvZyh1c2VyLnRpdGxlKTtcbi8vIGNvbnNvbGUubG9nKHVzZXIubm90ZXMpO1xudXNlci5ub3RlcyA9IFwiaG90aGVhZFwiO1xuXG5cblxuLy8gZnVuY3Rpb24gbWFrZVRvZG8oc29tZU5hbWUpIHtcbi8vICAgICBsZXQgc29tZVRvZG8gPSBuZXcgVG9kb3Moc29tZU5hbWUpO1xuXG4vLyAgICAgcmV0dXJuIHNvbWVUb2RvO1xuLy8gfVxuXG5cbmxldCB0ZXN0Q2xhc3NHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVzdENsYXNzXCIpO1xudGVzdENsYXNzR3JiYnIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHggPT4ge1xuICAgIHRvZG9zTWFuYWdlcih1c2VyKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9