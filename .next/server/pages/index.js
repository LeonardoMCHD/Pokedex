module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/PokemonCard.js":
/*!***********************************!*\
  !*** ./Components/PokemonCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PokemonTile; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Utils_GetPokemonData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Utils/GetPokemonData */ "./Utils/GetPokemonData.js");

var _jsxFileName = "C:\\Github\\Pokedex\\Components\\PokemonCard.js";

const {
  useState,
  useEffect
} = __webpack_require__(/*! react */ "react");



const TileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
    background-color: white;
    padding: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 2px solid gray;
    width: 200px;
    height: 200px;
    margin: 15px;
    img{
        width:150px;
        height:150px;
    }
    `;
const PokemonName = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div`
        background: gray;
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        color: #fff;
        text-align: center;
        font-size: 20px;
        `;
function PokemonTile({
  pokemon
}) {
  const [PokemonInfo, setPokemonInfo] = useState({});
  useEffect(() => {
    Object(_Utils_GetPokemonData__WEBPACK_IMPORTED_MODULE_2__["default"])(pokemon.url).then(success => {
      setPokemonInfo(success);
    }).catch(error => {
      console.log(error);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TileWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: PokemonInfo.sprites ? PokemonInfo.sprites.front_default : "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PokemonName, {
      children: pokemon.name ? pokemon.name : "unknown"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 17
  }, this);
}

/***/ }),

/***/ "./Utils/ApiPokemons.js":
/*!******************************!*\
  !*** ./Utils/ApiPokemons.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListPokemon; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function ListPokemon() {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://pokeapi.co/api/v2/pokemon?limit=40").then(res => resolve(res.data)).catch(error => reject(error));
  });
}

/***/ }),

/***/ "./Utils/GetPokemonData.js":
/*!*********************************!*\
  !*** ./Utils/GetPokemonData.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GetPokemonData; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

async function GetPokemonData(url) {
  return new Promise((resolve, reject) => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(res => resolve(res.data)).catch(error => reject(error));
  });
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_PokemonCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/PokemonCard */ "./Components/PokemonCard.js");
/* harmony import */ var _Utils_ApiPokemons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/ApiPokemons */ "./Utils/ApiPokemons.js");

var _jsxFileName = "C:\\Github\\Pokedex\\pages\\index.js";




const GridWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  `;
function index() {
  const {
    0: ListaPokemon,
    1: setListaPokemon
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_Utils_ApiPokemons__WEBPACK_IMPORTED_MODULE_4__["default"])().then(success => {
      setListaPokemon(success.results);
      console.log("Deu Bom", success);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(GridWrapper, {
    children: ListaPokemon.map(pokemon => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_PokemonCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        pokemon: pokemon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 18
      }, this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9Qb2tlbW9uQ2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9VdGlscy9BcGlQb2tlbW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9VdGlscy9HZXRQb2tlbW9uRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWNvbXBvbmVudHNcIiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInJlcXVpcmUiLCJUaWxlV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBva2Vtb25OYW1lIiwiUG9rZW1vblRpbGUiLCJwb2tlbW9uIiwiUG9rZW1vbkluZm8iLCJzZXRQb2tlbW9uSW5mbyIsIkdldFBva2Vtb25EYXRhIiwidXJsIiwidGhlbiIsInN1Y2Nlc3MiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInNwcml0ZXMiLCJmcm9udF9kZWZhdWx0IiwibmFtZSIsIkxpc3RQb2tlbW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsImdldCIsInJlcyIsImRhdGEiLCJHcmlkV3JhcHBlciIsImluZGV4IiwiTGlzdGFQb2tlbW9uIiwic2V0TGlzdGFQb2tlbW9uIiwicmVzdWx0cyIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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Q0FHU0MsS0FBRCxJQUFXUyxNQUFNLENBQUNULEtBQUQsQ0FIekI7QUFJSCxHQUxNLENBQVA7QUFNSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1jLFdBQVcsR0FBRzFCLHdEQUFNLENBQUNDLEdBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUxBO0FBT2lCLFNBQVMwQixLQUFULEdBQWlCO0FBQzlCLFFBQU07QUFBQSxPQUFDQyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ2pDLHNEQUFRLENBQUMsRUFBRCxDQUFoRDtBQUdBQyx5REFBUyxDQUFDLE1BQU07QUFDZHFCLHNFQUFXLEdBQUdULElBQWQsQ0FBcUJDLE9BQUQsSUFBYTtBQUMvQm1CLHFCQUFlLENBQUNuQixPQUFPLENBQUNvQixPQUFULENBQWY7QUFDQWpCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJKLE9BQXZCO0FBQ0QsS0FIRDtBQUlELEdBTFEsRUFLTixFQUxNLENBQVQ7QUFPQSxzQkFDRSxxRUFBQyxXQUFEO0FBQUEsY0FDR2tCLFlBQVksQ0FBQ0csR0FBYixDQUFrQjNCLE9BQUQsSUFBYTtBQUM3QiwwQkFBTyxxRUFBQywrREFBRDtBQUFhLGVBQU8sRUFBRUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFQO0FBQ0QsS0FGQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFELEM7Ozs7Ozs7Ozs7O0FDL0JILGtDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiIsImNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ID0gcmVxdWlyZShcInJlYWN0XCIpXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBHZXRQb2tlbW9uRGF0YSBmcm9tIFwiLi4vVXRpbHMvR2V0UG9rZW1vbkRhdGFcIjtcclxuXHJcbmNvbnN0IFRpbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBQb2tlbW9uTmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb25UaWxlKHsgcG9rZW1vbiB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtQb2tlbW9uSW5mbywgc2V0UG9rZW1vbkluZm9dID0gdXNlU3RhdGUoe30pXHJcblxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEdldFBva2Vtb25EYXRhKHBva2Vtb24udXJsKVxyXG4gICAgICAgICAgICAudGhlbigoIHN1Y2Nlc3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQb2tlbW9uSW5mbyhzdWNjZXNzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRpbGVXcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtQb2tlbW9uSW5mby5zcHJpdGVzID8gUG9rZW1vbkluZm8uc3ByaXRlcy5mcm9udF9kZWZhdWx0IDogXCJodHRwczovL3BuZ2ltZy5jb20vdXBsb2Fkcy9wb2tlYmFsbC9wb2tlYmFsbF9QTkcyMS5wbmdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8UG9rZW1vbk5hbWU+e3Bva2Vtb24ubmFtZSA/IHBva2Vtb24ubmFtZSA6IFwidW5rbm93blwifTwvUG9rZW1vbk5hbWU+XHJcbiAgICAgICAgICAgICAgICA8L1RpbGVXcmFwcGVyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIExpc3RQb2tlbW9uKCl7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT57XHJcbiAgICAgICAgYXhpb3NcclxuICAgICAgICAgLmdldChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbj9saW1pdD00MFwiKVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiByZXNvbHZlKHJlcy5kYXRhKSlcclxuICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBHZXRQb2tlbW9uRGF0YSh1cmwpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+e1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgIC5nZXQodXJsKVxyXG4gICAgICAgICAudGhlbigocmVzKSA9PiByZXNvbHZlKHJlcy5kYXRhKSlcclxuICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gcmVqZWN0KGVycm9yKSk7XHJcbiAgICB9KTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgUG9rZW1vblRpbGUgZnJvbSBcIi4uL0NvbXBvbmVudHMvUG9rZW1vbkNhcmRcIjtcclxuaW1wb3J0IExpc3RQb2tlbW9uIGZyb20gXCIuLi9VdGlscy9BcGlQb2tlbW9uc1wiO1xyXG5cclxuY29uc3QgR3JpZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYDtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5kZXgoKSB7XHJcbiAgICBjb25zdCBbTGlzdGFQb2tlbW9uLCBzZXRMaXN0YVBva2Vtb25dID0gdXNlU3RhdGUoW10pXHJcbiAgICBcclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgTGlzdFBva2Vtb24oKS50aGVuKCAoc3VjY2VzcykgPT4ge1xyXG4gICAgICAgIHNldExpc3RhUG9rZW1vbihzdWNjZXNzLnJlc3VsdHMpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRGV1IEJvbVwiLCBzdWNjZXNzKTtcclxuICAgICAgfSlcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHcmlkV3JhcHBlcj5cclxuICAgICAgICB7TGlzdGFQb2tlbW9uLm1hcCgocG9rZW1vbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxQb2tlbW9uVGlsZSBwb2tlbW9uPXtwb2tlbW9ufSAvPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICAgIFxyXG4gICAgICA8L0dyaWRXcmFwcGVyPlxyXG4gICAgKTtcclxuICB9XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9