/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*, *:before, *:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nol, ul {\r\n  list-style: none;\r\n}\r\n\r\n/* CSS Reset END */\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n/* Nav */\r\n\r\n#content {\r\n  opacity: 0;\r\n}\r\n\r\nheader{\r\n  height: 55px;\r\n  background-color: #e7717d;\r\n}\r\n\r\nnav {\r\n  padding-top: 1.5em;\r\n\r\n}\r\n\r\n#content.content-is-active {\r\n  opacity: 1 !important;\r\n  transition: opacity .2s ease-in-out;\r\n  -webkit-transition: opacity .2s ease-in-out;\r\n}\r\n.nav-list {\r\n  display:flex;\r\n  justify-content: space-around;\r\n  list-style: none;\r\n  font-size: 24px;\r\n  height: 20px;\r\n}\r\n\r\n.nav-list li {\r\n  align-self: flex-end;\r\n  cursor: pointer;\r\n  transition: all 0.25s;\r\n}\r\n\r\n.nav-list li:hover {\r\n  color:cornflowerblue;\r\n  padding-bottom: 7px;\r\n}\r\n\r\n.selected-nav {\r\n  color: cornflowerblue;\r\n  cursor: default !important;\r\n  transition: color 0.25s;\r\n}\r\n.selected-nav:hover{\r\n  padding-bottom: 0px !important;\r\n}\r\n\r\n/* Main Page */\r\n\r\n.banner {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 646px;\r\n}\r\n\r\n.banner h1 {\r\n  color: white;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\r\n  font-size: 52px;\r\n}\r\n\r\n.main-page-display{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 636px;\r\n}\r\n\r\n.main-page-display:nth-child(even){\r\n  background-color: #afd275;\r\n}\r\n\r\n.main-page-display h3 {\r\n  margin: 1em;\r\n  font-size: 46px;\r\n}\r\n.main-page-display p {\r\n  font-size: 32px;\r\n}\r\n\r\n/* MENU */\r\n\r\n#menu {\r\n  background-color: #afd275;\r\n}\r\n\r\n#menu h1 {\r\n  text-align: center;\r\n  padding-top: 4rem;\r\n  font-size: 52px;\r\n}\r\n\r\n#menu section {\r\n  padding: 5rem 25rem;\r\n}\r\n\r\n#menu section h2 {\r\n  font-size: 42px;\r\n}\r\n\r\n#menu section:nth-child(odd){\r\n  background-color: white;\r\n}\r\n\r\n#menu section div{\r\n  padding: 2rem 0;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.center-page {\r\n  margin: 0 auto;\r\n}\r\n.menu-item > *{\r\n  margin: .5em 0;\r\n}\r\n\r\n.menu-item:nth-child(even) {\r\n  text-align: right;\r\n}\r\n\r\n.menu-section{\r\n  max-width: max-content;\r\n}\r\n\r\n.menu-section  h2{\r\n  text-align: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA,kBAAkB;AAClB;EACE,yCAAyC;AAC3C;AACA,QAAQ;;AAER;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;;AAEpB;;AAEA;EACE,qBAAqB;EACrB,mCAAmC;EACnC,2CAA2C;AAC7C;AACA;EACE,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,uBAAuB;AACzB;AACA;EACE,8BAA8B;AAChC;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,+EAA+E;EAC/E,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA,SAAS;;AAET;EACE,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*, *:before, *:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nol, ul {\r\n  list-style: none;\r\n}\r\n\r\n/* CSS Reset END */\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n/* Nav */\r\n\r\n#content {\r\n  opacity: 0;\r\n}\r\n\r\nheader{\r\n  height: 55px;\r\n  background-color: #e7717d;\r\n}\r\n\r\nnav {\r\n  padding-top: 1.5em;\r\n\r\n}\r\n\r\n#content.content-is-active {\r\n  opacity: 1 !important;\r\n  transition: opacity .2s ease-in-out;\r\n  -webkit-transition: opacity .2s ease-in-out;\r\n}\r\n.nav-list {\r\n  display:flex;\r\n  justify-content: space-around;\r\n  list-style: none;\r\n  font-size: 24px;\r\n  height: 20px;\r\n}\r\n\r\n.nav-list li {\r\n  align-self: flex-end;\r\n  cursor: pointer;\r\n  transition: all 0.25s;\r\n}\r\n\r\n.nav-list li:hover {\r\n  color:cornflowerblue;\r\n  padding-bottom: 7px;\r\n}\r\n\r\n.selected-nav {\r\n  color: cornflowerblue;\r\n  cursor: default !important;\r\n  transition: color 0.25s;\r\n}\r\n.selected-nav:hover{\r\n  padding-bottom: 0px !important;\r\n}\r\n\r\n/* Main Page */\r\n\r\n.banner {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 646px;\r\n}\r\n\r\n.banner h1 {\r\n  color: white;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\r\n  font-size: 52px;\r\n}\r\n\r\n.main-page-display{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 636px;\r\n}\r\n\r\n.main-page-display:nth-child(even){\r\n  background-color: #afd275;\r\n}\r\n\r\n.main-page-display h3 {\r\n  margin: 1em;\r\n  font-size: 46px;\r\n}\r\n.main-page-display p {\r\n  font-size: 32px;\r\n}\r\n\r\n/* MENU */\r\n\r\n#menu {\r\n  background-color: #afd275;\r\n}\r\n\r\n#menu h1 {\r\n  text-align: center;\r\n  padding-top: 4rem;\r\n  font-size: 52px;\r\n}\r\n\r\n#menu section {\r\n  padding: 5rem 25rem;\r\n}\r\n\r\n#menu section h2 {\r\n  font-size: 42px;\r\n}\r\n\r\n#menu section:nth-child(odd){\r\n  background-color: white;\r\n}\r\n\r\n#menu section div{\r\n  padding: 2rem 0;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.center-page {\r\n  margin: 0 auto;\r\n}\r\n.menu-item > *{\r\n  margin: .5em 0;\r\n}\r\n\r\n.menu-item:nth-child(even) {\r\n  text-align: right;\r\n}\r\n\r\n.menu-section{\r\n  max-width: max-content;\r\n}\r\n\r\n.menu-section  h2{\r\n  text-align: center;\r\n}\r\n"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const makeContactPage = () => {
  const content = document.createElement('div')
  content.classList.add('center-page')
  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contact Us'

  const contactName = document.createElement('h3');
  const contactEmail = document.createElement('h3');
  const contactNumber = document.createElement('h3');

  contactName.textContent = 'Mickey';
  contactEmail.textContent = 'MickeyBurgers@MickeysBurgerShack.com';
  contactNumber.textContent = '800-252-2000';

  content.append(contactTitle, contactName, contactEmail, contactNumber);
  return content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makeContactPage);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restaurant_banner_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant-banner.jpg */ "./src/restaurant-banner.jpg");



