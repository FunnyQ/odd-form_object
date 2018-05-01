(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("odd-form_object", [], factory);
	else if(typeof exports === 'object')
		exports["odd-form_object"] = factory();
	else
		root["odd-form_object"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormBase = function () {
  /**
   * 建立 Form 的 instance
   *
   * @param {Object} data Form 需要的 attributes
   * @param {function} dispatcher vuex store dispatch function
   * @param {Object} errors Errors instance in vuex store
   */
  function FormBase(model) {
    _classCallCheck(this, FormBase);

    this.model = model;
    this.originalData = model.attributes();

    this.constructor.dataAssigner(this.originalData, this);
  }

  /**
   * 列出所有 attributes
   */


  _createClass(FormBase, [{
    key: "data",
    value: function data() {
      var data = {};

      return this.constructor.dataDumper(this, data, this.originalData);
    }

    /**
     * 重置 Form
     */

  }, {
    key: "reset",
    value: function reset() {
      this.constructor.dataAssigner(this.originalData, this);
    }

    /**
     * 檢查欄位是否有填寫內容
     *
     * @param {string} columnName 要檢查的欄位名稱
     * @returns {boolean}
     */

  }, {
    key: "hasContent",
    value: function hasContent(columnName) {
      return this[columnName].length > 0;
    }

    /**
     * 把使用者填寫的資料 sync 到 model 中
     *
     * @return {Object} model object
     * @memberof Form
     */

  }, {
    key: "sync",
    value: function sync() {
      return this.constructor.dataDumper(this, this.model, this.originalData);
    }
  }], [{
    key: "dataAssigner",
    value: function dataAssigner(source, target) {
      for (var key in source) {
        target[key] = source[key];
      }
    }
  }, {
    key: "dataDumper",
    value: function dataDumper(source, target, originalData) {
      for (var key in originalData) {
        target[key] = source[key];
      }

      return target;
    }
  }]);

  return FormBase;
}();

exports.default = FormBase;
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=odd-form_object.js.map