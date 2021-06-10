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
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*, *:before, *:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nol, ul {\r\n  list-style: none;\r\n}\r\n\r\n/* CSS Reset END */\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n/* Nav */\r\n\r\n#content {\r\n  opacity: 0;\r\n}\r\n\r\nheader{\r\n  height: 55px;\r\n  background-color: #e7717d;\r\n}\r\n\r\nnav {\r\n  padding-top: 1.5em;\r\n  color: white;\r\n\r\n}\r\n\r\n#content.content-is-active {\r\n  opacity: 1 !important;\r\n  transition: opacity .2s ease-in-out;\r\n  -webkit-transition: opacity .2s ease-in-out;\r\n}\r\n.nav-list {\r\n  display:flex;\r\n  justify-content: space-around;\r\n  list-style: none;\r\n  font-size: 24px;\r\n  height: 20px;\r\n}\r\n\r\n.nav-list li {\r\n  align-self: flex-end;\r\n  cursor: pointer;\r\n  transition: all 0.25s;\r\n}\r\n\r\n.nav-list li:hover {\r\n  color:cornflowerblue;\r\n  padding-bottom: 7px;\r\n}\r\n\r\n.selected-nav {\r\n  color: cornflowerblue;\r\n  cursor: default !important;\r\n  transition: color 0.25s;\r\n}\r\n.selected-nav:hover{\r\n  padding-bottom: 0px !important;\r\n}\r\n\r\n/* Main Page */\r\n\r\n.banner {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 646px;\r\n}\r\n\r\n.banner h1 {\r\n  color: white;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\r\n  font-size: 52px;\r\n}\r\n\r\n.main-page-display{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 636px;\r\n}\r\n\r\n.main-page-display:nth-child(even){\r\n  background-color: #afd275;\r\n  color: white;\r\n}\r\n\r\n.main-page-display h3 {\r\n  margin: 1em;\r\n  font-size: 46px;\r\n}\r\n.main-page-display p {\r\n  font-size: 32px;\r\n}\r\n\r\n/* MENU */\r\n\r\n#menu {\r\n  background-color: #afd275;\r\n  color: white;\r\n}\r\n\r\n#menu h1 {\r\n  text-align: center;\r\n  padding-top: 4rem;\r\n  font-size: 52px;\r\n}\r\n\r\n#menu section {\r\n  padding: 5rem 25rem;\r\n}\r\n\r\n#menu section h2 {\r\n  font-size: 42px;\r\n}\r\n\r\n#menu section:nth-child(odd){\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n#menu section div{\r\n  padding: 2rem 0;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.center-page {\r\n  margin: 0 auto;\r\n}\r\n.menu-item > *{\r\n  margin: .5em 0;\r\n}\r\n\r\n.menu-item:nth-child(even) {\r\n  text-align: right;\r\n}\r\n\r\n.menu-section{\r\n  max-width: max-content;\r\n}\r\n\r\n.menu-section  h2{\r\n  text-align: center;\r\n}\r\n\r\n/* CONTACT */\r\n\r\n.contact-page {\r\n  background-color: #afd275;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 92.5vh;\r\n}\r\n\r\n.contact-page * {\r\n  padding-top: 1rem;\r\n  font-size: 2rem;\r\n}\r\n.contact-page h1 {\r\n  text-align: center;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA,kBAAkB;AAClB;EACE,yCAAyC;AAC3C;AACA,QAAQ;;AAER;EACE,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,YAAY;;AAEd;;AAEA;EACE,qBAAqB;EACrB,mCAAmC;EACnC,2CAA2C;AAC7C;AACA;EACE,YAAY;EACZ,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,oBAAoB;EACpB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;EAC1B,uBAAuB;AACzB;AACA;EACE,8BAA8B;AAChC;;AAEA,cAAc;;AAEd;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,+EAA+E;EAC/E,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,eAAe;AACjB;AACA;EACE,eAAe;AACjB;;AAEA,SAAS;;AAET;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,kBAAkB;AACpB;;AAEA,YAAY;;AAEZ;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB","sourcesContent":["html {\r\n  box-sizing: border-box;\r\n}\r\n\r\n*, *:before, *:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\nbody, h1, h2, h3, h4, h5, h6, p, ol, ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nol, ul {\r\n  list-style: none;\r\n}\r\n\r\n/* CSS Reset END */\r\n* {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n/* Nav */\r\n\r\n#content {\r\n  opacity: 0;\r\n}\r\n\r\nheader{\r\n  height: 55px;\r\n  background-color: #e7717d;\r\n}\r\n\r\nnav {\r\n  padding-top: 1.5em;\r\n  color: white;\r\n\r\n}\r\n\r\n#content.content-is-active {\r\n  opacity: 1 !important;\r\n  transition: opacity .2s ease-in-out;\r\n  -webkit-transition: opacity .2s ease-in-out;\r\n}\r\n.nav-list {\r\n  display:flex;\r\n  justify-content: space-around;\r\n  list-style: none;\r\n  font-size: 24px;\r\n  height: 20px;\r\n}\r\n\r\n.nav-list li {\r\n  align-self: flex-end;\r\n  cursor: pointer;\r\n  transition: all 0.25s;\r\n}\r\n\r\n.nav-list li:hover {\r\n  color:cornflowerblue;\r\n  padding-bottom: 7px;\r\n}\r\n\r\n.selected-nav {\r\n  color: cornflowerblue;\r\n  cursor: default !important;\r\n  transition: color 0.25s;\r\n}\r\n.selected-nav:hover{\r\n  padding-bottom: 0px !important;\r\n}\r\n\r\n/* Main Page */\r\n\r\n.banner {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  height: 646px;\r\n}\r\n\r\n.banner h1 {\r\n  color: white;\r\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;\r\n  font-size: 52px;\r\n}\r\n\r\n.main-page-display{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  height: 636px;\r\n}\r\n\r\n.main-page-display:nth-child(even){\r\n  background-color: #afd275;\r\n  color: white;\r\n}\r\n\r\n.main-page-display h3 {\r\n  margin: 1em;\r\n  font-size: 46px;\r\n}\r\n.main-page-display p {\r\n  font-size: 32px;\r\n}\r\n\r\n/* MENU */\r\n\r\n#menu {\r\n  background-color: #afd275;\r\n  color: white;\r\n}\r\n\r\n#menu h1 {\r\n  text-align: center;\r\n  padding-top: 4rem;\r\n  font-size: 52px;\r\n}\r\n\r\n#menu section {\r\n  padding: 5rem 25rem;\r\n}\r\n\r\n#menu section h2 {\r\n  font-size: 42px;\r\n}\r\n\r\n#menu section:nth-child(odd){\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n#menu section div{\r\n  padding: 2rem 0;\r\n  font-size: 1.5em;\r\n}\r\n\r\n.center-page {\r\n  margin: 0 auto;\r\n}\r\n.menu-item > *{\r\n  margin: .5em 0;\r\n}\r\n\r\n.menu-item:nth-child(even) {\r\n  text-align: right;\r\n}\r\n\r\n.menu-section{\r\n  max-width: max-content;\r\n}\r\n\r\n.menu-section  h2{\r\n  text-align: center;\r\n}\r\n\r\n/* CONTACT */\r\n\r\n.contact-page {\r\n  background-color: #afd275;\r\n  color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  height: 92.5vh;\r\n}\r\n\r\n.contact-page * {\r\n  padding-top: 1rem;\r\n  font-size: 2rem;\r\n}\r\n.contact-page h1 {\r\n  text-align: center;\r\n}"],"sourceRoot":""}]);
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
  const container = document.createElement('div');
  const content = document.createElement('div');
  container.classList.add('contact-page');
  content.classList.add('center-page');

  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Contact Us';

  const contactName = document.createElement('h3');
  const contactEmail = document.createElement('h3');
  const contactNumber = document.createElement('h3');

  contactName.textContent = 'Mickey';
  contactEmail.textContent = 'E-mail: MickeyBurgers@MickeysBurgerShack.com';
  contactNumber.textContent = 'Phone: 800-252-2000';

  content.append(contactTitle, contactName, contactEmail, contactNumber);
  container.append(content);
  return container;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvLi9zcmMvbWVudUl0ZW1DbGFzcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LXJlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phdmFzY3JpcHQtcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EsZ0RBQWdELDZCQUE2QixLQUFLLDhCQUE4QiwwQkFBMEIsS0FBSyxpREFBaUQsZ0JBQWdCLGlCQUFpQixLQUFLLGdCQUFnQix1QkFBdUIsS0FBSyxrQ0FBa0MsZ0RBQWdELEtBQUssK0JBQStCLGlCQUFpQixLQUFLLGVBQWUsbUJBQW1CLGdDQUFnQyxLQUFLLGFBQWEseUJBQXlCLG1CQUFtQixTQUFTLG9DQUFvQyw0QkFBNEIsMENBQTBDLGtEQUFrRCxLQUFLLGVBQWUsbUJBQW1CLG9DQUFvQyx1QkFBdUIsc0JBQXNCLG1CQUFtQixLQUFLLHNCQUFzQiwyQkFBMkIsc0JBQXNCLDRCQUE0QixLQUFLLDRCQUE0QiwyQkFBMkIsMEJBQTBCLEtBQUssdUJBQXVCLDRCQUE0QixpQ0FBaUMsOEJBQThCLEtBQUssd0JBQXdCLHFDQUFxQyxLQUFLLHdDQUF3QyxvQkFBb0IsOEJBQThCLDBCQUEwQixrQkFBa0Isb0JBQW9CLEtBQUssb0JBQW9CLG1CQUFtQixzRkFBc0Ysc0JBQXNCLEtBQUssMkJBQTJCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLDZCQUE2QixvQkFBb0IsS0FBSywyQ0FBMkMsZ0NBQWdDLG1CQUFtQixLQUFLLCtCQUErQixrQkFBa0Isc0JBQXNCLEtBQUssMEJBQTBCLHNCQUFzQixLQUFLLGlDQUFpQyxnQ0FB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OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZHVDO0FBQ0w7QUFDTTtBQUNuQjs7QUFFckI7QUFDQSxxQkFBcUIsOENBQWlCOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5Q0FBeUMsOENBQVk7QUFDckQsa0RBQWtELGlEQUFlO0FBQ2pFLDhDQUE4Qyw4Q0FBaUI7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSwgaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgb2wsIHVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbm9sLCB1bCB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDU1MgUmVzZXQgRU5EICovXFxyXFxuKiB7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuLyogTmF2ICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVye1xcclxcbiAgaGVpZ2h0OiA1NXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3NzE3ZDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxLjVlbTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQuY29udGVudC1pcy1hY3RpdmUge1xcclxcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG4ubmF2LWxpc3Qge1xcclxcbiAgZGlzcGxheTpmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgbGkge1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXM7XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGlzdCBsaTpob3ZlciB7XFxyXFxuICBjb2xvcjpjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3RlZC1uYXYge1xcclxcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xcclxcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjI1cztcXHJcXG59XFxyXFxuLnNlbGVjdGVkLW5hdjpob3ZlcntcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBQYWdlICovXFxyXFxuXFxyXFxuLmJhbm5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDY0NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyIGgxIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRleHQtc2hhZG93OiAtMXB4IC0xcHggMCAjMDAwLCAxcHggLTFweCAwICMwMDAsIC0xcHggMXB4IDAgIzAwMCwgMXB4IDFweCAwICMwMDA7XFxyXFxuICBmb250LXNpemU6IDUycHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UtZGlzcGxheXtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiA2MzZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tcGFnZS1kaXNwbGF5Om50aC1jaGlsZChldmVuKXtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmQyNzU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UtZGlzcGxheSBoMyB7XFxyXFxuICBtYXJnaW46IDFlbTtcXHJcXG4gIGZvbnQtc2l6ZTogNDZweDtcXHJcXG59XFxyXFxuLm1haW4tcGFnZS1kaXNwbGF5IHAge1xcclxcbiAgZm9udC1zaXplOiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VICovXFxyXFxuXFxyXFxuI21lbnUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FmZDI3NTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUgaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgcGFkZGluZy10b3A6IDRyZW07XFxyXFxuICBmb250LXNpemU6IDUycHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51IHNlY3Rpb24ge1xcclxcbiAgcGFkZGluZzogNXJlbSAyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUgc2VjdGlvbiBoMiB7XFxyXFxuICBmb250LXNpemU6IDQycHg7XFxyXFxufVxcclxcblxcclxcbiNtZW51IHNlY3Rpb246bnRoLWNoaWxkKG9kZCl7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI21lbnUgc2VjdGlvbiBkaXZ7XFxyXFxuICBwYWRkaW5nOiAycmVtIDA7XFxyXFxuICBmb250LXNpemU6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2VudGVyLXBhZ2Uge1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcbi5tZW51LWl0ZW0gPiAqe1xcclxcbiAgbWFyZ2luOiAuNWVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW06bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zZWN0aW9ue1xcclxcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc2VjdGlvbiAgaDJ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIENPTlRBQ1QgKi9cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmQyNzU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGhlaWdodDogOTIuNXZoO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdC1wYWdlICoge1xcclxcbiAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcbi5jb250YWN0LXBhZ2UgaDEge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSx5Q0FBeUM7QUFDM0M7QUFDQSxRQUFROztBQUVSO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZOztBQUVkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQywyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsMEJBQTBCO0VBQzFCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLCtFQUErRTtFQUMvRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsWUFBWTs7QUFFWjtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmJvZHksIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIG9sLCB1bCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5vbCwgdWwge1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQ1NTIFJlc2V0IEVORCAqL1xcclxcbioge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcbi8qIE5hdiAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbmhlYWRlcntcXHJcXG4gIGhlaWdodDogNTVweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNzcxN2Q7XFxyXFxufVxcclxcblxcclxcbm5hdiB7XFxyXFxuICBwYWRkaW5nLXRvcDogMS41ZW07XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiNjb250ZW50LmNvbnRlbnQtaXMtYWN0aXZlIHtcXHJcXG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuLm5hdi1saXN0IHtcXHJcXG4gIGRpc3BsYXk6ZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saXN0IGxpIHtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpc3QgbGk6aG92ZXIge1xcclxcbiAgY29sb3I6Y29ybmZsb3dlcmJsdWU7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VsZWN0ZWQtbmF2IHtcXHJcXG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXHJcXG4gIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xcclxcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4yNXM7XFxyXFxufVxcclxcbi5zZWxlY3RlZC1uYXY6aG92ZXJ7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8qIE1haW4gUGFnZSAqL1xcclxcblxcclxcbi5iYW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2NDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lciBoMSB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICB0ZXh0LXNoYWRvdzogLTFweCAtMXB4IDAgIzAwMCwgMXB4IC0xcHggMCAjMDAwLCAtMXB4IDFweCAwICMwMDAsIDFweCAxcHggMCAjMDAwO1xcclxcbiAgZm9udC1zaXplOiA1MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1wYWdlLWRpc3BsYXl7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogNjM2cHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLXBhZ2UtZGlzcGxheTpudGgtY2hpbGQoZXZlbil7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZkMjc1O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1wYWdlLWRpc3BsYXkgaDMge1xcclxcbiAgbWFyZ2luOiAxZW07XFxyXFxuICBmb250LXNpemU6IDQ2cHg7XFxyXFxufVxcclxcbi5tYWluLXBhZ2UtZGlzcGxheSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTUVOVSAqL1xcclxcblxcclxcbiNtZW51IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhZmQyNzU7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbiNtZW51IGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctdG9wOiA0cmVtO1xcclxcbiAgZm9udC1zaXplOiA1MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudSBzZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDVyZW0gMjVyZW07XFxyXFxufVxcclxcblxcclxcbiNtZW51IHNlY3Rpb24gaDIge1xcclxcbiAgZm9udC1zaXplOiA0MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbWVudSBzZWN0aW9uOm50aC1jaGlsZChvZGQpe1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbiNtZW51IHNlY3Rpb24gZGl2e1xcclxcbiAgcGFkZGluZzogMnJlbSAwO1xcclxcbiAgZm9udC1zaXplOiAxLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbnRlci1wYWdlIHtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG4ubWVudS1pdGVtID4gKntcXHJcXG4gIG1hcmdpbjogLjVlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc2VjdGlvbntcXHJcXG4gIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi5tZW51LXNlY3Rpb24gIGgye1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDT05UQUNUICovXFxyXFxuXFxyXFxuLmNvbnRhY3QtcGFnZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWZkMjc1O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDkyLjV2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QtcGFnZSAqIHtcXHJcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG4uY29udGFjdC1wYWdlIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNvbnN0IG1ha2VDb250YWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtcGFnZScpO1xyXG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY2VudGVyLXBhZ2UnKTtcclxuXHJcbiAgY29uc3QgY29udGFjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBjb250YWN0VGl0bGUudGV4dENvbnRlbnQgPSAnQ29udGFjdCBVcyc7XHJcblxyXG4gIGNvbnN0IGNvbnRhY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBjb25zdCBjb250YWN0RW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gIGNvbnN0IGNvbnRhY3ROdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cclxuICBjb250YWN0TmFtZS50ZXh0Q29udGVudCA9ICdNaWNrZXknO1xyXG4gIGNvbnRhY3RFbWFpbC50ZXh0Q29udGVudCA9ICdFLW1haWw6IE1pY2tleUJ1cmdlcnNATWlja2V5c0J1cmdlclNoYWNrLmNvbSc7XHJcbiAgY29udGFjdE51bWJlci50ZXh0Q29udGVudCA9ICdQaG9uZTogODAwLTI1Mi0yMDAwJztcclxuXHJcbiAgY29udGVudC5hcHBlbmQoY29udGFjdFRpdGxlLCBjb250YWN0TmFtZSwgY29udGFjdEVtYWlsLCBjb250YWN0TnVtYmVyKTtcclxuICBjb250YWluZXIuYXBwZW5kKGNvbnRlbnQpO1xyXG4gIHJldHVybiBjb250YWluZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ha2VDb250YWN0UGFnZTsiLCJpbXBvcnQgaWNvbiBmcm9tICcuL3Jlc3RhdXJhbnQtYmFubmVyLmpwZyc7XHJcblxyXG5cclxuY29uc3QgY3JlYXRlSG9tZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIFxyXG4gIGhvbWVEaXYuYXBwZW5kKGNyZWF0ZUhvbWVCYW5uZXIoKSk7XHJcbiAgaG9tZURpdi5hcHBlbmQoaG9tZURlc2NyaXB0aW9uKCkpO1xyXG4gIGhvbWVEaXYuYXBwZW5kKGhvbWVMb2NhdGlvbigpKTtcclxuICBob21lRGl2LmFwcGVuZChob21lSG91cnMoKSk7XHJcblxyXG4gIHJldHVybiBob21lRGl2O1xyXG59XHJcblxyXG4vLyBQcml2YXRlXHJcbmNvbnN0IGNyZWF0ZUhvbWVCYW5uZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgYmFubmVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gIGJhbm5lckRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFxcJyR7aWNvbn1cXCcpYFxyXG4gIGJhbm5lckRpdi5jbGFzc0xpc3QuYWRkKCdiYW5uZXInKVxyXG5cclxuICBjb25zdCBiYW5uZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICBiYW5uZXJUZXh0LnRleHRDb250ZW50ID0gJ01pY2tleVxcJ3MgQnVyZ2VyIFNoYWNrJztcclxuXHJcbiAgYmFubmVyRGl2LmFwcGVuZENoaWxkKGJhbm5lclRleHQpO1xyXG5cclxuICByZXR1cm4gYmFubmVyRGl2O1xyXG59XHJcblxyXG5jb25zdCBob21lRGVzY3JpcHRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgaG9tZURlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBob21lRGVzY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBob21lRGVzY0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0LXVzJylcclxuICBob21lRGVzY0Rpdi5jbGFzc0xpc3QuYWRkKCdtYWluLXBhZ2UtZGlzcGxheScpXHJcbiAgaG9tZURlc2NUaXRsZS50ZXh0Q29udGVudCA9ICdBYm91dCB1cyEnXHJcbiAgXHJcbiAgY29uc3QgaG9tZURlc2NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gIGhvbWVEZXNjVGV4dC50ZXh0Q29udGVudCA9ICdXZSBzdHJpdmUgdG8gbWFrZSB0aGUgYmVzdCBmb29kIGF2YWlsYWJsZS4nXHJcblxyXG4gIGhvbWVEZXNjRGl2LmFwcGVuZChob21lRGVzY1RpdGxlLCBob21lRGVzY1RleHQpO1xyXG5cclxuICByZXR1cm4gaG9tZURlc2NEaXY7XHJcbn1cclxuXHJcbmNvbnN0IGhvbWVMb2NhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBob21lTG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob21lTG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1wYWdlLWRpc3BsYXknKVxyXG4gIGNvbnN0IGhvbWVMb2NhdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBjb25zdCBob21lTG9jYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcblxyXG4gIGhvbWVMb2NhdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0xvY2F0aW9uJztcclxuICBob21lTG9jYXRpb25UZXh0LnRleHRDb250ZW50ID0gJzc4OSBNYWluIFN0cmVldCwgUmVhZGluZywgUEEnXHJcblxyXG4gIGhvbWVMb2NhdGlvbkRpdi5hcHBlbmQoaG9tZUxvY2F0aW9uVGl0bGUsIGhvbWVMb2NhdGlvblRleHQpO1xyXG5cclxuICByZXR1cm4gaG9tZUxvY2F0aW9uRGl2O1xyXG59XHJcblxyXG5jb25zdCBob21lSG91cnMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgd2VlayA9IFsnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheScsICdTdW5kYXknXVxyXG5cclxuICBjb25zdCBob21lSG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob21lSG91cnNEaXYuY2xhc3NMaXN0LmFkZCgnbWFpbi1wYWdlLWRpc3BsYXknKVxyXG4gIGNvbnN0IGhvbWVIb3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICBcclxuICBob21lSG91cnNUaXRsZS50ZXh0Q29udGVudCA9ICdTY2hlZHVsZSc7XHJcbiAgaG9tZUhvdXJzRGl2LmFwcGVuZENoaWxkKGhvbWVIb3Vyc1RpdGxlKTtcclxuXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IHdlZWsubGVuZ3RoOyBpKyspe1xyXG4gICAgY29uc3Qgd2Vla0RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGNsb3NpbmdUaW1lID0gaSA+IDIgJiYgaSA8IDYgPyAnMTJBTScgOiAnMTBQTSdcclxuICAgIHdlZWtEYXkudGV4dENvbnRlbnQgPSBgJHt3ZWVrW2ldfTogOUFNIC0gJHtjbG9zaW5nVGltZX1gXHJcblxyXG4gICAgaG9tZUhvdXJzRGl2LmFwcGVuZENoaWxkKHdlZWtEYXkpO1xyXG4gIH1cclxuICByZXR1cm4gaG9tZUhvdXJzRGl2O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lQ29udGVudDsiLCJpbXBvcnQgTWVudUl0ZW0gZnJvbSAnLi9tZW51SXRlbUNsYXNzJ1xyXG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9tZW51SXRlbXMuanNvbidcclxuXHJcbmNvbnN0IG1lbnVDb250ZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb250ZW50RGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpXHJcblxyXG4gIGNvbnN0IG1lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblxyXG4gIGNvbnN0IGFwcGV0aXplclNlY3Rpb24gPSBtYWtlU2VjdGlvbkRpdignQXBwZXRpemVycycpXHJcblxyXG4gIGNvbnN0IGVudHJlZVNlY3Rpb24gPSBtYWtlU2VjdGlvbkRpdignRW50cmVlcycpO1xyXG5cclxuICBjb25zdCBiZXZlcmFnZVNlY3Rpb24gPSBtYWtlU2VjdGlvbkRpdignQmV2ZXJhZ2VzJyk7XHJcblxyXG4gIG1lbnVUaXRsZS50ZXh0Q29udGVudCA9ICdPdXIgTWVudSdcclxuXHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChtZW51VGl0bGUpO1xyXG4gIGNyZWF0ZU1lbnVTZWN0aW9uKGFwcGV0aXplclNlY3Rpb24sIGVudHJlZVNlY3Rpb24sIGJldmVyYWdlU2VjdGlvbik7XHJcblxyXG4gIGNvbnRlbnREaXYuYXBwZW5kKGFwcGV0aXplclNlY3Rpb24sIGVudHJlZVNlY3Rpb24sIGJldmVyYWdlU2VjdGlvbilcclxuICByZXR1cm4gY29udGVudERpdjtcclxufVxyXG5cclxuY29uc3QgY3JlYXRlTWVudVNlY3Rpb24gPSAoYXBwZXRpemVyU2VjdGlvbiwgZW50cmVlU2VjdGlvbiwgYmV2ZXJhZ2VTZWN0aW9uKSA9PiB7XHJcbiAgXHJcbiAgZm9yKGxldCBpID0gMDsgaSA8IHByb2R1Y3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBpZihpID49IDAgJiYgaSA8PSAyKXtcclxuICAgICAgYXBwZXRpemVyU2VjdGlvbi5hcHBlbmRDaGlsZChtYWtlTWVudUl0ZW0ocHJvZHVjdHNbaV0pKVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZihpID4gMiAmJiBpIDw9IDYpe1xyXG4gICAgICBlbnRyZWVTZWN0aW9uLmFwcGVuZENoaWxkKG1ha2VNZW51SXRlbShwcm9kdWN0c1tpXSkpXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgYmV2ZXJhZ2VTZWN0aW9uLmFwcGVuZENoaWxkKG1ha2VNZW51SXRlbShwcm9kdWN0c1tpXSkpXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBtYWtlTWVudUl0ZW0gPSAoe25hbWUsIHByaWNlLCBkZXNjcmlwdGlvbn0pID0+IHtcclxuICBjb25zdCBpdGVtID0gbmV3IE1lbnVJdGVtKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbik7XHJcbiAgXHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gIGNvbnN0IGl0ZW1EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcclxuICBpdGVtRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xyXG5cclxuICBjb250ZW50LmFwcGVuZChpdGVtTmFtZSwgaXRlbURlc2NyaXB0aW9uLCBpdGVtUHJpY2UpO1xyXG5cclxuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpXHJcblxyXG4gIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5jb25zdCBtYWtlU2VjdGlvbkRpdiA9IChzZWN0aW9uVGl0bGUpID0+IHtcclxuICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xyXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nLCAnY2VudGVyLXBhZ2UnKTtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBzZWN0aW9uVGl0bGU7XHJcbiAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcclxuICBzZWN0aW9uLmFwcGVuZENoaWxkKGRpdik7XHJcblxyXG4gIHJldHVybiBzZWN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51Q29udGVudDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51SXRlbSB7XHJcbiAgY29uc3RydWN0b3IobmFtZSwgcHJpY2UsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiXHJcbmltcG9ydCBjcmVhdGVIb21lQ29udGVudCBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgbWFrZU1lbnVQYWdlIGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCBtYWtlQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0JztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxubGV0IGN1cnJlbnRDb250ZW50ID0gY3JlYXRlSG9tZUNvbnRlbnQoKTtcclxuXHJcbmxldCBzZWxlY3RlZFRhYjtcclxuXHJcbmNvbnN0IG1ha2VOYXYgPSAoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgY29uc3QgbmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgbmF2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgY29uc3QgbmF2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgXHJcbiAgc2VsZWN0ZWRUYWIgPSBuYXZIb21lO1xyXG4gIHNlbGVjdGVkVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkLW5hdicpXHJcbiAgXHJcbiAgbmF2SG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcclxuICBuYXZIb21lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdXBkYXRlQ3VycmVudFBhZ2UoJ2hvbWUnLCBuYXZIb21lKSk7XHJcbiAgXHJcbiAgbmF2TWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcclxuICBuYXZNZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdXBkYXRlQ3VycmVudFBhZ2UoJ21lbnUnLCBuYXZNZW51KSk7XHJcbiAgXHJcbiAgbmF2Q29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcclxuICBuYXZDb250YWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdXBkYXRlQ3VycmVudFBhZ2UoJ2NvbnRhY3QnLCBuYXZDb250YWN0KSk7XHJcbiAgXHJcbiAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKCduYXYtbGlzdCcpXHJcblxyXG4gIG5hdkxpc3QuYXBwZW5kKG5hdkhvbWUsIG5hdk1lbnUsIG5hdkNvbnRhY3QpO1xyXG4gIG5hdi5hcHBlbmRDaGlsZChuYXZMaXN0KTtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2KTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuY29uc3QgcmVtb3ZlQ29udGVudCA9ICgpID0+IHtcclxuICBjb250ZW50LnJlbW92ZUNoaWxkKGN1cnJlbnRDb250ZW50KTtcclxuICBjb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnQtaXMtYWN0aXZlJylcclxufVxyXG5cclxuY29uc3QgdXBkYXRlQ3VycmVudFBhZ2UgPSAobmV3UGFnZSwgbmV3VGFiKSA9PiB7XHJcbiAgXHJcbiAgbGV0IHVwZGF0ZWRQYWdlO1xyXG4gIGlmIChzZWxlY3RlZFRhYiAhPSBuZXdUYWIpIHtcclxuICAgIGlmKG5ld1BhZ2UgPT09ICdtZW51JykgdXBkYXRlZFBhZ2UgPSBtYWtlTWVudVBhZ2UoKVxyXG4gICAgZWxzZSBpZihuZXdQYWdlID09PSAnY29udGFjdCcgKSB1cGRhdGVkUGFnZSA9IG1ha2VDb250YWN0UGFnZSgpO1xyXG4gICAgZWxzZSBpZihuZXdQYWdlID09PSAnaG9tZScpIHVwZGF0ZWRQYWdlID0gY3JlYXRlSG9tZUNvbnRlbnQoKTtcclxuICB9XHJcblxyXG4gIGlmKCEhdXBkYXRlZFBhZ2UpIHtcclxuICAgIHJlbW92ZUNvbnRlbnQoKTtcclxuICAgIHNlbGVjdGVkVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkLW5hdicpO1xyXG4gICAgc2VsZWN0ZWRUYWIgPSBuZXdUYWI7XHJcbiAgICBzZWxlY3RlZFRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1uYXYnKVxyXG5cclxuICAgIGN1cnJlbnRDb250ZW50ID0gdXBkYXRlZFBhZ2VcclxuICAgIFxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjdXJyZW50Q29udGVudCk7XHJcbiAgICBmYWRlVGFicygpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZmFkZVRhYnMgPSAoKSA9PiB7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBjb250ZW50LmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRlbnQtaXMtYWN0aXZlJyk7XHJcbiAgfSlcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5wcmVwZW5kKG1ha2VOYXYoKSk7XHJcbmNvbnRlbnQuYXBwZW5kKGN1cnJlbnRDb250ZW50KTtcclxuZmFkZVRhYnMoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==