const createHomeContent = () => {
  const homeDiv = document.createElement('div');
  
  homeDiv.append(createHomeBanner());
  homeDiv.append(homeDescription());
  homeDiv.append(homeLocation());
  homeDiv.append(homeHours());

  return homeDiv;
}

// Private
const createHomeBanner = () => {
  const bannerDiv = document.createElement('div');

  bannerDiv.style.backgroundImage = `url(\'${_restaurant_banner_jpg__WEBPACK_IMPORTED_MODULE_0__}\')`
  bannerDiv.classList.add('banner')

  const bannerText = document.createElement('h1');
  bannerText.textContent = 'Mickey\'s Burger Shack';

  bannerDiv.appendChild(bannerText);

  return bannerDiv;
}

const homeDescription = () => {
  const homeDescDiv = document.createElement('div');
  const homeDescTitle = document.createElement('h3');
  homeDescDiv.setAttribute('id', 'about-us')
  homeDescDiv.classList.add('main-page-display')
  homeDescTitle.textContent = 'About us!'
  
  const homeDescText = document.createElement('p');
  homeDescText.textContent = 'We strive to make the best food available.'

  homeDescDiv.append(homeDescTitle, homeDescText);

  return homeDescDiv;
}

const homeLocation = () => {
  const homeLocationDiv = document.createElement('div');
  homeLocationDiv.classList.add('main-page-display')
  const homeLocationTitle = document.createElement('h3');
  const homeLocationText = document.createElement('p')

  homeLocationTitle.textContent = 'Location';
  homeLocationText.textContent = '789 Main Street, Reading, PA'

  homeLocationDiv.append(homeLocationTitle, homeLocationText);

  return homeLocationDiv;
}

