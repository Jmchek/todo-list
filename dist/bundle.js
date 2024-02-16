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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
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

.description {
  font-size: 1.1rem;
}

.dueDate {
  border: 1px solid black;
  border-radius: 4px;
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
  width:  clamp(1337px, 50vw, 1337px);
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
}
`, "",{"version":3,"sources":["webpack://./src/todo-list.css"],"names":[],"mappings":"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","sourcesContent":["*{\n  font-family: Arial, Helvetica, sans-serif;\n}\n\np {\n  margin: 0;\n  display: grid;\n  justify-items: end;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nul li {\n  cursor: pointer;\n  position: relative;\n  padding: 12px 8px 12px 40px;\n  background: #eee;\n  font-size: 1.1rem;\n  transition: 0.2s;\n  list-style: none;\n\n  /* make the list items unselectable */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nform {\n  position: relative;\n  width: 500px;\n  height: 500px;\n  margin: 0 auto;\n  padding: 1em;\n  box-sizing: border-box;\n  background: #fff;\n\n  /* we create our grid */\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 2em 1fr 2em 2em 1fr 3em 1fr 2em;\n}\n\nlabel {\n  display: grid;\n  justify-items: end;\n  align-items: center;\n  font-size: 1.1rem;\n}\n\noutput {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ntextarea {\n  padding-left: 10px;\n  padding-top: 10px;\n\n  min-height: 50px;\n}\n\n.disp-title {\n  margin: 0;\n  padding: 20px;\n}\n\n.newEleSpan {\n  padding: 10px;\n  width: 100%;\n  background: #d9d9d9;\n  color: #555;\n  float: left;\n  text-align: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: 0.3s;\n  border-radius: 0;\n}\n\n.newEleSpan:hover {\n  background-color: #bbb;\n}\n\n.card-container {\n  display: grid;\n  padding: 10px;\n  border-radius: 4px;\n  grid-template-rows: 1fr 10%;\n\n  background-color: #e0e0e0;\n}\n\n.card-container-add-proj {\n  display: grid;\n  padding: 10px;\n  border-radius: 4px;\n\n  background-color: #e0e0e0;\n}\n\n.checklistInputContainer {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n\n.description {\n  font-size: 1.1rem;\n}\n\n.dueDate {\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n.notes {\n  font-size: 1.1rem;\n}\n\n.priorityContainer {\n  display: grid;\n  grid-template-columns: 80% 10%;\n  grid-template-rows: 1em;\n  align-content: center;\n  justify-content: space-between;\n}\n\n.priorityContainer > .priority {\n  padding: 0;\n}\n\n.proj-button-delete {\n  border: 1px solid black;\n}\n\n.project-card {\n  display: grid;\n  grid-template-rows: 10% 1fr 10%;\n}\n\n.project-title {\n  margin: 0;\n  justify-self: center;\n}\n\n.projects-container {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: 1fr 1fr;\n  gap: 20px;\n  padding: 10px;\n  border-radius: 4px;\n\n  margin: 1%;\n  width:  clamp(1337px, 50vw, 1337px);\n  height: 75vh;\n  background-color: #b9b7b7;\n}\n\n.submitBtn {\n  grid-column-end: 3;\n\n  width: 100%;\n  background: #d9d9d9;\n  color: #555;\n  float: left;\n  text-align: center;\n  font-size: 1.1rem;\n  cursor: pointer;\n  transition: 0.3s;\n  border-radius: 0;\n}\n\n.submitBtn:hover {\n  background-color: #bbb;\n}\n\n.title {\n  border: 1px solid black;\n  border-radius: 2px;\n}\n\n.todo-btn-add {\n  border: 1px solid black;\n}\n\n.ulChecklist {\n  display: grid;\n  grid-column-end: 3;\n\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n}\n\n.ulCLInput {\n  border: 1px solid black;\n  border-radius: 4px;\n}\n\n.value {\n  border: 1px solid black;\n  border-radius: 4px;\n  padding: 1px;\n  font-size: 0.9rem;\n}\n\nul li:nth-child(odd) {\n  background: #f9f9f9;\n}\n\n/* Darker background-color on hover */\nul li:hover {\n  background: #ddd;\n}\n\n/* When clicked on, add a background color and strike out text */\nul li.checked {\n  background: #888;\n  color: #fff;\n  text-decoration: line-through;\n}\n\n/* Add a \"checked\" mark when clicked on */\nul li.checked::before {\n  content: '';\n  position: absolute;\n  border-color: #fff;\n  border-style: solid;\n  border-width: 0 2px 2px 0;\n  top: 10px;\n  left: 16px;\n  transform: rotate(45deg);\n  height: 15px;\n  width: 7px;\n}\n\n/* Style the close button */\n.close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 12px 16px 12px 16px;\n}\n\n.close:hover {\n  background-color: #f44336;\n  color: white;\n}\n\n/* Style the input */\ninput {\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  padding: 10px;\n  float: left;\n  font-size: 1.1rem;\n}\n"],"sourceRoot":""}]);
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


//we will have a dom anchor, it will be dynamic mostly
// form-module will append to w/e dom anchor we pick the todos form

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

// <form id="formTemplate">
// <label for="title">Title:</label>
// <input type="text" id="title" required>

// <label for="description">Description:</label>
// <textarea id="description"></textarea>

// <label for="dueDate">Due Date:</label>
// <input type="date" id="dueDate" required>

// <label for="priority">Priority:</label>
// <input type="range" min="1" max="100" value="50" id="priority">

// <label for="notes">Notes:</label>
// <textarea id="notes"></textarea>

// <!-- <label for="checklist">Checklist:</label>
// <input type="checkbox" name="checklist"> -->

// <fieldset id="checklist">
//     <legend>Checklist:</legend>
  
//     <div>
//       <input type="checkbox" id="choice1" name="choice1" value="choice1"/>
//       <label for="choice1">First Choice</label>
//     </div>
  
//     <div>
//       <input type="checkbox" id="choice2" name="choice2" value="choice2"/>
//       <label for="choice2">Second Choice</label>
//     </div>
//   </fieldset>

// <button type="submit">Submit</button>
// </form>

function formMaker() {
  let arrForStor = [];
  // the below anchor will be changed later 
  const bodyGrbbr = document.querySelector('body');

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
  var myNodelist = document.getElementsByTagName("LI");
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
//the intent behind the project-module will be to provide an anchor for the form to attach to, and a display area for todos/local storage.


//create a div grid system, we will have to adjust the html file, then manipulate dom elements with this module

//this might have been made redundant SEE README.md

// nevermind we are making this a module, see README.md

{/* <div class="card-container">
        <div class="project-card">
            <h3 class="project-title">Default</h3>
            <div class="projects-display"></div>
            <input class="todo-btn-add" type="button" value="Add Todo">
        </div>
        <input class="proj-button-delete" type="button" value="Delete Project">
    </div> 

<div class="card-container-add-proj">
            <input class="proj-button-add" type="button" value="Add Project">  
        </div> -->*/}

// bodyGrbbr.appendChild(document.createElement('form')).setAttribute('class', 'formTemplate');

// const formAnchorGrbbr = document.querySelector('.formTemplate');

// formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
// formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'title');
// document.querySelector('.title').setAttribute('type', 'text');
// document.querySelector('[for="title"]').innerText = "Title: ";

// formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'description');
// formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('class', 'description');
// document.querySelector('[for="description"]').innerText = "Description: ";

// formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'dueDate');
// formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('class', 'dueDate');
// document.querySelector('.dueDate').setAttribute('type', 'date');
// document.querySelector('[for="dueDate"]').innerText = "Due Date: ";

// formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'priority');

// formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('class', 'priorityContainer');
// document.querySelector('.priorityContainer').appendChild(document.createElement('input')).setAttribute('class', 'priority');
// document.querySelector('.priorityContainer').appendChild(document.createElement('output')).setAttribute('class', 'value');
// document.querySelector(".priority").setAttribute('value', '50');

function projectsModule(key, todos) {
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

        latestPrjCard[0].children[0].innerText = key;

        latestPrjCard[0].appendChild(document.createElement('div')).setAttribute('class', 'projects-display');

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
    constructor(title, progress, priority, todos) {
      this.title = title;
      this.todos = todos;
    }

    //GET
    get title() {
      return this._title;
    }

    get todos() {
        return this._todos;
      }
    
    //SET
    set title(value) {
      this._title = value;
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
let user = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "foo", "bar", "foo", "bar", "foo");
let user2 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Gumpy", "foo", "bar", "foo", "bar", "foo");
let user3 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Kleetus", "foo", "bar", "foo", "bar", "foo");
let user4 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Default", "test", "bar", "foo", "bar", "foo");
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

// projectsStorer(someProject);
// todosStorer(someProject);

// projectsManager();


// projectsModule();
(0,_project_module_js__WEBPACK_IMPORTED_MODULE_9__["default"])("foo", "bar");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxvRkFBb0YsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVB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OztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLElBQUksNERBQVc7QUFDZjs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUMvUStDO0FBQ047O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDQTs7O0FBR0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0dlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzFCZTs7QUFFZjtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLEtBQUssSUFBSSwwQkFBMEI7QUFDMUQsT0FBTzs7QUFFUCx3QkFBd0IsNkJBQTZCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixLQUFLLElBQUksTUFBTTtBQUN0Qzs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDWmU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEV1QztBQUNPO0FBQ0Y7O0FBRTdCOztBQUVmO0FBQ0Esc0JBQXNCLHlEQUFLOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEJlOztBQUVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7O1VDTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXVDO0FBQ087QUFDRDtBQUNPOztBQUVSO0FBQ0E7QUFDTTtBQUNKO0FBQ007O0FBRUg7O0FBRVI7QUFDaEI7O0FBRXpCO0FBQ0EsZUFBZSx5REFBSztBQUNwQixnQkFBZ0IseURBQUs7QUFDckIsZ0JBQWdCLHlEQUFLO0FBQ3JCLGdCQUFnQix5REFBSztBQUNyQixzQkFBc0IsNERBQVE7O0FBRTlCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLGlCQUFpQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBLDhEQUFjLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1saXN0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLWxpc3QuY3NzPzNmYzMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZm9ybS1tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0tc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtcmVtb3Zlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1yZW1vdmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1zdG9yZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEycHggOHB4IDEycHggNDBweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgLyogbWFrZSB0aGUgbGlzdCBpdGVtcyB1bnNlbGVjdGFibGUgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IDUwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMWVtO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuXG4gIC8qIHdlIGNyZWF0ZSBvdXIgZ3JpZCAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMjBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZW0gMWZyIDJlbSAyZW0gMWZyIDNlbSAxZnIgMmVtO1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbm91dHB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG50ZXh0YXJlYSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgbWluLWhlaWdodDogNTBweDtcbn1cblxuLmRpc3AtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5uZXdFbGVTcGFuIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XG4gIGNvbG9yOiAjNTU1O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjNzO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ubmV3RWxlU3Bhbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG59XG5cbi5jYXJkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMTAlO1xuXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMGUwZTA7XG59XG5cbi5jYXJkLWNvbnRhaW5lci1hZGQtcHJvaiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xufVxuXG4uY2hlY2tsaXN0SW5wdXRDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uZHVlRGF0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5ub3RlcyB7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4ucHJpb3JpdHlDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxMCU7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLnByaW9yaXR5Q29udGFpbmVyID4gLnByaW9yaXR5IHtcbiAgcGFkZGluZzogMDtcbn1cblxuLnByb2otYnV0dG9uLWRlbGV0ZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ucHJvamVjdC1jYXJkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyIDEwJTtcbn1cblxuLnByb2plY3QtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4ucHJvamVjdHMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBnYXA6IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICBtYXJnaW46IDElO1xuICB3aWR0aDogIGNsYW1wKDEzMzdweCwgNTB2dywgMTMzN3B4KTtcbiAgaGVpZ2h0OiA3NXZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjliN2I3O1xufVxuXG4uc3VibWl0QnRuIHtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBjb2xvcjogIzU1NTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogMC4zcztcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLnN1Ym1pdEJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XG59XG5cbi50aXRsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi50b2RvLWJ0bi1hZGQge1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnVsQ2hlY2tsaXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikpO1xufVxuXG4udWxDTElucHV0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnZhbHVlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMXB4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxudWwgbGk6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuXG4vKiBEYXJrZXIgYmFja2dyb3VuZC1jb2xvciBvbiBob3ZlciAqL1xudWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4vKiBXaGVuIGNsaWNrZWQgb24sIGFkZCBhIGJhY2tncm91bmQgY29sb3IgYW5kIHN0cmlrZSBvdXQgdGV4dCAqL1xudWwgbGkuY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLyogQWRkIGEgXCJjaGVja2VkXCIgbWFyayB3aGVuIGNsaWNrZWQgb24gKi9cbnVsIGxpLmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDdweDtcbn1cblxuLyogU3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxMnB4IDE2cHggMTJweCAxNnB4O1xufVxuXG4uY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFN0eWxlIHRoZSBpbnB1dCAqL1xuaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdG9kby1saXN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNu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QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbnAge1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxudWwge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxudWwgbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTJweCA4cHggMTJweCA0MHB4O1xcbiAgYmFja2dyb3VuZDogI2VlZTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFxuICAvKiBtYWtlIHRoZSBsaXN0IGl0ZW1zIHVuc2VsZWN0YWJsZSAqL1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuZm9ybSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTAwcHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBwYWRkaW5nOiAxZW07XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG5cXG4gIC8qIHdlIGNyZWF0ZSBvdXIgZ3JpZCAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAyMHB4O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmVtIDFmciAyZW0gMmVtIDFmciAzZW0gMWZyIDJlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxub3V0cHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcblxcbiAgbWluLWhlaWdodDogNTBweDtcXG59XFxuXFxuLmRpc3AtdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLm5ld0VsZVNwYW4ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbn1cXG5cXG4ubmV3RWxlU3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxMCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uY2FyZC1jb250YWluZXItYWRkLXByb2oge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbn1cXG5cXG4uY2hlY2tsaXN0SW5wdXRDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLm5vdGVzIHtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4ucHJpb3JpdHlDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODAlIDEwJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4ucHJpb3JpdHlDb250YWluZXIgPiAucHJpb3JpdHkge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLnByb2otYnV0dG9uLWRlbGV0ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnByb2plY3QtY2FyZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMCUgMWZyIDEwJTtcXG59XFxuXFxuLnByb2plY3QtdGl0bGUge1xcbiAgbWFyZ2luOiAwO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0cy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcblxcbiAgbWFyZ2luOiAxJTtcXG4gIHdpZHRoOiAgY2xhbXAoMTMzN3B4LCA1MHZ3LCAxMzM3cHgpO1xcbiAgaGVpZ2h0OiA3NXZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I5YjdiNztcXG59XFxuXFxuLnN1Ym1pdEJ0biB7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICNkOWQ5ZDk7XFxuICBjb2xvcjogIzU1NTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuLnN1Ym1pdEJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxufVxcblxcbi50b2RvLWJ0bi1hZGQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi51bENoZWNrbGlzdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XFxufVxcblxcbi51bENMSW5wdXQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi52YWx1ZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbn1cXG5cXG51bCBsaTpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xcbn1cXG5cXG4vKiBEYXJrZXIgYmFja2dyb3VuZC1jb2xvciBvbiBob3ZlciAqL1xcbnVsIGxpOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkZGQ7XFxufVxcblxcbi8qIFdoZW4gY2xpY2tlZCBvbiwgYWRkIGEgYmFja2dyb3VuZCBjb2xvciBhbmQgc3RyaWtlIG91dCB0ZXh0ICovXFxudWwgbGkuY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kOiAjODg4O1xcbiAgY29sb3I6ICNmZmY7XFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLyogQWRkIGEgXFxcImNoZWNrZWRcXFwiIG1hcmsgd2hlbiBjbGlja2VkIG9uICovXFxudWwgbGkuY2hlY2tlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMCAycHggMnB4IDA7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAxNnB4O1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgd2lkdGg6IDdweDtcXG59XFxuXFxuLyogU3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAqL1xcbi5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG4gIHBhZGRpbmc6IDEycHggMTZweCAxMnB4IDE2cHg7XFxufVxcblxcbi5jbG9zZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgaW5wdXQgKi9cXG5pbnB1dCB7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8tbGlzdC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3RvZG8tbGlzdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB0b2Rvc1N0b3JlciBmcm9tIFwiLi90b2Rvcy1zdG9yZXIuanNcIjtcblxuLy93ZSB3aWxsIGhhdmUgYSBkb20gYW5jaG9yLCBpdCB3aWxsIGJlIGR5bmFtaWMgbW9zdGx5XG4vLyBmb3JtLW1vZHVsZSB3aWxsIGFwcGVuZCB0byB3L2UgZG9tIGFuY2hvciB3ZSBwaWNrIHRoZSB0b2RvcyBmb3JtXG5cbi8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtVGVtcGxhdGUnKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbi8vICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4vLyAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykudmFsdWU7XG4vLyAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS52YWx1ZTtcbi8vICAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RlcycpLnZhbHVlO1xuLy8gICAgIGNvbnN0IGNoZWNrbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja2xpc3QnKTtcblxuLy8gICAgIGNvbnN0IGZvcm1EYXRhID0ge1xuLy8gICAgICAgICBwcm9qZWN0OiAndGVzdCcsXG4vLyAgICAgICAgIHRpdGxlOiB0aXRsZSxcbi8vICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuLy8gICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuLy8gICAgICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4vLyAgICAgICAgIG5vdGVzOiBub3Rlcyxcbi8vICAgICAgICAgY2hlY2tsaXN0IDogY2hlY2tsaXN0XG4vLyAgICAgfTtcblxuLy8gICAgIC8vIHRvZG9zU3RvcmVyKGZvcm1EYXRhKTtcbi8vICAgICAvLyBwcm9qZWN0c1N0b3Jlcihzb21lUHJvamVjdCk7XG5cbi8vIC8vIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSk7XG4vLyAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpKTtcbi8vIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSkuZmluZCh4ID0+IHgudGl0bGUgPT0gJ3Rlc3QnICkpO1xuXG4vLyAgICAgLy8gbGV0IHRlc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpO1xuICAgIFxuLy8gICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdC5sZW5ndGg7IGkrKykge1xuLy8gICAgIC8vICAgICBpZiAodGVzdFtpXSA9PSAnaGVsbG8gcGxzIHdvcmsnKSB7XG4vLyAgICAgLy8gICAgICAgICB0ZXN0LnNwbGljZShpLCAxKTtcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vIH1cbiAgICBcbi8vICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGVzdCcsIEpTT04uc3RyaW5naWZ5KHRlc3QpKTtcblxuLy8gICAgIC8vIGZvciAobGV0IGkgaW4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSkge1xuLy8gICAgIC8vICAgICBpKytcbi8vICAgICAvLyAgICAgZm9yIChsZXQgaiBpbiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpW2ldLm1vZGVscykge1xuLy8gICAgIC8vICAgICAgIHggKz0gbXlPYmouY2Fyc1tpXS5tb2RlbHNbal07XG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgIH1cbi8vIH0pO1xuXG4vLyA8Zm9ybSBpZD1cImZvcm1UZW1wbGF0ZVwiPlxuLy8gPGxhYmVsIGZvcj1cInRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbi8vIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwidGl0bGVcIiByZXF1aXJlZD5cblxuLy8gPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbi8vIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCI+PC90ZXh0YXJlYT5cblxuLy8gPGxhYmVsIGZvcj1cImR1ZURhdGVcIj5EdWUgRGF0ZTo8L2xhYmVsPlxuLy8gPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkdWVEYXRlXCIgcmVxdWlyZWQ+XG5cbi8vIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4vLyA8aW5wdXQgdHlwZT1cInJhbmdlXCIgbWluPVwiMVwiIG1heD1cIjEwMFwiIHZhbHVlPVwiNTBcIiBpZD1cInByaW9yaXR5XCI+XG5cbi8vIDxsYWJlbCBmb3I9XCJub3Rlc1wiPk5vdGVzOjwvbGFiZWw+XG4vLyA8dGV4dGFyZWEgaWQ9XCJub3Rlc1wiPjwvdGV4dGFyZWE+XG5cbi8vIDwhLS0gPGxhYmVsIGZvcj1cImNoZWNrbGlzdFwiPkNoZWNrbGlzdDo8L2xhYmVsPlxuLy8gPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2xpc3RcIj4gLS0+XG5cbi8vIDxmaWVsZHNldCBpZD1cImNoZWNrbGlzdFwiPlxuLy8gICAgIDxsZWdlbmQ+Q2hlY2tsaXN0OjwvbGVnZW5kPlxuICBcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hvaWNlMVwiIG5hbWU9XCJjaG9pY2UxXCIgdmFsdWU9XCJjaG9pY2UxXCIvPlxuLy8gICAgICAgPGxhYmVsIGZvcj1cImNob2ljZTFcIj5GaXJzdCBDaG9pY2U8L2xhYmVsPlxuLy8gICAgIDwvZGl2PlxuICBcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGlkPVwiY2hvaWNlMlwiIG5hbWU9XCJjaG9pY2UyXCIgdmFsdWU9XCJjaG9pY2UyXCIvPlxuLy8gICAgICAgPGxhYmVsIGZvcj1cImNob2ljZTJcIj5TZWNvbmQgQ2hvaWNlPC9sYWJlbD5cbi8vICAgICA8L2Rpdj5cbi8vICAgPC9maWVsZHNldD5cblxuLy8gPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4vLyA8L2Zvcm0+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1NYWtlcigpIHtcbiAgbGV0IGFyckZvclN0b3IgPSBbXTtcbiAgLy8gdGhlIGJlbG93IGFuY2hvciB3aWxsIGJlIGNoYW5nZWQgbGF0ZXIgXG4gIGNvbnN0IGJvZHlHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICBib2R5R3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Zvcm1UZW1wbGF0ZScpO1xuXG4gIGNvbnN0IGZvcm1BbmNob3JHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtVGVtcGxhdGUnKTtcblxuICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAndGl0bGUnKTtcbiAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndGl0bGUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cInRpdGxlXCJdJykuaW5uZXJUZXh0ID0gXCJUaXRsZTogXCI7XG5cbiAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJkZXNjcmlwdGlvblwiXScpLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246IFwiO1xuXG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkdWVEYXRlJyk7XG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZURhdGUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGUnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwiZHVlRGF0ZVwiXScpLmlubmVyVGV4dCA9IFwiRHVlIERhdGU6IFwiO1xuXG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuXG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcmlvcml0eUNvbnRhaW5lcicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHlDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ByaW9yaXR5Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ZhbHVlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikuc2V0QXR0cmlidXRlKCd2YWx1ZScsICc1MCcpO1xuICBcbiAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZhbHVlXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIik7XG4gIHZhbHVlLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgdmFsdWUudGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH0pO1xuXG4gIFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdzdGVwJywgJzEnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cInByaW9yaXR5XCJdJykuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogXCI7XG5cbiAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdGVzJyk7XG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ25vdGVzJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJub3Rlc1wiXScpLmlubmVyVGV4dCA9IFwiTm90ZXM6IFwiO1xuXG4gIC8vY2hlY2tsaXN0XG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLmlubmVyVGV4dCA9IFwiQ2hlY2tsaXN0OlwiO1xuXG4gIC8vIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrbGlzdCcpO1xuXG4gIC8vIGNvbnN0IGNsR3JiYnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0Jyk7XG5cbiAgLy8gY2xHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NsLWJ1dHRvbicpO1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2wtYnV0dG9uJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2wtYnV0dG9uJykudmFsdWUgPSBcIkFkZCBMaXN0IEl0ZW1cIjtcbiAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrbGlzdElucHV0Q29udGFpbmVyJyk7XG4gIFxuXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrbGlzdElucHV0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd1bENMSW5wdXQnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVsQ0xJbnB1dCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51bENMSW5wdXQnKS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1dyaXRlIGhlcmUuLi4nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tsaXN0SW5wdXRDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbmV3RWxlU3BhbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3RWxlU3BhbicpLmNsYXNzTGlzdC5hZGQoJ2FkZEJ0bicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3RWxlU3BhbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbmV3RWxlbWVudCgpO1xuICB9KVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3RWxlU3BhbicpLmlubmVyVGV4dCA9IFwiQWRkXCI7XG4gIC8vVUwgY2hlY2tsaXN0XG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3VsQ2hlY2tsaXN0Jyk7XG5cblxuXG4gIC8vIENyZWF0ZSBhIFwiY2xvc2VcIiBidXR0b24gYW5kIGFwcGVuZCBpdCB0byBlYWNoIGxpc3QgaXRlbVxuICB2YXIgbXlOb2RlbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTElcIik7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbXlOb2RlbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XG4gICAgdmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFx1MDBEN1wiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICBzcGFuLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgbXlOb2RlbGlzdFtpXS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfVxuXG4gIC8vIENsaWNrIG9uIGEgY2xvc2UgYnV0dG9uIHRvIGhpZGUgdGhlIGN1cnJlbnQgbGlzdCBpdGVtXG4gIHZhciBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKykge1xuICAgIGNsb3NlW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaXYgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhIFwiY2hlY2tlZFwiIHN5bWJvbCB3aGVuIGNsaWNraW5nIG9uIGEgbGlzdCBpdGVtXG4gIHZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgaWYgKGV2LnRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgICBldi50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfSwgZmFsc2UpO1xuXG4gIC8vIENyZWF0ZSBhIG5ldyBsaXN0IGl0ZW0gd2hlbiBjbGlja2luZyBvbiB0aGUgXCJBZGRcIiBidXR0b25cbiAgZnVuY3Rpb24gbmV3RWxlbWVudCgpIHtcbiAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsQ0xJbnB1dFwiKS52YWx1ZTtcbiAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0VmFsdWUpO1xuICAgIGxpLmFwcGVuZENoaWxkKHQpO1xuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgYWxlcnQoXCJZb3UgbXVzdCB3cml0ZSBzb21ldGhpbmchXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnVsQ2hlY2tsaXN0XCIpLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51bENMSW5wdXRcIikudmFsdWUgPSBcIlwiO1xuXG4gICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcbiAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHUwMEQ3XCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKykge1xuICAgICAgY2xvc2VbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGl2ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vU1VCTUlUIEJVVFRPTlxuICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0QnRuJyk7XG4gIGNvbnN0IHN1Ym1pdEJ0bkdyYmJyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdEJ0bicpO1xuICBzdWJtaXRCdG5HcmJici5pbm5lclRleHQgPSBcIlN1Ym1pdFwiO1xuICBzdWJtaXRCdG5HcmJici5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG5cbiAgc3VibWl0QnRuR3JiYnIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IGNoZWNrbGlzdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBsZXQgY2hlY2tsaXN0SXRlbXNBcnIgPSBbXTtcblxuICAgIGNoZWNrbGlzdEl0ZW1zLmZvckVhY2goeCA9PiB7XG4gICAgICBjaGVja2xpc3RJdGVtc0Fyci5wdXNoKHgudGV4dENvbnRlbnQpO1xuICAgIH0pO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKGNoZWNrbGlzdEl0ZW1zQXJyKTtcblxuICAgIGFyckZvclN0b3IucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRpdGxlXCIpLnZhbHVlKTtcbiAgICBhcnJGb3JTdG9yLnB1c2goZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS52YWx1ZSk7XG4gICAgYXJyRm9yU3Rvci5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlRGF0ZVwiKS52YWx1ZSk7XG4gICAgYXJyRm9yU3Rvci5wdXNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHlcIikudmFsdWUpO1xuICAgIGFyckZvclN0b3IucHVzaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5vdGVzXCIpLnZhbHVlKTtcbiAgICBhcnJGb3JTdG9yLnB1c2goIEpTT04uc3RyaW5naWZ5KGNoZWNrbGlzdEl0ZW1zQXJyKSk7XG5cbiAgICBjb25zb2xlLmxvZyhhcnJGb3JTdG9yKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIikudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlRGF0ZVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmlvcml0eVwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ub3Rlc1wiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52YWx1ZVwiKS50ZXh0Q29udGVudCA9IDUwO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudWxDaGVja2xpc3RcIikuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNoZWNrbGlzdEl0ZW1zQXJyLmxlbmd0aCA9IDA7XG5cbiAgICBjaGVja2xpc3RJdGVtcy5mb3JFYWNoKHggPT4ge1xuICAgICAgeC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfSk7XG5cbiAgICB0b2Rvc1N0b3JlcihhcnJGb3JTdG9yKTtcbiAgICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuXG4gICAgYXJyRm9yU3Rvci5sZW5ndGggPSAwO1xuXG5cbiAgICAvL3Rlc3Qgc3R1ZmYgaGVyZVxuICAgIGNvbnN0IHJlc3RvcmVkU2Vzc2lvbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1bmRlZmluZWRcIikpO1xuXG4gICAgLy8gTm93IHJlc3RvcmVkU2Vzc2lvbiB2YXJpYWJsZSBjb250YWlucyB0aGUgb2JqZWN0IHRoYXQgd2FzIHNhdmVkXG4gICAgLy8gaW4gbG9jYWxTdG9yYWdlXG4gICAgY29uc29sZS5sb2cocmVzdG9yZWRTZXNzaW9uKTtcbiAgfSk7XG59IiwiaW1wb3J0IHByb2plY3RzU3RvcmVyIGZyb20gXCIuL3Byb2plY3RzLXN0b3JlclwiO1xuaW1wb3J0IHRvZG9zU3RvcmVyIGZyb20gXCIuL3RvZG9zLXN0b3JlclwiO1xuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4vLyAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbi8vICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuLy8gICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4vLyAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKS52YWx1ZTtcbi8vICAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0JykudmFsdWU7XG5cbi8vICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbi8vICAgICAgICAgdGl0bGU6IHRpdGxlLFxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4vLyAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4vLyAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbi8vICAgICAgICAgbm90ZXM6IG5vdGVzLFxuLy8gICAgICAgICBjaGVja2xpc3QgOiBjaGVja2xpc3Rcbi8vICAgICB9O1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwic2F2ZUZvcm1EYXRhIGlzIHdvcmtpbmdcIik7XG5cbi8vICAgICAvLyBpZiBpdCdzIGEgdG9kbyBMT0dJQyBIRVJFXG4vLyAgICAgLy8gdG9kb3NTdG9yZXIoZm9ybURhdGEpO1xuLy8gICAgIC8vIGVsc2UgaWYgaXQncyBhIHByb2plY3Rcbi8vICAgICAvL3Byb2plY3RzU3RvcmVyKGZvcm1EYXRhKTtcbi8vIH0pO1xuXG4vLyBmdW5jdGlvbiBzYXZlRm9ybURhdGEoZm9ybURhdGEpIHtcbi8vICAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1EYXRhJykpIHx8IFtdO1xuXG4vLyAgICAgc3RvcmVkRm9ybURhdGEucHVzaChmb3JtRGF0YSk7XG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybURhdGEnLCBKU09OLnN0cmluZ2lmeShzdG9yZWRGb3JtRGF0YSkpO1xuLy8gfSIsIi8vdGhlIGludGVudCBiZWhpbmQgdGhlIHByb2plY3QtbW9kdWxlIHdpbGwgYmUgdG8gcHJvdmlkZSBhbiBhbmNob3IgZm9yIHRoZSBmb3JtIHRvIGF0dGFjaCB0bywgYW5kIGEgZGlzcGxheSBhcmVhIGZvciB0b2Rvcy9sb2NhbCBzdG9yYWdlLlxuXG5cbi8vY3JlYXRlIGEgZGl2IGdyaWQgc3lzdGVtLCB3ZSB3aWxsIGhhdmUgdG8gYWRqdXN0IHRoZSBodG1sIGZpbGUsIHRoZW4gbWFuaXB1bGF0ZSBkb20gZWxlbWVudHMgd2l0aCB0aGlzIG1vZHVsZVxuXG4vL3RoaXMgbWlnaHQgaGF2ZSBiZWVuIG1hZGUgcmVkdW5kYW50IFNFRSBSRUFETUUubWRcblxuLy8gbmV2ZXJtaW5kIHdlIGFyZSBtYWtpbmcgdGhpcyBhIG1vZHVsZSwgc2VlIFJFQURNRS5tZFxuXG57LyogPGRpdiBjbGFzcz1cImNhcmQtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWNhcmRcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInByb2plY3QtdGl0bGVcIj5EZWZhdWx0PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0cy1kaXNwbGF5XCI+PC9kaXY+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJ0b2RvLWJ0bi1hZGRcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJBZGQgVG9kb1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGlucHV0IGNsYXNzPVwicHJvai1idXR0b24tZGVsZXRlXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiRGVsZXRlIFByb2plY3RcIj5cbiAgICA8L2Rpdj4gXG5cbjxkaXYgY2xhc3M9XCJjYXJkLWNvbnRhaW5lci1hZGQtcHJvalwiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwicHJvai1idXR0b24tYWRkXCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiQWRkIFByb2plY3RcIj4gIFxuICAgICAgICA8L2Rpdj4gLS0+Ki99XG5cbi8vIGJvZHlHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZm9ybVRlbXBsYXRlJyk7XG5cbi8vIGNvbnN0IGZvcm1BbmNob3JHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtVGVtcGxhdGUnKTtcblxuLy8gZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4vLyBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICd0aXRsZScpO1xuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJ0aXRsZVwiXScpLmlubmVyVGV4dCA9IFwiVGl0bGU6IFwiO1xuXG4vLyBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAnZGVzY3JpcHRpb24nKTtcbi8vIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Rlc2NyaXB0aW9uJyk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwiZGVzY3JpcHRpb25cIl0nKS5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcblxuLy8gZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2R1ZURhdGUnKTtcbi8vIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2R1ZURhdGUnKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJkdWVEYXRlXCJdJykuaW5uZXJUZXh0ID0gXCJEdWUgRGF0ZTogXCI7XG5cbi8vIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcmlvcml0eScpO1xuXG4vLyBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHlDb250YWluZXInKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJpb3JpdHknKTtcbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eUNvbnRhaW5lcicpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3ZhbHVlJyk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5XCIpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnNTAnKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNNb2R1bGUoa2V5LCB0b2Rvcykge1xuICAgIC8vIHRoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgYSBsb2NhbCBzdG9yYWdlIGtleSBhbmQgdG9kb3MsIGl0IHdpbGwgY3JlYXRlIGFuIGh0bWwgZGlzcGxheSBhbmQgYXBwZW5kIGl0IHRvIFxuXG4gICAgY29uc3QgcHJvakNvbnRHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcblxuICAgIC8vZGVmYXVsdCBwcm9qZWN0XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT0gMCkge1xuICAgICAgICBwcm9qQ29udEdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGFpbmVyJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncHJvamVjdC1jYXJkJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtY29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qLWJ1dHRvbi1kZWxldGUnKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1idXR0b24tZGVsZXRlJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvai1idXR0b24tZGVsZXRlJykuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdEZWxldGUgUHJvamVjdCcpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhcmQnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2plY3QtdGl0bGUnKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10aXRsZScpLmlubmVyVGV4dCA9IFwiRGVmYXVsdFwiO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhcmQnKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0cy1kaXNwbGF5Jyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtY2FyZCcpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAndG9kby1idG4tYWRkJyk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYnRuLWFkZCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG8tYnRuLWFkZCcpLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkIFRvZG8nKTtcblxuXG4gICAgICAgIC8vYWRkIGEgcHJvamVjdCBjYXJkXG4gICAgICAgIHByb2pDb250R3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1jb250YWluZXItYWRkLXByb2onKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXItYWRkLXByb2onKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2otYnV0dG9uLWFkZCcpO1xuXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qLWJ1dHRvbi1hZGQnKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qLWJ1dHRvbi1hZGQnKS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ0FkZCBQcm9qZWN0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICBcbiAgICAgICAgcHJvakNvbnRHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGxldCBjYXJkQ250ciA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQtY29udGFpbmVyJykpO1xuXG4gICAgICAgIGxldCBsYXRlc3RDYXJkQ250ciA9IGNhcmRDbnRyLnNsaWNlKC0xKTtcblxuICAgICAgICBsYXRlc3RDYXJkQ250clswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LWNhcmQnKTtcblxuICAgICAgICBsZXQgcHJqQ2FyZCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtY2FyZCcpKTtcbiAgICAgICAgbGV0IGxhdGVzdFByakNhcmQgPSBwcmpDYXJkLnNsaWNlKC0xKTtcblxuICAgICAgICBsYXRlc3RDYXJkQ250clswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3Byb2otYnV0dG9uLWRlbGV0ZScpO1xuXG4gICAgICAgIGxhdGVzdENhcmRDbnRyWzBdLmNoaWxkcmVuWzFdLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICAgICAgbGF0ZXN0Q2FyZENudHJbMF0uY2hpbGRyZW5bMV0uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdEZWxldGUgUHJvamVjdCcpO1xuXG4gICAgICAgIGxhdGVzdFByakNhcmRbMF0uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0LXRpdGxlJyk7XG5cbiAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBrZXk7XG5cbiAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdwcm9qZWN0cy1kaXNwbGF5Jyk7XG5cbiAgICAgICAgbGF0ZXN0UHJqQ2FyZFswXS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3RvZG8tYnRuLWFkZCcpO1xuXG4gICAgICAgIGxhdGVzdFByakNhcmRbMF0uY2hpbGRyZW5bMl0uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgICAgICBsYXRlc3RQcmpDYXJkWzBdLmNoaWxkcmVuWzJdLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnQWRkIFRvZG8nKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHMge1xuXG4gICAgLy90aXRsZSwgcHJvZ3Jlc3MsIGFuZCBwcmlvcml0eVxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBwcm9ncmVzcywgcHJpb3JpdHksIHRvZG9zKSB7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLnRvZG9zID0gdG9kb3M7XG4gICAgfVxuXG4gICAgLy9HRVRcbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0IHRvZG9zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdG9kb3M7XG4gICAgICB9XG4gICAgXG4gICAgLy9TRVRcbiAgICBzZXQgdGl0bGUodmFsdWUpIHtcbiAgICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHRvZG9zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3RvZG9zID0gdmFsdWU7XG4gICAgICB9XG4gIFxuICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNNYW5hZ2VyKCkge1xuXG4gICAgLy9kaWdzIHRocm91Z2ggbG9jYWwgc3RvcmFnZSBhbmQgZGlzcGxheXMgdGhlIG91dHB1dFxuICAgIGNvbnNvbGUubG9nKHdpbmRvdy5sb2NhbFN0b3JhZ2UubGVuZ3RoKTtcblxuXG5cblxuICAgIC8vdXNlciBib290cyB1cFxuICAgIC8vaWYgdGhlIGxvY2FsIHN0b3JhZ2UgaXMgZW1wdHksIHRoaXMgZnVuY3Rpb24gZGlzcGxheXMgYSBkZWZhdWx0LCBlbXB0eSBwcm9qZWN0IHRvIHN0YXJ0XG4gICAgLy8gdGhlIGRlZmF1bHQgcHJvamVjdCB3aWxsIGJlIGJ1aWx0IGJ5IG91ciBwcm9qZWN0IG1vZHVsZVxuICAgIC8vIHRoZSBwcm9kdWN0IG1vZHVsZSB3aWxsIGNyZWF0ZSBhIFwiY2FyZFwiIGZvciBhIHByb2plY3QgYnkgcmVhZGluZyBpdHMgZGF0YSBvciBpZiBub25lIGlzIHByb3ZpZGVkLCBhZGQgYSBkZWZhdWx0IHByb2plY3QgKG1heWJlIHdlIHBhc3MgdGhlIHByb2ogb2JqIGFzIGFyZ3VtZW50cylcbiAgICAvLyBUSElTIGZ1bmN0aW9uIHdpbGwgZmlyc3QgcHV0IGFsbCB0aGUgbG9jYWwgc3RvcmFnZSBpbiBhbiBpdGVyYWJsZSBjb250YWluZXIsIHRoZW4gd2UgY2FuIHNlZSB3aGVyZSB0byBnb1xuICAgIGNvbnNvbGUubG9nKE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkpO1xuICAgIGNvbnNvbGUubG9nKE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkpO1xuXG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke2tleX0gLSAke2xvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSl9YCk7XG4gICAgICB9KTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaW5kZXgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhgJHtrZXl9IC0gJHt2YWx1ZX1gKTtcbiAgICB9XG5cbiAgICAvL25vdyB3ZSBrbm93IGhvdyB0byBpdGVyYXRlIG92ZXIgbG9jYWwgc3RvcmFnZSwgd2UgbmVlZCBhIHdheSB0byBwdXQgdGhhdCBkYXRhIHRvIGRpc3BsYXksIGNhbiBkZWxlZ2F0ZSB0byBhIG1vZHVsZSBsYXRlclxuXG4gICAgY29uc3QgcHJvakNvbnRHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cy1jb250YWluZXInKTtcblxuICAgIC8vIGZvciBldmVyeSBwcm9qZWN0IGtleSwgd2Ugd2lsbCBjcmVhdGUgYSBcImNhcmRcIiBhbmQgYWRkIGl0IHRvIHRoZSBwcm9qZWN0cy1jb250YWluZXJcbiAgICAvLyBpdGVyYXRlIG92ZXIgbG9jYWxzdG9yYWdlLCBpZiB0aGVyZSBpcyBhIGtleSB3ZSBjcmVhdGUgYSBoZWFkZXIgd2l0aCB0aGUgcHJvamVjdCB0aXRsZVxuICAgIC8vIGl0ZXJhdGUgb3ZlciB0aGUgdG9kb3MgYW5kIGFkZCBpdCB0byB0aGUgZGl2XG5cblxuICAgIC8vIFdPUktJTkcgT04gVEhJUzogIHR1cm4gcHJvamVjdCBtb2R1bGUgaW50byBhIFwiY2FyZFwiLW1ha2VyLCB0aGUgaWRlYSBiZWluZyBwcm9qZWN0cyBtYW5hZ2VyIGxvb2tzIHRocm91Z2ggbG9jYWxTdG9yYWdlLCBpZiBpdCBmaW5kcyBhIGtleSBhbmQgYSB2YWx1ZSBwYWlyLCBpdCB3aWxsIHNlbmQgdGhlIGRhdGEgb3ZlciB0byBwcm9qZWN0LW1vZHVsZSB0byBjcmVhdGUgYSBjb250YWluZXIuIFByb2plY3QtbW9kdWxlIHdpbGwgYWNjZXB0IGEga2V5LCBhbmQgYSB2YWx1ZSBhcyBhcmd1bWVudHMgdGhlbiBwcm9jZXNzIHRoZW1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9qZWN0c1JlbW92ZXIoc29tZVByb2plY3QpIHtcbiAgICBcbiAgICBpZiAoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzb21lUHJvamVjdC50aXRsZSkpKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHNvbWVQcm9qZWN0LnRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBjb25zb2xlLmVycm9yKFwiUHJvamVjdCBub3QgZm91bmQhXCIpO1xuICAgIH0gXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNTdG9yZXIoc29tZVByb2plY3QpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhzb21lUHJvamVjdC50aXRsZSk7XG4gICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVByb2plY3QudGl0bGUpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvbWVQcm9qZWN0LnRpdGxlKSkpO1xuICAgIC8vbWF5YmUgd2UgZG9uJ3QgbmVlZCB0byBwYXJzZSBKU09OIGNhdXNlIGl0J3Mgbm90IHN0b3JlZCBpbiBqc29uP1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvbWVQcm9qZWN0LnRpdGxlKSl7XG4gICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoXCJQcm9qZWN0IGFscmVhZHkgZXhpc3RzIVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lUHJvamVjdC50aXRsZSwgSlNPTi5zdHJpbmdpZnkoc29tZVByb2plY3QudG9kb3MpKTtcbiAgICB9XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb3Mge1xuXG4gICAgY29uc3RydWN0b3IocHJvamVjdCx0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2tsaXN0KSB7XG4gICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgIHRoaXMubm90ZXMgPSBub3RlcztcbiAgICAgIHRoaXMuY2hlY2tsaXN0ID0gY2hlY2tsaXN0O1xuICAgIH1cblxuICAgIC8vR0VUXG4gICAgZ2V0IHByb2plY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHJvamVjdDtcbiAgICB9XG5cbiAgICBnZXQgdGl0bGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0IGRlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldCBkdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2R1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCBub3RlcygpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ub3RlcztcbiAgICB9XG5cbiAgICBnZXQgY2hlY2tsaXN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2NoZWNrbGlzdDtcbiAgICB9XG4gICAgXG4gICAgLy9TRVRcbiAgICBzZXQgcHJvamVjdCh2YWx1ZSkge1xuICAgICAgdGhpcy5fcHJvamVjdCA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWUpIHtcbiAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGR1ZURhdGUodmFsdWUpIHtcbiAgICAgIHRoaXMuX2R1ZURhdGUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgcHJpb3JpdHkodmFsdWUpIHtcbiAgICAgIHRoaXMuX3ByaW9yaXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IG5vdGVzKHZhbHVlKSB7XG4gICAgICB0aGlzLl9ub3RlcyA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBjaGVja2xpc3QodmFsdWUpIHtcbiAgICAgIHRoaXMuX2NoZWNrbGlzdCA9IHZhbHVlO1xuICAgIH1cbiAgXG4gIH0iLCJpbXBvcnQgVG9kb3MgZnJvbSBcIi4vdG9kb3MtY3JlYXRvci5qc1wiO1xuaW1wb3J0IHRvZG9zUmVtb3ZlciBmcm9tIFwiLi90b2Rvcy1yZW1vdmVyLmpzXCI7XG5pbXBvcnQgdG9kb3NTdG9yZXIgZnJvbSBcIi4vdG9kb3Mtc3RvcmVyLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zTWFuYWdlcihzb21lVG9kbykge1xuXG4gICAgLy9yZWNlaXZlcyBhIFwidG9kb1wiIG9iamVjdCBmcm9tIHVzZXIgdG8gbWFrZSB0b2Rvc1xuICAgIGxldCBuZXdUb2RvID0gbmV3IFRvZG9zKHNvbWVUb2RvLnRpdGxlLCBzb21lVG9kby5kZXNjcmlwdGlvbiwgc29tZVRvZG8uZHVlRGF0ZSwgc29tZVRvZG8ucHJpb3JpdHksIHNvbWVUb2RvLm5vdGVzLCBzb21lVG9kby5jaGVja2xpc3QpO1xuXG4gICAgLy9zdG9yZSBjcmVhdGVkIHRvZG9zIGluIGxvY2FsIHN0b3JhZ2UgdXNpbmcgVG9kb3Mgc3RvcmVyXG4gICAgLy8gdG9kb3NTdG9yZXIobmV3VG9kbyk7XG4gICAgLy8gd2Ugd2lsbCByZWZhY3RvciB0aGlzIHRvIHN0b3JlIHRvZG9zIGluIGEgZXhpc3Rpbmcgb3IgbmV3IHByb2plY3RcblxuICAgIC8vcmVtb3ZlIGEgdG9kb3MgZGF0YSBpbiBsb2NhbCBzdG9yYWdlIHVzaW5nIFRvZG9zIHJlbW92ZXJcbiAgICAvLyBpZiBhIHVzZXIgY2xpY2tzIHJlbW92ZSB0b2RvLCBpbnZva2UgdGhlIGZvbGxvd2luZzpcbiAgICAvLyB0b2Rvc1JlbW92ZXIobmV3VG9kbyk7XG4gICAgfSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zUmVtb3Zlcihzb21lVG9kbykge1xuXG4gICAgY29uc3Qgc3RvcmVkRm9ybURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvbWVUb2RvLnByb2plY3QpKSB8fCBbXTtcblxuICAgIHN0b3JlZEZvcm1EYXRhLmZvckVhY2goKHgsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHgudGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhzb21lVG9kby50aXRsZSk7XG4gICAgICAgIGlmICh4LnRpdGxlID09IHNvbWVUb2RvLnRpdGxlKSB7XG4gICAgICAgICAgICBzdG9yZWRGb3JtRGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lVG9kby5wcm9qZWN0LCBKU09OLnN0cmluZ2lmeShzdG9yZWRGb3JtRGF0YSkpO1xuICAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZG9zU3RvcmVyKHNvbWVUb2RvKSB7XG4gICAgY29uc3Qgc3RvcmVkRm9ybURhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNvbWVUb2RvLnByb2plY3QpKSB8fCBbXTtcblxuICAgIHN0b3JlZEZvcm1EYXRhLnB1c2goc29tZVRvZG8pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc29tZVRvZG8ucHJvamVjdCwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkRm9ybURhdGEpKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgVG9kb3MgZnJvbSBcIi4vdG9kb3MtY3JlYXRvci5qc1wiO1xuaW1wb3J0IHRvZG9zTWFuYWdlciBmcm9tIFwiLi90b2Rvcy1tYW5hZ2VyLmpzXCI7XG5pbXBvcnQgUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdHMtY3JlYXRvci5qc1wiO1xuaW1wb3J0IHByb2plY3RzTWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0cy1tYW5hZ2VyLmpzXCI7XG5cbmltcG9ydCBzYXZlRm9ybURhdGEgZnJvbSBcIi4vZm9ybS1zdG9yZXIuanNcIjtcbmltcG9ydCB0b2Rvc1N0b3JlciBmcm9tIFwiLi90b2Rvcy1zdG9yZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0c1N0b3JlciBmcm9tIFwiLi9wcm9qZWN0cy1zdG9yZXIuanNcIjtcbmltcG9ydCB0b2Rvc1JlbW92ZXIgZnJvbSBcIi4vdG9kb3MtcmVtb3Zlci5qc1wiO1xuaW1wb3J0IHByb2plY3RzUmVtb3ZlciBmcm9tIFwiLi9wcm9qZWN0cy1yZW1vdmVyLmpzXCI7XG5cbmltcG9ydCBwcm9qZWN0c01vZHVsZSBmcm9tIFwiLi9wcm9qZWN0LW1vZHVsZS5qc1wiO1xuXG5pbXBvcnQgZm9ybU1ha2VyIGZyb20gXCIuL2Zvcm0tbW9kdWxlLmpzXCI7XG5pbXBvcnQgXCIuL3RvZG8tbGlzdC5jc3NcIjtcblxuLy90ZXN0aW5nIGhlcmVcbmxldCB1c2VyID0gbmV3IFRvZG9zKFwiQmFybmV5XCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIpO1xubGV0IHVzZXIyID0gbmV3IFRvZG9zKFwiR3VtcHlcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIik7XG5sZXQgdXNlcjMgPSBuZXcgVG9kb3MoXCJLbGVldHVzXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIpO1xubGV0IHVzZXI0ID0gbmV3IFRvZG9zKFwiRGVmYXVsdFwiLCBcInRlc3RcIiwgXCJiYXJcIiwgXCJmb29cIiwgXCJiYXJcIiwgXCJmb29cIik7XG5sZXQgc29tZVByb2plY3QgPSBuZXcgUHJvamVjdHMoXCJEZWZhdWx0XCIsIHVzZXIpO1xuXG51c2VyLm5vdGVzID0gXCJob3RoZWFkXCI7XG5zb21lUHJvamVjdC50b2RvcyA9IFt1c2VyLCB1c2VyMiwgdXNlcjNdO1xuXG5cbi8vIGxldCB0ZXN0Q2xhc3NHcmJiciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVzdENsYXNzXCIpO1xuLy8gdGVzdENsYXNzR3JiYnIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHggPT4ge1xuLy8gICAgIC8vIHByb2plY3RzTWFuYWdlcihzb21lUHJvamVjdCk7XG4vLyB9KTtcblxuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKVsyXSk7XG4vLyAvLyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpWzJdLnRvZG9zWzFdID0gdXNlcjM7XG4vLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpWzJdLl90b2Rvcyk7XG5cbi8vIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSlbMl0uX3RvZG9zLnB1c2goJ3Rlc3QnKTtcblxuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKVsyXS5fdG9kb3MpO1xuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4vLyAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbi8vICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuLy8gICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4vLyAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKS52YWx1ZTtcbi8vICAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0Jyk7XG5cbi8vICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbi8vICAgICAgICAgcHJvamVjdDogJ3Rlc3QnLFxuLy8gICAgICAgICB0aXRsZTogdGl0bGUsXG4vLyAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbi8vICAgICAgICAgZHVlRGF0ZTogZHVlRGF0ZSxcbi8vICAgICAgICAgcHJpb3JpdHk6IHByaW9yaXR5LFxuLy8gICAgICAgICBub3Rlczogbm90ZXMsXG4vLyAgICAgICAgIGNoZWNrbGlzdCA6IGNoZWNrbGlzdFxuLy8gICAgIH07XG5cbi8vICAgICAvLyB0b2Rvc1N0b3Jlcihmb3JtRGF0YSk7XG4vLyAgICAgLy8gcHJvamVjdHNTdG9yZXIoc29tZVByb2plY3QpO1xuXG4vLyAvLyBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuLy8gLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKSk7XG4vLyAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpLmZpbmQoeCA9PiB4LnRpdGxlID09ICd0ZXN0JyApKTtcblxuLy8gICAgIC8vIGxldCB0ZXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKTtcbiAgICBcbi8vICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRlc3QubGVuZ3RoOyBpKyspIHtcbi8vICAgICAvLyAgICAgaWYgKHRlc3RbaV0gPT0gJ2hlbGxvIHBscyB3b3JrJykge1xuLy8gICAgIC8vICAgICAgICAgdGVzdC5zcGxpY2UoaSwgMSk7XG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyB9XG4gICAgXG4vLyAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rlc3QnLCBKU09OLnN0cmluZ2lmeSh0ZXN0KSk7XG5cbi8vICAgICAvLyBmb3IgKGxldCBpIGluIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpIHtcbi8vICAgICAvLyAgICAgaSsrXG4vLyAgICAgLy8gICAgIGZvciAobGV0IGogaW4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKVtpXS5tb2RlbHMpIHtcbi8vICAgICAvLyAgICAgICB4ICs9IG15T2JqLmNhcnNbaV0ubW9kZWxzW2pdO1xuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gICB9XG4vLyB9KTtcblxuLy8gZm9ybU1ha2VyKCk7XG5cbi8vIHByb2plY3RzU3RvcmVyKHNvbWVQcm9qZWN0KTtcbi8vIHRvZG9zU3RvcmVyKHNvbWVQcm9qZWN0KTtcblxuLy8gcHJvamVjdHNNYW5hZ2VyKCk7XG5cblxuLy8gcHJvamVjdHNNb2R1bGUoKTtcbnByb2plY3RzTW9kdWxlKFwiZm9vXCIsIFwiYmFyXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==