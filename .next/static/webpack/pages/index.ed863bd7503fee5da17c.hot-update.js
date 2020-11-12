webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/PokemonCard.js":
/*!***********************************!*\
  !*** ./Components/PokemonCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PokemonTile; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");



var _jsxFileName = "C:\\Github\\Pokedex\\Components\\PokemonCard.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        background: gray;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        color: #fff;\n        text-align: center;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background-color: white;\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    border: 2px solid gray;\n    width: 200px;\n    height: 200px;\n    padding: 50px;\n    img{\n        width:150px;\n        height:150px;\n    }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _require = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    useState = _require.useState,
    useEffect = _require.useEffect;


var TileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
_c = TileWrapper;
var PokemonName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
_c2 = PokemonName;
function PokemonTile(_ref) {
  _s();

  var pokemon = _ref.pokemon;
  useEffect(function () {
    console.log("opa");
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(TileWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      src: "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(PokemonName, {
      children: pokemon.name ? pokemon.name : "unknown"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 17
  }, this);
}

_s(PokemonTile, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c3 = PokemonTile;

var _c, _c2, _c3;

$RefreshReg$(_c, "TileWrapper");
$RefreshReg$(_c2, "PokemonName");
$RefreshReg$(_c3, "PokemonTile");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb2tlbW9uQ2FyZC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaWxlV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBva2Vtb25OYW1lIiwiUG9rZW1vblRpbGUiLCJwb2tlbW9uIiwiY29uc29sZSIsImxvZyIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFnQ0EsbUJBQU8sQ0FBQyw0Q0FBRCxDO0lBQS9CQyxRLFlBQUFBLFE7SUFBVUMsUyxZQUFBQSxTOztBQUNsQjtBQUVBLElBQU1DLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBakI7S0FBTUYsVztBQWlCRixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCO01BQU1DLFc7QUFVYSxTQUFTQyxXQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBRTdDTixXQUFTLENBQUMsWUFBTTtBQUNkTyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNJLHFFQUFDLFdBQUQ7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBRTtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLFdBQUQ7QUFBQSxnQkFBY0YsT0FBTyxDQUFDRyxJQUFSLEdBQWVILE9BQU8sQ0FBQ0csSUFBdkIsR0FBOEI7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0dBWnVCSixXOztNQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVkODYzYmQ3NTAzZmVlNWRhMTdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHJlcXVpcmUoXCJyZWFjdFwiKVxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgVGlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICB9XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IFBva2Vtb25OYW1lID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBcclxuICAgICAgICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uVGlsZSh7IHBva2Vtb24gfSkge1xyXG5cclxuICAgICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9wYVwiKSAgXHJcbiAgICAgICAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUaWxlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17XCJodHRwczovL3BuZ2ltZy5jb20vdXBsb2Fkcy9wb2tlYmFsbC9wb2tlYmFsbF9QTkcyMS5wbmdcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8UG9rZW1vbk5hbWU+e3Bva2Vtb24ubmFtZSA/IHBva2Vtb24ubmFtZSA6IFwidW5rbm93blwifTwvUG9rZW1vbk5hbWU+XHJcbiAgICAgICAgICAgICAgICA8L1RpbGVXcmFwcGVyPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=