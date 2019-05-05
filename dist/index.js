/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/image-gallery/script.mjs":
/*!*************************************************!*\
  !*** ./src/components/image-gallery/script.mjs ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Image Gallery Component\n//\n// This component has the following dependencies:\n//      - Component__Modals\n//\n\nclass Component__ImageGallery {\n\n    constructor(modals) {\n        this.modals = modals;\n\n        setTimeout(function () {\n            modals.showModal('<div class=\"arrows prev\"></div><div class=\"arrows next\"></div><img src=\"https://i.pinimg.com/236x/54/84/e2/5484e289c5af5c3414a30cb14a768ea8--winding-road-the-road.jpg\"/>', ['cmp__image-gallery', '', '']);\n        }, 2000);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component__ImageGallery);\n\n\n//# sourceURL=webpack:///./src/components/image-gallery/script.mjs?");

/***/ }),

/***/ "./src/components/modal/script.mjs":
/*!*****************************************!*\
  !*** ./src/components/modal/script.mjs ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Modal Component\n//\n\nclass Component__Modal {\n\n    constructor() {\n    }\n\n    showModal(content, classes = ['', '', '']) {\n        // Dynamically create DOM elements but do not create node structure.\n        const modal = document.createElement(\"div\");\n        const frame = document.createElement(\"div\");\n        const container = document.createElement(\"div\");\n\n        // Each element class can be set by sending a custom array of strings.\n        modal.className = 'cmp__modal ' + classes[0];\n        frame.className = 'frame ' + classes[1];\n        container.className = 'container ' + classes[2];\n\n        // The modal content gets passed as string. Is then appended to the DOM.\n        container.innerHTML = content;\n        frame.appendChild(container);\n        modal.appendChild(frame);\n        modal.style.display = 'block';\n        document.body.appendChild(modal);\n\n        setTimeout(function () {\n            modal.style.opacity = 1;\n        }, 300);\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component__Modal);\n\n\n//# sourceURL=webpack:///./src/components/modal/script.mjs?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_modal_script_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal/script.mjs */ \"./src/components/modal/script.mjs\");\n/* harmony import */ var _components_image_gallery_script_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/image-gallery/script.mjs */ \"./src/components/image-gallery/script.mjs\");\n\nconst cmp__modal = new _components_modal_script_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\nnew _components_image_gallery_script_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"]( cmp__modal );\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/tree.scss":
/*!***********************!*\
  !*** ./src/tree.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"tree.css\";\n\n//# sourceURL=webpack:///./src/tree.scss?");

/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./src/index.js ./src/tree.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/tree.scss */\"./src/tree.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/tree.scss?");

/***/ })

/******/ });