const homeHours = () => {
  const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const homeHoursDiv = document.createElement('div');
  homeHoursDiv.classList.add('main-page-display')
  const homeHoursTitle = document.createElement('h3');
  
  homeHoursTitle.textContent = 'Schedule';
  homeHoursDiv.appendChild(homeHoursTitle);

  for(let i = 0; i < week.length; i++){
    const weekDay = document.createElement('p');
    const closingTime = i > 2 && i < 6 ? '12AM' : '10PM'
    weekDay.textContent = `${week[i]}: 9AM - ${closingTime}`

    homeHoursDiv.appendChild(weekDay);
  }
  return homeHoursDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeContent);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menuItemClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItemClass */ "./src/menuItemClass.js");
/* harmony import */ var _menuItems_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuItems.json */ "./src/menuItems.json");



const menuContent = () => {
  const contentDiv = document.createElement('div');
  contentDiv.setAttribute('id', 'menu')

  const menuTitle = document.createElement('h1');

  const appetizerSection = makeSectionDiv('Appetizers')

  const entreeSection = makeSectionDiv('Entrees');

  const beverageSection = makeSectionDiv('Beverages');

  menuTitle.textContent = 'Our Menu'

  contentDiv.appendChild(menuTitle);
  createMenuSection(appetizerSection, entreeSection, beverageSection);

  contentDiv.append(appetizerSection, entreeSection, beverageSection)
  return contentDiv;
}

const createMenuSection = (appetizerSection, entreeSection, beverageSection) => {
  
  for(let i = 0; i < _menuItems_json__WEBPACK_IMPORTED_MODULE_1__.length; i++) {
    if(i >= 0 && i <= 2){
      appetizerSection.appendChild(makeMenuItem(_menuItems_json__WEBPACK_IMPORTED_MODULE_1__[i]))
    }
    else if(i > 2 && i <= 6){
      entreeSection.appendChild(makeMenuItem(_menuItems_json__WEBPACK_IMPORTED_MODULE_1__[i]))
    }
    else {
      beverageSection.appendChild(makeMenuItem(_menuItems_json__WEBPACK_IMPORTED_MODULE_1__[i]))
    }
  }
}

const makeMenuItem = ({name, price, description}) => {
  const item = new _menuItemClass__WEBPACK_IMPORTED_MODULE_0__.default(name, price, description);
  
  const content = document.createElement('div');
  const itemName = document.createElement('h4');
  const itemPrice = document.createElement('h5');
  const itemDescription = document.createElement('p');

  itemName.textContent = item.name;
  itemPrice.textContent = item.price;
  itemDescription.textContent = item.description;

  content.append(itemName, itemDescription, itemPrice);

  content.classList.add('menu-item')

  return content;
}

const makeSectionDiv = (sectionTitle) => {
  const section = document.createElement('section');
  const div = document.createElement('div');
  div.classList.add('menu-section', 'center-page');
  const title = document.createElement('h2');
  title.textContent = sectionTitle;
  div.appendChild(title);
  section.appendChild(div);

  return section;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);

/***/ }),

/***/ "./src/menuItemClass.js":
/*!******************************!*\
  !*** ./src/menuItemClass.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MenuItem)
/* harmony export */ });
class MenuItem {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
}

/***/ }),

/***/ "./src/menuItems.json":
/*!****************************!*\
  !*** ./src/menuItems.json ***!
  \****************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"Mickey\'s Buffalo Wings","price":"5.99","description":"8pc fried chicken wings with Mickey\'s special buffalo sauce"},{"name":"Mickey\'s Supreme Fries","price":"4.99","description":"French fries with melted cheddar cheese, bacon, and ground beef"},{"name":"Mickey\'s Mashed Potatos","price":"2.99","description":"Mickey\'s classical mashed potatos with gravy"},{"name":"Mickey\'s Burger","price":"8.99","description":"Mickey\'s signature burger"},{"name":"Mickey\'s Mac and Cheese","price":"2.99","description":"Mickey\'s signature mac and cheese"},{"name":"Original Philly Cheese steak","price":"5.99","description":"An authentic philly cheese steak sandwhich"},{"name":"Mickey\'s Chili Dog","price":"3.99","description":"Mickey\'s Chili Dog with special sauce and spicy chili"},{"name":"Mickey\'s Shake","price":"2.99","description":"Creamy milkyshake in the flavor of your choosing"},{"name":"Mickey\'s Smoothie","price":"2.99","description":"Refreshing smoothie made from a selection of fruits"}]');

/***/ }),

