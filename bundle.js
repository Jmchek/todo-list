/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/todo-list.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/todo-list.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/del-button.svg */ "./src/del-button.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../src/edit-button.svg */ "./src/edit-button.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
  font-family: Arial, Helvetica, sans-serif;
}

p {
  margin: 0;
  display: grid;
  justify-items: end;
  align-items: center;
  font-size: 1.1rem;
}

ul {
  margin: 0;
  padding: 0;
}

ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 1.1rem;
  transition: 0.2s;
  list-style: none;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

form {
  position: relative;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  padding: 1em;
  box-sizing: border-box;
  background: #fff;

  /* we create our grid */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2em 1fr 2em 2em 1fr 3em 1fr 2em;
}

label {
  display: grid;
  justify-items: end;
  align-items: center;
  font-size: 1.1rem;
}

output {
  display: flex;
  justify-content: center;
  align-items: center;
}

textarea {
  padding-left: 10px;
  padding-top: 10px;

  min-height: 50px;
}

.add-btn-div-form {
  position: absolute;
  justify-self: center;
  align-self: center;

  height: 600px;
  width: 500px;

  grid-template-columns: 90% 10%;
  grid-template-rows: 50px 1fr;
  
  display: grid;
}

.add-btn-div-form-header {
  background-color: #f9f9f9;
  padding: 15px;
  margin: 0;
}

.add-btn-div-form-btn {
  justify-self: end;
  align-self: start;
  cursor: pointer;
  height: 100%;
  width: 100%;
  background-color: #f44336;
}

.add-proj-btn-div-form {
  position: absolute;
  justify-self: center;
  align-self: center;

  height: 600px;
  width: 500px;

  grid-template-columns: 90% 10%;
  grid-template-rows: 50px 1fr;
  
  display: grid;
}

.disp-title {
  margin: 0;
  padding: 20px;
}

