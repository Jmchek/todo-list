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

.card-container {
  display: grid;
  padding: 10px;
  border-radius: 4px;
  grid-template-rows: 1fr 10%;

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

.proj-button-delete {
  border: 1px solid black;
}

.project-card {
  display: grid;
  grid-template-rows: 10% 1fr 10%;
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

.todos-li {
  display: grid;
  grid-template-columns: 1fr 20% 20%;
  align-items: center;
  height: 50px;
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
}`, "",{"version":3,"sources":["webpack://./src/todo-list.css"],"names":[],"mappings":"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","sourcesContent":["*{\n  font-family: Arial, Helvetica, sans-serif;\n}\n\np {\n  margin: 0;\n  display: grid;\n  justify-items: end;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nul li {\n  cursor: pointer;\n  position: relative;\n  padding: 12px 8px 12px 40px;\n  background: #eee;\n  font-size: 1.1rem;\n  transition: 0.2s;\n  list-style: none;\n\n  /* make the list items unselectable */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nform {\n  position: relative;\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  padding: 1em;\n  box-sizing: border-box;\n  background: #fff;\n\n  /* we create our grid */\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 2em 1fr 2em 2em 1fr 3em 1fr 2em;\n}\n\nlabel {\n  display: grid;\n  justify-items: end;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\noutput {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  padding-left: 10px;\n  padding-top: 10px;\n\n  min-height: 50px;\n}\n\n.disp-title {\n  margin: 0;\n  padding: 20px;\n}\n\n.newEleSpan {\n  padding: 10px;\n  width: 90%;\n  background: #d9d9d9;\n  color: #555;\n  float: left;\n  text-align: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: 0.3s;\n  border-radius: 0;\n}\n\n.newEleSpan:hover {\n  background-color: #bbb;\n}\n\n.card-container {\n  display: grid;\n  padding: 10px;\n  border-radius: 4px;\n  grid-template-rows: 1fr 10%;\n\n  background-color: #e0e0e0;\n}\n\n.card-container-add-proj {\n  display: grid;\n  padding: 10px;\n  border-radius: 4px;\n\n  background-color: #e0e0e0;\n}\n\n.checklistInputContainer {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n\n.del-btn-todos-li {\n\n  display: grid;\n  \n  background-image: url('/src/del-button.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.del-btn-todos-li:hover {\n\n  display: grid;\n\n  background-image: url('/src/del-button.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: #f44336;\n  cursor: pointer;\n}\n\n.description {\n  font-size: 1.1rem;\n}\n\n.dueDate {\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n.edit-btn-div-form {\n  position: absolute;\n  justify-self: center;\n  align-self: center;\n\n  height: 600px;\n  width: 500px;\n\n  grid-template-columns: 90% 10%;\n  grid-template-rows: 50px 1fr;\n  \n  display: grid;\n}\n\n.edit-btn-div-form-btn {\n  justify-self: end;\n  align-self: start;\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  background-color: #f44336;\n}\n\n.edit-btn-div-form-header {\n  background-color: #f9f9f9;\n  padding: 15px;\n  margin: 0;\n}\n\n.edit-btn-todos-li {\n\n  display: grid;\n\n  background-image: url('/src/edit-button.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.edit-btn-todos-li:hover {\n  display: grid;\n\n  background-image: url('/src/edit-button.svg');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: rgb(221, 221, 107);\n  cursor: pointer;\n}\n\n.expanded-view {\n  display: grid;\n  justify-items: start;\n  background-color: rgb(255, 255, 255);\n  width: 350px;\n  height: 350px;\n  border: 1px solid black;\n  align-content: space-evenly;\n  justify-content: space-evenly;\n\n  z-index:1;\n  position: absolute;\n}\n\n.expanded-view-paras {\n  border-bottom: 1px solid black;\n}\n\n.expanded-view:hover {\n  cursor: pointer;\n}\n\n.hidden {\n  white-space: nowrap; \n  width: 250px; \n  overflow: hidden;\n  text-overflow: ellipsis; \n}\n\n.notes {\n  font-size: 1.1rem;\n}\n\n.priorityContainer {\n  display: grid;\n  grid-template-columns: 80% 10%;\n  grid-template-rows: 1em;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.priorityContainer > .priority {\n  padding: 0;\n}\n\n.proj-button-delete {\n  border: 1px solid black;\n}\n\n.project-card {\n  display: grid;\n  grid-template-rows: 10% 1fr 10%;\n}\n\n.project-title {\n  margin: 0;\n  justify-self: center;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n  padding: 10px;\n  border-radius: 4px;\n\n  margin: 1%;\n  width:  clamp(1650px, 50vw, 1337px);\n  height: 75vh;\n  background-color: #b9b7b7;\n}\n\n.submitBtn {\n  grid-column-end: 3;\n\n  width: 100%;\n  background: #d9d9d9;\n  color: #555;\n  float: left;\n  text-align: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: 0.3s;\n  border-radius: 0;\n}\n\n.submitBtn:hover {\n  background-color: #bbb;\n}\n\n.title {\n  border: 1px solid black;\n  border-radius: 2px;\n}\n\n.todo-btn-add {\n  border: 1px solid black;\n}\n\n.todos-li {\n  display: grid;\n  grid-template-columns: 1fr 20% 20%;\n  align-items: center;\n  height: 50px;\n}\n\n.todos-li > input {\n  padding: 13px;\n}\n\n.ulChecklist {\n  display: grid;\n  grid-column-end: 3;\n\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}\n\n.ulCLInput {\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n.value {\n  border: 1px solid black;\n  border-radius: 4px;\n  padding: 1px;\n  font-size: 0.9rem;\n}\n\nul li:nth-child(odd) {\n  background: #f9f9f9;\n}\n\n/* Darker background-color on hover */\nul li:hover {\n  background: #ddd;\n}\n\n/* When clicked on, add a background color and strike out text */\nul li.checked {\n  background: #888;\n  color: #fff;\n  text-decoration: line-through;\n}\n\n/* Add a \"checked\" mark when clicked on */\nul li.checked::before {\n  content: '';\n  position: absolute;\n  border-color: #fff;\n  border-style: solid;\n  border-width: 0 2px 2px 0;\n  top: 10px;\n  left: 16px;\n  transform: rotate(45deg);\n  height: 15px;\n  width: 7px;\n}\n\n/* Style the close button */\n.close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 12px 16px 12px 16px;\n}\n\n.close:hover {\n  background-color: #f44336;\n  color: white;\n}\n\n/* Style the input */\ninput {\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  padding: 10px;\n  float: left;\n  font-size: 1.1rem;\n}"],"sourceRoot":""}]);
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

  if(arguments.length > 1) {
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
          div.style.display = "none";
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

    console.log(todo.dueDate);
    console.log(typeof(todo.dueDate));
    
    //we are trying to update the data in localStorage when we add or remove a checklist item
    let checklistItemsPre = document.querySelector('.ulChecklist');
  
    todo.checklist.forEach(x => {
      checklistItemsPre.appendChild(document.createElement('li')).innerText = x;
      // document.querySelectorAll('.ulChecklist > li').appendChild(document.createElement('span')).setAttribute('class', 'close');
      // document.querySelectorAll('.close').innerText = "x";
    });

    document.querySelectorAll('.ulChecklist > li').forEach( y => {
      y.appendChild(document.createElement('span')).setAttribute('class', 'close');
    });

    document.querySelectorAll('li > span').forEach(z => {
      z.innerText = "\u00D7";
    });

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
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

      //working here, have to figure out how to update data in local storage correctly
      // todosStorer is storing by title which is changing
      Object.keys(ogTodos[keyForUpdating]).forEach((x) => {
        Object.keys(todoForStor).forEach((y) => {
          if (x == y && ogTodos[keyForUpdating][x] != todoForStor[y] && x != 'checklist'){
            ogTodos[keyForUpdating][x] = todoForStor[y];
          } else if (x == 'checklist') {
            ogTodos[keyForUpdating][x] = checklistItemsArr;
          }
        })
      });

      (0,_todos_storer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(todoForStor, keyForUpdating);
      (0,_project_module_js__WEBPACK_IMPORTED_MODULE_2__["default"])(todoForStor.project, ogTodos);

      editWindowGrbbr.remove();
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
        div.style.display = "none";
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
          div.style.display = "none";
        }
      }
    }
  
    //SUBMIT BUTTON
    formAnchorGrbbr.appendChild(document.createElement('button')).setAttribute('class', 'submitBtn');
    const submitBtnGrbbr = document.querySelector('.submitBtn');
    submitBtnGrbbr.innerText = "Submit";
    submitBtnGrbbr.setAttribute('type', 'button');
  
    submitBtnGrbbr.addEventListener('click', () => {
      let checklistItems = document.querySelectorAll('li');
      let checklistItemsArr = [];
  
      checklistItems.forEach(x => {
        checklistItemsArr.push(x.textContent);
      });
  
      arrForStor.push(document.querySelector(".title").value);
      arrForStor.push(document.querySelector(".description").value);
      arrForStor.push(document.querySelector(".dueDate").value);
      arrForStor.push(document.querySelector(".priority").value);
      arrForStor.push(document.querySelector(".notes").value);
      arrForStor.push( JSON.stringify(checklistItemsArr));
  
      document.querySelector(".title").value = "";
      document.querySelector(".description").value = "";
      document.querySelector(".dueDate").value = "";
      document.querySelector(".priority").value = "";
      document.querySelector(".notes").value = "";
      document.querySelector(".value").textContent = 50;
      document.querySelector(".ulChecklist").innerHTML = "";
  
      checklistItemsArr.length = 0;
  
      checklistItems.forEach(x => {
        x.textContent = "";
      });
  
      (0,_todos_storer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrForStor);
  
      arrForStor.length = 0;
  
  
      //test stuff here
      const restoredSession = JSON.parse(localStorage.getItem("undefined"));
    });
  }

  
}

/***/ }),

/***/ "./src/form-storer.js":
/*!****************************!*\
  !*** ./src/form-storer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects_storer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects-storer */ "./src/projects-storer.js");
/* harmony import */ var _todos_storer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-storer */ "./src/todos-storer.js");



// document.getElementById('formTemplate').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const dueDate = document.getElementById('dueDate').value;
//     const priority = document.getElementById('priority').value;
//     const notes = document.getElementById('notes').value;
//     const checklist = document.getElementById('checklist').value;

//     const formData = {
//         title: title,
//         description: description,
//         dueDate: dueDate,
//         priority: priority,
//         notes: notes,
//         checklist : checklist
//     };

//     // console.log(formData);
//     // console.log("saveFormData is working");

//     // if it's a todo LOGIC HERE
//     // todosStorer(formData);
//     // else if it's a project
//     //projectsStorer(formData);
// });

// function saveFormData(formData) {
//     const storedFormData = JSON.parse(localStorage.getItem('formData')) || [];

//     storedFormData.push(formData);

//     localStorage.setItem('formData', JSON.stringify(storedFormData));
// }

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


function projectsModule(project, todos) {
    // this function receives a local storage key and todos, it will create an html display and append it to 

    const projContGrbbr = document.querySelector('.projects-container');

    //default project
    if (arguments.length == 0) {
        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container');

        document.querySelector('.card-container').appendChild(document.createElement('div')).setAttribute('class', 'project-card');

        document.querySelector('.card-container').appendChild(document.createElement('input')).setAttribute('class', 'proj-button-delete');

        document.querySelector('.proj-button-delete').setAttribute('type', 'button');
        document.querySelector('.proj-button-delete').setAttribute('value', 'Delete Project');

        document.querySelector('.project-card').appendChild(document.createElement('h3')).setAttribute('class', 'project-title');

        document.querySelector('.project-title').innerText = "Default";

        document.querySelector('.project-card').appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

        document.querySelector('.project-card').appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        document.querySelector('.todo-btn-add').setAttribute('type', 'button');
        document.querySelector('.todo-btn-add').setAttribute('value', 'Add Todo');


        //add a project card
        projContGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'card-container-add-proj');

        document.querySelector('.card-container-add-proj').appendChild(document.createElement('input')).setAttribute('class', 'proj-button-add');

        document.querySelector('.proj-button-add').setAttribute('type', 'button');
        document.querySelector('.proj-button-add').setAttribute('value', 'Add Project');
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

        if (dupeFound){
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
    
                        (0,_form_module__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('.edit-btn-div-form'),todos[key]);
        
                        document.querySelector('.edit-btn-div-form-btn').addEventListener('click', editEleFocus => {
                            document.querySelector('.edit-btn-div-form').remove();
                        });
                    }
                    
                });
    
                latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'del-btn-todos-li');
    
                // latestPrjCard[0].children[1].children[0].children[key].children[1].appendChild(document.createElement('img')).src = DelButton;
    
                latestPrjCard[0].children[1].children[0].children[key].children[0].setAttribute('type', 'button');
    
                latestPrjCard[0].children[1].children[0].children[key].children[1].setAttribute('type', 'button');
                
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
                            } else if (newItemKey != "project") {
                                let paraChild = document.createElement('p');
                                newItem.appendChild(paraChild);
                                paraChild.setAttribute('class', 'expanded-view-paras');
                                paraChild.innerText = JSON.stringify(newItemKey).replaceAll('"', '').charAt(0).toUpperCase() + JSON.stringify(newItemKey).replaceAll('"', '').slice(1) + ": ";
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

        latestCardCntr[0].appendChild(document.createElement('input')).setAttribute('class', 'proj-button-delete');

        latestCardCntr[0].children[1].setAttribute('type', 'button');
        latestCardCntr[0].children[1].setAttribute('value', 'Delete Project');

        latestPrjCard[0].appendChild(document.createElement('h3')).setAttribute('class', 'project-title');

        latestPrjCard[0].children[0].innerText = project;

        latestPrjCard[0].appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

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

                    //close button for edit window
                    document.querySelector('.edit-btn-div-form').appendChild(document.createElement('input')).setAttribute('class', 'edit-btn-div-form-btn');
                    document.querySelector('.edit-btn-div-form-btn').setAttribute('type', 'button');
                    document.querySelector('.edit-btn-div-form-btn').value = "X";

                    (0,_form_module__WEBPACK_IMPORTED_MODULE_0__["default"])(document.querySelector('.edit-btn-div-form'), todos[key], todos, key);
                    console.log(todos[key]);
    
                    document.querySelector('.edit-btn-div-form-btn').addEventListener('click', editEleFocus => {
                        document.querySelector('.edit-btn-div-form').remove();
                    });
                }
                
            });

            latestPrjCard[0].children[1].children[0].children[key].appendChild(document.createElement('input')).setAttribute('class', 'del-btn-todos-li');

            latestPrjCard[0].children[1].children[0].children[key].children[0].setAttribute('type', 'button');

            latestPrjCard[0].children[1].children[0].children[key].children[1].setAttribute('type', 'button');
            
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

        latestPrjCard[0].appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        latestPrjCard[0].children[2].setAttribute('type', 'button');
        latestPrjCard[0].children[2].setAttribute('value', 'Add Todo');
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

/***/ "./src/projects-manager.js":
/*!*********************************!*\
  !*** ./src/projects-manager.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectsManager)
/* harmony export */ });
function projectsManager() {

    //digs through local storage and displays the output
    console.log(window.localStorage.length);




    //user boots up
    //if the local storage is empty, this function displays a default, empty project to start
    // the default project will be built by our project module
    // the product module will create a "card" for a project by reading its data or if none is provided, add a default project (maybe we pass the proj obj as arguments)
    // THIS function will first put all the local storage in an iterable container, then we can see where to go
    console.log(Object.keys(localStorage));
    console.log(Object.entries(localStorage));

    Object.keys(localStorage).forEach(key => {
        console.log(`${key} - ${localStorage.getItem(key)}`);
      });

    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        const value = localStorage.getItem(key);
        
        console.log(`${key} - ${value}`);
    }

    //now we know how to iterate over local storage, we need a way to put that data to display, can delegate to a module later

    const projContGrbbr = document.querySelector('.projects-container');

    // for every project key, we will create a "card" and add it to the projects-container
    // iterate over localstorage, if there is a key we create a header with the project title
    // iterate over the todos and add it to the div


    // WORKING ON THIS:  turn project module into a "card"-maker, the idea being projects manager looks through localStorage, if it finds a key and a value pair, it will send the data over to project-module to create a container. Project-module will accept a key, and a value as arguments then process them
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
    // console.log(someProject.title);
    // console.log(localStorage.getItem(someProject.title));
    // console.log(JSON.parse(localStorage.getItem(someProject.title)));
    //maybe we don't need to parse JSON cause it's not stored in json?

    if (localStorage.getItem(someProject.title)){
        throw console.error("Project already exists!");
    } else {
        localStorage.setItem(someProject.title, JSON.stringify(someProject.todos));
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
function todosStorer(someTodo, keyForUpdating) {
    let storedProjData = JSON.parse(localStorage.getItem(someTodo.project)) || [];
    const todoTitle = someTodo.title;
    let found = false;
    let index = 0;

    if(keyForUpdating){
        storedProjData[keyForUpdating] = someTodo;
        localStorage.setItem(someTodo.project, JSON.stringify(storedProjData));
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
/* harmony import */ var _todos_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos-manager.js */ "./src/todos-manager.js");
/* harmony import */ var _projects_creator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-creator.js */ "./src/projects-creator.js");
/* harmony import */ var _projects_manager_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-manager.js */ "./src/projects-manager.js");
/* harmony import */ var _form_storer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-storer.js */ "./src/form-storer.js");
/* harmony import */ var _todos_storer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todos-storer.js */ "./src/todos-storer.js");
/* harmony import */ var _projects_storer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projects-storer.js */ "./src/projects-storer.js");
/* harmony import */ var _todos_remover_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./todos-remover.js */ "./src/todos-remover.js");
/* harmony import */ var _projects_remover_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects-remover.js */ "./src/projects-remover.js");
/* harmony import */ var _project_module_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project-module.js */ "./src/project-module.js");
/* harmony import */ var _form_module_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./form-module.js */ "./src/form-module.js");
/* harmony import */ var _todo_list_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./todo-list.css */ "./src/todo-list.css");
















//testing here
let user = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "foo", "bar", "2014-02-09", "33", "dasdf", ["cl", "test", "cltest"]);
let user2 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "asdfasd", "badasdr", "2023-01-02", "70", "asdfcc", ["cl", "test", "cltest"]);
let user3 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "test", "asdf", "1998-04-11", "21", "bbbbb", ["cl", "test", "cltest"]);
let user4 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "just added", "here", "2022-06-04", "99", "a;sldkf", ["cl", "test", "cltest"]);
let someProject = new _projects_creator_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Barney", user);

user.notes = "hothead";
someProject.todos = [user, user2, user3];


// let testClassGrbbr = document.querySelector(".testClass");
// testClassGrbbr.addEventListener("click", x => {
//     // projectsManager(someProject);
// });

// console.log(JSON.parse(localStorage.getItem('test'))[2]);
// // localStorage.getItem('test')[2].todos[1] = user3;
// console.log(JSON.parse(localStorage.getItem('test'))[2]._todos);

// JSON.parse(localStorage.getItem('test'))[2]._todos.push('test');

// console.log(JSON.parse(localStorage.getItem('test'))[2]._todos);

// document.getElementById('formTemplate').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const dueDate = document.getElementById('dueDate').value;
//     const priority = document.getElementById('priority').value;
//     const notes = document.getElementById('notes').value;
//     const checklist = document.getElementById('checklist');

//     const formData = {
//         project: 'test',
//         title: title,
//         description: description,
//         dueDate: dueDate,
//         priority: priority,
//         notes: notes,
//         checklist : checklist
//     };

//     // todosStorer(formData);
//     // projectsStorer(someProject);

// // console.log(localStorage);
// // console.log(JSON.parse(localStorage.getItem('test')));
// // console.log(JSON.parse(localStorage.getItem('test')).find(x => x.title == 'test' ));

//     // let test = JSON.parse(localStorage.getItem('test'));
    
//     // for (let i = 0; i < test.length; i++) {
//     //     if (test[i] == 'hello pls work') {
//     //         test.splice(i, 1);
//     //     }
//     // }
    
//     // localStorage.setItem('test', JSON.stringify(test));

//     // for (let i in localStorage.getItem('test')) {
//     //     i++
//     //     for (let j in localStorage.getItem('test')[i].models) {
//     //       x += myObj.cars[i].models[j];
//     //     }
//     //   }
// });

// formMaker();

localStorage.clear();

// // console.log(localStorage);

(0,_projects_storer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(someProject);
// todosStorer(someProject);

// projectsManager();


// projectsModule();
(0,_project_module_js__WEBPACK_IMPORTED_MODULE_9__["default"])(someProject.title, someProject.todos);

// someProject.todos = [user4, user2, user3];

// setTimeout(() => {
//     projectsModule(someProject.title, someProject.todos);
//   }, 2000);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQXNDO0FBQ2xGLDRDQUE0Qyw2SEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsV0FBVyxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksNEJBQTRCLDhDQUE4QyxHQUFHLE9BQU8sY0FBYyxrQkFBa0IsdUJBQXVCLHdCQUF3QixzQkFBc0IsR0FBRyxRQUFRLGNBQWMsZUFBZSxHQUFHLFdBQVcsb0JBQW9CLHVCQUF1QixnQ0FBZ0MscUJBQXFCLHNCQUFzQixxQkFBcUIscUJBQXFCLDBFQUEwRSwyQkFBMkIsMEJBQTBCLHNCQUFzQixHQUFHLFVBQVUsdUJBQXVCLGlCQUFpQixrQkFBa0IsbUJBQW1CLGlCQUFpQiwyQkFBMkIscUJBQXFCLGdEQUFnRCxtQkFBbUIsMENBQTBDLHdEQUF3RCxHQUFHLFdBQVcsa0JBQWtCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLEdBQUcsWUFBWSxrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLGNBQWMsdUJBQXVCLHNCQUFzQix1QkFBdUIsR0FBRyxpQkFBaUIsY0FBYyxrQkFBa0IsR0FBRyxpQkFBaUIsa0JBQWtCLGVBQWUsd0JBQXdCLGdCQUFnQixnQkFBZ0IsdUJBQXVCLHNCQUFzQixvQkFBb0IscUJBQXFCLHFCQUFxQixHQUFHLHVCQUF1QiwyQkFBMkIsR0FBRyxxQkFBcUIsa0JBQWtCLGtCQUFrQix1QkFBdUIsZ0NBQWdDLGdDQUFnQyxHQUFHLDhCQUE4QixrQkFBa0Isa0JBQWtCLHVCQUF1QixnQ0FBZ0MsR0FBRyw4QkFBOEIsa0JBQWtCLG1DQUFtQyxHQUFHLHVCQUF1QixvQkFBb0IscURBQXFELDZCQUE2QixpQ0FBaUMsR0FBRyw2QkFBNkIsb0JBQW9CLG1EQUFtRCw2QkFBNkIsaUNBQWlDLDhCQUE4QixvQkFBb0IsR0FBRyxrQkFBa0Isc0JBQXNCLEdBQUcsY0FBYyw0QkFBNEIsdUJBQXVCLEdBQUcsd0JBQXdCLHVCQUF1Qix5QkFBeUIsdUJBQXVCLG9CQUFvQixpQkFBaUIscUNBQXFDLGlDQUFpQyxzQkFBc0IsR0FBRyw0QkFBNEIsc0JBQXNCLHNCQUFzQixvQkFBb0IsaUJBQWlCLGdCQUFnQiw4QkFBOEIsR0FBRywrQkFBK0IsOEJBQThCLGtCQUFrQixjQUFjLEdBQUcsd0JBQXdCLG9CQUFvQixvREFBb0QsNkJBQTZCLGlDQUFpQyxHQUFHLDhCQUE4QixrQkFBa0Isb0RBQW9ELDZCQUE2QixpQ0FBaUMseUNBQXlDLG9CQUFvQixHQUFHLG9CQUFvQixrQkFBa0IseUJBQXlCLHlDQUF5QyxpQkFBaUIsa0JBQWtCLDRCQUE0QixnQ0FBZ0Msa0NBQWtDLGdCQUFnQix1QkFBdUIsR0FBRywwQkFBMEIsbUNBQW1DLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLGFBQWEseUJBQXlCLGtCQUFrQixxQkFBcUIsNkJBQTZCLEdBQUcsWUFBWSxzQkFBc0IsR0FBRyx3QkFBd0Isa0JBQWtCLG1DQUFtQyw0QkFBNEIsMEJBQTBCLG1DQUFtQyxHQUFHLG9DQUFvQyxlQUFlLEdBQUcseUJBQXlCLDRCQUE0QixHQUFHLG1CQUFtQixrQkFBa0Isb0NBQW9DLEdBQUcsb0JBQW9CLGNBQWMseUJBQXlCLEdBQUcseUJBQXlCLGtCQUFrQiwwQ0FBMEMsZ0NBQWdDLGNBQWMsa0JBQWtCLHVCQUF1QixpQkFBaUIsd0NBQXdDLGlCQUFpQiw4QkFBOEIsR0FBRyxnQkFBZ0IsdUJBQXVCLGtCQUFrQix3QkFBd0IsZ0JBQWdCLGdCQUFnQix1QkFBdUIsc0JBQXNCLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsc0JBQXNCLDJCQUEyQixHQUFHLFlBQVksNEJBQTRCLHVCQUF1QixHQUFHLG1CQUFtQiw0QkFBNEIsR0FBRyxlQUFlLGtCQUFrQix1Q0FBdUMsd0JBQXdCLGlCQUFpQixHQUFHLHVCQUF1QixrQkFBa0IsR0FBRyxrQkFBa0Isa0JBQWtCLHVCQUF1QixrRUFBa0UsR0FBRyxnQkFBZ0IsNEJBQTRCLHVCQUF1QixHQUFHLFlBQVksNEJBQTRCLHVCQUF1QixpQkFBaUIsc0JBQXNCLEdBQUcsMEJBQTBCLHdCQUF3QixHQUFHLHlEQUF5RCxxQkFBcUIsR0FBRyxzRkFBc0YscUJBQXFCLGdCQUFnQixrQ0FBa0MsR0FBRyx5RUFBeUUsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsd0JBQXdCLDhCQUE4QixjQUFjLGVBQWUsNkJBQTZCLGlCQUFpQixlQUFlLEdBQUcsMENBQTBDLHVCQUF1QixhQUFhLFdBQVcsaUNBQWlDLEdBQUcsa0JBQWtCLDhCQUE4QixpQkFBaUIsR0FBRyxrQ0FBa0MsY0FBYyxpQkFBaUIscUJBQXFCLGtCQUFrQixnQkFBZ0Isc0JBQXNCLEdBQUcsbUJBQW1CO0FBQ3BqUztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQy9YMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywwRkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLDBGQUFPLElBQUksMEZBQU8sVUFBVSwwRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiNEM7QUFDTDtBQUNVOztBQUVsQztBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUCxNQUFNLDREQUFXO0FBQ2pCLE1BQU0sOERBQWM7O0FBRXBCO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE1BQU0sNERBQVc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsWCtDO0FBQ047O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ3NDOztBQUV2QjtBQUNmOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsa0hBQWtILGdEQUFnRCxJQUFJLGtEQUFrRDtBQUN4TjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7O0FBRWIsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLDhHQUE4RyxnREFBZ0QsSUFBSSxrREFBa0Q7O0FBRXBOOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHdEQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxhQUFhOztBQUViOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL1FlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JlOztBQUVmO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsS0FBSyxJQUFJLDBCQUEwQjtBQUMxRCxPQUFPOztBQUVQLHdCQUF3Qiw2QkFBNkI7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEtBQUssSUFBSSxNQUFNO0FBQ3RDOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1BlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1p1QztBQUNPO0FBQ0Y7O0FBRTdCOztBQUVmO0FBQ0Esc0JBQXNCLHlEQUFLOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEJlOztBQUVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDM0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ087QUFDRDtBQUNPOztBQUVSO0FBQ0E7QUFDTTtBQUNKO0FBQ007O0FBRUg7O0FBRVI7QUFDaEI7O0FBRXpCO0FBQ0EsZUFBZSx5REFBSztBQUNwQixnQkFBZ0IseURBQUs7QUFDckIsZ0JBQWdCLHlEQUFLO0FBQ3JCLGdCQUFnQix5REFBSyx3REFBd0Q7QUFDN0Usc0JBQXNCLDREQUFROztBQUU5QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7O0FBRUE7O0FBRUE7O0FBRUEsK0RBQWM7QUFDZDs7QUFFQTs7O0FBR0E7QUFDQSw4REFBYzs7QUFFZDs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuY3NzPzNmYzMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0tc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtcmVtb3Zlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1yZW1vdmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1zdG9yZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvZGVsLWJ1dHRvbi5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIvc3JjL2VkaXQtYnV0dG9uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCp7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG51bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxudWwgbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTJweCA4cHggMTJweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgdHJhbnNpdGlvbjogMC4ycztcbiAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAvKiBtYWtlIHRoZSBsaXN0IGl0ZW1zIHVuc2VsZWN0YWJsZSAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5mb3JtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNTAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAxZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgLyogd2UgY3JlYXRlIG91ciBncmlkICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAyMHB4O1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJlbSAxZnIgMmVtIDJlbSAxZnIgM2VtIDFmciAyZW07XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxub3V0cHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbnRleHRhcmVhIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcblxuICBtaW4taGVpZ2h0OiA1MHB4O1xufVxuXG4uZGlzcC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLm5ld0VsZVNwYW4ge1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTAlO1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBjb2xvcjogIzU1NTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLm5ld0VsZVNwYW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDEwJTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4uY2FyZC1jb250YWluZXItYWRkLXByb2oge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbn1cblxuLmNoZWNrbGlzdElucHV0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xufVxuXG4uZGVsLWJ0bi10b2Rvcy1saSB7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uZGVsLWJ0bi10b2Rvcy1saTpob3ZlciB7XG5cbiAgZGlzcGxheTogZ3JpZDtcblxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmR1ZURhdGUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uZWRpdC1idG4tZGl2LWZvcm0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG5cbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDUwMHB4O1xuXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDFmcjtcbiAgXG4gIGRpc3BsYXk6IGdyaWQ7XG59XG5cbi5lZGl0LWJ0bi1kaXYtZm9ybS1idG4ge1xuICBqdXN0aWZ5LXNlbGY6IGVuZDtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbn1cblxuLmVkaXQtYnRuLWRpdi1mb3JtLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVkaXQtYnRuLXRvZG9zLWxpIHtcblxuICBkaXNwbGF5OiBncmlkO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuXG4uZWRpdC1idG4tdG9kb3MtbGk6aG92ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDEwNyk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmV4cGFuZGVkLXZpZXcge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICB3aWR0aDogMzUwcHg7XG4gIGhlaWdodDogMzUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuXG4gIHotaW5kZXg6MTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uZXhwYW5kZWQtdmlldy1wYXJhcyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmV4cGFuZGVkLXZpZXc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oaWRkZW4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbiAgd2lkdGg6IDI1MHB4OyBcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxufVxuXG4ubm90ZXMge1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLnByaW9yaXR5Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCUgMTAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFlbTtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wcmlvcml0eUNvbnRhaW5lciA+IC5wcmlvcml0eSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9qLWJ1dHRvbi1kZWxldGUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnByb2plY3QtY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAlIDFmciAxMCU7XG59XG5cbi5wcm9qZWN0LXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnByb2plY3RzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgbWFyZ2luOiAxJTtcbiAgd2lkdGg6ICBjbGFtcCgxNjUwcHgsIDUwdncsIDEzMzdweCk7XG4gIGhlaWdodDogNzV2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjdiNztcbn1cblxuLnN1Ym1pdEJ0biB7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcblxuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcbiAgY29sb3I6ICM1NTU7XG4gIGZsb2F0OiBsZWZ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5zdWJtaXRCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xufVxuXG4udGl0bGUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4udG9kby1idG4tYWRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi50b2Rvcy1saSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwJSAyMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnRvZG9zLWxpID4gaW5wdXQge1xuICBwYWRkaW5nOiAxM3B4O1xufVxuXG4udWxDaGVja2xpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG59XG5cbi51bENMSW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udmFsdWUge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG51bCBsaTpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XG59XG5cbi8qIERhcmtlciBiYWNrZ3JvdW5kLWNvbG9yIG9uIGhvdmVyICovXG51bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkZGQ7XG59XG5cbi8qIFdoZW4gY2xpY2tlZCBvbiwgYWRkIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgc3RyaWtlIG91dCB0ZXh0ICovXG51bCBsaS5jaGVja2VkIHtcbiAgYmFja2dyb3VuZDogIzg4ODtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuXG4vKiBBZGQgYSBcImNoZWNrZWRcIiBtYXJrIHdoZW4gY2xpY2tlZCBvbiAqL1xudWwgbGkuY2hlY2tlZDo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDE2cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogN3B4O1xufVxuXG4vKiBTdHlsZSB0aGUgY2xvc2UgYnV0dG9uICovXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDEycHggMTZweCAxMnB4IDE2cHg7XG59XG5cbi5jbG9zZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLyogU3R5bGUgdGhlIGlucHV0ICovXG5pbnB1dCB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9kby1saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFD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LFVBQVU7QUFDWjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBLG9CQUFvQjtBQUNwQjtFQUNFLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxucCB7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG51bCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG51bCBsaSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMnB4IDhweCAxMnB4IDQwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZWVlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gIC8qIG1ha2UgdGhlIGxpc3QgaXRlbXMgdW5zZWxlY3RhYmxlICovXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcblxcbiAgLyogd2UgY3JlYXRlIG91ciBncmlkICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZW0gMWZyIDJlbSAyZW0gMWZyIDNlbSAxZnIgMmVtO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5vdXRwdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuXFxuICBtaW4taGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4uZGlzcC10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4ubmV3RWxlU3BhbiB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDkwJTtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBjb2xvcjogIzU1NTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLm5ld0VsZVNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyLWFkZC1wcm9qIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG59XFxuXFxuLmNoZWNrbGlzdElucHV0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxufVxcblxcbi5kZWwtYnRuLXRvZG9zLWxpIHtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9kZWwtYnV0dG9uLnN2ZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmRlbC1idG4tdG9kb3MtbGk6aG92ZXIge1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG5cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9kZWwtYnV0dG9uLnN2ZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi5lZGl0LWJ0bi1kaXYtZm9ybSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gIGhlaWdodDogNjAwcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDkwJSAxMCU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xcbiAgXFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uZWRpdC1idG4tZGl2LWZvcm0tYnRuIHtcXG4gIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxufVxcblxcbi5lZGl0LWJ0bi1kaXYtZm9ybS1oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5lZGl0LWJ0bi10b2Rvcy1saSB7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2VkaXQtYnV0dG9uLnN2ZycpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLmVkaXQtYnRuLXRvZG9zLWxpOmhvdmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvZWRpdC1idXR0b24uc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIyMSwgMjIxLCAxMDcpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZXhwYW5kZWQtdmlldyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG5cXG4gIHotaW5kZXg6MTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLmV4cGFuZGVkLXZpZXctcGFyYXMge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZXhwYW5kZWQtdmlldzpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXFxuICB3aWR0aDogMjUwcHg7IFxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcXG59XFxuXFxuLm5vdGVzIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHlDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDEwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJpb3JpdHlDb250YWluZXIgPiAucHJpb3JpdHkge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnByb2otYnV0dG9uLWRlbGV0ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyIDEwJTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgbWFyZ2luOiAxJTtcXG4gIHdpZHRoOiAgY2xhbXAoMTY1MHB4LCA1MHZ3LCAxMzM3cHgpO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjdiNztcXG59XFxuXFxuLnN1Ym1pdEJ0biB7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBjb2xvcjogIzU1NTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLnN1Ym1pdEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi50b2RvLWJ0bi1hZGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi50b2Rvcy1saSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAlIDIwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbi50b2Rvcy1saSA+IGlucHV0IHtcXG4gIHBhZGRpbmc6IDEzcHg7XFxufVxcblxcbi51bENoZWNrbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxufVxcblxcbi51bENMSW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi52YWx1ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG51bCBsaTpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbn1cXG5cXG4vKiBEYXJrZXIgYmFja2dyb3VuZC1jb2xvciBvbiBob3ZlciAqL1xcbnVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxufVxcblxcbi8qIFdoZW4gY2xpY2tlZCBvbiwgYWRkIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgc3RyaWtlIG91dCB0ZXh0ICovXFxudWwgbGkuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLyogQWRkIGEgXFxcImNoZWNrZWRcXFwiIG1hcmsgd2hlbiBjbGlja2VkIG9uICovXFxudWwgbGkuY2hlY2tlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAxNnB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDdweDtcXG59XFxuXFxuLyogU3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHBhZGRpbmc6IDEycHggMTZweCAxMnB4IDE2cHg7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgaW5wdXQgKi9cXG5pbnB1dCB7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLWxpc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLWxpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgdG9kb3NTdG9yZXIgZnJvbSBcIi4vdG9kb3Mtc3RvcmVyLmpzXCI7XG5pbXBvcnQgVG9kb3MgZnJvbSBcIi4vdG9kb3MtY3JlYXRvci5qc1wiO1xuaW1wb3J0IHByb2plY3RzTW9kdWxlIGZyb20gXCIuL3Byb2plY3QtbW9kdWxlLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1NYWtlcihhbmNob3IsIHRvZG8sIG9nVG9kb3MsIGtleUZvclVwZGF0aW5nKSB7XG4gIGxldCBhcnJGb3JTdG9yID0gW107XG4gIFxuICBjb25zdCBib2R5R3JiYnIgPSBhbmNob3I7XG5cbiAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAvL0ZPUk0gRk9SIEVESVRJTkcgZXhpc3RpbmcgdG9kbyAoRURJVCBCVVRUT04pXG5cbiAgICBib2R5R3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm1UZW1wbGF0ZScpO1xuXG4gICAgY29uc3QgZm9ybUFuY2hvckdyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1UZW1wbGF0ZScpO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cInRpdGxlXCJdJykuaW5uZXJUZXh0ID0gXCJUaXRsZTogXCI7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cImRlc2NyaXB0aW9uXCJdJykuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjogXCI7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlRGF0ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwiZHVlRGF0ZVwiXScpLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6IFwiO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5Q29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ZhbHVlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzUwJyk7XG4gICAgXG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZhbHVlXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKTtcbiAgICB2YWx1ZS50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICB2YWx1ZS50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9KTtcbiAgXG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnNldEF0dHJpYnV0ZSgnbWF4JywgJzEwMCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnNldEF0dHJpYnV0ZSgnc3RlcCcsICcxJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cInByaW9yaXR5XCJdJykuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogXCI7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdub3RlcycpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25vdGVzJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cIm5vdGVzXCJdJykuaW5uZXJUZXh0ID0gXCJOb3RlczogXCI7XG4gIFxuICAgIC8vY2hlY2tsaXN0XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSkuaW5uZXJUZXh0ID0gXCJDaGVja2xpc3Q6XCI7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbGlzdElucHV0Q29udGFpbmVyJyk7XG4gICAgXG4gIFxuICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0SW5wdXRDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3VsQ0xJbnB1dCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bENMSW5wdXQnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bENMSW5wdXQnKS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1dyaXRlIGhlcmUuLi4nKTtcbiAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdElucHV0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25ld0VsZVNwYW4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3RWxlU3BhbicpLmNsYXNzTGlzdC5hZGQoJ2FkZEJ0bicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdFbGVTcGFuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld0VsZW1lbnQoKTtcbiAgICB9KVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdFbGVTcGFuJykuaW5uZXJUZXh0ID0gXCJBZGRcIjtcbiAgICAvL1VMIGNoZWNrbGlzdFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3VsQ2hlY2tsaXN0Jyk7XG4gIFxuICBcbiAgXG4gICAgLy8gQ3JlYXRlIGEgXCJjbG9zZVwiIGJ1dHRvbiBhbmQgYXBwZW5kIGl0IHRvIGVhY2ggbGlzdCBpdGVtXG4gICAgdmFyIG15Tm9kZWxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIi51bENoZWNrbGlzdCA+IExJXCIpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBteU5vZGVsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJTUEFOXCIpO1xuICAgICAgdmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFx1MDBEN1wiKTtcbiAgICAgIHNwYW4uY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xuICAgICAgc3Bhbi5hcHBlbmRDaGlsZCh0eHQpO1xuICAgICAgbXlOb2RlbGlzdFtpXS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gIFxuICAgIC8vIEFkZCBhIFwiY2hlY2tlZFwiIHN5bWJvbCB3aGVuIGNsaWNraW5nIG9uIGEgbGlzdCBpdGVtXG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWxDaGVja2xpc3QnKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcbiAgICAgIGlmIChldi50YXJnZXQudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICBldi50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGxpc3QgaXRlbSB3aGVuIGNsaWNraW5nIG9uIHRoZSBcIkFkZFwiIGJ1dHRvblxuICAgIGZ1bmN0aW9uIG5ld0VsZW1lbnQoKSB7XG4gICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWxDTElucHV0XCIpLnZhbHVlO1xuICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpbnB1dFZhbHVlKTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKHQpO1xuICAgICAgaWYgKGlucHV0VmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IG11c3Qgd3JpdGUgc29tZXRoaW5nIVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWxDaGVja2xpc3RcIikuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENMSW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICBcbiAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XG4gICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHUwMEQ3XCIpO1xuICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG4gICAgICBzcGFuLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2xvc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2xvc2VbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBkaXYgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vcHJlLWZpbGwgZm9ybVxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KFwiaW5wdXRcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS52YWx1ZSA9IHRvZG8udGl0bGU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWVEYXRlXCIpLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikudmFsdWUgPSB0b2RvLnByaW9yaXR5O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKS52YWx1ZSA9IHRvZG8ubm90ZXM7XG5cbiAgICBjb25zb2xlLmxvZyh0b2RvLmR1ZURhdGUpO1xuICAgIGNvbnNvbGUubG9nKHR5cGVvZih0b2RvLmR1ZURhdGUpKTtcbiAgICBcbiAgICAvL3dlIGFyZSB0cnlpbmcgdG8gdXBkYXRlIHRoZSBkYXRhIGluIGxvY2FsU3RvcmFnZSB3aGVuIHdlIGFkZCBvciByZW1vdmUgYSBjaGVja2xpc3QgaXRlbVxuICAgIGxldCBjaGVja2xpc3RJdGVtc1ByZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bENoZWNrbGlzdCcpO1xuICBcbiAgICB0b2RvLmNoZWNrbGlzdC5mb3JFYWNoKHggPT4ge1xuICAgICAgY2hlY2tsaXN0SXRlbXNQcmUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSkuaW5uZXJUZXh0ID0geDtcbiAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bENoZWNrbGlzdCA+IGxpJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nsb3NlJyk7XG4gICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2xvc2UnKS5pbm5lclRleHQgPSBcInhcIjtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bENoZWNrbGlzdCA+IGxpJykuZm9yRWFjaCggeSA9PiB7XG4gICAgICB5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9zZScpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGkgPiBzcGFuJykuZm9yRWFjaCh6ID0+IHtcbiAgICAgIHouaW5uZXJUZXh0ID0gXCJcXHUwMEQ3XCI7XG4gICAgfSk7XG5cbiAgICAvLyBDbGljayBvbiBhIGNsb3NlIGJ1dHRvbiB0byBoaWRlIHRoZSBjdXJyZW50IGxpc3QgaXRlbVxuICAgIHZhciBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2xvc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNsb3NlW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpdiA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vU1VCTUlUIEJVVFRPTlxuICAgIGxldCB0b2RvRm9yU3RvciA9IG5ldyBUb2RvcygpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWJtaXRCdG4nKTtcbiAgICBjb25zdCBzdWJtaXRCdG5HcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXRCdG4nKTtcbiAgICBzdWJtaXRCdG5HcmJici5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuICAgIHN1Ym1pdEJ0bkdyYmJyLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgXG4gICAgc3VibWl0QnRuR3JiYnIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBsZXQgY2hlY2tsaXN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudWxDaGVja2xpc3QgPiBsaScpO1xuICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1zQXJyID0gW107XG4gICAgICBsZXQgZWRpdFdpbmRvd0dyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtJyk7XG4gIFxuICAgICAgY2hlY2tsaXN0SXRlbXMuZm9yRWFjaCh4ID0+IHtcbiAgICAgICAgY2hlY2tsaXN0SXRlbXNBcnIucHVzaCh4LnRleHRDb250ZW50LnNsaWNlKDAsIC0xKSk7XG4gICAgICB9KTtcblxuICAgICAgdG9kb0ZvclN0b3IucHJvamVjdCA9IHRvZG8ucHJvamVjdDtcbiAgICAgIHRvZG9Gb3JTdG9yLnRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS52YWx1ZTtcbiAgICAgIHRvZG9Gb3JTdG9yLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgIHRvZG9Gb3JTdG9yLmR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1ZURhdGVcIikudmFsdWU7XG4gICAgICB0b2RvRm9yU3Rvci5wcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikudmFsdWU7XG4gICAgICB0b2RvRm9yU3Rvci5ub3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXNcIikudmFsdWU7XG4gICAgICB0b2RvRm9yU3Rvci5jaGVja2xpc3QgPSBKU09OLnN0cmluZ2lmeShjaGVja2xpc3RJdGVtc0Fycik7XG5cbiAgICAgIC8vd29ya2luZyBoZXJlLCBoYXZlIHRvIGZpZ3VyZSBvdXQgaG93IHRvIHVwZGF0ZSBkYXRhIGluIGxvY2FsIHN0b3JhZ2UgY29ycmVjdGx5XG4gICAgICAvLyB0b2Rvc1N0b3JlciBpcyBzdG9yaW5nIGJ5IHRpdGxlIHdoaWNoIGlzIGNoYW5naW5nXG4gICAgICBPYmplY3Qua2V5cyhvZ1RvZG9zW2tleUZvclVwZGF0aW5nXSkuZm9yRWFjaCgoeCkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyh0b2RvRm9yU3RvcikuZm9yRWFjaCgoeSkgPT4ge1xuICAgICAgICAgIGlmICh4ID09IHkgJiYgb2dUb2Rvc1trZXlGb3JVcGRhdGluZ11beF0gIT0gdG9kb0ZvclN0b3JbeV0gJiYgeCAhPSAnY2hlY2tsaXN0Jyl7XG4gICAgICAgICAgICBvZ1RvZG9zW2tleUZvclVwZGF0aW5nXVt4XSA9IHRvZG9Gb3JTdG9yW3ldO1xuICAgICAgICAgIH0gZWxzZSBpZiAoeCA9PSAnY2hlY2tsaXN0Jykge1xuICAgICAgICAgICAgb2dUb2Rvc1trZXlGb3JVcGRhdGluZ11beF0gPSBjaGVja2xpc3RJdGVtc0FycjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KTtcblxuICAgICAgdG9kb3NTdG9yZXIodG9kb0ZvclN0b3IsIGtleUZvclVwZGF0aW5nKTtcbiAgICAgIHByb2plY3RzTW9kdWxlKHRvZG9Gb3JTdG9yLnByb2plY3QsIG9nVG9kb3MpO1xuXG4gICAgICBlZGl0V2luZG93R3JiYnIucmVtb3ZlKCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy9CQVNJQyBGT1JNLCBubyB0b2RvXG4gICAgYm9keUdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmb3JtVGVtcGxhdGUnKTtcblxuICAgIGNvbnN0IGZvcm1BbmNob3JHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtVGVtcGxhdGUnKTtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGUnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJ0aXRsZVwiXScpLmlubmVyVGV4dCA9IFwiVGl0bGU6IFwiO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZXNjcmlwdGlvbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJkZXNjcmlwdGlvblwiXScpLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246IFwiO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZURhdGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlRGF0ZScpLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cImR1ZURhdGVcIl0nKS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3ByaW9yaXR5Jyk7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eUNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHknKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHlDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd2YWx1ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsICc1MCcpO1xuICAgIFxuICAgIGNvbnN0IHZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52YWx1ZVwiKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIik7XG4gICAgdmFsdWUudGV4dENvbnRlbnQgPSBpbnB1dC52YWx1ZTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgdmFsdWUudGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgfSk7XG4gIFxuICAgIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnNldEF0dHJpYnV0ZSgndHlwZScsICdyYW5nZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnNldEF0dHJpYnV0ZSgnbWluJywgJzAnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ3N0ZXAnLCAnMScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJwcmlvcml0eVwiXScpLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6IFwiO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAnbm90ZXMnKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdub3RlcycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJub3Rlc1wiXScpLmlubmVyVGV4dCA9IFwiTm90ZXM6IFwiO1xuICBcbiAgICAvL2NoZWNrbGlzdFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLmlubmVyVGV4dCA9IFwiQ2hlY2tsaXN0OlwiO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjaGVja2xpc3RJbnB1dENvbnRhaW5lcicpO1xuICAgIFxuICBcbiAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdElucHV0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1bENMSW5wdXQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWxDTElucHV0Jykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudWxDTElucHV0Jykuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdXcml0ZSBoZXJlLi4uJyk7XG4gIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3RJbnB1dENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICduZXdFbGVTcGFuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0VsZVNwYW4nKS5jbGFzc0xpc3QuYWRkKCdhZGRCdG4nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3RWxlU3BhbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuZXdFbGVtZW50KCk7XG4gICAgfSlcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3RWxlU3BhbicpLmlubmVyVGV4dCA9IFwiQWRkXCI7XG4gICAgLy9VTCBjaGVja2xpc3RcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1bENoZWNrbGlzdCcpO1xuICBcbiAgXG4gIFxuICAgIC8vIENyZWF0ZSBhIFwiY2xvc2VcIiBidXR0b24gYW5kIGFwcGVuZCBpdCB0byBlYWNoIGxpc3QgaXRlbVxuICAgIHZhciBteU5vZGVsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIudWxDaGVja2xpc3QgPiBMSVwiKTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbXlOb2RlbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcbiAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwRDdcIik7XG4gICAgICBzcGFuLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICAgIG15Tm9kZWxpc3RbaV0uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICBcbiAgICAvLyBDbGljayBvbiBhIGNsb3NlIGJ1dHRvbiB0byBoaWRlIHRoZSBjdXJyZW50IGxpc3QgaXRlbVxuICAgIHZhciBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgY2xvc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNsb3NlW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpdiA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgIC8vIEFkZCBhIFwiY2hlY2tlZFwiIHN5bWJvbCB3aGVuIGNsaWNraW5nIG9uIGEgbGlzdCBpdGVtXG4gICAgdmFyIGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bCcpO1xuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldikge1xuICAgICAgaWYgKGV2LnRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgICAgIGV2LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgbGlzdCBpdGVtIHdoZW4gY2xpY2tpbmcgb24gdGhlIFwiQWRkXCIgYnV0dG9uXG4gICAgZnVuY3Rpb24gbmV3RWxlbWVudCgpIHtcbiAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENMSW5wdXRcIikudmFsdWU7XG4gICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0VmFsdWUpO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQodCk7XG4gICAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCB3cml0ZSBzb21ldGhpbmchXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENoZWNrbGlzdFwiKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsQ0xJbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gIFxuICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcbiAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwRDdcIik7XG4gICAgICBzcGFuLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICBcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjbG9zZVtpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGRpdiA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvL1NVQk1JVCBCVVRUT05cbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0QnRuJyk7XG4gICAgY29uc3Qgc3VibWl0QnRuR3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VibWl0QnRuJyk7XG4gICAgc3VibWl0QnRuR3JiYnIuaW5uZXJUZXh0ID0gXCJTdWJtaXRcIjtcbiAgICBzdWJtaXRCdG5HcmJici5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIFxuICAgIHN1Ym1pdEJ0bkdyYmJyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbGV0IGNoZWNrbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICAgIGxldCBjaGVja2xpc3RJdGVtc0FyciA9IFtdO1xuICBcbiAgICAgIGNoZWNrbGlzdEl0ZW1zLmZvckVhY2goeCA9PiB7XG4gICAgICAgIGNoZWNrbGlzdEl0ZW1zQXJyLnB1c2goeC50ZXh0Q29udGVudCk7XG4gICAgICB9KTtcbiAgXG4gICAgICBhcnJGb3JTdG9yLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS52YWx1ZSk7XG4gICAgICBhcnJGb3JTdG9yLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS52YWx1ZSk7XG4gICAgICBhcnJGb3JTdG9yLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWVEYXRlXCIpLnZhbHVlKTtcbiAgICAgIGFyckZvclN0b3IucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLnZhbHVlKTtcbiAgICAgIGFyckZvclN0b3IucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpLnZhbHVlKTtcbiAgICAgIGFyckZvclN0b3IucHVzaCggSlNPTi5zdHJpbmdpZnkoY2hlY2tsaXN0SXRlbXNBcnIpKTtcbiAgXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikudmFsdWUgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWVEYXRlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikudmFsdWUgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZhbHVlXCIpLnRleHRDb250ZW50ID0gNTA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsQ2hlY2tsaXN0XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIFxuICAgICAgY2hlY2tsaXN0SXRlbXNBcnIubGVuZ3RoID0gMDtcbiAgXG4gICAgICBjaGVja2xpc3RJdGVtcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICB4LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIH0pO1xuICBcbiAgICAgIHRvZG9zU3RvcmVyKGFyckZvclN0b3IpO1xuICBcbiAgICAgIGFyckZvclN0b3IubGVuZ3RoID0gMDtcbiAgXG4gIFxuICAgICAgLy90ZXN0IHN0dWZmIGhlcmVcbiAgICAgIGNvbnN0IHJlc3RvcmVkU2Vzc2lvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1bmRlZmluZWRcIikpO1xuICAgIH0pO1xuICB9XG5cbiAgXG59IiwiaW1wb3J0IHByb2plY3RzU3RvcmVyIGZyb20gXCIuL3Byb2plY3RzLXN0b3JlclwiO1xuaW1wb3J0IHRvZG9zU3RvcmVyIGZyb20gXCIuL3RvZG9zLXN0b3JlclwiO1xuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4vLyAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbi8vICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuLy8gICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4vLyAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKS52YWx1ZTtcbi8vICAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0JykudmFsdWU7XG5cbi8vICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbi8vICAgICAgICAgdGl0bGU6IHRpdGxlLFxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4vLyAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4vLyAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbi8vICAgICAgICAgbm90ZXM6IG5vdGVzLFxuLy8gICAgICAgICBjaGVja2xpc3QgOiBjaGVja2xpc3Rcbi8vICAgICB9O1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwic2F2ZUZvcm1EYXRhIGlzIHdvcmtpbmdcIik7XG5cbi8vICAgICAvLyBpZiBpdCdzIGEgdG9kbyBMT0dJQyBIRVJFXG4vLyAgICAgLy8gdG9kb3NTdG9yZXIoZm9ybURhdGEpO1xuLy8gICAgIC8vIGVsc2UgaWYgaXQncyBhIHByb2plY3Rcbi8vICAgICAvL3Byb2plY3RzU3RvcmVyKGZvcm1EYXRhKTtcbi8vIH0pO1xuXG4vLyBmdW5jdGlvbiBzYXZlRm9ybURhdGEoZm9ybURhdGEpIHtcbi8vICAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1EYXRhJykpIHx8IFtdO1xuXG4vLyAgICAgc3RvcmVkRm9ybURhdGEucHVzaChmb3JtRGF0YSk7XG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybURhdGEnLCBKU09OLnN0cmluZ2lmeShzdG9yZWRGb3JtRGF0YSkpO1xuLy8gfSIsImltcG9ydCBmb3JtTWFrZXIgZnJvbSBcIi4vZm9ybS1tb2R1bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNNb2R1bGUocHJvamVjdCwgdG9kb3MpIHtcbiAgICAvLyB0aGlzIGZ1bmN0aW9uIHJlY2VpdmVzIGEgbG9jYWwgc3RvcmFnZSBrZXkgYW5kIHRvZG9zLCBpdCB3aWxsIGNyZWF0ZSBhbiBodG1sIGRpc3BsYXkgYW5kIGFwcGVuZCBpdCB0byBcblxuICAgIGNvbnN0IHByb2pDb250R3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMtY29udGFpbmVyJyk7XG5cbiAgICAvL2RlZmF1bHQgcHJvamVjdFxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgcHJvakNvbnRHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtY2FyZCcpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai1idXR0b24tZGVsZXRlJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otYnV0dG9uLWRlbGV0ZScpLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otYnV0dG9uLWRlbGV0ZScpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnRGVsZXRlIFByb2plY3QnKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXJkJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGl0bGUnKS5pbm5lclRleHQgPSBcIkRlZmF1bHRcIjtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXJkJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMtZGlzcGxheScpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhcmQnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tYnRuLWFkZCcpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWJ0bi1hZGQnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWJ0bi1hZGQnKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCBUb2RvJyk7XG5cblxuICAgICAgICAvL2FkZCBhIHByb2plY3QgY2FyZFxuICAgICAgICBwcm9qQ29udEdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGFpbmVyLWFkZC1wcm9qJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyLWFkZC1wcm9qJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qLWJ1dHRvbi1hZGQnKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1idXR0b24tYWRkJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1idXR0b24tYWRkJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQgUHJvamVjdCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vQ0FSRCBVUERBVEVSXG4gICAgICAgIGxldCBwcm9qQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1jb250YWluZXInKTtcbiAgICAgICAgbGV0IGR1cGVGb3VuZCA9IGZhbHNlO1xuICAgICAgICBsZXQgZHVwZTtcbiAgICAgICAgbGV0IGR1cGVJbmRleDtcblxuICAgICAgICBwcm9qQ2FyZHMuZm9yRWFjaCgoY2FyZCwgaW5keCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNhcmQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIGR1cGVGb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZHVwZSA9IHByb2pDYXJkc1tpbmR4XTtcbiAgICAgICAgICAgICAgICBkdXBlSW5kZXggPSBpbmR4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZHVwZUZvdW5kKXtcbiAgICAgICAgICAgIC8vdXBkYXRlIHRoZSBjYXJkIGlmIGR1cGUgZm91bmRcbiAgICAgICAgICAgIGR1cGUuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMV0ucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIGxldCBwcmpDYXJkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1jYXJkJykpO1xuICAgICAgICAgICAgbGV0IGxhdGVzdFByakNhcmQgPSBbcHJqQ2FyZFtkdXBlSW5kZXhdXTtcblxuICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5pbnNlcnRCZWZvcmUoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0pLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMtZGlzcGxheScpO1xuXG4gICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMtZGlzcGxheS11bCcpO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyh0b2RvcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpLmlubmVyVGV4dCA9IGAke0pTT04uc3RyaW5naWZ5KHZhbHVlLnRpdGxlKS5yZXBsYWNlQWxsKCdcIicsICcnKX0sICR7SlNPTi5zdHJpbmdpZnkodmFsdWUuZHVlRGF0ZSkucmVwbGFjZUFsbCgnXCInLCAnJyl9YDtcbiAgICBcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2xhc3NMaXN0LmFkZCgndG9kb3MtbGknKTtcbiAgICBcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi10b2Rvcy1saScpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vZWRpdCBidXR0b25cbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RWxlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvakNvbnRHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybScpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybS1oZWFkZXInKS5pbm5lclRleHQgPSBcIkVkaXQgVG9kb1wiO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybS1idG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybS1idG4nKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0tYnRuJykudmFsdWUgPSBcIlhcIjtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1NYWtlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0nKSx0b2Rvc1trZXldKTtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RWxlRm9jdXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgXG4gICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsLWJ0bi10b2Rvcy1saScpO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSkuc3JjID0gRGVsQnV0dG9uO1xuICAgIFxuICAgICAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvL2V4cGFuZGVkIHZpZXdcbiAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB4ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHgudGFyZ2V0LnRhZ05hbWUgPT0gXCJMSVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9sZEl0ZW0gPSBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRlZC12aWV3Jyk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModG9kb3Nba2V5XSkuZm9yRWFjaCgoW25ld0l0ZW1LZXksIG5ld0l0ZW1WYWx1ZV0pID0+IHtcbiAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV3SXRlbUtleSAhPSBcInByb2plY3RcIiAmJiB0eXBlb2YobmV3SXRlbVZhbHVlKSA9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChwYXJhQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhQ2hpbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRlZC12aWV3LXBhcmFzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShuZXdJdGVtS2V5KS5yZXBsYWNlQWxsKCdcIicsICcnKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIEpTT04uc3RyaW5naWZ5KG5ld0l0ZW1LZXkpLnJlcGxhY2VBbGwoJ1wiJywgJycpLnNsaWNlKDEpICsgXCI6IFwiICsgSlNPTi5zdHJpbmdpZnkobmV3SXRlbVZhbHVlKS5yZXBsYWNlQWxsKCdcIicsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0l0ZW1LZXkgIT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChwYXJhQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhQ2hpbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRlZC12aWV3LXBhcmFzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShuZXdJdGVtS2V5KS5yZXBsYWNlQWxsKCdcIicsICcnKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIEpTT04uc3RyaW5naWZ5KG5ld0l0ZW1LZXkpLnJlcGxhY2VBbGwoJ1wiJywgJycpLnNsaWNlKDEpICsgXCI6IFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZC12aWV3JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5yZXBsYWNlQ2hpbGQob2xkSXRlbSwgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChuZXdJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XS5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkLXZpZXcnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0ucmVwbGFjZUNoaWxkKG9sZEl0ZW0sIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0ucmVwbGFjZUNoaWxkKG5ld0l0ZW0sIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAvL0NSRUFURSBBIE5FVyBDQVJEIEZPUiBQUk9KRUNUXG4gICAgICAgIHByb2pDb250R3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb250YWluZXInKTtcblxuICAgICAgICBsZXQgY2FyZENudHIgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkLWNvbnRhaW5lcicpKTtcblxuICAgICAgICBsZXQgbGF0ZXN0Q2FyZENudHIgPSBjYXJkQ250ci5zbGljZSgtMSk7XG5cbiAgICAgICAgbGF0ZXN0Q2FyZENudHJbMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1jYXJkJyk7XG5cbiAgICAgICAgbGV0IHByakNhcmQgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWNhcmQnKSk7XG4gICAgICAgIGxldCBsYXRlc3RQcmpDYXJkID0gcHJqQ2FyZC5zbGljZSgtMSk7XG5cbiAgICAgICAgbGF0ZXN0Q2FyZENudHJbMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qLWJ1dHRvbi1kZWxldGUnKTtcblxuICAgICAgICBsYXRlc3RDYXJkQ250clswXS5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGxhdGVzdENhcmRDbnRyWzBdLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnRGVsZXRlIFByb2plY3QnKTtcblxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC10aXRsZScpO1xuXG4gICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gcHJvamVjdDtcblxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RzLWRpc3BsYXknKTtcblxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdHMtZGlzcGxheS11bCcpO1xuXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKHRvZG9zKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcblxuICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpKS5pbm5lclRleHQgPSBgJHtKU09OLnN0cmluZ2lmeSh2YWx1ZS50aXRsZSkucmVwbGFjZUFsbCgnXCInLCAnJyl9LCAke0pTT04uc3RyaW5naWZ5KHZhbHVlLmR1ZURhdGUpLnJlcGxhY2VBbGwoJ1wiJywgJycpfWA7XG5cbiAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XS5jbGFzc0xpc3QuYWRkKCd0b2Rvcy1saScpO1xuXG4gICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi10b2Rvcy1saScpO1xuXG4gICAgICAgICAgICAvL2VkaXQgYnV0dG9uXG4gICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2hpbGRyZW5bMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RWxlID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2pDb250R3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdC1idG4tZGl2LWZvcm0nKTtcblxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0nKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXQtYnRuLWRpdi1mb3JtLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0taGVhZGVyJykuaW5uZXJUZXh0ID0gXCJFZGl0IFRvZG9cIjtcblxuICAgICAgICAgICAgICAgICAgICAvL2Nsb3NlIGJ1dHRvbiBmb3IgZWRpdCB3aW5kb3dcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybS1idG4nKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtLWJ0bicpLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtLWJ0bicpLnZhbHVlID0gXCJYXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybU1ha2VyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybScpLCB0b2Rvc1trZXldLCB0b2Rvcywga2V5KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kb3Nba2V5XSk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGVkaXRFbGVGb2N1cyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2RlbC1idG4tdG9kb3MtbGknKTtcblxuICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNoaWxkcmVuWzBdLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcblxuICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy9leHBhbmRlZCB2aWV3XG4gICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB4ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoeC50YXJnZXQudGFnTmFtZSA9PSBcIkxJXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9sZEl0ZW0gPSBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZXhwYW5kZWQtdmlldycpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0b2Rvc1trZXldKS5mb3JFYWNoKChbbmV3SXRlbUtleSwgbmV3SXRlbVZhbHVlXSkgPT4ge1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYobmV3SXRlbUtleSAhPSBcInByb2plY3RcIiAmJiB0eXBlb2YobmV3SXRlbVZhbHVlKSA9PSBcInN0cmluZ1wiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYUNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQocGFyYUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhQ2hpbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRlZC12aWV3LXBhcmFzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYUNoaWxkLmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KG5ld0l0ZW1LZXkpLnJlcGxhY2VBbGwoJ1wiJywgJycpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgSlNPTi5zdHJpbmdpZnkobmV3SXRlbUtleSkucmVwbGFjZUFsbCgnXCInLCAnJykuc2xpY2UoMSkgKyBcIjogXCIgKyBKU09OLnN0cmluZ2lmeShuZXdJdGVtVmFsdWUpLnJlcGxhY2VBbGwoJ1wiJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdJdGVtS2V5ICE9IFwicHJvamVjdFwiICYmIG5ld0l0ZW1LZXkgIT0gXCJjaGVja2xpc3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChwYXJhQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2V4cGFuZGVkLXZpZXctcGFyYXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhQ2hpbGQuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkobmV3SXRlbUtleSkucmVwbGFjZUFsbCgnXCInLCAnJykuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBKU09OLnN0cmluZ2lmeShuZXdJdGVtS2V5KS5yZXBsYWNlQWxsKCdcIicsICcnKS5zbGljZSgxKSArIFwiOiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3SXRlbUtleSA9PSBcImNoZWNrbGlzdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFDaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHBhcmFDaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYUNoaWxkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZXhwYW5kZWQtdmlldy1wYXJhcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5pbm5lclRleHQgPSBKU09OLnN0cmluZ2lmeShuZXdJdGVtS2V5KS5yZXBsYWNlQWxsKCdcIicsICcnKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIEpTT04uc3RyaW5naWZ5KG5ld0l0ZW1LZXkpLnJlcGxhY2VBbGwoJ1wiJywgJycpLnNsaWNlKDEpICsgXCI6IFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBuZXdJdGVtVmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdJdGVtVmFsdWUubGVuZ3RoIC0gaSAhPSAxKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5pbm5lclRleHQgKz0gbmV3SXRlbVZhbHVlW2ldICsgXCIsIFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYUNoaWxkLmlubmVyVGV4dCArPSBuZXdJdGVtVmFsdWVbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZC12aWV3JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChvbGRJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChuZXdJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYobGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQtdmlldycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChvbGRJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5yZXBsYWNlQ2hpbGQobmV3SXRlbSwgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1idG4tYWRkJyk7XG5cbiAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQgVG9kbycpO1xuICAgICAgICB9XG4gICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xuXG4gICAgLy90aXRsZSwgcHJvZ3Jlc3MsIGFuZCBwcmlvcml0eVxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCB0b2Rvcykge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH1cbiAgXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0c01hbmFnZXIoKSB7XG5cbiAgICAvL2RpZ3MgdGhyb3VnaCBsb2NhbCBzdG9yYWdlIGFuZCBkaXNwbGF5cyB0aGUgb3V0cHV0XG4gICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGgpO1xuXG5cblxuXG4gICAgLy91c2VyIGJvb3RzIHVwXG4gICAgLy9pZiB0aGUgbG9jYWwgc3RvcmFnZSBpcyBlbXB0eSwgdGhpcyBmdW5jdGlvbiBkaXNwbGF5cyBhIGRlZmF1bHQsIGVtcHR5IHByb2plY3QgdG8gc3RhcnRcbiAgICAvLyB0aGUgZGVmYXVsdCBwcm9qZWN0IHdpbGwgYmUgYnVpbHQgYnkgb3VyIHByb2plY3QgbW9kdWxlXG4gICAgLy8gdGhlIHByb2R1Y3QgbW9kdWxlIHdpbGwgY3JlYXRlIGEgXCJjYXJkXCIgZm9yIGEgcHJvamVjdCBieSByZWFkaW5nIGl0cyBkYXRhIG9yIGlmIG5vbmUgaXMgcHJvdmlkZWQsIGFkZCBhIGRlZmF1bHQgcHJvamVjdCAobWF5YmUgd2UgcGFzcyB0aGUgcHJvaiBvYmogYXMgYXJndW1lbnRzKVxuICAgIC8vIFRISVMgZnVuY3Rpb24gd2lsbCBmaXJzdCBwdXQgYWxsIHRoZSBsb2NhbCBzdG9yYWdlIGluIGFuIGl0ZXJhYmxlIGNvbnRhaW5lciwgdGhlbiB3ZSBjYW4gc2VlIHdoZXJlIHRvIGdvXG4gICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSk7XG4gICAgY29uc29sZS5sb2coT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKSk7XG5cbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fSAtICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KX1gKTtcbiAgICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpbmRleCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX0gLSAke3ZhbHVlfWApO1xuICAgIH1cblxuICAgIC8vbm93IHdlIGtub3cgaG93IHRvIGl0ZXJhdGUgb3ZlciBsb2NhbCBzdG9yYWdlLCB3ZSBuZWVkIGEgd2F5IHRvIHB1dCB0aGF0IGRhdGEgdG8gZGlzcGxheSwgY2FuIGRlbGVnYXRlIHRvIGEgbW9kdWxlIGxhdGVyXG5cbiAgICBjb25zdCBwcm9qQ29udEdyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gZm9yIGV2ZXJ5IHByb2plY3Qga2V5LCB3ZSB3aWxsIGNyZWF0ZSBhIFwiY2FyZFwiIGFuZCBhZGQgaXQgdG8gdGhlIHByb2plY3RzLWNvbnRhaW5lclxuICAgIC8vIGl0ZXJhdGUgb3ZlciBsb2NhbHN0b3JhZ2UsIGlmIHRoZXJlIGlzIGEga2V5IHdlIGNyZWF0ZSBhIGhlYWRlciB3aXRoIHRoZSBwcm9qZWN0IHRpdGxlXG4gICAgLy8gaXRlcmF0ZSBvdmVyIHRoZSB0b2RvcyBhbmQgYWRkIGl0IHRvIHRoZSBkaXZcblxuXG4gICAgLy8gV09SS0lORyBPTiBUSElTOiAgdHVybiBwcm9qZWN0IG1vZHVsZSBpbnRvIGEgXCJjYXJkXCItbWFrZXIsIHRoZSBpZGVhIGJlaW5nIHByb2plY3RzIG1hbmFnZXIgbG9va3MgdGhyb3VnaCBsb2NhbFN0b3JhZ2UsIGlmIGl0IGZpbmRzIGEga2V5IGFuZCBhIHZhbHVlIHBhaXIsIGl0IHdpbGwgc2VuZCB0aGUgZGF0YSBvdmVyIHRvIHByb2plY3QtbW9kdWxlIHRvIGNyZWF0ZSBhIGNvbnRhaW5lci4gUHJvamVjdC1tb2R1bGUgd2lsbCBhY2NlcHQgYSBrZXksIGFuZCBhIHZhbHVlIGFzIGFyZ3VtZW50cyB0aGVuIHByb2Nlc3MgdGhlbVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzUmVtb3Zlcihzb21lUHJvamVjdCkge1xuICAgIFxuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvbWVQcm9qZWN0LnRpdGxlKSkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc29tZVByb2plY3QudGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoXCJQcm9qZWN0IG5vdCBmb3VuZCFcIik7XG4gICAgfSBcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0c1N0b3Jlcihzb21lUHJvamVjdCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHNvbWVQcm9qZWN0LnRpdGxlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzb21lUHJvamVjdC50aXRsZSkpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVByb2plY3QudGl0bGUpKSk7XG4gICAgLy9tYXliZSB3ZSBkb24ndCBuZWVkIHRvIHBhcnNlIEpTT04gY2F1c2UgaXQncyBub3Qgc3RvcmVkIGluIGpzb24/XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVByb2plY3QudGl0bGUpKXtcbiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcihcIlByb2plY3QgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvbWVQcm9qZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShzb21lUHJvamVjdC50b2RvcykpO1xuICAgIH1cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvcyB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpIHtcbiAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgfVxuICBcbiAgfSIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvcy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgdG9kb3NSZW1vdmVyIGZyb20gXCIuL3RvZG9zLXJlbW92ZXIuanNcIjtcbmltcG9ydCB0b2Rvc1N0b3JlciBmcm9tIFwiLi90b2Rvcy1zdG9yZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NNYW5hZ2VyKHNvbWVUb2RvKSB7XG5cbiAgICAvL3JlY2VpdmVzIGEgXCJ0b2RvXCIgb2JqZWN0IGZyb20gdXNlciB0byBtYWtlIHRvZG9zXG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kb3Moc29tZVRvZG8udGl0bGUsIHNvbWVUb2RvLmRlc2NyaXB0aW9uLCBzb21lVG9kby5kdWVEYXRlLCBzb21lVG9kby5wcmlvcml0eSwgc29tZVRvZG8ubm90ZXMsIHNvbWVUb2RvLmNoZWNrbGlzdCk7XG5cbiAgICAvL3N0b3JlIGNyZWF0ZWQgdG9kb3MgaW4gbG9jYWwgc3RvcmFnZSB1c2luZyBUb2RvcyBzdG9yZXJcbiAgICAvLyB0b2Rvc1N0b3JlcihuZXdUb2RvKTtcbiAgICAvLyB3ZSB3aWxsIHJlZmFjdG9yIHRoaXMgdG8gc3RvcmUgdG9kb3MgaW4gYSBleGlzdGluZyBvciBuZXcgcHJvamVjdFxuXG4gICAgLy9yZW1vdmUgYSB0b2RvcyBkYXRhIGluIGxvY2FsIHN0b3JhZ2UgdXNpbmcgVG9kb3MgcmVtb3ZlclxuICAgIC8vIGlmIGEgdXNlciBjbGlja3MgcmVtb3ZlIHRvZG8sIGludm9rZSB0aGUgZm9sbG93aW5nOlxuICAgIC8vIHRvZG9zUmVtb3ZlcihuZXdUb2RvKTtcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NSZW1vdmVyKHNvbWVUb2RvKSB7XG5cbiAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVRvZG8ucHJvamVjdCkpIHx8IFtdO1xuXG4gICAgc3RvcmVkRm9ybURhdGEuZm9yRWFjaCgoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coeC50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvbWVUb2RvLnRpdGxlKTtcbiAgICAgICAgaWYgKHgudGl0bGUgPT0gc29tZVRvZG8udGl0bGUpIHtcbiAgICAgICAgICAgIHN0b3JlZEZvcm1EYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvbWVUb2RvLnByb2plY3QsIEpTT04uc3RyaW5naWZ5KHN0b3JlZEZvcm1EYXRhKSk7XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NTdG9yZXIoc29tZVRvZG8sIGtleUZvclVwZGF0aW5nKSB7XG4gICAgbGV0IHN0b3JlZFByb2pEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzb21lVG9kby5wcm9qZWN0KSkgfHwgW107XG4gICAgY29uc3QgdG9kb1RpdGxlID0gc29tZVRvZG8udGl0bGU7XG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XG4gICAgbGV0IGluZGV4ID0gMDtcblxuICAgIGlmKGtleUZvclVwZGF0aW5nKXtcbiAgICAgICAgc3RvcmVkUHJvakRhdGFba2V5Rm9yVXBkYXRpbmddID0gc29tZVRvZG87XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvbWVUb2RvLnByb2plY3QsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFByb2pEYXRhKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc3RvcmVkUHJvakRhdGEuZm9yRWFjaCh0b2RvID0+IHtcbiAgICAgICAgICAgIGZvciAobGV0IHkgaW4gdG9kbyl7XG4gICAgICAgICAgICAgICAgaWYodG9kb1t5XSA9PSB0b2RvVGl0bGUpe1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gc3RvcmVkUHJvakRhdGEuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICBpZiAoc3RvcmVkUHJvakRhdGEgIT0gW10gJiYgZm91bmQpe1xuICAgICAgICAgICAgc3RvcmVkUHJvakRhdGFbaW5kZXhdID0gc29tZVRvZG87XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lVG9kby5wcm9qZWN0LCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qRGF0YSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RvcmVkUHJvakRhdGEucHVzaChzb21lVG9kbyk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lVG9kby5wcm9qZWN0LCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qRGF0YSkpO1xuICAgICAgICB9XG4gICAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFRvZG9zIGZyb20gXCIuL3RvZG9zLWNyZWF0b3IuanNcIjtcbmltcG9ydCB0b2Rvc01hbmFnZXIgZnJvbSBcIi4vdG9kb3MtbWFuYWdlci5qc1wiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzLWNyZWF0b3IuanNcIjtcbmltcG9ydCBwcm9qZWN0c01hbmFnZXIgZnJvbSBcIi4vcHJvamVjdHMtbWFuYWdlci5qc1wiO1xuXG5pbXBvcnQgc2F2ZUZvcm1EYXRhIGZyb20gXCIuL2Zvcm0tc3RvcmVyLmpzXCI7XG5pbXBvcnQgdG9kb3NTdG9yZXIgZnJvbSBcIi4vdG9kb3Mtc3RvcmVyLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNTdG9yZXIgZnJvbSBcIi4vcHJvamVjdHMtc3RvcmVyLmpzXCI7XG5pbXBvcnQgdG9kb3NSZW1vdmVyIGZyb20gXCIuL3RvZG9zLXJlbW92ZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0c1JlbW92ZXIgZnJvbSBcIi4vcHJvamVjdHMtcmVtb3Zlci5qc1wiO1xuXG5pbXBvcnQgcHJvamVjdHNNb2R1bGUgZnJvbSBcIi4vcHJvamVjdC1tb2R1bGUuanNcIjtcblxuaW1wb3J0IGZvcm1NYWtlciBmcm9tIFwiLi9mb3JtLW1vZHVsZS5qc1wiO1xuaW1wb3J0IFwiLi90b2RvLWxpc3QuY3NzXCI7XG5cbi8vdGVzdGluZyBoZXJlXG5sZXQgdXNlciA9IG5ldyBUb2RvcyhcIkJhcm5leVwiLCBcImZvb1wiLCBcImJhclwiLCBcIjIwMTQtMDItMDlcIiwgXCIzM1wiLCBcImRhc2RmXCIsIFtcImNsXCIsIFwidGVzdFwiLCBcImNsdGVzdFwiXSk7XG5sZXQgdXNlcjIgPSBuZXcgVG9kb3MoXCJCYXJuZXlcIiwgXCJhc2RmYXNkXCIsIFwiYmFkYXNkclwiLCBcIjIwMjMtMDEtMDJcIiwgXCI3MFwiLCBcImFzZGZjY1wiLCBbXCJjbFwiLCBcInRlc3RcIiwgXCJjbHRlc3RcIl0pO1xubGV0IHVzZXIzID0gbmV3IFRvZG9zKFwiQmFybmV5XCIsIFwidGVzdFwiLCBcImFzZGZcIiwgXCIxOTk4LTA0LTExXCIsIFwiMjFcIiwgXCJiYmJiYlwiLCBbXCJjbFwiLCBcInRlc3RcIiwgXCJjbHRlc3RcIl0pO1xubGV0IHVzZXI0ID0gbmV3IFRvZG9zKFwiQmFybmV5XCIsIFwianVzdCBhZGRlZFwiLCBcImhlcmVcIiwgXCIyMDIyLTA2LTA0XCIsIFwiOTlcIiwgXCJhO3NsZGtmXCIsIFtcImNsXCIsIFwidGVzdFwiLCBcImNsdGVzdFwiXSk7XG5sZXQgc29tZVByb2plY3QgPSBuZXcgUHJvamVjdHMoXCJCYXJuZXlcIiwgdXNlcik7XG5cbnVzZXIubm90ZXMgPSBcImhvdGhlYWRcIjtcbnNvbWVQcm9qZWN0LnRvZG9zID0gW3VzZXIsIHVzZXIyLCB1c2VyM107XG5cblxuLy8gbGV0IHRlc3RDbGFzc0dyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZXN0Q2xhc3NcIik7XG4vLyB0ZXN0Q2xhc3NHcmJici5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgeCA9PiB7XG4vLyAgICAgLy8gcHJvamVjdHNNYW5hZ2VyKHNvbWVQcm9qZWN0KTtcbi8vIH0pO1xuXG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpWzJdKTtcbi8vIC8vIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JylbMl0udG9kb3NbMV0gPSB1c2VyMztcbi8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSlbMl0uX3RvZG9zKTtcblxuLy8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKVsyXS5fdG9kb3MucHVzaCgndGVzdCcpO1xuXG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpWzJdLl90b2Rvcyk7XG5cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGVtcGxhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbi8vICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4vLyAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4vLyAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcbi8vICAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpLnZhbHVlO1xuLy8gICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2xpc3QnKTtcblxuLy8gICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuLy8gICAgICAgICBwcm9qZWN0OiAndGVzdCcsXG4vLyAgICAgICAgIHRpdGxlOiB0aXRsZSxcbi8vICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuLy8gICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuLy8gICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4vLyAgICAgICAgIG5vdGVzOiBub3Rlcyxcbi8vICAgICAgICAgY2hlY2tsaXN0IDogY2hlY2tsaXN0XG4vLyAgICAgfTtcblxuLy8gICAgIC8vIHRvZG9zU3RvcmVyKGZvcm1EYXRhKTtcbi8vICAgICAvLyBwcm9qZWN0c1N0b3Jlcihzb21lUHJvamVjdCk7XG5cbi8vIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4vLyAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpKTtcbi8vIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSkuZmluZCh4ID0+IHgudGl0bGUgPT0gJ3Rlc3QnICkpO1xuXG4vLyAgICAgLy8gbGV0IHRlc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpO1xuICAgIFxuLy8gICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdC5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8vICAgICBpZiAodGVzdFtpXSA9PSAnaGVsbG8gcGxzIHdvcmsnKSB7XG4vLyAgICAgLy8gICAgICAgICB0ZXN0LnNwbGljZShpLCAxKTtcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vIH1cbiAgICBcbi8vICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsIEpTT04uc3RyaW5naWZ5KHRlc3QpKTtcblxuLy8gICAgIC8vIGZvciAobGV0IGkgaW4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSkge1xuLy8gICAgIC8vICAgICBpKytcbi8vICAgICAvLyAgICAgZm9yIChsZXQgaiBpbiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpW2ldLm1vZGVscykge1xuLy8gICAgIC8vICAgICAgIHggKz0gbXlPYmouY2Fyc1tpXS5tb2RlbHNbal07XG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgIH1cbi8vIH0pO1xuXG4vLyBmb3JtTWFrZXIoKTtcblxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbi8vIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG5cbnByb2plY3RzU3RvcmVyKHNvbWVQcm9qZWN0KTtcbi8vIHRvZG9zU3RvcmVyKHNvbWVQcm9qZWN0KTtcblxuLy8gcHJvamVjdHNNYW5hZ2VyKCk7XG5cblxuLy8gcHJvamVjdHNNb2R1bGUoKTtcbnByb2plY3RzTW9kdWxlKHNvbWVQcm9qZWN0LnRpdGxlLCBzb21lUHJvamVjdC50b2Rvcyk7XG5cbi8vIHNvbWVQcm9qZWN0LnRvZG9zID0gW3VzZXI0LCB1c2VyMiwgdXNlcjNdO1xuXG4vLyBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICBwcm9qZWN0c01vZHVsZShzb21lUHJvamVjdC50aXRsZSwgc29tZVByb2plY3QudG9kb3MpO1xuLy8gICB9LCAyMDAwKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=