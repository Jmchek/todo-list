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
  font-size: 16px;
}

p {
  margin: 0;
  display: grid;
  justify-items: end;
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
  font-size: 18px;
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
  height: 700px;
  margin: 0 auto;
  padding: 1em;
  box-sizing: border-box;
  background: #fff;

  /* we create our grid */
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1em 2em 1em 1em 2em 1em;
}

label {
  display: grid;
  justify-items: end;
}

#priorityContainer {
  display: grid;
  grid-template-columns: 80% 1fr;
  grid-template-rows: 1em;
}

output {
  display: flex;
  justify-content: center;
}

#ulCLInput {
  /* max-width: 70%; */
}

#newEleSpan {
  padding: 10px;
  width: 100%;
  background: #d9d9d9;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 0;
}

#checklistInputContainer {
  display: grid;
  grid-template-columns: 3fr 1fr;
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
  font-size: 16px;
}

/* Style the "Add" button */

#newEleSpan:hover {
  background-color: #bbb;
}`, "",{"version":3,"sources":["webpack://./src/todo-list.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;;EAEhB,qCAAqC;EACrC,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,cAAc;EACd,YAAY;EACZ,sBAAsB;EACtB,gBAAgB;;EAEhB,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,qCAAqC;EACrC,2CAA2C;AAC7C;;AAEA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;AACrB;;AAEA,qCAAqC;AACrC;EACE,gBAAgB;AAClB;;AAEA,gEAAgE;AAChE;EACE,gBAAgB;EAChB,WAAW;EACX,6BAA6B;AAC/B;;AAEA,yCAAyC;AACzC;EACE,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,SAAS;EACT,UAAU;EACV,wBAAwB;EACxB,YAAY;EACZ,UAAU;AACZ;;AAEA,2BAA2B;AAC3B;EACE,kBAAkB;EAClB,QAAQ;EACR,MAAM;EACN,4BAA4B;AAC9B;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA,oBAAoB;AACpB;EACE,SAAS;EACT,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,WAAW;EACX,eAAe;AACjB;;AAEA,2BAA2B;;AAE3B;EACE,sBAAsB;AACxB","sourcesContent":["*{\n  font-size: 16px;\n}\n\np {\n  margin: 0;\n  display: grid;\n  justify-items: end;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n}\n\nul li {\n  cursor: pointer;\n  position: relative;\n  padding: 12px 8px 12px 40px;\n  background: #eee;\n  font-size: 18px;\n  transition: 0.2s;\n  list-style: none;\n\n  /* make the list items unselectable */\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nform {\n  position: relative;\n  width: 500px;\n  height: 700px;\n  margin: 0 auto;\n  padding: 1em;\n  box-sizing: border-box;\n  background: #fff;\n\n  /* we create our grid */\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: 1em 2em 1em 1em 2em 1em;\n}\n\nlabel {\n  display: grid;\n  justify-items: end;\n}\n\n#priorityContainer {\n  display: grid;\n  grid-template-columns: 80% 1fr;\n  grid-template-rows: 1em;\n}\n\noutput {\n  display: flex;\n  justify-content: center;\n}\n\n#ulCLInput {\n  /* max-width: 70%; */\n}\n\n#newEleSpan {\n  padding: 10px;\n  width: 100%;\n  background: #d9d9d9;\n  color: #555;\n  float: left;\n  text-align: center;\n  font-size: 16px;\n  cursor: pointer;\n  transition: 0.3s;\n  border-radius: 0;\n}\n\n#checklistInputContainer {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n}\n\nul li:nth-child(odd) {\n  background: #f9f9f9;\n}\n\n/* Darker background-color on hover */\nul li:hover {\n  background: #ddd;\n}\n\n/* When clicked on, add a background color and strike out text */\nul li.checked {\n  background: #888;\n  color: #fff;\n  text-decoration: line-through;\n}\n\n/* Add a \"checked\" mark when clicked on */\nul li.checked::before {\n  content: '';\n  position: absolute;\n  border-color: #fff;\n  border-style: solid;\n  border-width: 0 2px 2px 0;\n  top: 10px;\n  left: 16px;\n  transform: rotate(45deg);\n  height: 15px;\n  width: 7px;\n}\n\n/* Style the close button */\n.close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  padding: 12px 16px 12px 16px;\n}\n\n.close:hover {\n  background-color: #f44336;\n  color: white;\n}\n\n/* Style the input */\ninput {\n  margin: 0;\n  border: none;\n  border-radius: 0;\n  padding: 10px;\n  float: left;\n  font-size: 16px;\n}\n\n/* Style the \"Add\" button */\n\n#newEleSpan:hover {\n  background-color: #bbb;\n}"],"sourceRoot":""}]);
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
  const bodyGrbbr = document.querySelector('body');

  bodyGrbbr.appendChild(document.createElement('form')).setAttribute('id', 'formTemplate');

  const formAnchorGrbbr = document.getElementById('formTemplate');

  formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'title');
  formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('id', 'title');
  document.getElementById('title').setAttribute('type', 'text');
  document.querySelector('[for="title"]').innerText = "Title: ";

  formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'description');
  formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('id', 'description');
  document.querySelector('[for="description"]').innerText = "Description: ";

  formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'dueDate');
  formAnchorGrbbr.appendChild(document.createElement('input')).setAttribute('id', 'dueDate');
  document.getElementById('dueDate').setAttribute('type', 'date');
  document.querySelector('[for="dueDate"]').innerText = "Due Date: ";

  formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'priority');

  formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('id', 'priorityContainer');
  document.querySelector('#priorityContainer').appendChild(document.createElement('input')).setAttribute('id', 'priority');
  document.querySelector('#priorityContainer').appendChild(document.createElement('output')).setAttribute('id', 'value');
  
  const value = document.querySelector("#value");
  const input = document.querySelector("#priority");
  value.textContent = input.value;
  input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
  });

  
  document.getElementById('priority').setAttribute('type', 'range');
  document.getElementById('priority').setAttribute('min', '0');
  document.getElementById('priority').setAttribute('max', '100');
  document.getElementById('priority').setAttribute('step', '1');
  document.querySelector('[for="priority"]').innerText = "Priority: ";

  formAnchorGrbbr.appendChild(document.createElement('label')).setAttribute('for', 'notes');
  formAnchorGrbbr.appendChild(document.createElement('textarea')).setAttribute('id', 'notes');
  document.querySelector('[for="notes"]').innerText = "Notes: ";

  //checklist
  formAnchorGrbbr.appendChild(document.createElement('p')).innerText = "Checklist:";

  // formAnchorGrbbr.appendChild(document.createElement('fieldset')).setAttribute('id', 'checklist');

  // const clGrbbr = document.getElementById('checklist');

  // clGrbbr.appendChild(document.createElement('input')).setAttribute('id', 'cl-button');
  // document.querySelector('#cl-button').setAttribute('type', 'button');
  // document.querySelector('#cl-button').value = "Add List Item";
  formAnchorGrbbr.appendChild(document.createElement('div')).setAttribute('id', 'checklistInputContainer');
  


  document.querySelector('#checklistInputContainer').appendChild(document.createElement('input')).setAttribute('id', 'ulCLInput');
  document.querySelector('#ulCLInput').setAttribute('type', 'text');
  document.querySelector('#ulCLInput').setAttribute('placeholder', 'Write here...');

  document.querySelector('#checklistInputContainer').appendChild(document.createElement('span')).setAttribute('id', 'newEleSpan');
  document.querySelector('#newEleSpan').classList.add('addBtn');
  document.querySelector('#newEleSpan').addEventListener('click', () => {
      newElement();
  })
  document.querySelector('#newEleSpan').innerText = "Add";
  //UL checklist
  formAnchorGrbbr.appendChild(document.createElement('ul')).setAttribute('id', 'ulChecklist');



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
    var inputValue = document.getElementById("ulCLInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("ulChecklist").appendChild(li);
    }
    document.getElementById("ulCLInput").value = "";

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
/* harmony import */ var _form_module_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form-module.js */ "./src/form-module.js");
/* harmony import */ var _todo_list_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./todo-list.css */ "./src/todo-list.css");














//testing here
let user = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Barney", "foo", "bar", "foo", "bar", "foo");
let user2 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Gumpy", "foo", "bar", "foo", "bar", "foo");
let user3 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Kleetus", "foo", "bar", "foo", "bar", "foo");
let user4 = new _todos_creator_js__WEBPACK_IMPORTED_MODULE_0__["default"]("test", "test", "bar", "foo", "bar", "foo");
let someProject = new _projects_creator_js__WEBPACK_IMPORTED_MODULE_2__["default"]("test", "foo", "bar", user);

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

(0,_form_module_js__WEBPACK_IMPORTED_MODULE_9__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9GQUFvRixVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLFlBQVksTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSw0QkFBNEIsb0JBQW9CLEdBQUcsT0FBTyxjQUFjLGtCQUFrQix1QkFBdUIsR0FBRyxRQUFRLGNBQWMsZUFBZSxHQUFHLFdBQVcsb0JBQW9CLHVCQUF1QixnQ0FBZ0MscUJBQXFCLG9CQUFvQixxQkFBcUIscUJBQXFCLDBFQUEwRSwyQkFBMkIsMEJBQTBCLHNCQUFzQixHQUFHLFVBQVUsdUJBQXVCLGlCQUFpQixrQkFBa0IsbUJBQW1CLGlCQUFpQiwyQkFBMkIscUJBQXFCLGdEQUFnRCxtQkFBbUIsMENBQTBDLGdEQUFnRCxHQUFHLFdBQVcsa0JBQWtCLHVCQUF1QixHQUFHLHdCQUF3QixrQkFBa0IsbUNBQW1DLDRCQUE0QixHQUFHLFlBQVksa0JBQWtCLDRCQUE0QixHQUFHLGdCQUFnQix1QkFBdUIsS0FBSyxpQkFBaUIsa0JBQWtCLGdCQUFnQix3QkFBd0IsZ0JBQWdCLGdCQUFnQix1QkFBdUIsb0JBQW9CLG9CQUFvQixxQkFBcUIscUJBQXFCLEdBQUcsOEJBQThCLGtCQUFrQixtQ0FBbUMsR0FBRywwQkFBMEIsd0JBQXdCLEdBQUcseURBQXlELHFCQUFxQixHQUFHLHNGQUFzRixxQkFBcUIsZ0JBQWdCLGtDQUFrQyxHQUFHLHlFQUF5RSxnQkFBZ0IsdUJBQXVCLHVCQUF1Qix3QkFBd0IsOEJBQThCLGNBQWMsZUFBZSw2QkFBNkIsaUJBQWlCLGVBQWUsR0FBRywwQ0FBMEMsdUJBQXVCLGFBQWEsV0FBVyxpQ0FBaUMsR0FBRyxrQkFBa0IsOEJBQThCLGlCQUFpQixHQUFHLGtDQUFrQyxjQUFjLGlCQUFpQixxQkFBcUIsa0JBQWtCLGdCQUFnQixvQkFBb0IsR0FBRyx5REFBeUQsMkJBQTJCLEdBQUcsbUJBQW1CO0FBQ25rSDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ3JKMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSwwRkFBTyxJQUFJLDBGQUFPLFVBQVUsMEZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixpQkFBaUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVlO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVCQUF1QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxrQkFBa0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUN0TitDO0FBQ047O0FBRXpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVDNkM7QUFDTztBQUNGOztBQUVuQzs7QUFFZjtBQUNBLHlCQUF5Qiw0REFBUTs7QUFFakM7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1hlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQZTtBQUNmO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUGU7O0FBRWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEV1QztBQUNPO0FBQ0Y7O0FBRTdCOztBQUVmO0FBQ0Esc0JBQXNCLHlEQUFLOztBQUUzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEJlOztBQUVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2RlO0FBQ2Y7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7O1VDTkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBdUM7QUFDTztBQUNEO0FBQ087O0FBRVI7QUFDQTtBQUNNO0FBQ0o7QUFDTTs7QUFFWDtBQUNoQjs7QUFFekI7QUFDQSxlQUFlLHlEQUFLO0FBQ3BCLGdCQUFnQix5REFBSztBQUNyQixnQkFBZ0IseURBQUs7QUFDckIsZ0JBQWdCLHlEQUFLO0FBQ3JCLHNCQUFzQiw0REFBUTs7QUFFOUI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsaUJBQWlCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKLDJEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8tbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdG9kby1saXN0LmNzcz8zZmMzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Zvcm0tbW9kdWxlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9mb3JtLXN0b3Jlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtY3JlYXRvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtcmVtb3Zlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcHJvamVjdHMtc3RvcmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1jcmVhdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1yZW1vdmVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2Rvcy1zdG9yZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnAge1xuICBtYXJnaW46IDA7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcbn1cblxudWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbnVsIGxpIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDEycHggOHB4IDEycHggNDBweDtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBsaXN0LXN0eWxlOiBub25lO1xuXG4gIC8qIG1ha2UgdGhlIGxpc3QgaXRlbXMgdW5zZWxlY3RhYmxlICovXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbmZvcm0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiA3MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcblxuICAvKiB3ZSBjcmVhdGUgb3VyIGdyaWQgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDIwcHg7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtIDJlbSAxZW0gMWVtIDJlbSAxZW07XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1pdGVtczogZW5kO1xufVxuXG4jcHJpb3JpdHlDb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWVtO1xufVxuXG5vdXRwdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3VsQ0xJbnB1dCB7XG4gIC8qIG1heC13aWR0aDogNzAlOyAqL1xufVxuXG4jbmV3RWxlU3BhbiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZDlkOWQ5O1xuICBjb2xvcjogIzU1NTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbiNjaGVja2xpc3RJbnB1dENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDFmcjtcbn1cblxudWwgbGk6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xufVxuXG4vKiBEYXJrZXIgYmFja2dyb3VuZC1jb2xvciBvbiBob3ZlciAqL1xudWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xufVxuXG4vKiBXaGVuIGNsaWNrZWQgb24sIGFkZCBhIGJhY2tncm91bmQgY29sb3IgYW5kIHN0cmlrZSBvdXQgdGV4dCAqL1xudWwgbGkuY2hlY2tlZCB7XG4gIGJhY2tncm91bmQ6ICM4ODg7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLyogQWRkIGEgXCJjaGVja2VkXCIgbWFyayB3aGVuIGNsaWNrZWQgb24gKi9cbnVsIGxpLmNoZWNrZWQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAxNnB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDdweDtcbn1cblxuLyogU3R5bGUgdGhlIGNsb3NlIGJ1dHRvbiAqL1xuLmNsb3NlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxMnB4IDE2cHggMTJweCAxNnB4O1xufVxuXG4uY2xvc2U6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIFN0eWxlIHRoZSBpbnB1dCAqL1xuaW5wdXQge1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLyogU3R5bGUgdGhlIFwiQWRkXCIgYnV0dG9uICovXG5cbiNuZXdFbGVTcGFuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy90b2RvLWxpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjs7RUFFaEIscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdCQUFnQjs7RUFFaEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QscUNBQXFDO0VBQ3JDLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLHFDQUFxQztBQUNyQztFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxnRUFBZ0U7QUFDaEU7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixVQUFVO0FBQ1o7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQSxvQkFBb0I7QUFDcEI7RUFDRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUEsMkJBQTJCOztBQUUzQjtFQUNFLHNCQUFzQjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG5wIHtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XFxufVxcblxcbnVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbnVsIGxpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDEycHggOHB4IDEycHggNDBweDtcXG4gIGJhY2tncm91bmQ6ICNlZWU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG5cXG4gIC8qIG1ha2UgdGhlIGxpc3QgaXRlbXMgdW5zZWxlY3RhYmxlICovXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG5mb3JtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGhlaWdodDogNzAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDFlbTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcblxcbiAgLyogd2UgY3JlYXRlIG91ciBncmlkICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDIwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZW0gMmVtIDFlbSAxZW0gMmVtIDFlbTtcXG59XFxuXFxubGFiZWwge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktaXRlbXM6IGVuZDtcXG59XFxuXFxuI3ByaW9yaXR5Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwJSAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFlbTtcXG59XFxuXFxub3V0cHV0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3VsQ0xJbnB1dCB7XFxuICAvKiBtYXgtd2lkdGg6IDcwJTsgKi9cXG59XFxuXFxuI25ld0VsZVNwYW4ge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogI2Q5ZDlkOTtcXG4gIGNvbG9yOiAjNTU1O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG59XFxuXFxuI2NoZWNrbGlzdElucHV0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAxZnI7XFxufVxcblxcbnVsIGxpOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQ6ICNmOWY5Zjk7XFxufVxcblxcbi8qIERhcmtlciBiYWNrZ3JvdW5kLWNvbG9yIG9uIGhvdmVyICovXFxudWwgbGk6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2RkZDtcXG59XFxuXFxuLyogV2hlbiBjbGlja2VkIG9uLCBhZGQgYSBiYWNrZ3JvdW5kIGNvbG9yIGFuZCBzdHJpa2Ugb3V0IHRleHQgKi9cXG51bCBsaS5jaGVja2VkIHtcXG4gIGJhY2tncm91bmQ6ICM4ODg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4vKiBBZGQgYSBcXFwiY2hlY2tlZFxcXCIgbWFyayB3aGVuIGNsaWNrZWQgb24gKi9cXG51bCBsaS5jaGVja2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogJyc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXItY29sb3I6ICNmZmY7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAwIDJweCAycHggMDtcXG4gIHRvcDogMTBweDtcXG4gIGxlZnQ6IDE2cHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogN3B4O1xcbn1cXG5cXG4vKiBTdHlsZSB0aGUgY2xvc2UgYnV0dG9uICovXFxuLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcGFkZGluZzogMTJweCAxNnB4IDEycHggMTZweDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBpbnB1dCAqL1xcbmlucHV0IHtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbi8qIFN0eWxlIHRoZSBcXFwiQWRkXFxcIiBidXR0b24gKi9cXG5cXG4jbmV3RWxlU3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLWxpc3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90b2RvLWxpc3QuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL3dlIHdpbGwgaGF2ZSBhIGRvbSBhbmNob3IsIGl0IHdpbGwgYmUgZHluYW1pYyBtb3N0bHlcbi8vIGZvcm0tbW9kdWxlIHdpbGwgYXBwZW5kIHRvIHcvZSBkb20gYW5jaG9yIHdlIHBpY2sgdGhlIHRvZG9zIGZvcm1cblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UZW1wbGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4vLyAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbi8vICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbi8vICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJykudmFsdWU7XG4vLyAgICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbGlzdCcpO1xuXG4vLyAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4vLyAgICAgICAgIHByb2plY3Q6ICd0ZXN0Jyxcbi8vICAgICAgICAgdGl0bGU6IHRpdGxlLFxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4vLyAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4vLyAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbi8vICAgICAgICAgbm90ZXM6IG5vdGVzLFxuLy8gICAgICAgICBjaGVja2xpc3QgOiBjaGVja2xpc3Rcbi8vICAgICB9O1xuXG4vLyAgICAgLy8gdG9kb3NTdG9yZXIoZm9ybURhdGEpO1xuLy8gICAgIC8vIHByb2plY3RzU3RvcmVyKHNvbWVQcm9qZWN0KTtcblxuLy8gLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbi8vIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSkpO1xuLy8gLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKS5maW5kKHggPT4geC50aXRsZSA9PSAndGVzdCcgKSk7XG5cbi8vICAgICAvLyBsZXQgdGVzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSk7XG4gICAgXG4vLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgLy8gICAgIGlmICh0ZXN0W2ldID09ICdoZWxsbyBwbHMgd29yaycpIHtcbi8vICAgICAvLyAgICAgICAgIHRlc3Quc3BsaWNlKGksIDEpO1xuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gfVxuICAgIFxuLy8gICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgSlNPTi5zdHJpbmdpZnkodGVzdCkpO1xuXG4vLyAgICAgLy8gZm9yIChsZXQgaSBpbiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKSB7XG4vLyAgICAgLy8gICAgIGkrK1xuLy8gICAgIC8vICAgICBmb3IgKGxldCBqIGluIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JylbaV0ubW9kZWxzKSB7XG4vLyAgICAgLy8gICAgICAgeCArPSBteU9iai5jYXJzW2ldLm1vZGVsc1tqXTtcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgfVxuLy8gfSk7XG5cbi8vIDxmb3JtIGlkPVwiZm9ybVRlbXBsYXRlXCI+XG4vLyA8bGFiZWwgZm9yPVwidGl0bGVcIj5UaXRsZTo8L2xhYmVsPlxuLy8gPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJ0aXRsZVwiIHJlcXVpcmVkPlxuXG4vLyA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuLy8gPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIj48L3RleHRhcmVhPlxuXG4vLyA8bGFiZWwgZm9yPVwiZHVlRGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4vLyA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImR1ZURhdGVcIiByZXF1aXJlZD5cblxuLy8gPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cbi8vIDxpbnB1dCB0eXBlPVwicmFuZ2VcIiBtaW49XCIxXCIgbWF4PVwiMTAwXCIgdmFsdWU9XCI1MFwiIGlkPVwicHJpb3JpdHlcIj5cblxuLy8gPGxhYmVsIGZvcj1cIm5vdGVzXCI+Tm90ZXM6PC9sYWJlbD5cbi8vIDx0ZXh0YXJlYSBpZD1cIm5vdGVzXCI+PC90ZXh0YXJlYT5cblxuLy8gPCEtLSA8bGFiZWwgZm9yPVwiY2hlY2tsaXN0XCI+Q2hlY2tsaXN0OjwvbGFiZWw+XG4vLyA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImNoZWNrbGlzdFwiPiAtLT5cblxuLy8gPGZpZWxkc2V0IGlkPVwiY2hlY2tsaXN0XCI+XG4vLyAgICAgPGxlZ2VuZD5DaGVja2xpc3Q6PC9sZWdlbmQ+XG4gIFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaG9pY2UxXCIgbmFtZT1cImNob2ljZTFcIiB2YWx1ZT1cImNob2ljZTFcIi8+XG4vLyAgICAgICA8bGFiZWwgZm9yPVwiY2hvaWNlMVwiPkZpcnN0IENob2ljZTwvbGFiZWw+XG4vLyAgICAgPC9kaXY+XG4gIFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJjaG9pY2UyXCIgbmFtZT1cImNob2ljZTJcIiB2YWx1ZT1cImNob2ljZTJcIi8+XG4vLyAgICAgICA8bGFiZWwgZm9yPVwiY2hvaWNlMlwiPlNlY29uZCBDaG9pY2U8L2xhYmVsPlxuLy8gICAgIDwvZGl2PlxuLy8gICA8L2ZpZWxkc2V0PlxuXG4vLyA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbi8vIDwvZm9ybT5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybU1ha2VyKCkge1xuICBjb25zdCBib2R5R3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgYm9keUdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKSkuc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtVGVtcGxhdGUnKTtcblxuICBjb25zdCBmb3JtQW5jaG9yR3JiYnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRlbXBsYXRlJyk7XG5cbiAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3RpdGxlJyk7XG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RpdGxlJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJ0aXRsZVwiXScpLmlubmVyVGV4dCA9IFwiVGl0bGU6IFwiO1xuXG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdkZXNjcmlwdGlvbicpO1xuICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKSkuc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjcmlwdGlvbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZm9yPVwiZGVzY3JpcHRpb25cIl0nKS5pbm5lclRleHQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcblxuICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAnZHVlRGF0ZScpO1xuICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdpZCcsICdkdWVEYXRlJyk7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdWVEYXRlJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cImR1ZURhdGVcIl0nKS5pbm5lclRleHQgPSBcIkR1ZSBEYXRlOiBcIjtcblxuICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSkuc2V0QXR0cmlidXRlKCdmb3InLCAncHJpb3JpdHknKTtcblxuICBmb3JtQW5jaG9yR3JiYnIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJpb3JpdHlDb250YWluZXInKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdpZCcsICdwcmlvcml0eScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKSkuc2V0QXR0cmlidXRlKCdpZCcsICd2YWx1ZScpO1xuICBcbiAgY29uc3QgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZhbHVlXCIpO1xuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG4gIHZhbHVlLnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHtcbiAgdmFsdWUudGV4dENvbnRlbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH0pO1xuXG4gIFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmFuZ2UnKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdtaW4nLCAnMCcpO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKS5zZXRBdHRyaWJ1dGUoJ21heCcsICcxMDAnKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5Jykuc2V0QXR0cmlidXRlKCdzdGVwJywgJzEnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2Zvcj1cInByaW9yaXR5XCJdJykuaW5uZXJUZXh0ID0gXCJQcmlvcml0eTogXCI7XG5cbiAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25vdGVzJyk7XG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25vdGVzJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tmb3I9XCJub3Rlc1wiXScpLmlubmVyVGV4dCA9IFwiTm90ZXM6IFwiO1xuXG4gIC8vY2hlY2tsaXN0XG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJykpLmlubmVyVGV4dCA9IFwiQ2hlY2tsaXN0OlwiO1xuXG4gIC8vIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrbGlzdCcpO1xuXG4gIC8vIGNvbnN0IGNsR3JiYnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0Jyk7XG5cbiAgLy8gY2xHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NsLWJ1dHRvbicpO1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2wtYnV0dG9uJykuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2wtYnV0dG9uJykudmFsdWUgPSBcIkFkZCBMaXN0IEl0ZW1cIjtcbiAgZm9ybUFuY2hvckdyYmJyLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NoZWNrbGlzdElucHV0Q29udGFpbmVyJyk7XG4gIFxuXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrbGlzdElucHV0Q29udGFpbmVyJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSkuc2V0QXR0cmlidXRlKCdpZCcsICd1bENMSW5wdXQnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VsQ0xJbnB1dCcpLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bENMSW5wdXQnKS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ1dyaXRlIGhlcmUuLi4nKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tsaXN0SW5wdXRDb250YWluZXInKS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3RWxlU3BhbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3RWxlU3BhbicpLmNsYXNzTGlzdC5hZGQoJ2FkZEJ0bicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3RWxlU3BhbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbmV3RWxlbWVudCgpO1xuICB9KVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3RWxlU3BhbicpLmlubmVyVGV4dCA9IFwiQWRkXCI7XG4gIC8vVUwgY2hlY2tsaXN0XG4gIGZvcm1BbmNob3JHcmJici5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpKS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VsQ2hlY2tsaXN0Jyk7XG5cblxuXG4gIC8vIENyZWF0ZSBhIFwiY2xvc2VcIiBidXR0b24gYW5kIGFwcGVuZCBpdCB0byBlYWNoIGxpc3QgaXRlbVxuICB2YXIgbXlOb2RlbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiTElcIik7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbXlOb2RlbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIlNQQU5cIik7XG4gICAgdmFyIHR4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFx1MDBEN1wiKTtcbiAgICBzcGFuLmNsYXNzTmFtZSA9IFwiY2xvc2VcIjtcbiAgICBzcGFuLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgbXlOb2RlbGlzdFtpXS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfVxuXG4gIC8vIENsaWNrIG9uIGEgY2xvc2UgYnV0dG9uIHRvIGhpZGUgdGhlIGN1cnJlbnQgbGlzdCBpdGVtXG4gIHZhciBjbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjbG9zZVwiKTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKykge1xuICAgIGNsb3NlW2ldLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBkaXYgPSB0aGlzLnBhcmVudEVsZW1lbnQ7XG4gICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBhIFwiY2hlY2tlZFwiIHN5bWJvbCB3aGVuIGNsaWNraW5nIG9uIGEgbGlzdCBpdGVtXG4gIHZhciBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwnKTtcbiAgbGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgaWYgKGV2LnRhcmdldC50YWdOYW1lID09PSAnTEknKSB7XG4gICAgICBldi50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2hlY2tlZCcpO1xuICAgIH1cbiAgfSwgZmFsc2UpO1xuXG4gIC8vIENyZWF0ZSBhIG5ldyBsaXN0IGl0ZW0gd2hlbiBjbGlja2luZyBvbiB0aGUgXCJBZGRcIiBidXR0b25cbiAgZnVuY3Rpb24gbmV3RWxlbWVudCgpIHtcbiAgICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdmFyIGlucHV0VmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVsQ0xJbnB1dFwiKS52YWx1ZTtcbiAgICB2YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGlucHV0VmFsdWUpO1xuICAgIGxpLmFwcGVuZENoaWxkKHQpO1xuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgYWxlcnQoXCJZb3UgbXVzdCB3cml0ZSBzb21ldGhpbmchXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVsQ2hlY2tsaXN0XCIpLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bENMSW5wdXRcIikudmFsdWUgPSBcIlwiO1xuXG4gICAgdmFyIHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiU1BBTlwiKTtcbiAgICB2YXIgdHh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHUwMEQ3XCIpO1xuICAgIHNwYW4uY2xhc3NOYW1lID0gXCJjbG9zZVwiO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQodHh0KTtcbiAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKykge1xuICAgICAgY2xvc2VbaV0ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGl2ID0gdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgICAgICBkaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59IiwiaW1wb3J0IHByb2plY3RzU3RvcmVyIGZyb20gXCIuL3Byb2plY3RzLXN0b3JlclwiO1xuaW1wb3J0IHRvZG9zU3RvcmVyIGZyb20gXCIuL3RvZG9zLXN0b3JlclwiO1xuXG4vLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9ybVRlbXBsYXRlJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbi8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4vLyAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZTtcbi8vICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuLy8gICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHVlRGF0ZScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4vLyAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90ZXMnKS52YWx1ZTtcbi8vICAgICBjb25zdCBjaGVja2xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tsaXN0JykudmFsdWU7XG5cbi8vICAgICBjb25zdCBmb3JtRGF0YSA9IHtcbi8vICAgICAgICAgdGl0bGU6IHRpdGxlLFxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4vLyAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4vLyAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbi8vICAgICAgICAgbm90ZXM6IG5vdGVzLFxuLy8gICAgICAgICBjaGVja2xpc3QgOiBjaGVja2xpc3Rcbi8vICAgICB9O1xuXG4vLyAgICAgLy8gY29uc29sZS5sb2coZm9ybURhdGEpO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKFwic2F2ZUZvcm1EYXRhIGlzIHdvcmtpbmdcIik7XG5cbi8vICAgICAvLyBpZiBpdCdzIGEgdG9kbyBMT0dJQyBIRVJFXG4vLyAgICAgLy8gdG9kb3NTdG9yZXIoZm9ybURhdGEpO1xuLy8gICAgIC8vIGVsc2UgaWYgaXQncyBhIHByb2plY3Rcbi8vICAgICAvL3Byb2plY3RzU3RvcmVyKGZvcm1EYXRhKTtcbi8vIH0pO1xuXG4vLyBmdW5jdGlvbiBzYXZlRm9ybURhdGEoZm9ybURhdGEpIHtcbi8vICAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvcm1EYXRhJykpIHx8IFtdO1xuXG4vLyAgICAgc3RvcmVkRm9ybURhdGEucHVzaChmb3JtRGF0YSk7XG5cbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZm9ybURhdGEnLCBKU09OLnN0cmluZ2lmeShzdG9yZWRGb3JtRGF0YSkpO1xuLy8gfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3RzIHtcblxuICAgIC8vdGl0bGUsIHByb2dyZXNzLCBhbmQgcHJpb3JpdHlcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgcHJvZ3Jlc3MsIHByaW9yaXR5LCB0b2Rvcykge1xuICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IHByb2dyZXNzO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy50b2RvcyA9IHRvZG9zO1xuICAgIH1cblxuICAgIC8vR0VUXG4gICAgZ2V0IHRpdGxlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICAgIH1cblxuICAgIGdldCBwcm9ncmVzcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2dyZXNzO1xuICAgICAgfVxuXG4gICAgZ2V0IHByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3ByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldCB0b2RvcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvZG9zO1xuICAgICAgfVxuICAgIFxuICAgIC8vU0VUXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBwcm9ncmVzcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9wcm9ncmVzcyA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgc2V0IHByaW9yaXR5KHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcmlvcml0eSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCB0b2Rvcyh2YWx1ZSkge1xuICAgICAgICB0aGlzLl90b2RvcyA9IHZhbHVlO1xuICAgICAgfVxuICBcbiAgfSIsImltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0cy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNSZW1vdmVyIGZyb20gXCIuL3Byb2plY3RzLXJlbW92ZXIuanNcIjtcbmltcG9ydCBwcm9qZWN0c1N0b3JlciBmcm9tIFwiLi9wcm9qZWN0cy1zdG9yZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNNYW5hZ2VyKHNvbWVQcm9qZWN0KSB7XG5cbiAgICAvL3JlY2VpdmVzIGEgXCJwcm9qZWN0c1wiIG9iamVjdCBmcm9tIHVzZXIgdG8gbWFrZSBwcm9qZWN0c1xuICAgIGxldCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3RzKHNvbWVQcm9qZWN0LnRpdGxlLCBzb21lUHJvamVjdC5wcm9ncmVzcywgc29tZVByb2plY3QucHJpb3JpdHksIHNvbWVQcm9qZWN0LnRvZG9zKTtcblxuICAgIGNvbnNvbGUubG9nKHNvbWVQcm9qZWN0KTtcbiAgICBjb25zb2xlLmxvZyhcInByb2plY3RzIG1hbmFnZXIgaXMgd29ya2luZ1wiKTtcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdHNSZW1vdmVyKHNvbWVQcm9qZWN0KSB7XG4gICAgXG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVByb2plY3QudGl0bGUpKSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzb21lUHJvamVjdC50aXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgY29uc29sZS5lcnJvcihcIlByb2plY3Qgbm90IGZvdW5kIVwiKTtcbiAgICB9IFxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2plY3RzU3RvcmVyKHNvbWVQcm9qZWN0KSB7XG4gICAgaWYgKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVByb2plY3QudGl0bGUpKSl7XG4gICAgICAgIHRocm93IGNvbnNvbGUuZXJyb3IoXCJQcm9qZWN0IGFscmVhZHkgZXhpc3RzIVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lUHJvamVjdC50aXRsZSwgW10pO1xuICAgIH1cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvcyB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9qZWN0LHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjaGVja2xpc3QpIHtcbiAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgdGhpcy5ub3RlcyA9IG5vdGVzO1xuICAgICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3Q7XG4gICAgfVxuXG4gICAgLy9HRVRcbiAgICBnZXQgcHJvamVjdCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9wcm9qZWN0O1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcbiAgICB9XG5cbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IGR1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBnZXQgcHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgZ2V0IG5vdGVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX25vdGVzO1xuICAgIH1cblxuICAgIGdldCBjaGVja2xpc3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY2hlY2tsaXN0O1xuICAgIH1cbiAgICBcbiAgICAvL1NFVFxuICAgIHNldCBwcm9qZWN0KHZhbHVlKSB7XG4gICAgICB0aGlzLl9wcm9qZWN0ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IHRpdGxlKHZhbHVlKSB7XG4gICAgICB0aGlzLl90aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBkZXNjcmlwdGlvbih2YWx1ZSkge1xuICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgZHVlRGF0ZSh2YWx1ZSkge1xuICAgICAgdGhpcy5fZHVlRGF0ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHNldCBwcmlvcml0eSh2YWx1ZSkge1xuICAgICAgdGhpcy5fcHJpb3JpdHkgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBzZXQgbm90ZXModmFsdWUpIHtcbiAgICAgIHRoaXMuX25vdGVzID0gdmFsdWU7XG4gICAgfVxuXG4gICAgc2V0IGNoZWNrbGlzdCh2YWx1ZSkge1xuICAgICAgdGhpcy5fY2hlY2tsaXN0ID0gdmFsdWU7XG4gICAgfVxuICBcbiAgfSIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvcy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgdG9kb3NSZW1vdmVyIGZyb20gXCIuL3RvZG9zLXJlbW92ZXIuanNcIjtcbmltcG9ydCB0b2Rvc1N0b3JlciBmcm9tIFwiLi90b2Rvcy1zdG9yZXIuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NNYW5hZ2VyKHNvbWVUb2RvKSB7XG5cbiAgICAvL3JlY2VpdmVzIGEgXCJ0b2RvXCIgb2JqZWN0IGZyb20gdXNlciB0byBtYWtlIHRvZG9zXG4gICAgbGV0IG5ld1RvZG8gPSBuZXcgVG9kb3Moc29tZVRvZG8udGl0bGUsIHNvbWVUb2RvLmRlc2NyaXB0aW9uLCBzb21lVG9kby5kdWVEYXRlLCBzb21lVG9kby5wcmlvcml0eSwgc29tZVRvZG8ubm90ZXMsIHNvbWVUb2RvLmNoZWNrbGlzdCk7XG5cbiAgICAvL3N0b3JlIGNyZWF0ZWQgdG9kb3MgaW4gbG9jYWwgc3RvcmFnZSB1c2luZyBUb2RvcyBzdG9yZXJcbiAgICAvLyB0b2Rvc1N0b3JlcihuZXdUb2RvKTtcbiAgICAvLyB3ZSB3aWxsIHJlZmFjdG9yIHRoaXMgdG8gc3RvcmUgdG9kb3MgaW4gYSBleGlzdGluZyBvciBuZXcgcHJvamVjdFxuXG4gICAgLy9yZW1vdmUgYSB0b2RvcyBkYXRhIGluIGxvY2FsIHN0b3JhZ2UgdXNpbmcgVG9kb3MgcmVtb3ZlclxuICAgIC8vIGlmIGEgdXNlciBjbGlja3MgcmVtb3ZlIHRvZG8sIGludm9rZSB0aGUgZm9sbG93aW5nOlxuICAgIC8vIHRvZG9zUmVtb3ZlcihuZXdUb2RvKTtcbiAgICB9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NSZW1vdmVyKHNvbWVUb2RvKSB7XG5cbiAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVRvZG8ucHJvamVjdCkpIHx8IFtdO1xuXG4gICAgc3RvcmVkRm9ybURhdGEuZm9yRWFjaCgoeCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coeC50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNvbWVUb2RvLnRpdGxlKTtcbiAgICAgICAgaWYgKHgudGl0bGUgPT0gc29tZVRvZG8udGl0bGUpIHtcbiAgICAgICAgICAgIHN0b3JlZEZvcm1EYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNvbWVUb2RvLnByb2plY3QsIEpTT04uc3RyaW5naWZ5KHN0b3JlZEZvcm1EYXRhKSk7XG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9kb3NTdG9yZXIoc29tZVRvZG8pIHtcbiAgICBjb25zdCBzdG9yZWRGb3JtRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc29tZVRvZG8ucHJvamVjdCkpIHx8IFtdO1xuXG4gICAgc3RvcmVkRm9ybURhdGEucHVzaChzb21lVG9kbyk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzb21lVG9kby5wcm9qZWN0LCBKU09OLnN0cmluZ2lmeShzdG9yZWRGb3JtRGF0YSkpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBUb2RvcyBmcm9tIFwiLi90b2Rvcy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgdG9kb3NNYW5hZ2VyIGZyb20gXCIuL3RvZG9zLW1hbmFnZXIuanNcIjtcbmltcG9ydCBQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0cy1jcmVhdG9yLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNNYW5hZ2VyIGZyb20gXCIuL3Byb2plY3RzLW1hbmFnZXIuanNcIjtcblxuaW1wb3J0IHNhdmVGb3JtRGF0YSBmcm9tIFwiLi9mb3JtLXN0b3Jlci5qc1wiO1xuaW1wb3J0IHRvZG9zU3RvcmVyIGZyb20gXCIuL3RvZG9zLXN0b3Jlci5qc1wiO1xuaW1wb3J0IHByb2plY3RzU3RvcmVyIGZyb20gXCIuL3Byb2plY3RzLXN0b3Jlci5qc1wiO1xuaW1wb3J0IHRvZG9zUmVtb3ZlciBmcm9tIFwiLi90b2Rvcy1yZW1vdmVyLmpzXCI7XG5pbXBvcnQgcHJvamVjdHNSZW1vdmVyIGZyb20gXCIuL3Byb2plY3RzLXJlbW92ZXIuanNcIjtcblxuaW1wb3J0IGZvcm1NYWtlciBmcm9tIFwiLi9mb3JtLW1vZHVsZS5qc1wiO1xuaW1wb3J0IFwiLi90b2RvLWxpc3QuY3NzXCI7XG5cbi8vdGVzdGluZyBoZXJlXG5sZXQgdXNlciA9IG5ldyBUb2RvcyhcIkJhcm5leVwiLCBcImZvb1wiLCBcImJhclwiLCBcImZvb1wiLCBcImJhclwiLCBcImZvb1wiKTtcbmxldCB1c2VyMiA9IG5ldyBUb2RvcyhcIkd1bXB5XCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIpO1xubGV0IHVzZXIzID0gbmV3IFRvZG9zKFwiS2xlZXR1c1wiLCBcImZvb1wiLCBcImJhclwiLCBcImZvb1wiLCBcImJhclwiLCBcImZvb1wiKTtcbmxldCB1c2VyNCA9IG5ldyBUb2RvcyhcInRlc3RcIiwgXCJ0ZXN0XCIsIFwiYmFyXCIsIFwiZm9vXCIsIFwiYmFyXCIsIFwiZm9vXCIpO1xubGV0IHNvbWVQcm9qZWN0ID0gbmV3IFByb2plY3RzKFwidGVzdFwiLCBcImZvb1wiLCBcImJhclwiLCB1c2VyKTtcblxudXNlci5ub3RlcyA9IFwiaG90aGVhZFwiO1xuc29tZVByb2plY3QudG9kb3MgPSBbdXNlciwgdXNlcjIsIHVzZXIzXTtcblxuXG4vLyBsZXQgdGVzdENsYXNzR3JiYnIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRlc3RDbGFzc1wiKTtcbi8vIHRlc3RDbGFzc0dyYmJyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB4ID0+IHtcbi8vICAgICAvLyBwcm9qZWN0c01hbmFnZXIoc29tZVByb2plY3QpO1xuLy8gfSk7XG5cbi8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSlbMl0pO1xuLy8gLy8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKVsyXS50b2Rvc1sxXSA9IHVzZXIzO1xuLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKVsyXS5fdG9kb3MpO1xuXG4vLyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JykpWzJdLl90b2Rvcy5wdXNoKCd0ZXN0Jyk7XG5cbi8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSlbMl0uX3RvZG9zKTtcblxuLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm1UZW1wbGF0ZScpLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuLy8gICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWU7XG4vLyAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbi8vICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbi8vICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuLy8gICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vdGVzJykudmFsdWU7XG4vLyAgICAgY29uc3QgY2hlY2tsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrbGlzdCcpO1xuXG4vLyAgICAgY29uc3QgZm9ybURhdGEgPSB7XG4vLyAgICAgICAgIHByb2plY3Q6ICd0ZXN0Jyxcbi8vICAgICAgICAgdGl0bGU6IHRpdGxlLFxuLy8gICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4vLyAgICAgICAgIGR1ZURhdGU6IGR1ZURhdGUsXG4vLyAgICAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbi8vICAgICAgICAgbm90ZXM6IG5vdGVzLFxuLy8gICAgICAgICBjaGVja2xpc3QgOiBjaGVja2xpc3Rcbi8vICAgICB9O1xuXG4vLyAgICAgLy8gdG9kb3NTdG9yZXIoZm9ybURhdGEpO1xuLy8gICAgIC8vIHByb2plY3RzU3RvcmVyKHNvbWVQcm9qZWN0KTtcblxuLy8gLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKTtcbi8vIC8vIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSkpO1xuLy8gLy8gY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKS5maW5kKHggPT4geC50aXRsZSA9PSAndGVzdCcgKSk7XG5cbi8vICAgICAvLyBsZXQgdGVzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rlc3QnKSk7XG4gICAgXG4vLyAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXN0Lmxlbmd0aDsgaSsrKSB7XG4vLyAgICAgLy8gICAgIGlmICh0ZXN0W2ldID09ICdoZWxsbyBwbHMgd29yaycpIHtcbi8vICAgICAvLyAgICAgICAgIHRlc3Quc3BsaWNlKGksIDEpO1xuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gfVxuICAgIFxuLy8gICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0ZXN0JywgSlNPTi5zdHJpbmdpZnkodGVzdCkpO1xuXG4vLyAgICAgLy8gZm9yIChsZXQgaSBpbiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGVzdCcpKSB7XG4vLyAgICAgLy8gICAgIGkrK1xuLy8gICAgIC8vICAgICBmb3IgKGxldCBqIGluIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0ZXN0JylbaV0ubW9kZWxzKSB7XG4vLyAgICAgLy8gICAgICAgeCArPSBteU9iai5jYXJzW2ldLm1vZGVsc1tqXTtcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgfVxuLy8gfSk7XG5cbmZvcm1NYWtlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9