.newEleSpan {
  padding: 10px;
  width: 90%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.newEleSpan:hover {
  background-color: #bbb;
}

.projFormTemplate{
  position: relative;
  width: 500px;
  height: 200px;
  margin: 0 auto;
  padding: 1em;
  box-sizing: border-box;
  background: #fff;

  /* we create our grid */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 30px 50px;
  align-content: center;
}

.card-container {
  display: grid;
  padding: 10px;
  border-radius: 4px;
  grid-template-rows: 1fr 10%;
  gap: 0px;
  height: 100%;

  background-color: #e0e0e0;
}

.card-container-add-proj {
  display: grid;
  padding: 10px;
  border-radius: 4px;

  background-color: #e0e0e0;
}

.checklistInputContainer {
  display: grid;
  grid-template-columns: 3fr 1fr;
}

.del-btn-todos-li {

  display: grid;
  
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: contain;
  background-repeat: no-repeat;
}

.del-btn-todos-li:hover {

  display: grid;

  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #f44336;
  cursor: pointer;
}

.description {
  font-size: 1.1rem;
}

.dueDate {
  border: 1px solid black;
  border-radius: 4px;
}

.edit-btn-div-form {
  position: absolute;
  justify-self: center;
  align-self: center;

  height: 600px;
  width: 500px;

  grid-template-columns: 90% 10%;
  grid-template-rows: 50px 1fr;
  
  display: grid;
}

.edit-btn-div-form-btn {
  justify-self: end;
  align-self: start;
  cursor: pointer;
  height: 100%;
  width: 100%;
  background-color: #f44336;
}

.edit-btn-div-form-header {
  background-color: #f9f9f9;
  padding: 15px;
  margin: 0;
}

.edit-btn-todos-li {

  display: grid;

  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: contain;
  background-repeat: no-repeat;
}

.edit-btn-todos-li:hover {
  display: grid;

  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: contain;
  background-repeat: no-repeat;
  background-color: rgb(221, 221, 107);
  cursor: pointer;
}

.expanded-view {
  display: grid;
  justify-items: start;
  background-color: rgb(255, 255, 255);
  width: 350px;
  height: 350px;
  border: 1px solid black;
  align-content: space-evenly;
  justify-content: space-evenly;

  z-index:1;
  position: absolute;
}

.expanded-view-paras {
  border-bottom: 1px solid black;
}

.expanded-view:hover {
  cursor: pointer;
}

.hidden {
  white-space: nowrap; 
  width: 250px; 
  overflow: hidden;
  text-overflow: ellipsis; 
}

.notes {
  font-size: 1.1rem;
}

.priorityContainer {
  display: grid;
  grid-template-columns: 80% 10%;
  grid-template-rows: 1em;
  align-content: center;
  justify-content: space-between;
}

.priorityContainer > .priority {
  padding: 0;
}

.proj-button-add:hover {
  background-color:#99df7e;
  cursor: pointer;
}

.proj-button-delete {
  border: 1px solid black;
}

.proj-button-delete:hover {
  background-color: #f44336;
  cursor: pointer;
}

.project-card {
  display: grid;
  grid-template-rows: 10% 1fr 10%;
  height: 100%;
}

.project-title {
  margin: 0;
  justify-self: center;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  padding: 10px;
  border-radius: 4px;

  margin: 1%;
  width:  clamp(1650px, 50vw, 1337px);
  height: 75vh;
  background-color: #b9b7b7;
}

.projects-display {
  display: grid;
  height: 100%;
  align-content: space-between;
  min-height: 100%;
}

.projects-display-ul {
  display: grid;
  gap: 0px;
  overflow: auto;
}

.submitBtn {
  grid-column-end: 3;

  width: 100%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

.submitBtn:hover {
  background-color: #bbb;
}

.title {
  border: 1px solid black;
  border-radius: 2px;
}

.todo-btn-add {
  border: 1px solid black;
}

.todo-btn-add:hover {
  background-color:#99df7e;
  cursor: pointer;
}

.todos-li {
  display: grid;
  grid-template-columns: 1fr 20% 20%;
  align-items: center;
  height: 50px;
  min-height: 0;
}

.todos-li > input {
  padding: 13px;
}

.ulChecklist {
  display: grid;
  grid-column-end: 3;

  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.ulCLInput {
  border: 1px solid black;
  border-radius: 4px;
}

.value {
  border: 1px solid black;
  border-radius: 4px;
  padding: 1px;
  font-size: 0.9rem;
}

ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}

/* Style the close button */
.close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 12px 16px 12px 16px;
}

.close:hover {
  background-color: #f44336;
  color: white;
}

/* Style the input */
input {
  margin: 0;
  border: none;
  border-radius: 0;
  padding: 10px;
  float: left;
  font-size: 1.1rem;
}`, "",{"version":3,"sources":["webpack://./src/todo-list.css"],"names":[],"mappings":"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","sourcesContent":["*{\n  font-family: Arial, Helvetica, sans-serif;\n}\n\np {\n  margin: 0;\n  display: grid;\n  justify-items: end;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nul li {\n  cursor: pointer;\n  position: relative;\n  padding: 12px 8px 12px 40px;\n  background: #eee;\n  font-size: 1.1rem;\n  transition: 0.2s;\n  list-style: none;\n\n  /* make the list items unselectable */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nform {\n  position: relative;\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  padding: 1em;\n  box-sizing: border-box;\n  background: #fff;\n\n  /* we create our grid */\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 2em 1fr 2em 2em 1fr 3em 1fr 2em;\n}\n\nlabel {\n  display: grid;\n  justify-items: end;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\noutput {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  padding-left: 10px;\n  padding-top: 10px;\n\n  min-height: 50px;\n}\n\n.add-btn-div-form {\n  position: absolute;\n  justify-self: center;\n  align-self: center;\n\n  height: 600px;\n  width: 500px;\n\n  grid-template-columns: 90% 10%;\n  grid-template-rows: 50px 1fr;\n  \n  display: grid;\n}\n\n.add-btn-div-form-header {\n  background-color: #f9f9f9;\n  padding: 15px;\n  margin: 0;\n}\n\n.add-btn-div-form-btn {\n  justify-self: end;\n  align-self: start;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  background-color: #f44336;\n}\n\n.add-proj-btn-div-form {\n  position: absolute;\n  justify-self: center;\n  align-self: center;\n\n  height: 600px;\n  width: 500px;\n\n  grid-template-columns: 90% 10%;\n  grid-template-rows: 50px 1fr;\n  \n  display: grid;\n}\n\n.disp-title {\n  margin: 0;\n  padding: 20px;\n}\n\n.newEleSpan {\n  padding: 10px;\n  width: 90%;\n  background: #d9d9d9;\n  color: #555;\n  float: left;\n  text-align: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: 0.3s;\n  border-radius: 0;\n}\n\n.newEleSpan:hover {\n  background-color: #bbb;\n}\n\n.projFormTemplate{\n  position: relative;\n  width: 500px;\n  height: 200px;\n  margin: 0 auto;\n  padding: 1em;\n  box-sizing: border-box;\n  background: #fff;\n\n  /* we create our grid */\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 30px 50px;\n  align-content: center;\n}\n\n.card-container {\n  display: grid;\n  padding: 10px;\n  border-radius: 4px;\n  grid-template-rows: 1fr 10%;\n  gap: 0px;\n  height: 100%;\n\n  background-color: #e0e0e0;\n}\n\n.card-container-add-proj {\n  display: grid;\n  padding: 10px;\n  border-radius: 4px;\n\n  background-color: #e0e0e0;\n}\n\n.checklistInputContainer {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n\n.del-btn-todos-li {\n\n  display: grid;\n  \n  background-image: url('/src/del-button.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.del-btn-todos-li:hover {\n\n  display: grid;\n\n  background-image: url('/src/del-button.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: #f44336;\n  cursor: pointer;\n}\n\n.description {\n  font-size: 1.1rem;\n}\n\n.dueDate {\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n.edit-btn-div-form {\n  position: absolute;\n  justify-self: center;\n  align-self: center;\n\n  height: 600px;\n  width: 500px;\n\n  grid-template-columns: 90% 10%;\n  grid-template-rows: 50px 1fr;\n  \n  display: grid;\n}\n\n.edit-btn-div-form-btn {\n  justify-self: end;\n  align-self: start;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  background-color: #f44336;\n}\n\n.edit-btn-div-form-header {\n  background-color: #f9f9f9;\n  padding: 15px;\n  margin: 0;\n}\n\n.edit-btn-todos-li {\n\n  display: grid;\n\n  background-image: url('/src/edit-button.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.edit-btn-todos-li:hover {\n  display: grid;\n\n  background-image: url('/src/edit-button.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: rgb(221, 221, 107);\n  cursor: pointer;\n}\n\n.expanded-view {\n  display: grid;\n  justify-items: start;\n  background-color: rgb(255, 255, 255);\n  width: 350px;\n  height: 350px;\n  border: 1px solid black;\n  align-content: space-evenly;\n  justify-content: space-evenly;\n\n  z-index:1;\n  position: absolute;\n}\n\n.expanded-view-paras {\n  border-bottom: 1px solid black;\n}\n\n.expanded-view:hover {\n  cursor: pointer;\n}\n\n.hidden {\n  white-space: nowrap; \n  width: 250px; \n  overflow: hidden;\n  text-overflow: ellipsis; \n}\n\n.notes {\n  font-size: 1.1rem;\n}\n\n.priorityContainer {\n  display: grid;\n  grid-template-columns: 80% 10%;\n  grid-template-rows: 1em;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.priorityContainer > .priority {\n  padding: 0;\n}\n\n.proj-button-add:hover {\n  background-color:#99df7e;\n  cursor: pointer;\n}\n\n.proj-button-delete {\n  border: 1px solid black;\n}\n\n.proj-button-delete:hover {\n  background-color: #f44336;\n  cursor: pointer;\n}\n\n.project-card {\n  display: grid;\n  grid-template-rows: 10% 1fr 10%;\n  height: 100%;\n}\n\n.project-title {\n  margin: 0;\n  justify-self: center;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n  padding: 10px;\n  border-radius: 4px;\n\n  margin: 1%;\n  width:  clamp(1650px, 50vw, 1337px);\n  height: 75vh;\n  background-color: #b9b7b7;\n}\n\n.projects-display {\n  display: grid;\n  height: 100%;\n  align-content: space-between;\n  min-height: 100%;\n}\n\n.projects-display-ul {\n  display: grid;\n  gap: 0px;\n  overflow: auto;\n}\n\n.submitBtn {\n  grid-column-end: 3;\n\n  width: 100%;\n  background: #d9d9d9;\n  color: #555;\n  float: left;\n  text-align: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: 0.3s;\n  border-radius: 0;\n}\n\n.submitBtn:hover {\n  background-color: #bbb;\n}\n\n.title {\n  border: 1px solid black;\n  border-radius: 2px;\n}\n\n.todo-btn-add {\n  border: 1px solid black;\n}\n\n.todo-btn-add:hover {\n  background-color:#99df7e;\n  cursor: pointer;\n}\n\n.todos-li {\n  display: grid;\n  grid-template-columns: 1fr 20% 20%;\n  align-items: center;\n  height: 50px;\n  min-height: 0;\n}\n\n.todos-li > input {\n  padding: 13px;\n}\n\n.ulChecklist {\n  display: grid;\n  grid-column-end: 3;\n\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}\n\n.ulCLInput {\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n.value {\n  border: 1px solid black;\n  border-radius: 4px;\n  padding: 1px;\n  font-size: 0.9rem;\n}\n\nul li:nth-child(odd) {\n  background: #f9f9f9;\n}\n\n/* Darker background-color on hover */\nul li:hover {\n  background: #ddd;\n}\n\n/* When clicked on, add a background color and strike out text */\nul li.checked {\n  background: #888;\n  color: #fff;\n  text-decoration: line-through;\n}\n\n/* Add a \"checked\" mark when clicked on */\nul li.checked::before {\n  content: '';\n  position: absolute;\n  border-color: #fff;\n  border-style: solid;\n  border-width: 0 2px 2px 0;\n  top: 10px;\n  left: 16px;\n  transform: rotate(45deg);\n  height: 15px;\n  width: 7px;\n}\n\n/* Style the close button */\n.close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 12px 16px 12px 16px;\n}\n\n.close:hover {\n  background-color: #f44336;\n  color: white;\n}\n\n/* Style the input */\ninput {\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  padding: 10px;\n  float: left;\n  font-size: 1.1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/todo-list.css":
/*!***************************!*\
  !*** ./src/todo-list.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_todo_list_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./todo-list.css */ "./node_modules/css-loader/dist/cjs.js!./src/todo-list.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_todo_list_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/form-module.js":
/*!****************************!*\
  !*** ./src/form-module.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formMaker)
/* harmony export */ });
/* harmony import */ var _todos_storer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos-storer.js */ "./src/todos-storer.js");
/* harmony import */ var _todos_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-creator.js */ "./src/todos-creator.js");
/* harmony import */ var _project_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-module.js */ "./src/project-module.js");




function formMaker(anchor, todo, ogTodos, keyForUpdating) {
  let arrForStor = [];
  
  const bodyGrbbr = anchor;

  if(anchor, todo, ogTodos, keyForUpdating) {
    //FORM FOR EDITING existing todo (EDIT BUTTON)

    bodyGrbbr.appendChild(document.createElement('form')).setAttribute('class', 'formTemplate');

    const formAnchorGrbbr = document.querySelector('.formTemplate');
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'title');
    document.querySelector('.title').setAttribute('type', 'text');
    document.querySelector('[for="title"]').innerText = "Title: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'description');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'description');
    document.querySelector('[for="description"]').innerText = "Description: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'dueDate');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'dueDate');
    document.querySelector('.dueDate').setAttribute('type', 'date');
    document.querySelector('[for="dueDate"]').innerText = "Due Date: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'priority');
  
    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'priorityContainer');
    document.querySelector('.priorityContainer').appendChild(document.createElement('input')).setAttribute('class', 'priority');
    document.querySelector('.priorityContainer').appendChild(document.createElement('output')).setAttribute('class', 'value');
    document.querySelector(".priority").setAttribute('value', '50');
    
    const value = document.querySelector(".value");
    const input = document.querySelector(".priority");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    });
  
    
    document.querySelector('.priority').setAttribute('type', 'range');
    document.querySelector('.priority').setAttribute('min', '0');
    document.querySelector('.priority').setAttribute('max', '100');
    document.querySelector('.priority').setAttribute('step', '1');
    document.querySelector('[for="priority"]').innerText = "Priority: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'notes');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'notes');
    document.querySelector('[for="notes"]').innerText = "Notes: ";
  
    //checklist
    formAnchorGrbbr.appendChild(document.createElement('p')).innerText = "Checklist:";
    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'checklistInputContainer');
    
  
  
    document.querySelector('.checklistInputContainer').appendChild(document.createElement('input')).setAttribute('class', 'ulCLInput');
    document.querySelector('.ulCLInput').setAttribute('type', 'text');
    document.querySelector('.ulCLInput').setAttribute('placeholder', 'Write here...');
  
    document.querySelector('.checklistInputContainer').appendChild(document.createElement('span')).setAttribute('class', 'newEleSpan');
    document.querySelector('.newEleSpan').classList.add('addBtn');
    document.querySelector('.newEleSpan').addEventListener('click', () => {
        newElement();
    })
    document.querySelector('.newEleSpan').innerText = "Add";
    //UL checklist
    formAnchorGrbbr.appendChild(document.createElement('ul')).setAttribute('class', 'ulChecklist');
  
  
  
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName(".ulChecklist > LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
  
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('.ulChecklist');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
  
    // Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.querySelector(".ulCLInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.querySelector(".ulChecklist").appendChild(li);
      }
      document.querySelector(".ulCLInput").value = "";
  
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.remove();
        }
      }
    }

    //pre-fill form
    const event = new Event("input");
    document.querySelector(".title").value = todo.title;
    document.querySelector(".description").value = todo.description;
    document.querySelector(".dueDate").value = todo.dueDate;
    document.querySelector(".priority").value = todo.priority;
    document.querySelector(".priority").dispatchEvent(event);
    document.querySelector(".notes").value = todo.notes;
    
    if(typeof(todo.checklist) != "string") {
      let checklistItemsPre = document.querySelector('.ulChecklist') || [];

      todo.checklist.forEach(x => {
        checklistItemsPre.appendChild(document.createElement('li')).innerText = x;
      });
  
  
      document.querySelectorAll('.ulChecklist > li').forEach( y => {
        y.appendChild(document.createElement('span')).setAttribute('class', 'close');
      });
  
      document.querySelectorAll('li > span').forEach(z => {
        z.innerText = "\u00D7";
      });
    }
    

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.remove();
      }
    }
  
    //SUBMIT BUTTON
    let todoForStor = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    formAnchorGrbbr.appendChild(document.createElement('button')).setAttribute('class', 'submitBtn');
    const submitBtnGrbbr = document.querySelector('.submitBtn');
    submitBtnGrbbr.innerText = "Submit";
    submitBtnGrbbr.setAttribute('type', 'button');
  
    submitBtnGrbbr.addEventListener('click', () => {
      let checklistItems = document.querySelectorAll('.ulChecklist > li');
      let checklistItemsArr = [];
      let editWindowGrbbr = document.querySelector('.edit-btn-div-form');
  
      checklistItems.forEach(x => {
        checklistItemsArr.push(x.textContent.slice(0, -1));
      });

      todoForStor.project = todo.project;
      todoForStor.title = document.querySelector(".title").value;
      todoForStor.description = document.querySelector(".description").value;
      todoForStor.dueDate = document.querySelector(".dueDate").value;
      todoForStor.priority = document.querySelector(".priority").value;
      todoForStor.notes = document.querySelector(".notes").value;
      todoForStor.checklist = JSON.stringify(checklistItemsArr);

      Object.keys(ogTodos[keyForUpdating]).forEach((x) => {
        Object.keys(todoForStor).forEach((y) => {
          if (x == y && ogTodos[keyForUpdating][x] != todoForStor[y] && x != 'checklist'){
            ogTodos[keyForUpdating][x] = todoForStor[y];
          } else if (x == 'checklist' && x == y) {
            ogTodos[keyForUpdating][x] = checklistItemsArr;
          }
        })
      });

      (0,_todos_storer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todoForStor, keyForUpdating);
      (0,_project_module_js__WEBPACK_IMPORTED_MODULE_2__["default"])(todoForStor.project, ogTodos);

      editWindowGrbbr.remove();
    });
  } else if (!keyForUpdating) {
    bodyGrbbr.appendChild(document.createElement('form')).setAttribute('class', 'formTemplate');

    const formAnchorGrbbr = document.querySelector('.formTemplate');
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'title');
    document.querySelector('.title').setAttribute('type', 'text');
    document.querySelector('[for="title"]').innerText = "Title: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'description');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'description');
    document.querySelector('[for="description"]').innerText = "Description: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'dueDate');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'dueDate');
    document.querySelector('.dueDate').setAttribute('type', 'date');
    document.querySelector('[for="dueDate"]').innerText = "Due Date: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'priority');
  
    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'priorityContainer');
    document.querySelector('.priorityContainer').appendChild(document.createElement('input')).setAttribute('class', 'priority');
    document.querySelector('.priorityContainer').appendChild(document.createElement('output')).setAttribute('class', 'value');
    document.querySelector(".priority").setAttribute('value', '50');
    
    const value = document.querySelector(".value");
    const input = document.querySelector(".priority");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    });
  
    
    document.querySelector('.priority').setAttribute('type', 'range');
    document.querySelector('.priority').setAttribute('min', '0');
    document.querySelector('.priority').setAttribute('max', '100');
    document.querySelector('.priority').setAttribute('step', '1');
    document.querySelector('[for="priority"]').innerText = "Priority: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'notes');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'notes');
    document.querySelector('[for="notes"]').innerText = "Notes: ";
  
    //checklist
    formAnchorGrbbr.appendChild(document.createElement('p')).innerText = "Checklist:";
    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'checklistInputContainer');
    
  
  
    document.querySelector('.checklistInputContainer').appendChild(document.createElement('input')).setAttribute('class', 'ulCLInput');
    document.querySelector('.ulCLInput').setAttribute('type', 'text');
    document.querySelector('.ulCLInput').setAttribute('placeholder', 'Write here...');
  
    document.querySelector('.checklistInputContainer').appendChild(document.createElement('span')).setAttribute('class', 'newEleSpan');
    document.querySelector('.newEleSpan').classList.add('addBtn');
    document.querySelector('.newEleSpan').addEventListener('click', () => {
        newElement();
    })
    document.querySelector('.newEleSpan').innerText = "Add";
    //UL checklist
    formAnchorGrbbr.appendChild(document.createElement('ul')).setAttribute('class', 'ulChecklist');
  
  
  
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName(".ulChecklist > LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
  
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.remove();
      }
    }
  
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
  
    // Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.querySelector(".ulCLInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.querySelector(".ulChecklist").appendChild(li);
      }
      document.querySelector(".ulCLInput").value = "";
  
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.remove();
        }
      }
    }
  
    //SUBMIT BUTTON
    let todoForStor = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    formAnchorGrbbr.appendChild(document.createElement('button')).setAttribute('class', 'submitBtn');
    const submitBtnGrbbr = document.querySelector('.submitBtn');
    submitBtnGrbbr.innerText = "Submit";
    submitBtnGrbbr.setAttribute('type', 'button');
  
    submitBtnGrbbr.addEventListener('click', () => {
      let checklistItems = document.querySelectorAll('.ulChecklist > li');
      let checklistItemsArr = [];
      let addBtnWindowGrbbr = document.querySelector('.add-btn-div-form');
      let projectName = todo;

      checklistItems.forEach(x => {
        checklistItemsArr.push(x.textContent.slice(0, -1));
      });

      todoForStor.project = projectName;
      todoForStor.title = document.querySelector(".title").value;
      todoForStor.description = document.querySelector(".description").value;
      todoForStor.dueDate = document.querySelector(".dueDate").value;
      todoForStor.priority = document.querySelector(".priority").value;
      todoForStor.notes = document.querySelector(".notes").value;
      todoForStor.checklist = JSON.stringify(checklistItemsArr);

      
      ogTodos.push(todoForStor);
      
      (0,_todos_storer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todoForStor, undefined, projectName);
      (0,_project_module_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectName, ogTodos);

      addBtnWindowGrbbr.remove();
    });
  } else {
    //BASIC FORM, no todo
    bodyGrbbr.appendChild(document.createElement('form')).setAttribute('class', 'formTemplate');

    const formAnchorGrbbr = document.querySelector('.formTemplate');
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'title');
    document.querySelector('.title').setAttribute('type', 'text');
    document.querySelector('[for="title"]').innerText = "Title: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'description');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'description');
    document.querySelector('[for="description"]').innerText = "Description: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'dueDate');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'dueDate');
    document.querySelector('.dueDate').setAttribute('type', 'date');
    document.querySelector('[for="dueDate"]').innerText = "Due Date: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'priority');
  
    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'priorityContainer');
    document.querySelector('.priorityContainer').appendChild(document.createElement('input')).setAttribute('class', 'priority');
    document.querySelector('.priorityContainer').appendChild(document.createElement('output')).setAttribute('class', 'value');
    document.querySelector(".priority").setAttribute('value', '50');
    
    const value = document.querySelector(".value");
    const input = document.querySelector(".priority");
    value.textContent = input.value;
    input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    });
  
    
    document.querySelector('.priority').setAttribute('type', 'range');
    document.querySelector('.priority').setAttribute('min', '0');
    document.querySelector('.priority').setAttribute('max', '100');
    document.querySelector('.priority').setAttribute('step', '1');
    document.querySelector('[for="priority"]').innerText = "Priority: ";
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'notes');
    formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'notes');
    document.querySelector('[for="notes"]').innerText = "Notes: ";
  
    //checklist
    formAnchorGrbbr.appendChild(document.createElement('p')).innerText = "Checklist:";
    formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'checklistInputContainer');
    
  
  
    document.querySelector('.checklistInputContainer').appendChild(document.createElement('input')).setAttribute('class', 'ulCLInput');
    document.querySelector('.ulCLInput').setAttribute('type', 'text');
    document.querySelector('.ulCLInput').setAttribute('placeholder', 'Write here...');
  
    document.querySelector('.checklistInputContainer').appendChild(document.createElement('span')).setAttribute('class', 'newEleSpan');
    document.querySelector('.newEleSpan').classList.add('addBtn');
    document.querySelector('.newEleSpan').addEventListener('click', () => {
        newElement();
    })
    document.querySelector('.newEleSpan').innerText = "Add";
    //UL checklist
    formAnchorGrbbr.appendChild(document.createElement('ul')).setAttribute('class', 'ulChecklist');
  
  
  
    // Create a "close" button and append it to each list item
    var myNodelist = document.getElementsByTagName(".ulChecklist > LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
  
    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.remove();
      }
    }
  
    // Add a "checked" symbol when clicking on a list item
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }, false);
  
    // Create a new list item when clicking on the "Add" button
    function newElement() {
      var li = document.createElement("li");
      var inputValue = document.querySelector(".ulCLInput").value;
      var t = document.createTextNode(inputValue);
      li.appendChild(t);
      if (inputValue === '') {
        alert("You must write something!");
      } else {
        document.querySelector(".ulChecklist").appendChild(li);
      }
      document.querySelector(".ulCLInput").value = "";
  
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      li.appendChild(span);
  
      for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.remove();
        }
      }
    }
  
    //SUBMIT BUTTON
    let todoForStor = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    formAnchorGrbbr.appendChild(document.createElement('button')).setAttribute('class', 'submitBtn');
    const submitBtnGrbbr = document.querySelector('.submitBtn');
    submitBtnGrbbr.innerText = "Submit";
    submitBtnGrbbr.setAttribute('type', 'button');
  
    submitBtnGrbbr.addEventListener('click', () => {
      let checklistItems = document.querySelectorAll('.ulChecklist > li');
      let checklistItemsArr = [];
      let addBtnWindowGrbbr = document.querySelector('.add-btn-div-form');
      let projectName = todo;

      checklistItems.forEach(x => {
        checklistItemsArr.push(x.textContent.slice(0, -1));
      });

      todoForStor.project = projectName;
      todoForStor.title = document.querySelector(".title").value;
      todoForStor.description = document.querySelector(".description").value;
      todoForStor.dueDate = document.querySelector(".dueDate").value;
      todoForStor.priority = document.querySelector(".priority").value;
      todoForStor.notes = document.querySelector(".notes").value;
      todoForStor.checklist = JSON.stringify(checklistItemsArr);

      (0,_todos_storer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todoForStor, undefined, projectName);
      (0,_project_module_js__WEBPACK_IMPORTED_MODULE_2__["default"])(projectName, ogTodos);

      addBtnWindowGrbbr.remove();
    });
  }

  
}

/***/ }),

/***/ "./src/project-form.js":
/*!*****************************!*\
  !*** ./src/project-form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projFormMaker)
/* harmony export */ });
/* harmony import */ var _project_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project-module */ "./src/project-module.js");
/* harmony import */ var _projects_storer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-storer */ "./src/projects-storer.js");



function projFormMaker(anchor) {
    const bodyGrbbr = anchor;

    bodyGrbbr.appendChild(document.createElement('form')).setAttribute('class', 'projFormTemplate');

    const formAnchorGrbbr = document.querySelector('.projFormTemplate');
  
    formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
    formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'title');
    document.querySelector('.title').setAttribute('type', 'text');
    document.querySelector('[for="title"]').innerText = "Title: ";
  
    //SUBMIT BUTTON
    // let todoForStor = new Todos();
    formAnchorGrbbr.appendChild(document.createElement('button')).setAttribute('class', 'submitBtn');
    const submitBtnGrbbr = document.querySelector('.submitBtn');
    submitBtnGrbbr.innerText = "Submit";
    submitBtnGrbbr.setAttribute('type', 'button');
  
    submitBtnGrbbr.addEventListener('click', () => {
      let addBtnWindowGrbbr = document.querySelector('.add-proj-btn-div-form');
    
      (0,_projects_storer__WEBPACK_IMPORTED_MODULE_1__["default"])(document.querySelector(".title").value);

      (0,_project_module__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector(".title").value);

      addBtnWindowGrbbr.remove();
    });
}

/***/ }),

/***/ "./src/project-module.js":
/*!*******************************!*\
  !*** ./src/project-module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectsModule)
/* harmony export */ });
/* harmony import */ var _form_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-module */ "./src/form-module.js");
/* harmony import */ var _todos_remover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-remover */ "./src/todos-remover.js");
/* harmony import */ var _projects_remover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-remover */ "./src/projects-remover.js");
/* harmony import */ var _project_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-form */ "./src/project-form.js");





function projectsModule(project, todos) {

    const projContGrbbr = document.querySelector('.projects-container');

    //default project
    if (arguments.length == 0) {
        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container');

        let cardCntr = Array.from(document.querySelectorAll('.card-container'));
        let latestCardCntr = cardCntr.slice(-1);

        document.querySelector('.card-container').appendChild(document.createElement('div')).setAttribute('class', 'project-card');

        //del proj btn
        document.querySelector('.card-container').appendChild(document.createElement('input')).setAttribute('class', 'proj-button-delete');

        document.querySelector('.proj-button-delete').setAttribute('type', 'button');
        document.querySelector('.proj-button-delete').setAttribute('value', 'Delete Project');

        latestCardCntr[0].children[1].addEventListener('click', x => {

            let projName = x.target.parentNode.children[0].children[0].innerText;

            if(confirm("Are you sure?")){
                if(confirm("Super sure?")){
                    (0,_projects_remover__WEBPACK_IMPORTED_MODULE_2__["default"])(projName);
                    x.target.parentNode.remove();
                    alert("Project " + projName + " has been deleted.");
                }
            }
        });

        document.querySelector('.project-card').appendChild(document.createElement('h3')).setAttribute('class', 'project-title');

        document.querySelector('.project-title').innerText = "Default";

        document.querySelector('.project-card').appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

        document.querySelector('.project-card').appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        document.querySelector('.todo-btn-add').setAttribute('type', 'button');
        document.querySelector('.todo-btn-add').setAttribute('value', 'Add Todo');

        let prjCard = Array.from(document.querySelectorAll('.project-card'));
        let latestPrjCard = prjCard.slice(-1);

        //add todo btn
        latestPrjCard[0].children[2].addEventListener('click', x => {

            if (!document.querySelector('.add-btn-div-form')) {
                let storedProj = JSON.parse(localStorage.getItem(x.target.parentNode.children[0].innerText)) || [];

                projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'add-btn-div-form');

                document.querySelector('.add-btn-div-form').appendChild(document.createElement('h3')).setAttribute('class', 'add-btn-div-form-header');
                document.querySelector('.add-btn-div-form-header').innerText = "Add a Todo";

                //close button for edit window
                document.querySelector('.add-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'add-btn-div-form-btn');
                document.querySelector('.add-btn-div-form-btn').setAttribute('type', 'button');
                document.querySelector('.add-btn-div-form-btn').value = "X";

                (0,_form_module__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('.add-btn-div-form'), x.target.parentNode.children[0].innerText, storedProj);

                document.querySelector('.add-btn-div-form-btn').addEventListener('click', editEleFocus => {
                    document.querySelector('.add-btn-div-form').remove();
                });
            }
        });


        //add project button
        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container-add-proj');

        document.querySelector('.card-container-add-proj').appendChild(document.createElement('input')).setAttribute('class', 'proj-button-add');

        document.querySelector('.proj-button-add').setAttribute('type', 'button');
        document.querySelector('.proj-button-add').setAttribute('value', 'Add Project');

        document.querySelector('.proj-button-add').addEventListener('click', x => {

            //working here

            if (!document.querySelector('.add-proj-btn-div-form')) {
                projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'add-proj-btn-div-form');

                document.querySelector('.add-proj-btn-div-form').appendChild(document.createElement('h3')).setAttribute('class', 'add-btn-div-form-header');
                document.querySelector('.add-btn-div-form-header').innerText = "Add a Project";

                //close button for add window
                document.querySelector('.add-proj-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'add-btn-div-form-btn');
                document.querySelector('.add-btn-div-form-btn').setAttribute('type', 'button');
                document.querySelector('.add-btn-div-form-btn').value = "X";

                (0,_project_form__WEBPACK_IMPORTED_MODULE_3__["default"])(document.querySelector('.add-proj-btn-div-form'));

                document.querySelector('.add-btn-div-form-btn').addEventListener('click', editEleFocus => {
                    document.querySelector('.add-proj-btn-div-form').remove();
                });
            }
            
        });
    } else {
        //CARD UPDATER
        let projCards = document.querySelectorAll('.card-container');
        let dupeFound = false;
        let dupe;
        let dupeIndex;

        projCards.forEach((card, indx) => {
            if (card.children[0].children[0].textContent == project) {
                dupeFound = true;
                dupe = projCards[indx];
                dupeIndex = indx;
            }
        });

        if (dupeFound && todos){
            //update the card if dupe found
            dupe.children[0].children[1].remove();

            let prjCard = Array.from(document.querySelectorAll('.project-card'));
            let latestPrjCard = [prjCard[dupeIndex]];

            latestPrjCard[0].insertBefore(document.createElement('div'), latestPrjCard[0].children[1]).setAttribute('class', 'projects-display');

            latestPrjCard[0].children[1].appendChild(document.createElement('ul')).setAttribute('class', 'projects-display-ul');

            Object.entries(todos).forEach(([key, value]) => {

                latestPrjCard[0].children[1].children[0].appendChild(document.createElement('li')).innerText = `${JSON.stringify(value.title).replaceAll('"', '')}, ${JSON.stringify(value.dueDate).replaceAll('"', '')}`;
    
                latestPrjCard[0].children[1].children[0].children[key].classList.add('todos-li');
    
                latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'edit-btn-todos-li');
    
                //edit button
                latestPrjCard[0].children[1].children[0].children[key].children[0].addEventListener('click', editEle => {
                    if (!document.querySelector('.edit-btn-div-form')) {
                        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'edit-btn-div-form');
    
                        document.querySelector('.edit-btn-div-form').appendChild(document.createElement('h3')).setAttribute('class', 'edit-btn-div-form-header');
                        document.querySelector('.edit-btn-div-form-header').innerText = "Edit Todo";
    
                        document.querySelector('.edit-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'edit-btn-div-form-btn');
                        document.querySelector('.edit-btn-div-form-btn').setAttribute('type', 'button');
                        document.querySelector('.edit-btn-div-form-btn').value = "X";
                        
                        (0,_form_module__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('.edit-btn-div-form'),todos[key],todos, key);
        
                        document.querySelector('.edit-btn-div-form-btn').addEventListener('click', editEleFocus => {
                            document.querySelector('.edit-btn-div-form').remove();
                        });
                    }
                    
                });
    
                latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'del-btn-todos-li');
    
                latestPrjCard[0].children[1].children[0].children[key].children[0].setAttribute('type', 'button');

                latestPrjCard[0].children[1].children[0].children[key].children[1].setAttribute('type', 'button');

                //delete todo btn
                latestPrjCard[0].children[1].children[0].children[key].children[1].addEventListener('click', x => {
                    let todosProjectName = x.target.parentNode.parentNode.parentNode.previousElementSibling.innerText;

                    function getDomIndex (target) {
                        return [].slice.call(target.parentNode.children).indexOf(target)
                    }

                    if(confirm("Are you sure?")){
                        (0,_todos_remover__WEBPACK_IMPORTED_MODULE_1__["default"])(todosProjectName, getDomIndex(x.target.parentNode));
                        x.target.parentNode.remove();
                    }
                });
                
                //expanded view
                latestPrjCard[0].children[1].children[0].children[key].addEventListener('click', x => {
                    if (x.target.tagName == "LI") {
                        let newItem = document.createElement('div');
                        let oldItem = latestPrjCard[0].children[1].children[0].children[key];
                        
                        newItem.setAttribute('class', 'expanded-view');
        
                        Object.entries(todos[key]).forEach(([newItemKey, newItemValue]) => {
        
                            if(newItemKey != "project" && typeof(newItemValue) == "string"){
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": " + JSON.stringify(newItemValue).replaceAll('"', '');
                            } else if (newItemKey != "project" && newItemKey != "checklist") {
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": ";
                            } else if (newItemKey == "checklist") {
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": ";
    
                                let i = 0;
    
                                while (i < newItemValue.length) {
                                    if (newItemValue.length - i != 1){
                                        paraChild.innerText += newItemValue[i] + ", ";
                                    } else {
                                        paraChild.innerText += newItemValue[i];
                                    }
                                    
                                    i++;
                                }
                            }
                        });
        
                        newItem.addEventListener('click', y => {
                            if(latestPrjCard[0].children[1].children[0].children[key].classList.contains('expanded-view')) {
                                latestPrjCard[0].children[1].children[0].replaceChild(oldItem, latestPrjCard[0].children[1].children[0].children[key]);
                            } else {
                                latestPrjCard[0].children[1].children[0].replaceChild(newItem, latestPrjCard[0].children[1].children[0].children[key]);
                            }
                        });
        
                        if(latestPrjCard[0].children[1].children[0].children[key].classList.contains('expanded-view')) {
                            latestPrjCard[0].children[1].children[0].replaceChild(oldItem, latestPrjCard[0].children[1].children[0].children[key]);
                        } else {
                            latestPrjCard[0].children[1].children[0].replaceChild(newItem, latestPrjCard[0].children[1].children[0].children[key]);
                        }
                    }
                    
                });
            });

        } else {
        //CREATE A NEW CARD FOR PROJECT
        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container');

        let cardCntr = Array.from(document.querySelectorAll('.card-container'));

        let latestCardCntr = cardCntr.slice(-1);

        latestCardCntr[0].appendChild(document.createElement('div')).setAttribute('class', 'project-card');

        let prjCard = Array.from(document.querySelectorAll('.project-card'));
        let latestPrjCard = prjCard.slice(-1);

        //del proj btn
        latestCardCntr[0].appendChild(document.createElement('input')).setAttribute('class', 'proj-button-delete');

        latestCardCntr[0].children[1].setAttribute('type', 'button');
        latestCardCntr[0].children[1].setAttribute('value', 'Delete Project');
        
        latestCardCntr[0].children[1].addEventListener('click', x => {

            let projName = x.target.parentNode.children[0].children[0].innerText;

            if(confirm("Are you sure?")){
                if(confirm("Super sure?")){
                    (0,_projects_remover__WEBPACK_IMPORTED_MODULE_2__["default"])(projName);
                    x.target.parentNode.remove();
                    alert("Project " + projName + " has been deleted.");
                }
            }
        });

        latestPrjCard[0].appendChild(document.createElement('h3')).setAttribute('class', 'project-title');

        latestPrjCard[0].children[0].innerText = project;

        latestPrjCard[0].appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

        latestPrjCard[0].children[1].appendChild(document.createElement('ul')).setAttribute('class', 'projects-display-ul');

        if(todos) {
            Object.entries(todos).forEach(([key, value]) => {

                latestPrjCard[0].children[1].children[0].appendChild(document.createElement('li')).innerText = `${JSON.stringify(value.title).replaceAll('"', '')}, ${JSON.stringify(value.dueDate).replaceAll('"', '')}`;
    
                latestPrjCard[0].children[1].children[0].children[key].classList.add('todos-li');
    
                latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'edit-btn-todos-li');
    
                //edit button
                latestPrjCard[0].children[1].children[0].children[key].children[0].addEventListener('click', editEle => {
                    if (!document.querySelector('.edit-btn-div-form')) {
                        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'edit-btn-div-form');
    
                        document.querySelector('.edit-btn-div-form').appendChild(document.createElement('h3')).setAttribute('class', 'edit-btn-div-form-header');
                        document.querySelector('.edit-btn-div-form-header').innerText = "Edit Todo";
    
                        //close button for edit window
                        document.querySelector('.edit-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'edit-btn-div-form-btn');
                        document.querySelector('.edit-btn-div-form-btn').setAttribute('type', 'button');
                        document.querySelector('.edit-btn-div-form-btn').value = "X";
    
                        (0,_form_module__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('.edit-btn-div-form'), todos[key], todos, key);
        
                        document.querySelector('.edit-btn-div-form-btn').addEventListener('click', editEleFocus => {
                            document.querySelector('.edit-btn-div-form').remove();
                        });
                    }
                    
                });
    
                latestPrjCard[0].children[1].children[0].children[key].children[0].setAttribute('type', 'button');
    
                latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'del-btn-todos-li');
    
                latestPrjCard[0].children[1].children[0].children[key].children[1].setAttribute('type', 'button');
    
                //delete todo btn
                latestPrjCard[0].children[1].children[0].children[key].children[1].addEventListener('click', x => {
                    let todosProjectName = x.target.parentNode.parentNode.parentNode.previousElementSibling.innerText;
    
                    function getDomIndex (target) {
                        return [].slice.call(target.parentNode.children).indexOf(target)
                    }
    
                    if(confirm("Are you sure?")){
                        (0,_todos_remover__WEBPACK_IMPORTED_MODULE_1__["default"])(todosProjectName, getDomIndex(x.target.parentNode));
                        x.target.parentNode.remove();
                    }
                });
                
                //expanded view
                latestPrjCard[0].children[1].children[0].children[key].addEventListener('click', x => {
                    if (x.target.tagName == "LI") {
                        let newItem = document.createElement('div');
                        let oldItem = latestPrjCard[0].children[1].children[0].children[key];
                        
                        newItem.setAttribute('class', 'expanded-view');
        
                        Object.entries(todos[key]).forEach(([newItemKey, newItemValue]) => {
        
                            if(newItemKey != "project" && typeof(newItemValue) == "string"){
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": " + JSON.stringify(newItemValue).replaceAll('"', '');
                            } else if (newItemKey != "project" && newItemKey != "checklist") {
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": ";
                            } else if (newItemKey == "checklist") {
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": ";
    
                                let i = 0;
    
                                while (i < newItemValue.length) {
                                    if (newItemValue.length - i != 1){
                                        paraChild.innerText += newItemValue[i] + ", ";
                                    } else {
                                        paraChild.innerText += newItemValue[i];
                                    }
                                    
                                    i++;
                                }
                            }
                        });
        
                        newItem.addEventListener('click', y => {
                            if(latestPrjCard[0].children[1].children[0].children[key].classList.contains('expanded-view')) {
                                latestPrjCard[0].children[1].children[0].replaceChild(oldItem, latestPrjCard[0].children[1].children[0].children[key]);
                            } else {
                                latestPrjCard[0].children[1].children[0].replaceChild(newItem, latestPrjCard[0].children[1].children[0].children[key]);
                            }
                        });
        
                        if(latestPrjCard[0].children[1].children[0].children[key].classList.contains('expanded-view')) {
                            latestPrjCard[0].children[1].children[0].replaceChild(oldItem, latestPrjCard[0].children[1].children[0].children[key]);
                        } else {
                            latestPrjCard[0].children[1].children[0].replaceChild(newItem, latestPrjCard[0].children[1].children[0].children[key]);
                        }
                    }
                    
                });
            });
        }

        //add todo btn
        latestPrjCard[0].appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        latestPrjCard[0].children[2].setAttribute('type', 'button');
        latestPrjCard[0].children[2].setAttribute('value', 'Add Todo');
        //submit btn for add todo btn
        latestPrjCard[0].children[2].addEventListener('click', x => {

            if (!document.querySelector('.add-btn-div-form')) {
                let storedProj = JSON.parse(localStorage.getItem(x.target.parentNode.children[0].innerText));

                projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'add-btn-div-form');

                document.querySelector('.add-btn-div-form').appendChild(document.createElement('h3')).setAttribute('class', 'add-btn-div-form-header');
                document.querySelector('.add-btn-div-form-header').innerText = "Add a Todo";

                //close button for add window
                document.querySelector('.add-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'add-btn-div-form-btn');
                document.querySelector('.add-btn-div-form-btn').setAttribute('type', 'button');
                document.querySelector('.add-btn-div-form-btn').value = "X";

                (0,_form_module__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('.add-btn-div-form'), x.target.parentNode.children[0].innerText, storedProj);

                document.querySelector('.add-btn-div-form-btn').addEventListener('click', editEleFocus => {
                    document.querySelector('.add-btn-div-form').remove();
                });
            }
        });
        }       
    }
}

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
    constructor(title, todos) {
      this.title = title;
      this.todos = todos;
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
    
    if (JSON.parse(localStorage.getItem(someProject))) {
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

    if (localStorage.getItem(someProject.title)){
        throw console.error("Project already exists!");
    } else {
        localStorage.setItem(someProject, []);
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
function todosRemover(someProject, indexForDel) {

    const storedFormData = JSON.parse(localStorage.getItem(someProject)) || [];

    storedFormData.splice(indexForDel, 1);

    localStorage.setItem(someProject, JSON.stringify(storedFormData));
    
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
function todosStorer(someTodo, keyForUpdating, projName) {
    let storedProjData = JSON.parse(localStorage.getItem(someTodo.project)) || [];
    const todoTitle = someTodo.title;
    let found = false;
    let index = 0;

    if(keyForUpdating){
        storedProjData[keyForUpdating] = someTodo;
        localStorage.setItem(someTodo.project, JSON.stringify(storedProjData));
    } else if (projName){
        storedProjData = JSON.parse(localStorage.getItem(projName)) || [];
        storedProjData.push(someTodo);
        localStorage.setItem(projName, JSON.stringify(storedProjData));
    } else {
        storedProjData.forEach(todo => {
            for (let y in todo){
                if(todo[y] == todoTitle){
                    found = true;
                    index = storedProjData.indexOf(todo);
                }
            }
        });
    
        if (storedProjData != [] && found){
            storedProjData[index] = someTodo;
            localStorage.setItem(someTodo.project, JSON.stringify(storedProjData));
        } else {
            storedProjData.push(someTodo);
            localStorage.setItem(someTodo.project, JSON.stringify(storedProjData));
        }
    }
}

/***/ }),

/***/ "./src/del-button.svg":
/*!****************************!*\
  !*** ./src/del-button.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f48b945c9d4c1bea4cc5.svg";

/***/ }),

/***/ "./src/edit-button.svg":
/*!*****************************!*\
  !*** ./src/edit-button.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "47d94e6237ac513b0724.svg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _projects_creator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects-creator.js */ "./src/projects-creator.js");
/* harmony import */ var _projects_storer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-storer.js */ "./src/projects-storer.js");
/* harmony import */ var _project_module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-module.js */ "./src/project-module.js");
/* harmony import */ var _todo_list_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-list.css */ "./src/todo-list.css");






//testing here
let user = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "foo", "bar", "2014-02-09", "33", "dasdf", ["cl", "test", "cltest"]);
let user2 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "asdfasd", "badasdr", "2023-01-02", "70", "asdfcc", ["cl", "test", "cltest"]);
let user3 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "test", "asdf", "1998-04-11", "21", "bbbbb", ["cl", "test", "cltest"]);
let user4 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "just added", "here", "2022-06-04", "99", "a;sldkf", ["cl", "test", "cltest"]);
let someProject = new _projects_creator_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Barney", user);

user.notes = "hothead";
someProject.todos = [user, user2, user3];

localStorage.clear();

// projectsStorer(someProject);

// projectsModule(someProject.title, someProject.todos);

(0,_project_module_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQXNDO0FBQ2xGLDRDQUE0Qyw2SEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxvRkFBb0YsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxXQUFXLFdBQVcsWUFBWSxjQUFjLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxXQUFXLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxXQUFXLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ007QUFDSztBQUNEO0FBQ3hCOztBQUV6QjtBQUNBLGVBQWUseURBQUs7QUFDcEIsZ0JBQWdCLHlEQUFLO0FBQ3JCLGdCQUFnQix5REFBSztBQUNyQixnQkFBZ0IseURBQUssd0RBQXdEO0FBQzdFLHNCQUFzQiw0REFBUTs7QUFFOUI7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSw4REFBYyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuY3NzPzNmYzMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdC1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLXJlbW92ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RzLXN0b3Jlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3MtcmVtb3Zlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kb3Mtc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2RlbC1idXR0b24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiL3NyYy9lZGl0LWJ1dHRvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEycHggOHB4IDEycHggNDBweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgLyogbWFrZSB0aGUgbGlzdCBpdGVtcyB1bnNlbGVjdGFibGUgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gIC8qIHdlIGNyZWF0ZSBvdXIgZ3JpZCAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZW0gMWZyIDJlbSAyZW0gMWZyIDNlbSAxZnIgMmVtO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbm91dHB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgbWluLWhlaWdodDogNTBweDtcbn1cblxuLmFkZC1idG4tZGl2LWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcbiAgXG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5hZGQtYnRuLWRpdi1mb3JtLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmFkZC1idG4tZGl2LWZvcm0tYnRuIHtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG59XG5cbi5hZGQtcHJvai1idG4tZGl2LWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcbiAgXG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5kaXNwLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubmV3RWxlU3BhbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gIGNvbG9yOiAjNTU1O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ubmV3RWxlU3Bhbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG59XG5cbi5wcm9qRm9ybVRlbXBsYXRle1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAvKiB3ZSBjcmVhdGUgb3VyIGdyaWQgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMzBweCA1MHB4O1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTAlO1xuICBnYXA6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG5cbi5jYXJkLWNvbnRhaW5lci1hZGQtcHJvaiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4uY2hlY2tsaXN0SW5wdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG59XG5cbi5kZWwtYnRuLXRvZG9zLWxpIHtcblxuICBkaXNwbGF5OiBncmlkO1xuICBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5kZWwtYnRuLXRvZG9zLWxpOmhvdmVyIHtcblxuICBkaXNwbGF5OiBncmlkO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uZHVlRGF0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5lZGl0LWJ0bi1kaXYtZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogNTAwcHg7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCUgMTAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xuICBcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmVkaXQtYnRuLWRpdi1mb3JtLWJ0biB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4uZWRpdC1idG4tZGl2LWZvcm0taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZWRpdC1idG4tdG9kb3MtbGkge1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5lZGl0LWJ0bi10b2Rvcy1saTpob3ZlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMTA3KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhwYW5kZWQtdmlldyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgei1pbmRleDoxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5leHBhbmRlZC12aWV3LXBhcmFzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZXhwYW5kZWQtdmlldzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICB3aWR0aDogMjUwcHg7IFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG59XG5cbi5ub3RlcyB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4ucHJpb3JpdHlDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByaW9yaXR5Q29udGFpbmVyID4gLnByaW9yaXR5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnByb2otYnV0dG9uLWFkZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6Izk5ZGY3ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvai1idXR0b24tZGVsZXRlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wcm9qLWJ1dHRvbi1kZWxldGU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnIgMTAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgbWFyZ2luOiAxJTtcbiAgd2lkdGg6ICBjbGFtcCgxNjUwcHgsIDUwdncsIDEzMzdweCk7XG4gIGhlaWdodDogNzV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjdiNztcbn1cblxuLnByb2plY3RzLWRpc3BsYXkge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5wcm9qZWN0cy1kaXNwbGF5LXVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uc3VibWl0QnRuIHtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBjb2xvcjogIzU1NTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnN1Ym1pdEJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG59XG5cbi50aXRsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi50b2RvLWJ0bi1hZGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnRvZG8tYnRuLWFkZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6Izk5ZGY3ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9kb3MtbGkge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMCUgMjAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG59XG5cbi50b2Rvcy1saSA+IGlucHV0IHtcbiAgcGFkZGluZzogMTNweDtcbn1cblxuLnVsQ2hlY2tsaXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xufVxuXG4udWxDTElucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnZhbHVlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMXB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxudWwgbGk6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuXG4vKiBEYXJrZXIgYmFja2dyb3VuZC1jb2xvciBvbiBob3ZlciAqL1xudWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4vKiBXaGVuIGNsaWNrZWQgb24sIGFkZCBhIGJhY2tncm91bmQgY29sb3IgYW5kIHN0cmlrZSBvdXQgdGV4dCAqL1xudWwgbGkuY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLyogQWRkIGEgXCJjaGVja2VkXCIgbWFyayB3aGVuIGNsaWNrZWQgb24gKi9cbnVsIGxpLmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDdweDtcbn1cblxuLyogU3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxMnB4IDE2cHggMTJweCAxNnB4O1xufVxuXG4uY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFN0eWxlIHRoZSBpbnB1dCAqL1xuaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3RvZG8tbGlzdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx5Q0FBeUM7QUFDM0M7O0FBRUE7RUFDRSxTQUFTO0VB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ekIsWUFBWTtBQUNkOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG51bCBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMnB4IDhweCAxMnB4IDQwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gIC8qIG1ha2UgdGhlIGxpc3QgaXRlbXMgdW5zZWxlY3RhYmxlICovXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcblxcbiAgLyogd2UgY3JlYXRlIG91ciBncmlkICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZW0gMWZyIDJlbSAyZW0gMWZyIDNlbSAxZnIgMmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5vdXRwdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuXFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uYWRkLWJ0bi1kaXYtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogNjAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWRkLWJ0bi1kaXYtZm9ybS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5hZGQtYnRuLWRpdi1mb3JtLWJ0biB7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xcbn1cXG5cXG4uYWRkLXByb2otYnRuLWRpdi1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICBcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5kaXNwLXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5uZXdFbGVTcGFuIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4ubmV3RWxlU3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbn1cXG5cXG4ucHJvakZvcm1UZW1wbGF0ZXtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogMjAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcblxcbiAgLyogd2UgY3JlYXRlIG91ciBncmlkICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMHB4IDUwcHg7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5jYXJkLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwJTtcXG4gIGdhcDogMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyLWFkZC1wcm9qIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmNoZWNrbGlzdElucHV0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxufVxcblxcbi5kZWwtYnRuLXRvZG9zLWxpIHtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9kZWwtYnV0dG9uLnN2ZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmRlbC1idG4tdG9kb3MtbGk6aG92ZXIge1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG5cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9kZWwtYnV0dG9uLnN2ZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5lZGl0LWJ0bi1kaXYtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogNjAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZWRpdC1idG4tZGl2LWZvcm0tYnRuIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi5lZGl0LWJ0bi1kaXYtZm9ybS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5lZGl0LWJ0bi10b2Rvcy1saSB7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2VkaXQtYnV0dG9uLnN2ZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmVkaXQtYnRuLXRvZG9zLWxpOmhvdmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvZWRpdC1idXR0b24uc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAxMDcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kZWQtdmlldyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gIHotaW5kZXg6MTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmV4cGFuZGVkLXZpZXctcGFyYXMge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZXhwYW5kZWQtdmlldzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXFxuICB3aWR0aDogMjUwcHg7IFxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcXG59XFxuXFxuLm5vdGVzIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHlDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDEwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJpb3JpdHlDb250YWluZXIgPiAucHJpb3JpdHkge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnByb2otYnV0dG9uLWFkZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiM5OWRmN2U7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qLWJ1dHRvbi1kZWxldGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wcm9qLWJ1dHRvbi1kZWxldGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyIDEwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgbWFyZ2luOiAxJTtcXG4gIHdpZHRoOiAgY2xhbXAoMTY1MHB4LCA1MHZ3LCAxMzM3cHgpO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjdiNztcXG59XFxuXFxuLnByb2plY3RzLWRpc3BsYXkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ucHJvamVjdHMtZGlzcGxheS11bCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ2FwOiAwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLnN1Ym1pdEJ0biB7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBjb2xvcjogIzU1NTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLnN1Ym1pdEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi50b2RvLWJ0bi1hZGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2RvLWJ0bi1hZGQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjojOTlkZjdlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kb3MtbGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwJSAyMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgbWluLWhlaWdodDogMDtcXG59XFxuXFxuLnRvZG9zLWxpID4gaW5wdXQge1xcbiAgcGFkZGluZzogMTNweDtcXG59XFxuXFxuLnVsQ2hlY2tsaXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG59XFxuXFxuLnVsQ0xJbnB1dCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnZhbHVlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbnVsIGxpOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxufVxcblxcbi8qIERhcmtlciBiYWNrZ3JvdW5kLWNvbG9yIG9uIGhvdmVyICovXFxudWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG59XFxuXFxuLyogV2hlbiBjbGlja2VkIG9uLCBhZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzdHJpa2Ugb3V0IHRleHQgKi9cXG51bCBsaS5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4vKiBBZGQgYSBcXFwiY2hlY2tlZFxcXCIgbWFyayB3aGVuIGNsaWNrZWQgb24gKi9cXG51bCBsaS5jaGVja2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDE2cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogN3B4O1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgY2xvc2UgYnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMTJweCAxNnB4IDEycHggMTZweDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBpbnB1dCAqL1xcbmlucHV0IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8tbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8tbGlzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0b2Rvc1N0b3JlciBmcm9tIFwiLi90b2Rvcy1zdG9yZXIuanNcIjtcbmltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvcy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNNb2R1bGUgZnJvbSBcIi4vcHJvamVjdC1tb2R1bGUuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybU1ha2VyKGFuY2hvciwgdG9kbywgb2dUb2Rvcywga2V5Rm9yVXBkYXRpbmcpIHtcbiAgbGV0IGFyckZvclN0b3IgPSBbXTtcbiAgXG4gIGNvbnN0IGJvZHlHcmJiciA9IGFuY2hvcjtcblxuICBpZihhbmNob3IsIHRvZG8sIG9nVG9kb3MsIGtleUZvclVwZGF0aW5nKSB7XG4gICAgLy9GT1JNIEZPUiBFRElUSU5HIGV4aXN0aW5nIHRvZG8gKEVESVQgQlVUVE9OKVxuXG4gICAgYm9keUdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtVGVtcGxhdGUnKTtcblxuICAgIGNvbnN0IGZvcm1BbmNob3JHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtVGVtcGxhdGUnKTtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJ0aXRsZVwiXScpLmlubmVyVGV4dCA9IFwiVGl0bGU6IFwiO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJkZXNjcmlwdGlvblwiXScpLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246IFwiO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZURhdGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlRGF0ZScpLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cImR1ZURhdGVcIl0nKS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eUNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHknKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHlDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd2YWx1ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsICc1MCcpO1xuICAgIFxuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52YWx1ZVwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIik7XG4gICAgdmFsdWUudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgdmFsdWUudGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfSk7XG4gIFxuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYW5nZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnNldEF0dHJpYnV0ZSgnbWluJywgJzAnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ3N0ZXAnLCAnMScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJwcmlvcml0eVwiXScpLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IFwiO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAnbm90ZXMnKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdub3RlcycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJub3Rlc1wiXScpLmlubmVyVGV4dCA9IFwiTm90ZXM6IFwiO1xuICBcbiAgICAvL2NoZWNrbGlzdFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLmlubmVyVGV4dCA9IFwiQ2hlY2tsaXN0OlwiO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2xpc3RJbnB1dENvbnRhaW5lcicpO1xuICAgIFxuICBcbiAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdElucHV0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1bENMSW5wdXQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWxDTElucHV0Jykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWxDTElucHV0Jykuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXcml0ZSBoZXJlLi4uJyk7XG4gIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3RJbnB1dENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXdFbGVTcGFuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0VsZVNwYW4nKS5jbGFzc0xpc3QuYWRkKCdhZGRCdG4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3RWxlU3BhbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuZXdFbGVtZW50KCk7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3RWxlU3BhbicpLmlubmVyVGV4dCA9IFwiQWRkXCI7XG4gICAgLy9VTCBjaGVja2xpc3RcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1bENoZWNrbGlzdCcpO1xuICBcbiAgXG4gIFxuICAgIC8vIENyZWF0ZSBhIFwiY2xvc2VcIiBidXR0b24gYW5kIGFwcGVuZCBpdCB0byBlYWNoIGxpc3QgaXRlbVxuICAgIHZhciBteU5vZGVsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIudWxDaGVja2xpc3QgPiBMSVwiKTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbXlOb2RlbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcbiAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwRDdcIik7XG4gICAgICBzcGFuLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICAgIG15Tm9kZWxpc3RbaV0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICBcbiAgICAvLyBBZGQgYSBcImNoZWNrZWRcIiBzeW1ib2wgd2hlbiBjbGlja2luZyBvbiBhIGxpc3QgaXRlbVxuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ2hlY2tsaXN0Jyk7XG4gICAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgICBpZiAoZXYudGFyZ2V0LnRhZ05hbWUgPT09ICdMSScpIHtcbiAgICAgICAgZXYudGFyZ2V0LmNsYXNzTGlzdC50b2dnbGUoJ2NoZWNrZWQnKTtcbiAgICAgIH1cbiAgICB9LCBmYWxzZSk7XG4gIFxuICAgIC8vIENyZWF0ZSBhIG5ldyBsaXN0IGl0ZW0gd2hlbiBjbGlja2luZyBvbiB0aGUgXCJBZGRcIiBidXR0b25cbiAgICBmdW5jdGlvbiBuZXdFbGVtZW50KCkge1xuICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgdmFyIGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsQ0xJbnB1dFwiKS52YWx1ZTtcbiAgICAgIHZhciB0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoaW5wdXRWYWx1ZSk7XG4gICAgICBsaS5hcHBlbmRDaGlsZCh0KTtcbiAgICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgICBhbGVydChcIllvdSBtdXN0IHdyaXRlIHNvbWV0aGluZyFcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsQ2hlY2tsaXN0XCIpLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIH1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWxDTElucHV0XCIpLnZhbHVlID0gXCJcIjtcbiAgXG4gICAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xuICAgICAgdmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFx1MDBEN1wiKTtcbiAgICAgIHNwYW4uY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0eHQpO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIFxuICAgICAgZm9yIChpID0gMDsgaSA8IGNsb3NlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNsb3NlW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgZGl2ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgIGRpdi5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vcHJlLWZpbGwgZm9ybVxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KFwiaW5wdXRcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWVEYXRlXCIpLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKS52YWx1ZSA9IHRvZG8ubm90ZXM7XG4gICAgXG4gICAgaWYodHlwZW9mKHRvZG8uY2hlY2tsaXN0KSAhPSBcInN0cmluZ1wiKSB7XG4gICAgICBsZXQgY2hlY2tsaXN0SXRlbXNQcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWxDaGVja2xpc3QnKSB8fCBbXTtcblxuICAgICAgdG9kby5jaGVja2xpc3QuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgY2hlY2tsaXN0SXRlbXNQcmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSkuaW5uZXJUZXh0ID0geDtcbiAgICAgIH0pO1xuICBcbiAgXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudWxDaGVja2xpc3QgPiBsaScpLmZvckVhY2goIHkgPT4ge1xuICAgICAgICB5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9zZScpO1xuICAgICAgfSk7XG4gIFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkgPiBzcGFuJykuZm9yRWFjaCh6ID0+IHtcbiAgICAgICAgei5pbm5lclRleHQgPSBcIlxcdTAwRDdcIjtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcblxuICAgIC8vIENsaWNrIG9uIGEgY2xvc2UgYnV0dG9uIHRvIGhpZGUgdGhlIGN1cnJlbnQgbGlzdCBpdGVtXG4gICAgdmFyIGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKykge1xuICAgICAgY2xvc2VbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGl2ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvL1NVQk1JVCBCVVRUT05cbiAgICBsZXQgdG9kb0ZvclN0b3IgPSBuZXcgVG9kb3MoKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0QnRuJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuR3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuJyk7XG4gICAgc3VibWl0QnRuR3JiYnIuaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcbiAgICBzdWJtaXRCdG5HcmJici5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIFxuICAgIHN1Ym1pdEJ0bkdyYmJyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVsQ2hlY2tsaXN0ID4gbGknKTtcbiAgICAgIGxldCBjaGVja2xpc3RJdGVtc0FyciA9IFtdO1xuICAgICAgbGV0IGVkaXRXaW5kb3dHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybScpO1xuICBcbiAgICAgIGNoZWNrbGlzdEl0ZW1zLmZvckVhY2goeCA9PiB7XG4gICAgICAgIGNoZWNrbGlzdEl0ZW1zQXJyLnB1c2goeC50ZXh0Q29udGVudC5zbGljZSgwLCAtMSkpO1xuICAgICAgfSk7XG5cbiAgICAgIHRvZG9Gb3JTdG9yLnByb2plY3QgPSB0b2RvLnByb2plY3Q7XG4gICAgICB0b2RvRm9yU3Rvci50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikudmFsdWU7XG4gICAgICB0b2RvRm9yU3Rvci5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICB0b2RvRm9yU3Rvci5kdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgdG9kb0ZvclN0b3IucHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLnZhbHVlO1xuICAgICAgdG9kb0ZvclN0b3Iubm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpLnZhbHVlO1xuICAgICAgdG9kb0ZvclN0b3IuY2hlY2tsaXN0ID0gSlNPTi5zdHJpbmdpZnkoY2hlY2tsaXN0SXRlbXNBcnIpO1xuXG4gICAgICBPYmplY3Qua2V5cyhvZ1RvZG9zW2tleUZvclVwZGF0aW5nXSkuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyh0b2RvRm9yU3RvcikuZm9yRWFjaCgoeSkgPT4ge1xuICAgICAgICAgIGlmICh4ID09IHkgJiYgb2dUb2Rvc1trZXlGb3JVcGRhdGluZ11beF0gIT0gdG9kb0ZvclN0b3JbeV0gJiYgeCAhPSAnY2hlY2tsaXN0Jyl7XG4gICAgICAgICAgICBvZ1RvZG9zW2tleUZvclVwZGF0aW5nXVt4XSA9IHRvZG9Gb3JTdG9yW3ldO1xuICAgICAgICAgIH0gZWxzZSBpZiAoeCA9PSAnY2hlY2tsaXN0JyAmJiB4ID09IHkpIHtcbiAgICAgICAgICAgIG9nVG9kb3Nba2V5Rm9yVXBkYXRpbmddW3hdID0gY2hlY2tsaXN0SXRlbXNBcnI7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIHRvZG9zU3RvcmVyKHRvZG9Gb3JTdG9yLCBrZXlGb3JVcGRhdGluZyk7XG4gICAgICBwcm9qZWN0c01vZHVsZSh0b2RvRm9yU3Rvci5wcm9qZWN0LCBvZ1RvZG9zKTtcblxuICAgICAgZWRpdFdpbmRvd0dyYmJyLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKCFrZXlGb3JVcGRhdGluZykge1xuICAgIGJvZHlHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVRlbXBsYXRlJyk7XG5cbiAgICBjb25zdCBmb3JtQW5jaG9yR3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybVRlbXBsYXRlJyk7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwidGl0bGVcIl0nKS5pbm5lclRleHQgPSBcIlRpdGxlOiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwiZGVzY3JpcHRpb25cIl0nKS5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWVEYXRlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGUnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJkdWVEYXRlXCJdJykuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogXCI7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlDb250YWluZXInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHlDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndmFsdWUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnNTAnKTtcbiAgICBcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmFsdWVcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICBcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAwJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdzdGVwJywgJzEnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwicHJpb3JpdHlcIl0nKS5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdGVzJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbm90ZXMnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwibm90ZXNcIl0nKS5pbm5lclRleHQgPSBcIk5vdGVzOiBcIjtcbiAgXG4gICAgLy9jaGVja2xpc3RcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKS5pbm5lclRleHQgPSBcIkNoZWNrbGlzdDpcIjtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tsaXN0SW5wdXRDb250YWluZXInKTtcbiAgICBcbiAgXG4gIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3RJbnB1dENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWxDTElucHV0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ0xJbnB1dCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ0xJbnB1dCcpLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV3JpdGUgaGVyZS4uLicpO1xuICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0SW5wdXRDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3RWxlU3BhbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdFbGVTcGFuJykuY2xhc3NMaXN0LmFkZCgnYWRkQnRuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0VsZVNwYW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3RWxlbWVudCgpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0VsZVNwYW4nKS5pbm5lclRleHQgPSBcIkFkZFwiO1xuICAgIC8vVUwgY2hlY2tsaXN0XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWxDaGVja2xpc3QnKTtcbiAgXG4gIFxuICBcbiAgICAvLyBDcmVhdGUgYSBcImNsb3NlXCIgYnV0dG9uIGFuZCBhcHBlbmQgaXQgdG8gZWFjaCBsaXN0IGl0ZW1cbiAgICB2YXIgbXlOb2RlbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiLnVsQ2hlY2tsaXN0ID4gTElcIik7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IG15Tm9kZWxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XG4gICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHUwMEQ3XCIpO1xuICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG4gICAgICBzcGFuLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgICBteU5vZGVsaXN0W2ldLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgXG4gICAgLy8gQ2xpY2sgb24gYSBjbG9zZSBidXR0b24gdG8gaGlkZSB0aGUgY3VycmVudCBsaXN0IGl0ZW1cbiAgICB2YXIgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIik7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGNsb3NlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjbG9zZVtpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaXYgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGRpdi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIEFkZCBhIFwiY2hlY2tlZFwiIHN5bWJvbCB3aGVuIGNsaWNraW5nIG9uIGEgbGlzdCBpdGVtXG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldikge1xuICAgICAgaWYgKGV2LnRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgICAgIGV2LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgbGlzdCBpdGVtIHdoZW4gY2xpY2tpbmcgb24gdGhlIFwiQWRkXCIgYnV0dG9uXG4gICAgZnVuY3Rpb24gbmV3RWxlbWVudCgpIHtcbiAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENMSW5wdXRcIikudmFsdWU7XG4gICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0VmFsdWUpO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQodCk7XG4gICAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCB3cml0ZSBzb21ldGhpbmchXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENoZWNrbGlzdFwiKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsQ0xJbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gIFxuICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcbiAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwRDdcIik7XG4gICAgICBzcGFuLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICBcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjbG9zZVtpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGRpdiA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vU1VCTUlUIEJVVFRPTlxuICAgIGxldCB0b2RvRm9yU3RvciA9IG5ldyBUb2RvcygpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWJtaXRCdG4nKTtcbiAgICBjb25zdCBzdWJtaXRCdG5HcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRCdG5HcmJici5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ0bkdyYmJyLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgXG4gICAgc3VibWl0QnRuR3JiYnIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsZXQgY2hlY2tsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudWxDaGVja2xpc3QgPiBsaScpO1xuICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1zQXJyID0gW107XG4gICAgICBsZXQgYWRkQnRuV2luZG93R3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybScpO1xuICAgICAgbGV0IHByb2plY3ROYW1lID0gdG9kbztcblxuICAgICAgY2hlY2tsaXN0SXRlbXMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgY2hlY2tsaXN0SXRlbXNBcnIucHVzaCh4LnRleHRDb250ZW50LnNsaWNlKDAsIC0xKSk7XG4gICAgICB9KTtcblxuICAgICAgdG9kb0ZvclN0b3IucHJvamVjdCA9IHByb2plY3ROYW1lO1xuICAgICAgdG9kb0ZvclN0b3IudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnZhbHVlO1xuICAgICAgdG9kb0ZvclN0b3IuZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgdG9kb0ZvclN0b3IuZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgIHRvZG9Gb3JTdG9yLnByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgIHRvZG9Gb3JTdG9yLm5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKS52YWx1ZTtcbiAgICAgIHRvZG9Gb3JTdG9yLmNoZWNrbGlzdCA9IEpTT04uc3RyaW5naWZ5KGNoZWNrbGlzdEl0ZW1zQXJyKTtcblxuICAgICAgXG4gICAgICBvZ1RvZG9zLnB1c2godG9kb0ZvclN0b3IpO1xuICAgICAgXG4gICAgICB0b2Rvc1N0b3Jlcih0b2RvRm9yU3RvciwgdW5kZWZpbmVkLCBwcm9qZWN0TmFtZSk7XG4gICAgICBwcm9qZWN0c01vZHVsZShwcm9qZWN0TmFtZSwgb2dUb2Rvcyk7XG5cbiAgICAgIGFkZEJ0bldpbmRvd0dyYmJyLnJlbW92ZSgpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIC8vQkFTSUMgRk9STSwgbm8gdG9kb1xuICAgIGJvZHlHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVRlbXBsYXRlJyk7XG5cbiAgICBjb25zdCBmb3JtQW5jaG9yR3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybVRlbXBsYXRlJyk7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwidGl0bGVcIl0nKS5pbm5lclRleHQgPSBcIlRpdGxlOiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwiZGVzY3JpcHRpb25cIl0nKS5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWVEYXRlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGUnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJkdWVEYXRlXCJdJykuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogXCI7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlDb250YWluZXInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHlDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndmFsdWUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnNTAnKTtcbiAgICBcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmFsdWVcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICBcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAwJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdzdGVwJywgJzEnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwicHJpb3JpdHlcIl0nKS5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdGVzJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbm90ZXMnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwibm90ZXNcIl0nKS5pbm5lclRleHQgPSBcIk5vdGVzOiBcIjtcbiAgXG4gICAgLy9jaGVja2xpc3RcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKS5pbm5lclRleHQgPSBcIkNoZWNrbGlzdDpcIjtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tsaXN0SW5wdXRDb250YWluZXInKTtcbiAgICBcbiAgXG4gIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3RJbnB1dENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWxDTElucHV0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ0xJbnB1dCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ0xJbnB1dCcpLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV3JpdGUgaGVyZS4uLicpO1xuICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0SW5wdXRDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3RWxlU3BhbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdFbGVTcGFuJykuY2xhc3NMaXN0LmFkZCgnYWRkQnRuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0VsZVNwYW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3RWxlbWVudCgpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0VsZVNwYW4nKS5pbm5lclRleHQgPSBcIkFkZFwiO1xuICAgIC8vVUwgY2hlY2tsaXN0XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWxDaGVja2xpc3QnKTtcbiAgXG4gIFxuICBcbiAgICAvLyBDcmVhdGUgYSBcImNsb3NlXCIgYnV0dG9uIGFuZCBhcHBlbmQgaXQgdG8gZWFjaCBsaXN0IGl0ZW1cbiAgICB2YXIgbXlOb2RlbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiLnVsQ2hlY2tsaXN0ID4gTElcIik7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IG15Tm9kZWxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XG4gICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHUwMEQ3XCIpO1xuICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG4gICAgICBzcGFuLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgICBteU5vZGVsaXN0W2ldLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgXG4gICAgLy8gQ2xpY2sgb24gYSBjbG9zZSBidXR0b24gdG8gaGlkZSB0aGUgY3VycmVudCBsaXN0IGl0ZW1cbiAgICB2YXIgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIik7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGNsb3NlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjbG9zZVtpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaXYgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGRpdi5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIEFkZCBhIFwiY2hlY2tlZFwiIHN5bWJvbCB3aGVuIGNsaWNraW5nIG9uIGEgbGlzdCBpdGVtXG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldikge1xuICAgICAgaWYgKGV2LnRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgICAgIGV2LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgbGlzdCBpdGVtIHdoZW4gY2xpY2tpbmcgb24gdGhlIFwiQWRkXCIgYnV0dG9uXG4gICAgZnVuY3Rpb24gbmV3RWxlbWVudCgpIHtcbiAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENMSW5wdXRcIikudmFsdWU7XG4gICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0VmFsdWUpO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQodCk7XG4gICAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCB3cml0ZSBzb21ldGhpbmchXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENoZWNrbGlzdFwiKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsQ0xJbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gIFxuICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcbiAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwRDdcIik7XG4gICAgICBzcGFuLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICBcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjbG9zZVtpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGRpdiA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBkaXYucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vU1VCTUlUIEJVVFRPTlxuICAgIGxldCB0b2RvRm9yU3RvciA9IG5ldyBUb2RvcygpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWJtaXRCdG4nKTtcbiAgICBjb25zdCBzdWJtaXRCdG5HcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRCdG5HcmJici5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ0bkdyYmJyLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgXG4gICAgc3VibWl0QnRuR3JiYnIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsZXQgY2hlY2tsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudWxDaGVja2xpc3QgPiBsaScpO1xuICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1zQXJyID0gW107XG4gICAgICBsZXQgYWRkQnRuV2luZG93R3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybScpO1xuICAgICAgbGV0IHByb2plY3ROYW1lID0gdG9kbztcblxuICAgICAgY2hlY2tsaXN0SXRlbXMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgY2hlY2tsaXN0SXRlbXNBcnIucHVzaCh4LnRleHRDb250ZW50LnNsaWNlKDAsIC0xKSk7XG4gICAgICB9KTtcblxuICAgICAgdG9kb0ZvclN0b3IucHJvamVjdCA9IHByb2plY3ROYW1lO1xuICAgICAgdG9kb0ZvclN0b3IudGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnZhbHVlO1xuICAgICAgdG9kb0ZvclN0b3IuZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgdG9kb0ZvclN0b3IuZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgIHRvZG9Gb3JTdG9yLnByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgIHRvZG9Gb3JTdG9yLm5vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKS52YWx1ZTtcbiAgICAgIHRvZG9Gb3JTdG9yLmNoZWNrbGlzdCA9IEpTT04uc3RyaW5naWZ5KGNoZWNrbGlzdEl0ZW1zQXJyKTtcblxuICAgICAgdG9kb3NTdG9yZXIodG9kb0ZvclN0b3IsIHVuZGVmaW5lZCwgcHJvamVjdE5hbWUpO1xuICAgICAgcHJvamVjdHNNb2R1bGUocHJvamVjdE5hbWUsIG9nVG9kb3MpO1xuXG4gICAgICBhZGRCdG5XaW5kb3dHcmJici5yZW1vdmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIFxufSIsImltcG9ydCBwcm9qZWN0c01vZHVsZSBmcm9tIFwiLi9wcm9qZWN0LW1vZHVsZVwiO1xuaW1wb3J0IHByb2plY3RzU3RvcmVyIGZyb20gXCIuL3Byb2plY3RzLXN0b3JlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qRm9ybU1ha2VyKGFuY2hvcikge1xuICAgIGNvbnN0IGJvZHlHcmJiciA9IGFuY2hvcjtcblxuICAgIGJvZHlHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvakZvcm1UZW1wbGF0ZScpO1xuXG4gICAgY29uc3QgZm9ybUFuY2hvckdyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2pGb3JtVGVtcGxhdGUnKTtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJ0aXRsZVwiXScpLmlubmVyVGV4dCA9IFwiVGl0bGU6IFwiO1xuICBcbiAgICAvL1NVQk1JVCBCVVRUT05cbiAgICAvLyBsZXQgdG9kb0ZvclN0b3IgPSBuZXcgVG9kb3MoKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0QnRuJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuR3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuJyk7XG4gICAgc3VibWl0QnRuR3JiYnIuaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcbiAgICBzdWJtaXRCdG5HcmJici5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIFxuICAgIHN1Ym1pdEJ0bkdyYmJyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGV0IGFkZEJ0bldpbmRvd0dyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qLWJ0bi1kaXYtZm9ybScpO1xuICAgIFxuICAgICAgcHJvamVjdHNTdG9yZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS52YWx1ZSk7XG5cbiAgICAgIHByb2plY3RzTW9kdWxlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikudmFsdWUpO1xuXG4gICAgICBhZGRCdG5XaW5kb3dHcmJici5yZW1vdmUoKTtcbiAgICB9KTtcbn0iLCJpbXBvcnQgZm9ybU1ha2VyIGZyb20gXCIuL2Zvcm0tbW9kdWxlXCI7XG5pbXBvcnQgdG9kb3NSZW1vdmVyIGZyb20gXCIuL3RvZG9zLXJlbW92ZXJcIjtcbmltcG9ydCBwcm9qZWN0c1JlbW92ZXIgZnJvbSBcIi4vcHJvamVjdHMtcmVtb3ZlclwiO1xuaW1wb3J0IHByb2pGb3JtTWFrZXIgZnJvbSBcIi4vcHJvamVjdC1mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzTW9kdWxlKHByb2plY3QsIHRvZG9zKSB7XG5cbiAgICBjb25zdCBwcm9qQ29udEdyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuXG4gICAgLy9kZWZhdWx0IHByb2plY3RcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHByb2pDb250R3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb250YWluZXInKTtcblxuICAgICAgICBsZXQgY2FyZENudHIgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWNvbnRhaW5lcicpKTtcbiAgICAgICAgbGV0IGxhdGVzdENhcmRDbnRyID0gY2FyZENudHIuc2xpY2UoLTEpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtY2FyZCcpO1xuXG4gICAgICAgIC8vZGVsIHByb2ogYnRuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai1idXR0b24tZGVsZXRlJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otYnV0dG9uLWRlbGV0ZScpLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otYnV0dG9uLWRlbGV0ZScpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnRGVsZXRlIFByb2plY3QnKTtcblxuICAgICAgICBsYXRlc3RDYXJkQ250clswXS5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHggPT4ge1xuXG4gICAgICAgICAgICBsZXQgcHJvak5hbWUgPSB4LnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcblxuICAgICAgICAgICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpe1xuICAgICAgICAgICAgICAgIGlmKGNvbmZpcm0oXCJTdXBlciBzdXJlP1wiKSl7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzUmVtb3Zlcihwcm9qTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHgudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBcIiArIHByb2pOYW1lICsgXCIgaGFzIGJlZW4gZGVsZXRlZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXJkJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS5pbm5lclRleHQgPSBcIkRlZmF1bHRcIjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXJkJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMtZGlzcGxheScpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhcmQnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tYnRuLWFkZCcpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWJ0bi1hZGQnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWJ0bi1hZGQnKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCBUb2RvJyk7XG5cbiAgICAgICAgbGV0IHByakNhcmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNhcmQnKSk7XG4gICAgICAgIGxldCBsYXRlc3RQcmpDYXJkID0gcHJqQ2FyZC5zbGljZSgtMSk7XG5cbiAgICAgICAgLy9hZGQgdG9kbyBidG5cbiAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsyXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHggPT4ge1xuXG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnRuLWRpdi1mb3JtJykpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmVkUHJvaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oeC50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblswXS5pbm5lclRleHQpKSB8fCBbXTtcblxuICAgICAgICAgICAgICAgIHByb2pDb250R3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bi1kaXYtZm9ybScpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tZGl2LWZvcm0nKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1idG4tZGl2LWZvcm0taGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tZGl2LWZvcm0taGVhZGVyJykuaW5uZXJUZXh0ID0gXCJBZGQgYSBUb2RvXCI7XG5cbiAgICAgICAgICAgICAgICAvL2Nsb3NlIGJ1dHRvbiBmb3IgZWRpdCB3aW5kb3dcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bi1kaXYtZm9ybS1idG4nKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybS1idG4nKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tZGl2LWZvcm0tYnRuJykudmFsdWUgPSBcIlhcIjtcblxuICAgICAgICAgICAgICAgIGZvcm1NYWtlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybScpLCB4LnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCwgc3RvcmVkUHJvaik7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRFbGVGb2N1cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnRuLWRpdi1mb3JtJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgLy9hZGQgcHJvamVjdCBidXR0b25cbiAgICAgICAgcHJvakNvbnRHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWNvbnRhaW5lci1hZGQtcHJvaicpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lci1hZGQtcHJvaicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai1idXR0b24tYWRkJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otYnV0dG9uLWFkZCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otYnV0dG9uLWFkZCcpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkIFByb2plY3QnKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1idXR0b24tYWRkJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB4ID0+IHtcblxuICAgICAgICAgICAgLy93b3JraW5nIGhlcmVcblxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2otYnRuLWRpdi1mb3JtJykpIHtcbiAgICAgICAgICAgICAgICBwcm9qQ29udEdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1wcm9qLWJ0bi1kaXYtZm9ybScpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qLWJ0bi1kaXYtZm9ybScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bi1kaXYtZm9ybS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybS1oZWFkZXInKS5pbm5lclRleHQgPSBcIkFkZCBhIFByb2plY3RcIjtcblxuICAgICAgICAgICAgICAgIC8vY2xvc2UgYnV0dG9uIGZvciBhZGQgd2luZG93XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qLWJ0bi1kaXYtZm9ybScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bi1kaXYtZm9ybS1idG4nKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybS1idG4nKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tZGl2LWZvcm0tYnRuJykudmFsdWUgPSBcIlhcIjtcblxuICAgICAgICAgICAgICAgIHByb2pGb3JtTWFrZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qLWJ0bi1kaXYtZm9ybScpKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnRuLWRpdi1mb3JtLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdEVsZUZvY3VzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qLWJ0bi1kaXYtZm9ybScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vQ0FSRCBVUERBVEVSXG4gICAgICAgIGxldCBwcm9qQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1jb250YWluZXInKTtcbiAgICAgICAgbGV0IGR1cGVGb3VuZCA9IGZhbHNlO1xuICAgICAgICBsZXQgZHVwZTtcbiAgICAgICAgbGV0IGR1cGVJbmRleDtcblxuICAgICAgICBwcm9qQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaW5keCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhcmQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIGR1cGVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZHVwZSA9IHByb2pDYXJkc1tpbmR4XTtcbiAgICAgICAgICAgICAgICBkdXBlSW5kZXggPSBpbmR4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZHVwZUZvdW5kICYmIHRvZG9zKXtcbiAgICAgICAgICAgIC8vdXBkYXRlIHRoZSBjYXJkIGlmIGR1cGUgZm91bmRcbiAgICAgICAgICAgIGR1cGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0ucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGxldCBwcmpDYXJkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1jYXJkJykpO1xuICAgICAgICAgICAgbGV0IGxhdGVzdFByakNhcmQgPSBbcHJqQ2FyZFtkdXBlSW5kZXhdXTtcblxuICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0pLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMtZGlzcGxheScpO1xuXG4gICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMtZGlzcGxheS11bCcpO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0b2RvcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpLmlubmVyVGV4dCA9IGAke0pTT04uc3RyaW5naWZ5KHZhbHVlLnRpdGxlKS5yZXBsYWNlQWxsKCdcIicsICcnKX0sICR7SlNPTi5zdHJpbmdpZnkodmFsdWUuZHVlRGF0ZSkucmVwbGFjZUFsbCgnXCInLCAnJyl9YDtcbiAgICBcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2xhc3NMaXN0LmFkZCgndG9kb3MtbGknKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi10b2Rvcy1saScpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vZWRpdCBidXR0b25cbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvakNvbnRHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybScpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybS1oZWFkZXInKS5pbm5lclRleHQgPSBcIkVkaXQgVG9kb1wiO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybS1idG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybS1idG4nKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0tYnRuJykudmFsdWUgPSBcIlhcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybU1ha2VyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybScpLHRvZG9zW2tleV0sdG9kb3MsIGtleSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtLWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdEVsZUZvY3VzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbC1idG4tdG9kb3MtbGknKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblxuICAgICAgICAgICAgICAgIC8vZGVsZXRlIHRvZG8gYnRuXG4gICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNoaWxkcmVuWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgeCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2Rvc1Byb2plY3ROYW1lID0geC50YXJnZXQucGFyZW50Tm9kZS5wYXJlbnROb2RlLnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5pbm5lclRleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RG9tSW5kZXggKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdLnNsaWNlLmNhbGwodGFyZ2V0LnBhcmVudE5vZGUuY2hpbGRyZW4pLmluZGV4T2YodGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb3NSZW1vdmVyKHRvZG9zUHJvamVjdE5hbWUsIGdldERvbUluZGV4KHgudGFyZ2V0LnBhcmVudE5vZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2V4cGFuZGVkIHZpZXdcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHgudGFyZ2V0LnRhZ05hbWUgPT0gXCJMSVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZEl0ZW0gPSBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRlZC12aWV3Jyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModG9kb3Nba2V5XSkuZm9yRWFjaCgoW25ld0l0ZW1LZXksIG5ld0l0ZW1WYWx1ZV0pID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV3SXRlbUtleSAhPSBcInByb2plY3RcIiAmJiB0eXBlb2YobmV3SXRlbVZhbHVlKSA9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChwYXJhQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhQ2hpbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRlZC12aWV3LXBhcmFzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShuZXdJdGVtS2V5KS5yZXBsYWNlQWxsKCdcIicsICcnKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIEpTT04uc3RyaW5naWZ5KG5ld0l0ZW1LZXkpLnJlcGxhY2VBbGwoJ1wiJywgJycpLnNsaWNlKDEpICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkobmV3SXRlbVZhbHVlKS5yZXBsYWNlQWxsKCdcIicsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0l0ZW1LZXkgIT0gXCJwcm9qZWN0XCIgJiYgbmV3SXRlbUtleSAhPSBcImNoZWNrbGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQocGFyYUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYUNoaWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZXhwYW5kZWQtdmlldy1wYXJhcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhQ2hpbGQuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkobmV3SXRlbUtleSkucmVwbGFjZUFsbCgnXCInLCAnJykuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBKU09OLnN0cmluZ2lmeShuZXdJdGVtS2V5KS5yZXBsYWNlQWxsKCdcIicsICcnKS5zbGljZSgxKSArIFwiOiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0l0ZW1LZXkgPT0gXCJjaGVja2xpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYUNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHBhcmFDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2V4cGFuZGVkLXZpZXctcGFyYXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYUNoaWxkLmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KG5ld0l0ZW1LZXkpLnJlcGxhY2VBbGwoJ1wiJywgJycpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgSlNPTi5zdHJpbmdpZnkobmV3SXRlbUtleSkucmVwbGFjZUFsbCgnXCInLCAnJykuc2xpY2UoMSkgKyBcIjogXCI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBuZXdJdGVtVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3SXRlbVZhbHVlLmxlbmd0aCAtIGkgIT0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYUNoaWxkLmlubmVyVGV4dCArPSBuZXdJdGVtVmFsdWVbaV0gKyBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5pbm5lclRleHQgKz0gbmV3SXRlbVZhbHVlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQtdmlldycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0ucmVwbGFjZUNoaWxkKG9sZEl0ZW0sIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5yZXBsYWNlQ2hpbGQobmV3SXRlbSwgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZC12aWV3JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChvbGRJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChuZXdJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy9DUkVBVEUgQSBORVcgQ0FSRCBGT1IgUFJPSkVDVFxuICAgICAgICBwcm9qQ29udEdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgbGV0IGNhcmRDbnRyID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1jb250YWluZXInKSk7XG5cbiAgICAgICAgbGV0IGxhdGVzdENhcmRDbnRyID0gY2FyZENudHIuc2xpY2UoLTEpO1xuXG4gICAgICAgIGxhdGVzdENhcmRDbnRyWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtY2FyZCcpO1xuXG4gICAgICAgIGxldCBwcmpDYXJkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1jYXJkJykpO1xuICAgICAgICBsZXQgbGF0ZXN0UHJqQ2FyZCA9IHByakNhcmQuc2xpY2UoLTEpO1xuXG4gICAgICAgIC8vZGVsIHByb2ogYnRuXG4gICAgICAgIGxhdGVzdENhcmRDbnRyWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai1idXR0b24tZGVsZXRlJyk7XG5cbiAgICAgICAgbGF0ZXN0Q2FyZENudHJbMF0uY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBsYXRlc3RDYXJkQ250clswXS5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0RlbGV0ZSBQcm9qZWN0Jyk7XG4gICAgICAgIFxuICAgICAgICBsYXRlc3RDYXJkQ250clswXS5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHggPT4ge1xuXG4gICAgICAgICAgICBsZXQgcHJvak5hbWUgPSB4LnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdLmlubmVyVGV4dDtcblxuICAgICAgICAgICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpe1xuICAgICAgICAgICAgICAgIGlmKGNvbmZpcm0oXCJTdXBlciBzdXJlP1wiKSl7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzUmVtb3Zlcihwcm9qTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHgudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUHJvamVjdCBcIiArIHByb2pOYW1lICsgXCIgaGFzIGJlZW4gZGVsZXRlZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC10aXRsZScpO1xuXG4gICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gcHJvamVjdDtcblxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RzLWRpc3BsYXknKTtcblxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMtZGlzcGxheS11bCcpO1xuXG4gICAgICAgIGlmKHRvZG9zKSB7XG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0b2RvcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpLmlubmVyVGV4dCA9IGAke0pTT04uc3RyaW5naWZ5KHZhbHVlLnRpdGxlKS5yZXBsYWNlQWxsKCdcIicsICcnKX0sICR7SlNPTi5zdHJpbmdpZnkodmFsdWUuZHVlRGF0ZSkucmVwbGFjZUFsbCgnXCInLCAnJyl9YDtcbiAgICBcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2xhc3NMaXN0LmFkZCgndG9kb3MtbGknKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi10b2Rvcy1saScpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vZWRpdCBidXR0b25cbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvakNvbnRHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybScpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybS1oZWFkZXInKS5pbm5lclRleHQgPSBcIkVkaXQgVG9kb1wiO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jbG9zZSBidXR0b24gZm9yIGVkaXQgd2luZG93XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0nKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXQtYnRuLWRpdi1mb3JtLWJ0bicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtLWJ0bicpLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybS1idG4nKS52YWx1ZSA9IFwiWFwiO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybU1ha2VyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybScpLCB0b2Rvc1trZXldLCB0b2Rvcywga2V5KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RWxlRm9jdXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWwtYnRuLXRvZG9zLWxpJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvL2RlbGV0ZSB0b2RvIGJ0blxuICAgICAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XS5jaGlsZHJlblsxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHggPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb3NQcm9qZWN0TmFtZSA9IHgudGFyZ2V0LnBhcmVudE5vZGUucGFyZW50Tm9kZS5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0O1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXREb21JbmRleCAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW10uc2xpY2UuY2FsbCh0YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlbikuaW5kZXhPZih0YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb3NSZW1vdmVyKHRvZG9zUHJvamVjdE5hbWUsIGdldERvbUluZGV4KHgudGFyZ2V0LnBhcmVudE5vZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHgudGFyZ2V0LnBhcmVudE5vZGUucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2V4cGFuZGVkIHZpZXdcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHgudGFyZ2V0LnRhZ05hbWUgPT0gXCJMSVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZEl0ZW0gPSBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRlZC12aWV3Jyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModG9kb3Nba2V5XSkuZm9yRWFjaCgoW25ld0l0ZW1LZXksIG5ld0l0ZW1WYWx1ZV0pID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV3SXRlbUtleSAhPSBcInByb2plY3RcIiAmJiB0eXBlb2YobmV3SXRlbVZhbHVlKSA9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChwYXJhQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhQ2hpbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRlZC12aWV3LXBhcmFzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShuZXdJdGVtS2V5KS5yZXBsYWNlQWxsKCdcIicsICcnKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIEpTT04uc3RyaW5naWZ5KG5ld0l0ZW1LZXkpLnJlcGxhY2VBbGwoJ1wiJywgJycpLnNsaWNlKDEpICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkobmV3SXRlbVZhbHVlKS5yZXBsYWNlQWxsKCdcIicsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0l0ZW1LZXkgIT0gXCJwcm9qZWN0XCIgJiYgbmV3SXRlbUtleSAhPSBcImNoZWNrbGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQocGFyYUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYUNoaWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZXhwYW5kZWQtdmlldy1wYXJhcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhQ2hpbGQuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkobmV3SXRlbUtleSkucmVwbGFjZUFsbCgnXCInLCAnJykuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBKU09OLnN0cmluZ2lmeShuZXdJdGVtS2V5KS5yZXBsYWNlQWxsKCdcIicsICcnKS5zbGljZSgxKSArIFwiOiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0l0ZW1LZXkgPT0gXCJjaGVja2xpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYUNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHBhcmFDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2V4cGFuZGVkLXZpZXctcGFyYXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYUNoaWxkLmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KG5ld0l0ZW1LZXkpLnJlcGxhY2VBbGwoJ1wiJywgJycpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgSlNPTi5zdHJpbmdpZnkobmV3SXRlbUtleSkucmVwbGFjZUFsbCgnXCInLCAnJykuc2xpY2UoMSkgKyBcIjogXCI7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBuZXdJdGVtVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3SXRlbVZhbHVlLmxlbmd0aCAtIGkgIT0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYUNoaWxkLmlubmVyVGV4dCArPSBuZXdJdGVtVmFsdWVbaV0gKyBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5pbm5lclRleHQgKz0gbmV3SXRlbVZhbHVlW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQtdmlldycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0ucmVwbGFjZUNoaWxkKG9sZEl0ZW0sIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5yZXBsYWNlQ2hpbGQobmV3SXRlbSwgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZC12aWV3JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChvbGRJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChuZXdJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2FkZCB0b2RvIGJ0blxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1idG4tYWRkJyk7XG5cbiAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQgVG9kbycpO1xuICAgICAgICAvL3N1Ym1pdCBidG4gZm9yIGFkZCB0b2RvIGJ0blxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgeCA9PiB7XG5cbiAgICAgICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tZGl2LWZvcm0nKSkge1xuICAgICAgICAgICAgICAgIGxldCBzdG9yZWRQcm9qID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh4LnRhcmdldC5wYXJlbnROb2RlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCkpO1xuXG4gICAgICAgICAgICAgICAgcHJvakNvbnRHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhZGQtYnRuLWRpdi1mb3JtJyk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnYWRkLWJ0bi1kaXYtZm9ybS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybS1oZWFkZXInKS5pbm5lclRleHQgPSBcIkFkZCBhIFRvZG9cIjtcblxuICAgICAgICAgICAgICAgIC8vY2xvc2UgYnV0dG9uIGZvciBhZGQgd2luZG93XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tZGl2LWZvcm0nKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2FkZC1idG4tZGl2LWZvcm0tYnRuJyk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tZGl2LWZvcm0tYnRuJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtYnRuLWRpdi1mb3JtLWJ0bicpLnZhbHVlID0gXCJYXCI7XG5cbiAgICAgICAgICAgICAgICBmb3JtTWFrZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tZGl2LWZvcm0nKSwgeC50YXJnZXQucGFyZW50Tm9kZS5jaGlsZHJlblswXS5pbm5lclRleHQsIHN0b3JlZFByb2opO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tZGl2LWZvcm0tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RWxlRm9jdXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLWJ0bi1kaXYtZm9ybScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgfSAgICAgICBcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xuXG4gICAgLy90aXRsZSwgcHJvZ3Jlc3MsIGFuZCBwcmlvcml0eVxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCB0b2Rvcykge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH1cbiAgXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0c1JlbW92ZXIoc29tZVByb2plY3QpIHtcbiAgICBcbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzb21lUHJvamVjdCkpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHNvbWVQcm9qZWN0LnRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKFwiUHJvamVjdCBub3QgZm91bmQhXCIpO1xuICAgIH0gXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNTdG9yZXIoc29tZVByb2plY3QpIHtcblxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzb21lUHJvamVjdC50aXRsZSkpe1xuICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKFwiUHJvamVjdCBhbHJlYWR5IGV4aXN0cyFcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc29tZVByb2plY3QsIFtdKTtcbiAgICB9XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuXG4gICAgY29uc3RydWN0b3IocHJvamVjdCx0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2tsaXN0KSB7XG4gICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xuICAgIH1cbiAgXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2Rvc1JlbW92ZXIoc29tZVByb2plY3QsIGluZGV4Rm9yRGVsKSB7XG5cbiAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVByb2plY3QpKSB8fCBbXTtcblxuICAgIHN0b3JlZEZvcm1EYXRhLnNwbGljZShpbmRleEZvckRlbCwgMSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkRm9ybURhdGEpKTtcbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2Rvc1N0b3Jlcihzb21lVG9kbywga2V5Rm9yVXBkYXRpbmcsIHByb2pOYW1lKSB7XG4gICAgbGV0IHN0b3JlZFByb2pEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzb21lVG9kby5wcm9qZWN0KSkgfHwgW107XG4gICAgY29uc3QgdG9kb1RpdGxlID0gc29tZVRvZG8udGl0bGU7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGlmKGtleUZvclVwZGF0aW5nKXtcbiAgICAgICAgc3RvcmVkUHJvakRhdGFba2V5Rm9yVXBkYXRpbmddID0gc29tZVRvZG87XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvbWVUb2RvLnByb2plY3QsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFByb2pEYXRhKSk7XG4gICAgfSBlbHNlIGlmIChwcm9qTmFtZSl7XG4gICAgICAgIHN0b3JlZFByb2pEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qTmFtZSkpIHx8IFtdO1xuICAgICAgICBzdG9yZWRQcm9qRGF0YS5wdXNoKHNvbWVUb2RvKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvak5hbWUsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFByb2pEYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmVkUHJvakRhdGEuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgaW4gdG9kbyl7XG4gICAgICAgICAgICAgICAgaWYodG9kb1t5XSA9PSB0b2RvVGl0bGUpe1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gc3RvcmVkUHJvakRhdGEuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBpZiAoc3RvcmVkUHJvakRhdGEgIT0gW10gJiYgZm91bmQpe1xuICAgICAgICAgICAgc3RvcmVkUHJvakRhdGFbaW5kZXhdID0gc29tZVRvZG87XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lVG9kby5wcm9qZWN0LCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qRGF0YSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcmVkUHJvakRhdGEucHVzaChzb21lVG9kbyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lVG9kby5wcm9qZWN0LCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qRGF0YSkpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFRvZG9zIGZyb20gXCIuL3RvZG9zLWNyZWF0b3IuanNcIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0cy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNTdG9yZXIgZnJvbSBcIi4vcHJvamVjdHMtc3RvcmVyLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNNb2R1bGUgZnJvbSBcIi4vcHJvamVjdC1tb2R1bGUuanNcIjtcbmltcG9ydCBcIi4vdG9kby1saXN0LmNzc1wiO1xuXG4vL3Rlc3RpbmcgaGVyZVxubGV0IHVzZXIgPSBuZXcgVG9kb3MoXCJCYXJuZXlcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCIyMDE0LTAyLTA5XCIsIFwiMzNcIiwgXCJkYXNkZlwiLCBbXCJjbFwiLCBcInRlc3RcIiwgXCJjbHRlc3RcIl0pO1xubGV0IHVzZXIyID0gbmV3IFRvZG9zKFwiQmFybmV5XCIsIFwiYXNkZmFzZFwiLCBcImJhZGFzZHJcIiwgXCIyMDIzLTAxLTAyXCIsIFwiNzBcIiwgXCJhc2RmY2NcIiwgW1wiY2xcIiwgXCJ0ZXN0XCIsIFwiY2x0ZXN0XCJdKTtcbmxldCB1c2VyMyA9IG5ldyBUb2RvcyhcIkJhcm5leVwiLCBcInRlc3RcIiwgXCJhc2RmXCIsIFwiMTk5OC0wNC0xMVwiLCBcIjIxXCIsIFwiYmJiYmJcIiwgW1wiY2xcIiwgXCJ0ZXN0XCIsIFwiY2x0ZXN0XCJdKTtcbmxldCB1c2VyNCA9IG5ldyBUb2RvcyhcIkJhcm5leVwiLCBcImp1c3QgYWRkZWRcIiwgXCJoZXJlXCIsIFwiMjAyMi0wNi0wNFwiLCBcIjk5XCIsIFwiYTtzbGRrZlwiLCBbXCJjbFwiLCBcInRlc3RcIiwgXCJjbHRlc3RcIl0pO1xubGV0IHNvbWVQcm9qZWN0ID0gbmV3IFByb2plY3RzKFwiQmFybmV5XCIsIHVzZXIpO1xuXG51c2VyLm5vdGVzID0gXCJob3RoZWFkXCI7XG5zb21lUHJvamVjdC50b2RvcyA9IFt1c2VyLCB1c2VyMiwgdXNlcjNdO1xuXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuLy8gcHJvamVjdHNTdG9yZXIoc29tZVByb2plY3QpO1xuXG4vLyBwcm9qZWN0c01vZHVsZShzb21lUHJvamVjdC50aXRsZSwgc29tZVByb2plY3QudG9kb3MpO1xuXG5wcm9qZWN0c01vZHVsZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==