/***/ "./src/restaurant-banner.jpg":
/*!***********************************!*\
  !*** ./src/restaurant-banner.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24a42ab2a98c99d8014a.jpg";

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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const content = document.querySelector('#content');
let currentContent = (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();

let selectedTab;

const makeNav = () => {
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  const navList = document.createElement('ul');
  const navHome = document.createElement('li');
  const navMenu = document.createElement('li');
  const navContact = document.createElement('li');
  
  selectedTab = navHome;
  selectedTab.classList.add('selected-nav')
  
  navHome.textContent = 'Home';
  navHome.addEventListener('click', () => updateCurrentPage('home', navHome));
  
  navMenu.textContent = 'Menu';
  navMenu.addEventListener('click', () => updateCurrentPage('menu', navMenu));
  
  navContact.textContent = 'Contact';
  navContact.addEventListener('click', () => updateCurrentPage('contact', navContact));
  
  navList.classList.add('nav-list')

  navList.append(navHome, navMenu, navContact);
  nav.appendChild(navList);
  header.appendChild(nav);

  return header;
}

const removeContent = () => {
  content.removeChild(currentContent);
  content.classList.toggle('content-is-active')
}

const updateCurrentPage = (newPage, newTab) => {
  
  let updatedPage;
  if (selectedTab != newTab) {
    if(newPage === 'menu') updatedPage = (0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)()
    else if(newPage === 'contact' ) updatedPage = (0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)();
    else if(newPage === 'home') updatedPage = (0,_home__WEBPACK_IMPORTED_MODULE_0__.default)();
  }

  if(!!updatedPage) {
    removeContent();
    selectedTab.classList.remove('selected-nav');
    selectedTab = newTab;
    selectedTab.classList.add('selected-nav')

    currentContent = updatedPage
    
    content.appendChild(currentContent);
    fadeTabs();
  }
}

const fadeTabs = () => {
  setTimeout(() => {
    content.classList.toggle('content-is-active');
  })
}

document.body.prepend(makeNav());
content.append(currentContent);
fadeTabs();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvbWVudUl0ZW1DbGFzcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELDZCQUE2QixLQUFLLDhCQUE4QiwwQkFBMEIsS0FBSyxpREFBaUQsZ0JBQWdCLGlCQUFpQixLQUFLLGdCQUFnQix1QkFBdUIsS0FBSyxrQ0FBa0MsZ0RBQWdELEtBQUssK0JBQStCLGlCQUFpQixLQUFLLGVBQWUsbUJBQW1CLGdDQUFnQyxLQUFLLGFBQWEseUJBQXlCLFNBQVMsb0NBQW9DLDRCQUE0QiwwQ0FBMEMsa0RBQWtELEtBQUssZUFBZSxtQkFBbUIsb0NBQW9DLHVCQUF1QixzQkFBc0IsbUJBQW1CLEtBQUssc0JBQXNCLDJCQUEyQixzQkFBc0IsNEJBQTRCLEtBQUssNEJBQTRCLDJCQUEyQiwwQkFBMEIsS0FBSyx1QkFBdUIsNEJBQTRCLGlDQUFpQyw4QkFBOEIsS0FBSyx3QkFBd0IscUNBQXFDLEtBQUssd0NBQXdDLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGtCQUFrQixvQkFBb0IsS0FBSyxvQkFBb0IsbUJBQW1CLHNGQUFzRixzQkFBc0IsS0FBSywyQkFBMkIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsNkJBQTZCLG9CQUFvQixLQUFLLDJDQUEyQyxnQ0FBZ0MsS0FBSywrQkFBK0Isa0JBQWtCLHNCQUFzQixLQUFLLDBCQUEwQixzQkFBc0IsS0FBSyxpQ0FBaUMsZ0NBQWdDLEtBQUssa0JBQWtC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Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsOENBQVk7QUFDckQsa0RBQWtELGlEQUFlO0FBQ2pFLDhDQUE4Qyw4Q0FBaUI7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgb2wsIHVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDU1MgUmVzZXQgRU5EICovXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLyogTmF2ICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NzE3ZDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQuY29udGVudC1pcy1hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgbGkge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBsaTpob3ZlciB7XFxyXFxuICBjb2xvcjpjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZC1uYXYge1xcclxcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cztcXHJcXG59XFxyXFxuLnNlbGVjdGVkLW5hdjpob3ZlcntcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBQYWdlICovXFxyXFxuXFxyXFxuLmJhbm5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDY0NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyIGgxIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XFxyXFxuICBmb250LXNpemU6IDUycHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UtZGlzcGxheXtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiA2MzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcGFnZS1kaXNwbGF5Om50aC1jaGlsZChldmVuKXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmQyNzU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UtZGlzcGxheSBoMyB7XFxyXFxuICBtYXJnaW46IDFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogNDZweDtcXHJcXG59XFxyXFxuLm1haW4tcGFnZS1kaXNwbGF5IHAge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VICovXFxyXFxuXFxyXFxuI21lbnUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmZDI3NTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUgaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxuICBmb250LXNpemU6IDUycHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51IHNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogNXJlbSAyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUgc2VjdGlvbiBoMiB7XFxyXFxuICBmb250LXNpemU6IDQycHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51IHNlY3Rpb246bnRoLWNoaWxkKG9kZCl7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUgc2VjdGlvbiBkaXZ7XFxyXFxuICBwYWRkaW5nOiAycmVtIDA7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyLXBhZ2Uge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcbi5tZW51LWl0ZW0gPiAqe1xcclxcbiAgbWFyZ2luOiAuNWVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zZWN0aW9ue1xcclxcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc2VjdGlvbiAgaDJ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHlDQUF5QztBQUMzQztBQUNBLFFBQVE7O0FBRVI7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQSxjQUFjOztBQUVkO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWiwrRUFBK0U7RUFDL0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgb2wsIHVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDU1MgUmVzZXQgRU5EICovXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLyogTmF2ICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NzE3ZDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQuY29udGVudC1pcy1hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgbGkge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBsaTpob3ZlciB7XFxyXFxuICBjb2xvcjpjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZC1uYXYge1xcclxcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cztcXHJcXG59XFxyXFxuLnNlbGVjdGVkLW5hdjpob3ZlcntcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBQYWdlICovXFxyXFxuXFxyXFxuLmJhbm5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDY0NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyIGgxIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XFxyXFxuICBmb250LXNpemU6IDUycHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UtZGlzcGxheXtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiA2MzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcGFnZS1kaXNwbGF5Om50aC1jaGlsZChldmVuKXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmQyNzU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UtZGlzcGxheSBoMyB7XFxyXFxuICBtYXJnaW46IDFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogNDZweDtcXHJcXG59XFxyXFxuLm1haW4tcGFnZS1kaXNwbGF5IHAge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VICovXFxyXFxuXFxyXFxuI21lbnUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmZDI3NTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUgaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxuICBmb250LXNpemU6IDUycHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51IHNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogNXJlbSAyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUgc2VjdGlvbiBoMiB7XFxyXFxuICBmb250LXNpemU6IDQycHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51IHNlY3Rpb246bnRoLWNoaWxkKG9kZCl7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUgc2VjdGlvbiBkaXZ7XFxyXFxuICBwYWRkaW5nOiAycmVtIDA7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyLXBhZ2Uge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcbi5tZW51LWl0ZW0gPiAqe1xcclxcbiAgbWFyZ2luOiAuNWVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zZWN0aW9ue1xcclxcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc2VjdGlvbiAgaDJ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjb25zdCBtYWtlQ29udGFjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjZW50ZXItcGFnZScpXHJcbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcydcclxuXHJcbiAgY29uc3QgY29udGFjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNvbnN0IGNvbnRhY3RFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgY29uc3QgY29udGFjdE51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblxyXG4gIGNvbnRhY3ROYW1lLnRleHRDb250ZW50ID0gJ01pY2tleSc7XHJcbiAgY29udGFjdEVtYWlsLnRleHRDb250ZW50ID0gJ01pY2tleUJ1cmdlcnNATWlja2V5c0J1cmdlclNoYWNrLmNvbSc7XHJcbiAgY29udGFjdE51bWJlci50ZXh0Q29udGVudCA9ICc4MDAtMjUyLTIwMDAnO1xyXG5cclxuICBjb250ZW50LmFwcGVuZChjb250YWN0VGl0bGUsIGNvbnRhY3ROYW1lLCBjb250YWN0RW1haWwsIGNvbnRhY3ROdW1iZXIpO1xyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlQ29udGFjdFBhZ2U7IiwiaW1wb3J0IGljb24gZnJvbSAnLi9yZXN0YXVyYW50LWJhbm5lci5qcGcnO1xyXG5cclxuXHJcbmNvbnN0IGNyZWF0ZUhvbWVDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBcclxuICBob21lRGl2LmFwcGVuZChjcmVhdGVIb21lQmFubmVyKCkpO1xyXG4gIGhvbWVEaXYuYXBwZW5kKGhvbWVEZXNjcmlwdGlvbigpKTtcclxuICBob21lRGl2LmFwcGVuZChob21lTG9jYXRpb24oKSk7XHJcbiAgaG9tZURpdi5hcHBlbmQoaG9tZUhvdXJzKCkpO1xyXG5cclxuICByZXR1cm4gaG9tZURpdjtcclxufVxyXG5cclxuLy8gUHJpdmF0ZVxyXG5jb25zdCBjcmVhdGVIb21lQmFubmVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJhbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICBiYW5uZXJEaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcXCcke2ljb259XFwnKWBcclxuICBiYW5uZXJEaXYuY2xhc3NMaXN0LmFkZCgnYmFubmVyJylcclxuXHJcbiAgY29uc3QgYmFubmVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgYmFubmVyVGV4dC50ZXh0Q29udGVudCA9ICdNaWNrZXlcXCdzIEJ1cmdlciBTaGFjayc7XHJcblxyXG4gIGJhbm5lckRpdi5hcHBlbmRDaGlsZChiYW5uZXJUZXh0KTtcclxuXHJcbiAgcmV0dXJuIGJhbm5lckRpdjtcclxufVxyXG5cclxuY29uc3QgaG9tZURlc2NyaXB0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWVEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaG9tZURlc2NUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgaG9tZURlc2NEaXYuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dC11cycpXHJcbiAgaG9tZURlc2NEaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1wYWdlLWRpc3BsYXknKVxyXG4gIGhvbWVEZXNjVGl0bGUudGV4dENvbnRlbnQgPSAnQWJvdXQgdXMhJ1xyXG4gIFxyXG4gIGNvbnN0IGhvbWVEZXNjVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICBob21lRGVzY1RleHQudGV4dENvbnRlbnQgPSAnV2Ugc3RyaXZlIHRvIG1ha2UgdGhlIGJlc3QgZm9vZCBhdmFpbGFibGUuJ1xyXG5cclxuICBob21lRGVzY0Rpdi5hcHBlbmQoaG9tZURlc2NUaXRsZSwgaG9tZURlc2NUZXh0KTtcclxuXHJcbiAgcmV0dXJuIGhvbWVEZXNjRGl2O1xyXG59XHJcblxyXG5jb25zdCBob21lTG9jYXRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaG9tZUxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG9tZUxvY2F0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4tcGFnZS1kaXNwbGF5JylcclxuICBjb25zdCBob21lTG9jYXRpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgY29uc3QgaG9tZUxvY2F0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG5cclxuICBob21lTG9jYXRpb25UaXRsZS50ZXh0Q29udGVudCA9ICdMb2NhdGlvbic7XHJcbiAgaG9tZUxvY2F0aW9uVGV4dC50ZXh0Q29udGVudCA9ICc3ODkgTWFpbiBTdHJlZXQsIFJlYWRpbmcsIFBBJ1xyXG5cclxuICBob21lTG9jYXRpb25EaXYuYXBwZW5kKGhvbWVMb2NhdGlvblRpdGxlLCBob21lTG9jYXRpb25UZXh0KTtcclxuXHJcbiAgcmV0dXJuIGhvbWVMb2NhdGlvbkRpdjtcclxufVxyXG5cclxuY29uc3QgaG9tZUhvdXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHdlZWsgPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J11cclxuXHJcbiAgY29uc3QgaG9tZUhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgaG9tZUhvdXJzRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4tcGFnZS1kaXNwbGF5JylcclxuICBjb25zdCBob21lSG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgXHJcbiAgaG9tZUhvdXJzVGl0bGUudGV4dENvbnRlbnQgPSAnU2NoZWR1bGUnO1xyXG4gIGhvbWVIb3Vyc0Rpdi5hcHBlbmRDaGlsZChob21lSG91cnNUaXRsZSk7XHJcblxyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCB3ZWVrLmxlbmd0aDsgaSsrKXtcclxuICAgIGNvbnN0IHdlZWtEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBjbG9zaW5nVGltZSA9IGkgPiAyICYmIGkgPCA2ID8gJzEyQU0nIDogJzEwUE0nXHJcbiAgICB3ZWVrRGF5LnRleHRDb250ZW50ID0gYCR7d2Vla1tpXX06IDlBTSAtICR7Y2xvc2luZ1RpbWV9YFxyXG5cclxuICAgIGhvbWVIb3Vyc0Rpdi5hcHBlbmRDaGlsZCh3ZWVrRGF5KTtcclxuICB9XHJcbiAgcmV0dXJuIGhvbWVIb3Vyc0RpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZUNvbnRlbnQ7IiwiaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vbWVudUl0ZW1DbGFzcydcclxuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vbWVudUl0ZW1zLmpzb24nXHJcblxyXG5jb25zdCBtZW51Q29udGVudCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGVudERpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKVxyXG5cclxuICBjb25zdCBtZW51VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG5cclxuICBjb25zdCBhcHBldGl6ZXJTZWN0aW9uID0gbWFrZVNlY3Rpb25EaXYoJ0FwcGV0aXplcnMnKVxyXG5cclxuICBjb25zdCBlbnRyZWVTZWN0aW9uID0gbWFrZVNlY3Rpb25EaXYoJ0VudHJlZXMnKTtcclxuXHJcbiAgY29uc3QgYmV2ZXJhZ2VTZWN0aW9uID0gbWFrZVNlY3Rpb25EaXYoJ0JldmVyYWdlcycpO1xyXG5cclxuICBtZW51VGl0bGUudGV4dENvbnRlbnQgPSAnT3VyIE1lbnUnXHJcblxyXG4gIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQobWVudVRpdGxlKTtcclxuICBjcmVhdGVNZW51U2VjdGlvbihhcHBldGl6ZXJTZWN0aW9uLCBlbnRyZWVTZWN0aW9uLCBiZXZlcmFnZVNlY3Rpb24pO1xyXG5cclxuICBjb250ZW50RGl2LmFwcGVuZChhcHBldGl6ZXJTZWN0aW9uLCBlbnRyZWVTZWN0aW9uLCBiZXZlcmFnZVNlY3Rpb24pXHJcbiAgcmV0dXJuIGNvbnRlbnREaXY7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZU1lbnVTZWN0aW9uID0gKGFwcGV0aXplclNlY3Rpb24sIGVudHJlZVNlY3Rpb24sIGJldmVyYWdlU2VjdGlvbikgPT4ge1xyXG4gIFxyXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYoaSA+PSAwICYmIGkgPD0gMil7XHJcbiAgICAgIGFwcGV0aXplclNlY3Rpb24uYXBwZW5kQ2hpbGQobWFrZU1lbnVJdGVtKHByb2R1Y3RzW2ldKSlcclxuICAgIH1cclxuICAgIGVsc2UgaWYoaSA+IDIgJiYgaSA8PSA2KXtcclxuICAgICAgZW50cmVlU2VjdGlvbi5hcHBlbmRDaGlsZChtYWtlTWVudUl0ZW0ocHJvZHVjdHNbaV0pKVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGJldmVyYWdlU2VjdGlvbi5hcHBlbmRDaGlsZChtYWtlTWVudUl0ZW0ocHJvZHVjdHNbaV0pKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgbWFrZU1lbnVJdGVtID0gKHtuYW1lLCBwcmljZSwgZGVzY3JpcHRpb259KSA9PiB7XHJcbiAgY29uc3QgaXRlbSA9IG5ldyBNZW51SXRlbShuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pO1xyXG4gIFxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICBjb25zdCBpdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcblxyXG4gIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XHJcbiAgaXRlbURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgY29udGVudC5hcHBlbmQoaXRlbU5hbWUsIGl0ZW1EZXNjcmlwdGlvbiwgaXRlbVByaWNlKTtcclxuXHJcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxyXG5cclxuICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuY29uc3QgbWFrZVNlY3Rpb25EaXYgPSAoc2VjdGlvblRpdGxlKSA9PiB7XHJcbiAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcclxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudS1zZWN0aW9uJywgJ2NlbnRlci1wYWdlJyk7XHJcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIHRpdGxlLnRleHRDb250ZW50ID0gc2VjdGlvblRpdGxlO1xyXG4gIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbiAgc2VjdGlvbi5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuICByZXR1cm4gc2VjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudUNvbnRlbnQ7IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUl0ZW0ge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlxyXG5pbXBvcnQgY3JlYXRlSG9tZUNvbnRlbnQgZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IG1ha2VNZW51UGFnZSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgbWFrZUNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbmxldCBjdXJyZW50Q29udGVudCA9IGNyZWF0ZUhvbWVDb250ZW50KCk7XHJcblxyXG5sZXQgc2VsZWN0ZWRUYWI7XHJcblxyXG5jb25zdCBtYWtlTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gIGNvbnN0IG5hdkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGNvbnN0IG5hdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIFxyXG4gIHNlbGVjdGVkVGFiID0gbmF2SG9tZTtcclxuICBzZWxlY3RlZFRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1uYXYnKVxyXG4gIFxyXG4gIG5hdkhvbWUudGV4dENvbnRlbnQgPSAnSG9tZSc7XHJcbiAgbmF2SG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVwZGF0ZUN1cnJlbnRQYWdlKCdob21lJywgbmF2SG9tZSkpO1xyXG4gIFxyXG4gIG5hdk1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XHJcbiAgbmF2TWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVwZGF0ZUN1cnJlbnRQYWdlKCdtZW51JywgbmF2TWVudSkpO1xyXG4gIFxyXG4gIG5hdkNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XHJcbiAgbmF2Q29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVwZGF0ZUN1cnJlbnRQYWdlKCdjb250YWN0JywgbmF2Q29udGFjdCkpO1xyXG4gIFxyXG4gIG5hdkxpc3QuY2xhc3NMaXN0LmFkZCgnbmF2LWxpc3QnKVxyXG5cclxuICBuYXZMaXN0LmFwcGVuZChuYXZIb21lLCBuYXZNZW51LCBuYXZDb250YWN0KTtcclxuICBuYXYuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdik7XHJcblxyXG4gIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmNvbnN0IHJlbW92ZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29udGVudC5yZW1vdmVDaGlsZChjdXJyZW50Q29udGVudCk7XHJcbiAgY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50LWlzLWFjdGl2ZScpXHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZUN1cnJlbnRQYWdlID0gKG5ld1BhZ2UsIG5ld1RhYikgPT4ge1xyXG4gIFxyXG4gIGxldCB1cGRhdGVkUGFnZTtcclxuICBpZiAoc2VsZWN0ZWRUYWIgIT0gbmV3VGFiKSB7XHJcbiAgICBpZihuZXdQYWdlID09PSAnbWVudScpIHVwZGF0ZWRQYWdlID0gbWFrZU1lbnVQYWdlKClcclxuICAgIGVsc2UgaWYobmV3UGFnZSA9PT0gJ2NvbnRhY3QnICkgdXBkYXRlZFBhZ2UgPSBtYWtlQ29udGFjdFBhZ2UoKTtcclxuICAgIGVsc2UgaWYobmV3UGFnZSA9PT0gJ2hvbWUnKSB1cGRhdGVkUGFnZSA9IGNyZWF0ZUhvbWVDb250ZW50KCk7XHJcbiAgfVxyXG5cclxuICBpZighIXVwZGF0ZWRQYWdlKSB7XHJcbiAgICByZW1vdmVDb250ZW50KCk7XHJcbiAgICBzZWxlY3RlZFRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1uYXYnKTtcclxuICAgIHNlbGVjdGVkVGFiID0gbmV3VGFiO1xyXG4gICAgc2VsZWN0ZWRUYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtbmF2JylcclxuXHJcbiAgICBjdXJyZW50Q29udGVudCA9IHVwZGF0ZWRQYWdlXHJcbiAgICBcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3VycmVudENvbnRlbnQpO1xyXG4gICAgZmFkZVRhYnMoKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZhZGVUYWJzID0gKCkgPT4ge1xyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgY29udGVudC5jbGFzc0xpc3QudG9nZ2xlKCdjb250ZW50LWlzLWFjdGl2ZScpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkucHJlcGVuZChtYWtlTmF2KCkpO1xyXG5jb250ZW50LmFwcGVuZChjdXJyZW50Q29udGVudCk7XHJcbmZhZGVUYWJzKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=