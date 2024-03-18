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


function formMaker(anchor, todo) {
  let arrForStor = [];
  
  const bodyGrbbr = anchor;

  if(arguments.length > 1) {
    //FORM FOR EDITING existing todo
    console.log(todo);

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
    
    //working here, we are trying to update the data in localStorage when we add or remove a checklist item
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
    formAnchorGrbbr.appendChild(document.createElement('button')).setAttribute('class', 'submitBtn');
    const submitBtnGrbbr = document.querySelector('.submitBtn');
    submitBtnGrbbr.innerText = "Submit";
    submitBtnGrbbr.setAttribute('type', 'button');
  
    submitBtnGrbbr.addEventListener('click', () => {
      let checklistItems = document.querySelectorAll('.ulChecklist > li');
      let checklistItemsArr = [];
  
      checklistItems.forEach(x => {
        console.log(x.textContent);
        checklistItemsArr.push(x.textContent.slice(0, -1));
      });

      console.log(checklistItemsArr);
  
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
  
      // Now restoredSession variable contains the object that was saved
      // in localStorage
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
  
    // formAnchorGrbbr.appendChild(document.createElement('fieldset')).setAttribute('id', 'checklist');
  
    // const clGrbbr = document.getElementById('checklist');
  
    // clGrbbr.appendChild(document.createElement('input')).setAttribute('id', 'cl-button');
    // document.querySelector('#cl-button').setAttribute('type', 'button');
    // document.querySelector('#cl-button').value = "Add List Item";
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
      
      console.log(checklistItemsArr);
  
      arrForStor.push(document.querySelector(".title").value);
      arrForStor.push(document.querySelector(".description").value);
      arrForStor.push(document.querySelector(".dueDate").value);
      arrForStor.push(document.querySelector(".priority").value);
      arrForStor.push(document.querySelector(".notes").value);
      arrForStor.push( JSON.stringify(checklistItemsArr));
  
      console.log(arrForStor);
  
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
      console.log(localStorage);
  
      arrForStor.length = 0;
  
  
      //test stuff here
      const restoredSession = JSON.parse(localStorage.getItem("undefined"));
  
      // Now restoredSession variable contains the object that was saved
      // in localStorage
      console.log(restoredSession);
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

                    //working here
                    console.log(todos[key]);

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

        latestPrjCard[0].appendChild(document.createElement('input')).setAttribute('class', 'todo-btn-add');

        latestPrjCard[0].children[2].setAttribute('type', 'button');
        latestPrjCard[0].children[2].setAttribute('value', 'Add Todo');
        
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
function todosStorer(someTodo) {
    const storedFormData = JSON.parse(localStorage.getItem(someTodo.project)) || [];

    storedFormData.push(someTodo);

    localStorage.setItem(someTodo.project, JSON.stringify(storedFormData));
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
let user = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "foo", "bar", "2014-02-09", "33", "foo", ["cl", "test", "cltest"]);
let user2 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Gumpy", "foo", "bar", "foo", "bar", "foo", ["cl", "test", "cltest"]);
let user3 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Kleetus", "foo", "bar", "foo", "bar", "foo", ["cl", "test", "cltest"]);
let user4 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Newie", "foo", "bar", "2022-06-04", "43", "foo");
let someProject = new _projects_creator_js__WEBPACK_IMPORTED_MODULE_2__["default"]("Default", user);

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

// console.log(localStorage);

(0,_projects_storer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(someProject);
// todosStorer(someProject);

// projectsManager();


// projectsModule();
(0,_project_module_js__WEBPACK_IMPORTED_MODULE_9__["default"])("foo", someProject.todos);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMkhBQXNDO0FBQ2xGLDRDQUE0Qyw2SEFBdUM7QUFDbkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDBCQUEwQixtQ0FBbUM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsV0FBVyxZQUFZLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFB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YnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1saXN0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tbGlzdC5jc3M/M2ZjMyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybS1zdG9yZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QtbW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1yZW1vdmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy1zdG9yZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLWNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLXJlbW92ZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG9zLXN0b3Jlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9kZWwtYnV0dG9uLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi9zcmMvZWRpdC1idXR0b24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbnVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG51bCBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMnB4IDhweCAxMnB4IDQwcHg7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIC8qIG1ha2UgdGhlIGxpc3QgaXRlbXMgdW5zZWxlY3RhYmxlICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAvKiB3ZSBjcmVhdGUgb3VyIGdyaWQgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmVtIDFmciAyZW0gMmVtIDFmciAzZW0gMWZyIDJlbTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG5vdXRwdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxudGV4dGFyZWEge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbi5kaXNwLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubmV3RWxlU3BhbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gIGNvbG9yOiAjNTU1O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ubmV3RWxlU3Bhbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG5cbi5jYXJkLWNvbnRhaW5lci1hZGQtcHJvaiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4uY2hlY2tsaXN0SW5wdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG59XG5cbi5kZWwtYnRuLXRvZG9zLWxpIHtcblxuICBkaXNwbGF5OiBncmlkO1xuICBcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5kZWwtYnRuLXRvZG9zLWxpOmhvdmVyIHtcblxuICBkaXNwbGF5OiBncmlkO1xuXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uZHVlRGF0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5lZGl0LWJ0bi1kaXYtZm9ybSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcblxuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogNTAwcHg7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA5MCUgMTAlO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMWZyO1xuICBcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmVkaXQtYnRuLWRpdi1mb3JtLWJ0biB7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xufVxuXG4uZWRpdC1idG4tZGl2LWZvcm0taGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZWRpdC1idG4tdG9kb3MtbGkge1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi5lZGl0LWJ0bi10b2Rvcy1saTpob3ZlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG5cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjEsIDIyMSwgMTA3KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhwYW5kZWQtdmlldyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAzNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5cbiAgei1pbmRleDoxO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5leHBhbmRlZC12aWV3LXBhcmFzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uZXhwYW5kZWQtdmlldzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhpZGRlbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxuICB3aWR0aDogMjUwcHg7IFxuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgXG59XG5cbi5ub3RlcyB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4ucHJpb3JpdHlDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByaW9yaXR5Q29udGFpbmVyID4gLnByaW9yaXR5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnByb2otYnV0dG9uLWRlbGV0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucHJvamVjdC1jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyIDEwJTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBtYXJnaW46IDElO1xuICB3aWR0aDogIGNsYW1wKDE2NTBweCwgNTB2dywgMTMzN3B4KTtcbiAgaGVpZ2h0OiA3NXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliN2I3O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBjb2xvcjogIzU1NTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnN1Ym1pdEJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG59XG5cbi50aXRsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi50b2RvLWJ0bi1hZGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnRvZG9zLWxpIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMjAlIDIwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4udG9kb3MtbGkgPiBpbnB1dCB7XG4gIHBhZGRpbmc6IDEzcHg7XG59XG5cbi51bENoZWNrbGlzdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtY29sdW1uLWVuZDogMztcblxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcbn1cblxuLnVsQ0xJbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi52YWx1ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDFweDtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbnVsIGxpOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcbn1cblxuLyogRGFya2VyIGJhY2tncm91bmQtY29sb3Igb24gaG92ZXIgKi9cbnVsIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2RkZDtcbn1cblxuLyogV2hlbiBjbGlja2VkIG9uLCBhZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzdHJpa2Ugb3V0IHRleHQgKi9cbnVsIGxpLmNoZWNrZWQge1xuICBiYWNrZ3JvdW5kOiAjODg4O1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi8qIEFkZCBhIFwiY2hlY2tlZFwiIG1hcmsgd2hlbiBjbGlja2VkIG9uICovXG51bCBsaS5jaGVja2VkOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItY29sb3I6ICNmZmY7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogMTZweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiA3cHg7XG59XG5cbi8qIFN0eWxlIHRoZSBjbG9zZSBidXR0b24gKi9cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTJweCAxNnB4IDEycHggMTZweDtcbn1cblxuLmNsb3NlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4vKiBTdHlsZSB0aGUgaW5wdXQgKi9cbmlucHV0IHtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b2RvLWxpc3QuY3NzXCJdLFwi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O0FBQ3pDO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1QsVUFBVTtFQUNWLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osVUFBVTtBQUNaOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsTUFBTTtFQUNOLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUEsb0JBQW9CO0FBQ3BCO0VBQ0UsU0FBUztFQUNULFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsIGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEycHggOHB4IDEycHggNDBweDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIHRyYW5zaXRpb246IDAuMnM7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcblxcbiAgLyogbWFrZSB0aGUgbGlzdCBpdGVtcyB1bnNlbGVjdGFibGUgKi9cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbmZvcm0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwMHB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuXFxuICAvKiB3ZSBjcmVhdGUgb3VyIGdyaWQgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMjBweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJlbSAxZnIgMmVtIDJlbSAxZnIgM2VtIDFmciAyZW07XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbm91dHB1dCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG5cXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XFxufVxcblxcbi5kaXNwLXRpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5uZXdFbGVTcGFuIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogOTAlO1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4ubmV3RWxlU3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXItYWRkLXByb2oge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uY2hlY2tsaXN0SW5wdXRDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG59XFxuXFxuLmRlbC1idG4tdG9kb3MtbGkge1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIFxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2RlbC1idXR0b24uc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZGVsLWJ0bi10b2Rvcy1saTpob3ZlciB7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcblxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3JjL2RlbC1idXR0b24uc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLmVkaXQtYnRuLWRpdi1mb3JtIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiA2MDBweDtcXG4gIHdpZHRoOiA1MDBweDtcXG5cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogOTAlIDEwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAxZnI7XFxuICBcXG4gIGRpc3BsYXk6IGdyaWQ7XFxufVxcblxcbi5lZGl0LWJ0bi1kaXYtZm9ybS1idG4ge1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcXG59XFxuXFxuLmVkaXQtYnRuLWRpdi1mb3JtLWhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmVkaXQtYnRuLXRvZG9zLWxpIHtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9zcmMvZWRpdC1idXR0b24uc3ZnJyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4uZWRpdC1idG4tdG9kb3MtbGk6aG92ZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG5cXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3NyYy9lZGl0LWJ1dHRvbi5zdmcnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDEwNyk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5leHBhbmRlZC12aWV3IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIHdpZHRoOiAzNTBweDtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcblxcbiAgei1pbmRleDoxO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG5cXG4uZXhwYW5kZWQtdmlldy1wYXJhcyB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5leHBhbmRlZC12aWV3OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcXG4gIHdpZHRoOiAyNTBweDsgXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxcbn1cXG5cXG4ubm90ZXMge1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5wcmlvcml0eUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MCUgMTAlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZW07XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5wcmlvcml0eUNvbnRhaW5lciA+IC5wcmlvcml0eSB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ucHJvai1idXR0b24tZGVsZXRlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDEwJSAxZnIgMTAlO1xcbn1cXG5cXG4ucHJvamVjdC10aXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3RzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICBtYXJnaW46IDElO1xcbiAgd2lkdGg6ICBjbGFtcCgxNjUwcHgsIDUwdncsIDEzMzdweCk7XFxuICBoZWlnaHQ6IDc1dmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliN2I3O1xcbn1cXG5cXG4uc3VibWl0QnRuIHtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4uc3VibWl0QnRuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XFxufVxcblxcbi50aXRsZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG59XFxuXFxuLnRvZG8tYnRuLWFkZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnRvZG9zLWxpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMCUgMjAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuLnRvZG9zLWxpID4gaW5wdXQge1xcbiAgcGFkZGluZzogMTNweDtcXG59XFxuXFxuLnVsQ2hlY2tsaXN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpKTtcXG59XFxuXFxuLnVsQ0xJbnB1dCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnZhbHVlIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbnVsIGxpOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxufVxcblxcbi8qIERhcmtlciBiYWNrZ3JvdW5kLWNvbG9yIG9uIGhvdmVyICovXFxudWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG59XFxuXFxuLyogV2hlbiBjbGlja2VkIG9uLCBhZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzdHJpa2Ugb3V0IHRleHQgKi9cXG51bCBsaS5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4vKiBBZGQgYSBcXFwiY2hlY2tlZFxcXCIgbWFyayB3aGVuIGNsaWNrZWQgb24gKi9cXG51bCBsaS5jaGVja2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDE2cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogN3B4O1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgY2xvc2UgYnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMTJweCAxNnB4IDEycHggMTZweDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBpbnB1dCAqL1xcbmlucHV0IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8tbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8tbGlzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0b2Rvc1N0b3JlciBmcm9tIFwiLi90b2Rvcy1zdG9yZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybU1ha2VyKGFuY2hvciwgdG9kbykge1xuICBsZXQgYXJyRm9yU3RvciA9IFtdO1xuICBcbiAgY29uc3QgYm9keUdyYmJyID0gYW5jaG9yO1xuXG4gIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgLy9GT1JNIEZPUiBFRElUSU5HIGV4aXN0aW5nIHRvZG9cbiAgICBjb25zb2xlLmxvZyh0b2RvKTtcblxuICAgIGJvZHlHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVRlbXBsYXRlJyk7XG5cbiAgICBjb25zdCBmb3JtQW5jaG9yR3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybVRlbXBsYXRlJyk7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0aXRsZScpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RpdGxlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwidGl0bGVcIl0nKS5pbm5lclRleHQgPSBcIlRpdGxlOiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVzY3JpcHRpb24nKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwiZGVzY3JpcHRpb25cIl0nKS5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkdWVEYXRlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGUnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJkdWVEYXRlXCJdJykuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogXCI7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlDb250YWluZXInKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHlDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndmFsdWUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnNTAnKTtcbiAgICBcbiAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmFsdWVcIik7XG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpO1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCkgPT4ge1xuICAgIHZhbHVlLnRleHRDb250ZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIH0pO1xuICBcbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ21pbicsICcwJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAwJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdzdGVwJywgJzEnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwicHJpb3JpdHlcIl0nKS5pbm5lclRleHQgPSBcIlByaW9yaXR5OiBcIjtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdGVzJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbm90ZXMnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwibm90ZXNcIl0nKS5pbm5lclRleHQgPSBcIk5vdGVzOiBcIjtcbiAgXG4gICAgLy9jaGVja2xpc3RcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpKS5pbm5lclRleHQgPSBcIkNoZWNrbGlzdDpcIjtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tsaXN0SW5wdXRDb250YWluZXInKTtcbiAgICBcbiAgXG4gIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3RJbnB1dENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWxDTElucHV0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ0xJbnB1dCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ0xJbnB1dCcpLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV3JpdGUgaGVyZS4uLicpO1xuICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0SW5wdXRDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3RWxlU3BhbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdFbGVTcGFuJykuY2xhc3NMaXN0LmFkZCgnYWRkQnRuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0VsZVNwYW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3RWxlbWVudCgpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0VsZVNwYW4nKS5pbm5lclRleHQgPSBcIkFkZFwiO1xuICAgIC8vVUwgY2hlY2tsaXN0XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWxDaGVja2xpc3QnKTtcbiAgXG4gIFxuICBcbiAgICAvLyBDcmVhdGUgYSBcImNsb3NlXCIgYnV0dG9uIGFuZCBhcHBlbmQgaXQgdG8gZWFjaCBsaXN0IGl0ZW1cbiAgICB2YXIgbXlOb2RlbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiLnVsQ2hlY2tsaXN0ID4gTElcIik7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IG15Tm9kZWxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XG4gICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHUwMEQ3XCIpO1xuICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG4gICAgICBzcGFuLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgICBteU5vZGVsaXN0W2ldLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgXG4gICAgLy8gQWRkIGEgXCJjaGVja2VkXCIgc3ltYm9sIHdoZW4gY2xpY2tpbmcgb24gYSBsaXN0IGl0ZW1cbiAgICB2YXIgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bENoZWNrbGlzdCcpO1xuICAgIGxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldikge1xuICAgICAgaWYgKGV2LnRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgICAgIGV2LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdjaGVja2VkJyk7XG4gICAgICB9XG4gICAgfSwgZmFsc2UpO1xuICBcbiAgICAvLyBDcmVhdGUgYSBuZXcgbGlzdCBpdGVtIHdoZW4gY2xpY2tpbmcgb24gdGhlIFwiQWRkXCIgYnV0dG9uXG4gICAgZnVuY3Rpb24gbmV3RWxlbWVudCgpIHtcbiAgICAgIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENMSW5wdXRcIikudmFsdWU7XG4gICAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0VmFsdWUpO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQodCk7XG4gICAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycpIHtcbiAgICAgICAgYWxlcnQoXCJZb3UgbXVzdCB3cml0ZSBzb21ldGhpbmchXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENoZWNrbGlzdFwiKS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsQ0xJbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gIFxuICAgICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcbiAgICAgIHZhciB0eHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcdTAwRDdcIik7XG4gICAgICBzcGFuLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICAgIHNwYW4uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xuICBcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjbG9zZVtpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGRpdiA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9wcmUtZmlsbCBmb3JtXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoXCJpbnB1dFwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnZhbHVlID0gdG9kby50aXRsZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLnZhbHVlID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1ZURhdGVcIikudmFsdWUgPSB0b2RvLmR1ZURhdGU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpLnZhbHVlID0gdG9kby5ub3RlcztcbiAgICBcbiAgICAvL3dvcmtpbmcgaGVyZSwgd2UgYXJlIHRyeWluZyB0byB1cGRhdGUgdGhlIGRhdGEgaW4gbG9jYWxTdG9yYWdlIHdoZW4gd2UgYWRkIG9yIHJlbW92ZSBhIGNoZWNrbGlzdCBpdGVtXG4gICAgbGV0IGNoZWNrbGlzdEl0ZW1zUHJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ2hlY2tsaXN0Jyk7XG4gIFxuICAgIHRvZG8uY2hlY2tsaXN0LmZvckVhY2goeCA9PiB7XG4gICAgICBjaGVja2xpc3RJdGVtc1ByZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpKS5pbm5lclRleHQgPSB4O1xuICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVsQ2hlY2tsaXN0ID4gbGknKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2xvc2UnKTtcbiAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbG9zZScpLmlubmVyVGV4dCA9IFwieFwiO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVsQ2hlY2tsaXN0ID4gbGknKS5mb3JFYWNoKCB5ID0+IHtcbiAgICAgIHkuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nsb3NlJyk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaSA+IHNwYW4nKS5mb3JFYWNoKHogPT4ge1xuICAgICAgei5pbm5lclRleHQgPSBcIlxcdTAwRDdcIjtcbiAgICB9KTtcblxuICAgIC8vIENsaWNrIG9uIGEgY2xvc2UgYnV0dG9uIHRvIGhpZGUgdGhlIGN1cnJlbnQgbGlzdCBpdGVtXG4gICAgdmFyIGNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKykge1xuICAgICAgY2xvc2VbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGl2ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLy9TVUJNSVQgQlVUVE9OXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1Ym1pdEJ0bicpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0bkdyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEJ0bicpO1xuICAgIHN1Ym1pdEJ0bkdyYmJyLmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XG4gICAgc3VibWl0QnRuR3JiYnIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBcbiAgICBzdWJtaXRCdG5HcmJici5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxldCBjaGVja2xpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bENoZWNrbGlzdCA+IGxpJyk7XG4gICAgICBsZXQgY2hlY2tsaXN0SXRlbXNBcnIgPSBbXTtcbiAgXG4gICAgICBjaGVja2xpc3RJdGVtcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh4LnRleHRDb250ZW50KTtcbiAgICAgICAgY2hlY2tsaXN0SXRlbXNBcnIucHVzaCh4LnRleHRDb250ZW50LnNsaWNlKDAsIC0xKSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coY2hlY2tsaXN0SXRlbXNBcnIpO1xuICBcbiAgICAgIGFyckZvclN0b3IucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnZhbHVlKTtcbiAgICAgIGFyckZvclN0b3IucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLnZhbHVlKTtcbiAgICAgIGFyckZvclN0b3IucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1ZURhdGVcIikudmFsdWUpO1xuICAgICAgYXJyRm9yU3Rvci5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikudmFsdWUpO1xuICAgICAgYXJyRm9yU3Rvci5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm90ZXNcIikudmFsdWUpO1xuICAgICAgYXJyRm9yU3Rvci5wdXNoKCBKU09OLnN0cmluZ2lmeShjaGVja2xpc3RJdGVtc0FycikpO1xuICBcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1ZURhdGVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmFsdWVcIikudGV4dENvbnRlbnQgPSA1MDtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWxDaGVja2xpc3RcIikuaW5uZXJIVE1MID0gXCJcIjtcbiAgXG4gICAgICBjaGVja2xpc3RJdGVtc0Fyci5sZW5ndGggPSAwO1xuICBcbiAgICAgIGNoZWNrbGlzdEl0ZW1zLmZvckVhY2goeCA9PiB7XG4gICAgICAgIHgudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgfSk7XG4gIFxuICAgICAgdG9kb3NTdG9yZXIoYXJyRm9yU3Rvcik7XG4gIFxuICAgICAgYXJyRm9yU3Rvci5sZW5ndGggPSAwO1xuICBcbiAgXG4gICAgICAvL3Rlc3Qgc3R1ZmYgaGVyZVxuICAgICAgY29uc3QgcmVzdG9yZWRTZXNzaW9uID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVuZGVmaW5lZFwiKSk7XG4gIFxuICAgICAgLy8gTm93IHJlc3RvcmVkU2Vzc2lvbiB2YXJpYWJsZSBjb250YWlucyB0aGUgb2JqZWN0IHRoYXQgd2FzIHNhdmVkXG4gICAgICAvLyBpbiBsb2NhbFN0b3JhZ2VcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvL0JBU0lDIEZPUk0sIG5vIHRvZG9cbiAgICBib2R5R3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm1UZW1wbGF0ZScpO1xuXG4gICAgY29uc3QgZm9ybUFuY2hvckdyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1UZW1wbGF0ZScpO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cInRpdGxlXCJdJykuaW5uZXJUZXh0ID0gXCJUaXRsZTogXCI7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cImRlc2NyaXB0aW9uXCJdJykuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjogXCI7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZHVlRGF0ZScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwiZHVlRGF0ZVwiXScpLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6IFwiO1xuICBcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcbiAgXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5Q29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eScpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ZhbHVlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJzUwJyk7XG4gICAgXG4gICAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZhbHVlXCIpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKTtcbiAgICB2YWx1ZS50ZXh0Q29udGVudCA9IGlucHV0LnZhbHVlO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgICB2YWx1ZS50ZXh0Q29udGVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICB9KTtcbiAgXG4gICAgXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3JhbmdlJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnNldEF0dHJpYnV0ZSgnbWF4JywgJzEwMCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpLnNldEF0dHJpYnV0ZSgnc3RlcCcsICcxJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cInByaW9yaXR5XCJdJykuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogXCI7XG4gIFxuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdub3RlcycpO1xuICAgIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25vdGVzJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cIm5vdGVzXCJdJykuaW5uZXJUZXh0ID0gXCJOb3RlczogXCI7XG4gIFxuICAgIC8vY2hlY2tsaXN0XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKSkuaW5uZXJUZXh0ID0gXCJDaGVja2xpc3Q6XCI7XG4gIFxuICAgIC8vIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrbGlzdCcpO1xuICBcbiAgICAvLyBjb25zdCBjbEdyYmJyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbGlzdCcpO1xuICBcbiAgICAvLyBjbEdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2wtYnV0dG9uJyk7XG4gICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NsLWJ1dHRvbicpLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2wtYnV0dG9uJykudmFsdWUgPSBcIkFkZCBMaXN0IEl0ZW1cIjtcbiAgICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tsaXN0SW5wdXRDb250YWluZXInKTtcbiAgICBcbiAgXG4gIFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2xpc3RJbnB1dENvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWxDTElucHV0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ0xJbnB1dCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ0xJbnB1dCcpLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnV3JpdGUgaGVyZS4uLicpO1xuICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0SW5wdXRDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3RWxlU3BhbicpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdFbGVTcGFuJykuY2xhc3NMaXN0LmFkZCgnYWRkQnRuJyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0VsZVNwYW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3RWxlbWVudCgpO1xuICAgIH0pXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ld0VsZVNwYW4nKS5pbm5lclRleHQgPSBcIkFkZFwiO1xuICAgIC8vVUwgY2hlY2tsaXN0XG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndWxDaGVja2xpc3QnKTtcbiAgXG4gIFxuICBcbiAgICAvLyBDcmVhdGUgYSBcImNsb3NlXCIgYnV0dG9uIGFuZCBhcHBlbmQgaXQgdG8gZWFjaCBsaXN0IGl0ZW1cbiAgICB2YXIgbXlOb2RlbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiLnVsQ2hlY2tsaXN0ID4gTElcIik7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IG15Tm9kZWxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XG4gICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHUwMEQ3XCIpO1xuICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG4gICAgICBzcGFuLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgICBteU5vZGVsaXN0W2ldLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgXG4gICAgLy8gQ2xpY2sgb24gYSBjbG9zZSBidXR0b24gdG8gaGlkZSB0aGUgY3VycmVudCBsaXN0IGl0ZW1cbiAgICB2YXIgY2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIik7XG4gICAgdmFyIGk7XG4gICAgZm9yIChpID0gMDsgaSA8IGNsb3NlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjbG9zZVtpXS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaXYgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGRpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG4gICAgfVxuICBcbiAgICAvLyBBZGQgYSBcImNoZWNrZWRcIiBzeW1ib2wgd2hlbiBjbGlja2luZyBvbiBhIGxpc3QgaXRlbVxuICAgIHZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgICBsaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXYpIHtcbiAgICAgIGlmIChldi50YXJnZXQudGFnTmFtZSA9PT0gJ0xJJykge1xuICAgICAgICBldi50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgICAgfVxuICAgIH0sIGZhbHNlKTtcbiAgXG4gICAgLy8gQ3JlYXRlIGEgbmV3IGxpc3QgaXRlbSB3aGVuIGNsaWNraW5nIG9uIHRoZSBcIkFkZFwiIGJ1dHRvblxuICAgIGZ1bmN0aW9uIG5ld0VsZW1lbnQoKSB7XG4gICAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWxDTElucHV0XCIpLnZhbHVlO1xuICAgICAgdmFyIHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShpbnB1dFZhbHVlKTtcbiAgICAgIGxpLmFwcGVuZENoaWxkKHQpO1xuICAgICAgaWYgKGlucHV0VmFsdWUgPT09ICcnKSB7XG4gICAgICAgIGFsZXJ0KFwiWW91IG11c3Qgd3JpdGUgc29tZXRoaW5nIVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWxDaGVja2xpc3RcIikuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgfVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENMSW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICBcbiAgICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XG4gICAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHUwMEQ3XCIpO1xuICAgICAgc3Bhbi5jbGFzc05hbWUgPSBcImNsb3NlXCI7XG4gICAgICBzcGFuLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgY2xvc2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2xvc2VbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBkaXYgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgZGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgXG4gICAgLy9TVUJNSVQgQlVUVE9OXG4gICAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1Ym1pdEJ0bicpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0bkdyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEJ0bicpO1xuICAgIHN1Ym1pdEJ0bkdyYmJyLmlubmVyVGV4dCA9IFwiU3VibWl0XCI7XG4gICAgc3VibWl0QnRuR3JiYnIuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICBcbiAgICBzdWJtaXRCdG5HcmJici5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxldCBjaGVja2xpc3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgICBsZXQgY2hlY2tsaXN0SXRlbXNBcnIgPSBbXTtcbiAgXG4gICAgICBjaGVja2xpc3RJdGVtcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICBjaGVja2xpc3RJdGVtc0Fyci5wdXNoKHgudGV4dENvbnRlbnQpO1xuICAgICAgfSk7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdEl0ZW1zQXJyKTtcbiAgXG4gICAgICBhcnJGb3JTdG9yLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKS52YWx1ZSk7XG4gICAgICBhcnJGb3JTdG9yLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS52YWx1ZSk7XG4gICAgICBhcnJGb3JTdG9yLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWVEYXRlXCIpLnZhbHVlKTtcbiAgICAgIGFyckZvclN0b3IucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLnZhbHVlKTtcbiAgICAgIGFyckZvclN0b3IucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpLnZhbHVlKTtcbiAgICAgIGFyckZvclN0b3IucHVzaCggSlNPTi5zdHJpbmdpZnkoY2hlY2tsaXN0SXRlbXNBcnIpKTtcbiAgXG4gICAgICBjb25zb2xlLmxvZyhhcnJGb3JTdG9yKTtcbiAgXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikudmFsdWUgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kdWVEYXRlXCIpLnZhbHVlID0gXCJcIjtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikudmFsdWUgPSBcIlwiO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZhbHVlXCIpLnRleHRDb250ZW50ID0gNTA7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsQ2hlY2tsaXN0XCIpLmlubmVySFRNTCA9IFwiXCI7XG4gIFxuICAgICAgY2hlY2tsaXN0SXRlbXNBcnIubGVuZ3RoID0gMDtcbiAgXG4gICAgICBjaGVja2xpc3RJdGVtcy5mb3JFYWNoKHggPT4ge1xuICAgICAgICB4LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIH0pO1xuICBcbiAgICAgIHRvZG9zU3RvcmVyKGFyckZvclN0b3IpO1xuICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbiAgXG4gICAgICBhcnJGb3JTdG9yLmxlbmd0aCA9IDA7XG4gIFxuICBcbiAgICAgIC8vdGVzdCBzdHVmZiBoZXJlXG4gICAgICBjb25zdCByZXN0b3JlZFNlc3Npb24gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidW5kZWZpbmVkXCIpKTtcbiAgXG4gICAgICAvLyBOb3cgcmVzdG9yZWRTZXNzaW9uIHZhcmlhYmxlIGNvbnRhaW5zIHRoZSBvYmplY3QgdGhhdCB3YXMgc2F2ZWRcbiAgICAgIC8vIGluIGxvY2FsU3RvcmFnZVxuICAgICAgY29uc29sZS5sb2cocmVzdG9yZWRTZXNzaW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIFxufSIsImltcG9ydCBwcm9qZWN0c1N0b3JlciBmcm9tIFwiLi9wcm9qZWN0cy1zdG9yZXJcIjtcbmltcG9ydCB0b2Rvc1N0b3JlciBmcm9tIFwiLi90b2Rvcy1zdG9yZXJcIjtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UZW1wbGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4vLyAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbi8vICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbi8vICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJykudmFsdWU7XG4vLyAgICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbGlzdCcpLnZhbHVlO1xuXG4vLyAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4vLyAgICAgICAgIHRpdGxlOiB0aXRsZSxcbi8vICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuLy8gICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuLy8gICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4vLyAgICAgICAgIG5vdGVzOiBub3Rlcyxcbi8vICAgICAgICAgY2hlY2tsaXN0IDogY2hlY2tsaXN0XG4vLyAgICAgfTtcblxuLy8gICAgIC8vIGNvbnNvbGUubG9nKGZvcm1EYXRhKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZyhcInNhdmVGb3JtRGF0YSBpcyB3b3JraW5nXCIpO1xuXG4vLyAgICAgLy8gaWYgaXQncyBhIHRvZG8gTE9HSUMgSEVSRVxuLy8gICAgIC8vIHRvZG9zU3RvcmVyKGZvcm1EYXRhKTtcbi8vICAgICAvLyBlbHNlIGlmIGl0J3MgYSBwcm9qZWN0XG4vLyAgICAgLy9wcm9qZWN0c1N0b3Jlcihmb3JtRGF0YSk7XG4vLyB9KTtcblxuLy8gZnVuY3Rpb24gc2F2ZUZvcm1EYXRhKGZvcm1EYXRhKSB7XG4vLyAgICAgY29uc3Qgc3RvcmVkRm9ybURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb3JtRGF0YScpKSB8fCBbXTtcblxuLy8gICAgIHN0b3JlZEZvcm1EYXRhLnB1c2goZm9ybURhdGEpO1xuXG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zvcm1EYXRhJywgSlNPTi5zdHJpbmdpZnkoc3RvcmVkRm9ybURhdGEpKTtcbi8vIH0iLCJpbXBvcnQgZm9ybU1ha2VyIGZyb20gXCIuL2Zvcm0tbW9kdWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzTW9kdWxlKHByb2plY3QsIHRvZG9zKSB7XG4gICAgLy8gdGhpcyBmdW5jdGlvbiByZWNlaXZlcyBhIGxvY2FsIHN0b3JhZ2Uga2V5IGFuZCB0b2RvcywgaXQgd2lsbCBjcmVhdGUgYW4gaHRtbCBkaXNwbGF5IGFuZCBhcHBlbmQgaXQgdG8gXG5cbiAgICBjb25zdCBwcm9qQ29udEdyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuXG4gICAgLy9kZWZhdWx0IHByb2plY3RcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHByb2pDb250R3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb250YWluZXInKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWNhcmQnKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2otYnV0dG9uLWRlbGV0ZScpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qLWJ1dHRvbi1kZWxldGUnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qLWJ1dHRvbi1kZWxldGUnKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0RlbGV0ZSBQcm9qZWN0Jyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FyZCcpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC10aXRsZScpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlJykuaW5uZXJUZXh0ID0gXCJEZWZhdWx0XCI7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FyZCcpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RzLWRpc3BsYXknKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYXJkJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0b2RvLWJ0bi1hZGQnKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1idG4tYWRkJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1idG4tYWRkJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQgVG9kbycpO1xuXG5cbiAgICAgICAgLy9hZGQgYSBwcm9qZWN0IGNhcmRcbiAgICAgICAgcHJvakNvbnRHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWNvbnRhaW5lci1hZGQtcHJvaicpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lci1hZGQtcHJvaicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai1idXR0b24tYWRkJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otYnV0dG9uLWFkZCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2otYnV0dG9uLWFkZCcpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkIFByb2plY3QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgIFxuICAgICAgICBwcm9qQ29udEdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgbGV0IGNhcmRDbnRyID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZC1jb250YWluZXInKSk7XG5cbiAgICAgICAgbGV0IGxhdGVzdENhcmRDbnRyID0gY2FyZENudHIuc2xpY2UoLTEpO1xuXG4gICAgICAgIGxhdGVzdENhcmRDbnRyWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtY2FyZCcpO1xuXG4gICAgICAgIGxldCBwcmpDYXJkID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1jYXJkJykpO1xuICAgICAgICBsZXQgbGF0ZXN0UHJqQ2FyZCA9IHByakNhcmQuc2xpY2UoLTEpO1xuXG4gICAgICAgIGxhdGVzdENhcmRDbnRyWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvai1idXR0b24tZGVsZXRlJyk7XG5cbiAgICAgICAgbGF0ZXN0Q2FyZENudHJbMF0uY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBsYXRlc3RDYXJkQ250clswXS5jaGlsZHJlblsxXS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0RlbGV0ZSBQcm9qZWN0Jyk7XG5cbiAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtdGl0bGUnKTtcblxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IHByb2plY3Q7XG5cbiAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0cy1kaXNwbGF5Jyk7XG5cbiAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3RzLWRpc3BsYXktdWwnKTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyh0b2RvcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG5cbiAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSkuaW5uZXJUZXh0ID0gYCR7SlNPTi5zdHJpbmdpZnkodmFsdWUudGl0bGUpLnJlcGxhY2VBbGwoJ1wiJywgJycpfSwgJHtKU09OLnN0cmluZ2lmeSh2YWx1ZS5kdWVEYXRlKS5yZXBsYWNlQWxsKCdcIicsICcnKX1gO1xuXG4gICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2xhc3NMaXN0LmFkZCgndG9kb3MtbGknKTtcblxuICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWRpdC1idG4tdG9kb3MtbGknKTtcblxuICAgICAgICAgICAgLy9lZGl0IGJ1dHRvblxuICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNoaWxkcmVuWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZWRpdEVsZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0nKSkge1xuICAgICAgICAgICAgICAgICAgICBwcm9qQ29udEdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VkaXQtYnRuLWRpdi1mb3JtJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy93b3JraW5nIGhlcmVcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codG9kb3Nba2V5XSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybS1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtLWhlYWRlcicpLmlubmVyVGV4dCA9IFwiRWRpdCBUb2RvXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdlZGl0LWJ0bi1kaXYtZm9ybS1idG4nKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtLWJ0bicpLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtLWJ0bicpLnZhbHVlID0gXCJYXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9ybU1ha2VyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bi1kaXYtZm9ybScpLHRvZG9zW2tleV0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4tZGl2LWZvcm0tYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0RWxlRm9jdXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtYnRuLWRpdi1mb3JtJykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdkZWwtYnRuLXRvZG9zLWxpJyk7XG5cbiAgICAgICAgICAgIC8vIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XS5jaGlsZHJlblsxXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKSkuc3JjID0gRGVsQnV0dG9uO1xuXG4gICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2hpbGRyZW5bMF0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuXG4gICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL2V4cGFuZGVkIHZpZXdcbiAgICAgICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHggPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4LnRhcmdldC50YWdOYW1lID09IFwiTElcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkSXRlbSA9IGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMV0uY2hpbGRyZW5bMF0uY2hpbGRyZW5ba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRlZC12aWV3Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRvZG9zW2tleV0pLmZvckVhY2goKFtuZXdJdGVtS2V5LCBuZXdJdGVtVmFsdWVdKSA9PiB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihuZXdJdGVtS2V5ICE9IFwicHJvamVjdFwiICYmIHR5cGVvZihuZXdJdGVtVmFsdWUpID09IFwic3RyaW5nXCIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChwYXJhQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFDaGlsZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2V4cGFuZGVkLXZpZXctcGFyYXMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhQ2hpbGQuaW5uZXJUZXh0ID0gSlNPTi5zdHJpbmdpZnkobmV3SXRlbUtleSkucmVwbGFjZUFsbCgnXCInLCAnJykuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBKU09OLnN0cmluZ2lmeShuZXdJdGVtS2V5KS5yZXBsYWNlQWxsKCdcIicsICcnKS5zbGljZSgxKSArIFwiOiBcIiArIEpTT04uc3RyaW5naWZ5KG5ld0l0ZW1WYWx1ZSkucmVwbGFjZUFsbCgnXCInLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5ld0l0ZW1LZXkgIT0gXCJwcm9qZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyYUNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uYXBwZW5kQ2hpbGQocGFyYUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhQ2hpbGQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdleHBhbmRlZC12aWV3LXBhcmFzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYUNoaWxkLmlubmVyVGV4dCA9IEpTT04uc3RyaW5naWZ5KG5ld0l0ZW1LZXkpLnJlcGxhY2VBbGwoJ1wiJywgJycpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgSlNPTi5zdHJpbmdpZnkobmV3SXRlbUtleSkucmVwbGFjZUFsbCgnXCInLCAnJykuc2xpY2UoMSkgKyBcIjogXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZC12aWV3JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChvbGRJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChuZXdJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYobGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQtdmlldycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLnJlcGxhY2VDaGlsZChvbGRJdGVtLCBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzFdLmNoaWxkcmVuWzBdLmNoaWxkcmVuW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5yZXBsYWNlQ2hpbGQobmV3SXRlbSwgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsxXS5jaGlsZHJlblswXS5jaGlsZHJlbltrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1idG4tYWRkJyk7XG5cbiAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblsyXS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdBZGQgVG9kbycpO1xuICAgICAgICBcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xuXG4gICAgLy90aXRsZSwgcHJvZ3Jlc3MsIGFuZCBwcmlvcml0eVxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCB0b2Rvcykge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH1cbiAgXG4gIH0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0c01hbmFnZXIoKSB7XG5cbiAgICAvL2RpZ3MgdGhyb3VnaCBsb2NhbCBzdG9yYWdlIGFuZCBkaXNwbGF5cyB0aGUgb3V0cHV0XG4gICAgY29uc29sZS5sb2cod2luZG93LmxvY2FsU3RvcmFnZS5sZW5ndGgpO1xuXG5cblxuXG4gICAgLy91c2VyIGJvb3RzIHVwXG4gICAgLy9pZiB0aGUgbG9jYWwgc3RvcmFnZSBpcyBlbXB0eSwgdGhpcyBmdW5jdGlvbiBkaXNwbGF5cyBhIGRlZmF1bHQsIGVtcHR5IHByb2plY3QgdG8gc3RhcnRcbiAgICAvLyB0aGUgZGVmYXVsdCBwcm9qZWN0IHdpbGwgYmUgYnVpbHQgYnkgb3VyIHByb2plY3QgbW9kdWxlXG4gICAgLy8gdGhlIHByb2R1Y3QgbW9kdWxlIHdpbGwgY3JlYXRlIGEgXCJjYXJkXCIgZm9yIGEgcHJvamVjdCBieSByZWFkaW5nIGl0cyBkYXRhIG9yIGlmIG5vbmUgaXMgcHJvdmlkZWQsIGFkZCBhIGRlZmF1bHQgcHJvamVjdCAobWF5YmUgd2UgcGFzcyB0aGUgcHJvaiBvYmogYXMgYXJndW1lbnRzKVxuICAgIC8vIFRISVMgZnVuY3Rpb24gd2lsbCBmaXJzdCBwdXQgYWxsIHRoZSBsb2NhbCBzdG9yYWdlIGluIGFuIGl0ZXJhYmxlIGNvbnRhaW5lciwgdGhlbiB3ZSBjYW4gc2VlIHdoZXJlIHRvIGdvXG4gICAgY29uc29sZS5sb2coT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKSk7XG4gICAgY29uc29sZS5sb2coT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKSk7XG5cbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYCR7a2V5fSAtICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KX1gKTtcbiAgICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpbmRleCk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgICAgXG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX0gLSAke3ZhbHVlfWApO1xuICAgIH1cblxuICAgIC8vbm93IHdlIGtub3cgaG93IHRvIGl0ZXJhdGUgb3ZlciBsb2NhbCBzdG9yYWdlLCB3ZSBuZWVkIGEgd2F5IHRvIHB1dCB0aGF0IGRhdGEgdG8gZGlzcGxheSwgY2FuIGRlbGVnYXRlIHRvIGEgbW9kdWxlIGxhdGVyXG5cbiAgICBjb25zdCBwcm9qQ29udEdyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gZm9yIGV2ZXJ5IHByb2plY3Qga2V5LCB3ZSB3aWxsIGNyZWF0ZSBhIFwiY2FyZFwiIGFuZCBhZGQgaXQgdG8gdGhlIHByb2plY3RzLWNvbnRhaW5lclxuICAgIC8vIGl0ZXJhdGUgb3ZlciBsb2NhbHN0b3JhZ2UsIGlmIHRoZXJlIGlzIGEga2V5IHdlIGNyZWF0ZSBhIGhlYWRlciB3aXRoIHRoZSBwcm9qZWN0IHRpdGxlXG4gICAgLy8gaXRlcmF0ZSBvdmVyIHRoZSB0b2RvcyBhbmQgYWRkIGl0IHRvIHRoZSBkaXZcblxuXG4gICAgLy8gV09SS0lORyBPTiBUSElTOiAgdHVybiBwcm9qZWN0IG1vZHVsZSBpbnRvIGEgXCJjYXJkXCItbWFrZXIsIHRoZSBpZGVhIGJlaW5nIHByb2plY3RzIG1hbmFnZXIgbG9va3MgdGhyb3VnaCBsb2NhbFN0b3JhZ2UsIGlmIGl0IGZpbmRzIGEga2V5IGFuZCBhIHZhbHVlIHBhaXIsIGl0IHdpbGwgc2VuZCB0aGUgZGF0YSBvdmVyIHRvIHByb2plY3QtbW9kdWxlIHRvIGNyZWF0ZSBhIGNvbnRhaW5lci4gUHJvamVjdC1tb2R1bGUgd2lsbCBhY2NlcHQgYSBrZXksIGFuZCBhIHZhbHVlIGFzIGFyZ3VtZW50cyB0aGVuIHByb2Nlc3MgdGhlbVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzUmVtb3Zlcihzb21lUHJvamVjdCkge1xuICAgIFxuICAgIGlmIChKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvbWVQcm9qZWN0LnRpdGxlKSkpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc29tZVByb2plY3QudGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoXCJQcm9qZWN0IG5vdCBmb3VuZCFcIik7XG4gICAgfSBcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0c1N0b3Jlcihzb21lUHJvamVjdCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHNvbWVQcm9qZWN0LnRpdGxlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzb21lUHJvamVjdC50aXRsZSkpO1xuICAgIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVByb2plY3QudGl0bGUpKSk7XG4gICAgLy9tYXliZSB3ZSBkb24ndCBuZWVkIHRvIHBhcnNlIEpTT04gY2F1c2UgaXQncyBub3Qgc3RvcmVkIGluIGpzb24/XG5cbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVByb2plY3QudGl0bGUpKXtcbiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcihcIlByb2plY3QgYWxyZWFkeSBleGlzdHMhXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvbWVQcm9qZWN0LnRpdGxlLCBKU09OLnN0cmluZ2lmeShzb21lUHJvamVjdC50b2RvcykpO1xuICAgIH1cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvcyB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpIHtcbiAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgfVxuICBcbiAgfSIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvcy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgdG9kb3NSZW1vdmVyIGZyb20gXCIuL3RvZG9zLXJlbW92ZXIuanNcIjtcbmltcG9ydCB0b2Rvc1N0b3JlciBmcm9tIFwiLi90b2Rvcy1zdG9yZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NNYW5hZ2VyKHNvbWVUb2RvKSB7XG5cbiAgICAvL3JlY2VpdmVzIGEgXCJ0b2RvXCIgb2JqZWN0IGZyb20gdXNlciB0byBtYWtlIHRvZG9zXG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kb3Moc29tZVRvZG8udGl0bGUsIHNvbWVUb2RvLmRlc2NyaXB0aW9uLCBzb21lVG9kby5kdWVEYXRlLCBzb21lVG9kby5wcmlvcml0eSwgc29tZVRvZG8ubm90ZXMsIHNvbWVUb2RvLmNoZWNrbGlzdCk7XG5cbiAgICAvL3N0b3JlIGNyZWF0ZWQgdG9kb3MgaW4gbG9jYWwgc3RvcmFnZSB1c2luZyBUb2RvcyBzdG9yZXJcbiAgICAvLyB0b2Rvc1N0b3JlcihuZXdUb2RvKTtcbiAgICAvLyB3ZSB3aWxsIHJlZmFjdG9yIHRoaXMgdG8gc3RvcmUgdG9kb3MgaW4gYSBleGlzdGluZyBvciBuZXcgcHJvamVjdFxuXG4gICAgLy9yZW1vdmUgYSB0b2RvcyBkYXRhIGluIGxvY2FsIHN0b3JhZ2UgdXNpbmcgVG9kb3MgcmVtb3ZlclxuICAgIC8vIGlmIGEgdXNlciBjbGlja3MgcmVtb3ZlIHRvZG8sIGludm9rZSB0aGUgZm9sbG93aW5nOlxuICAgIC8vIHRvZG9zUmVtb3ZlcihuZXdUb2RvKTtcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NSZW1vdmVyKHNvbWVUb2RvKSB7XG5cbiAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVRvZG8ucHJvamVjdCkpIHx8IFtdO1xuXG4gICAgc3RvcmVkRm9ybURhdGEuZm9yRWFjaCgoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coeC50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvbWVUb2RvLnRpdGxlKTtcbiAgICAgICAgaWYgKHgudGl0bGUgPT0gc29tZVRvZG8udGl0bGUpIHtcbiAgICAgICAgICAgIHN0b3JlZEZvcm1EYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvbWVUb2RvLnByb2plY3QsIEpTT04uc3RyaW5naWZ5KHN0b3JlZEZvcm1EYXRhKSk7XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NTdG9yZXIoc29tZVRvZG8pIHtcbiAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVRvZG8ucHJvamVjdCkpIHx8IFtdO1xuXG4gICAgc3RvcmVkRm9ybURhdGEucHVzaChzb21lVG9kbyk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lVG9kby5wcm9qZWN0LCBKU09OLnN0cmluZ2lmeShzdG9yZWRGb3JtRGF0YSkpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFRvZG9zIGZyb20gXCIuL3RvZG9zLWNyZWF0b3IuanNcIjtcbmltcG9ydCB0b2Rvc01hbmFnZXIgZnJvbSBcIi4vdG9kb3MtbWFuYWdlci5qc1wiO1xuaW1wb3J0IFByb2plY3RzIGZyb20gXCIuL3Byb2plY3RzLWNyZWF0b3IuanNcIjtcbmltcG9ydCBwcm9qZWN0c01hbmFnZXIgZnJvbSBcIi4vcHJvamVjdHMtbWFuYWdlci5qc1wiO1xuXG5pbXBvcnQgc2F2ZUZvcm1EYXRhIGZyb20gXCIuL2Zvcm0tc3RvcmVyLmpzXCI7XG5pbXBvcnQgdG9kb3NTdG9yZXIgZnJvbSBcIi4vdG9kb3Mtc3RvcmVyLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNTdG9yZXIgZnJvbSBcIi4vcHJvamVjdHMtc3RvcmVyLmpzXCI7XG5pbXBvcnQgdG9kb3NSZW1vdmVyIGZyb20gXCIuL3RvZG9zLXJlbW92ZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0c1JlbW92ZXIgZnJvbSBcIi4vcHJvamVjdHMtcmVtb3Zlci5qc1wiO1xuXG5pbXBvcnQgcHJvamVjdHNNb2R1bGUgZnJvbSBcIi4vcHJvamVjdC1tb2R1bGUuanNcIjtcblxuaW1wb3J0IGZvcm1NYWtlciBmcm9tIFwiLi9mb3JtLW1vZHVsZS5qc1wiO1xuaW1wb3J0IFwiLi90b2RvLWxpc3QuY3NzXCI7XG5cbi8vdGVzdGluZyBoZXJlXG5sZXQgdXNlciA9IG5ldyBUb2RvcyhcIkJhcm5leVwiLCBcImZvb1wiLCBcImJhclwiLCBcIjIwMTQtMDItMDlcIiwgXCIzM1wiLCBcImZvb1wiLCBbXCJjbFwiLCBcInRlc3RcIiwgXCJjbHRlc3RcIl0pO1xubGV0IHVzZXIyID0gbmV3IFRvZG9zKFwiR3VtcHlcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIiwgW1wiY2xcIiwgXCJ0ZXN0XCIsIFwiY2x0ZXN0XCJdKTtcbmxldCB1c2VyMyA9IG5ldyBUb2RvcyhcIktsZWV0dXNcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIiwgW1wiY2xcIiwgXCJ0ZXN0XCIsIFwiY2x0ZXN0XCJdKTtcbmxldCB1c2VyNCA9IG5ldyBUb2RvcyhcIk5ld2llXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiMjAyMi0wNi0wNFwiLCBcIjQzXCIsIFwiZm9vXCIpO1xubGV0IHNvbWVQcm9qZWN0ID0gbmV3IFByb2plY3RzKFwiRGVmYXVsdFwiLCB1c2VyKTtcblxudXNlci5ub3RlcyA9IFwiaG90aGVhZFwiO1xuc29tZVByb2plY3QudG9kb3MgPSBbdXNlciwgdXNlcjIsIHVzZXIzXTtcblxuXG4vLyBsZXQgdGVzdENsYXNzR3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlc3RDbGFzc1wiKTtcbi8vIHRlc3RDbGFzc0dyYmJyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB4ID0+IHtcbi8vICAgICAvLyBwcm9qZWN0c01hbmFnZXIoc29tZVByb2plY3QpO1xuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSlbMl0pO1xuLy8gLy8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKVsyXS50b2Rvc1sxXSA9IHVzZXIzO1xuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKVsyXS5fdG9kb3MpO1xuXG4vLyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpWzJdLl90b2Rvcy5wdXNoKCd0ZXN0Jyk7XG5cbi8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSlbMl0uX3RvZG9zKTtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UZW1wbGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4vLyAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbi8vICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbi8vICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJykudmFsdWU7XG4vLyAgICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbGlzdCcpO1xuXG4vLyAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4vLyAgICAgICAgIHByb2plY3Q6ICd0ZXN0Jyxcbi8vICAgICAgICAgdGl0bGU6IHRpdGxlLFxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4vLyAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4vLyAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbi8vICAgICAgICAgbm90ZXM6IG5vdGVzLFxuLy8gICAgICAgICBjaGVja2xpc3QgOiBjaGVja2xpc3Rcbi8vICAgICB9O1xuXG4vLyAgICAgLy8gdG9kb3NTdG9yZXIoZm9ybURhdGEpO1xuLy8gICAgIC8vIHByb2plY3RzU3RvcmVyKHNvbWVQcm9qZWN0KTtcblxuLy8gLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbi8vIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSkpO1xuLy8gLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKS5maW5kKHggPT4geC50aXRsZSA9PSAndGVzdCcgKSk7XG5cbi8vICAgICAvLyBsZXQgdGVzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSk7XG4gICAgXG4vLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgLy8gICAgIGlmICh0ZXN0W2ldID09ICdoZWxsbyBwbHMgd29yaycpIHtcbi8vICAgICAvLyAgICAgICAgIHRlc3Quc3BsaWNlKGksIDEpO1xuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gfVxuICAgIFxuLy8gICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgSlNPTi5zdHJpbmdpZnkodGVzdCkpO1xuXG4vLyAgICAgLy8gZm9yIChsZXQgaSBpbiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKSB7XG4vLyAgICAgLy8gICAgIGkrK1xuLy8gICAgIC8vICAgICBmb3IgKGxldCBqIGluIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JylbaV0ubW9kZWxzKSB7XG4vLyAgICAgLy8gICAgICAgeCArPSBteU9iai5jYXJzW2ldLm1vZGVsc1tqXTtcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgfVxuLy8gfSk7XG5cbi8vIGZvcm1NYWtlcigpO1xuXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcblxuLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcblxucHJvamVjdHNTdG9yZXIoc29tZVByb2plY3QpO1xuLy8gdG9kb3NTdG9yZXIoc29tZVByb2plY3QpO1xuXG4vLyBwcm9qZWN0c01hbmFnZXIoKTtcblxuXG4vLyBwcm9qZWN0c01vZHVsZSgpO1xucHJvamVjdHNNb2R1bGUoXCJmb29cIiwgc29tZVByb2plY3QudG9kb3MpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==