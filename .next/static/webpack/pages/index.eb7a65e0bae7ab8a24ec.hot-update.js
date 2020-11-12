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
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Utils_GetPokemonData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils/GetPokemonData */ "./Utils/GetPokemonData.js");




var _jsxFileName = "C:\\Github\\Pokedex\\Components\\PokemonCard.js",
    _s = $RefreshSig$();

function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        background: gray;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        color: #fff;\n        text-align: center;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    background-color: white;\n    padding: 15px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    border: 2px solid gray;\n    width: 200px;\n    height: 200px;\n    img{\n        width:150px;\n        height:150px;\n    }\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var _require = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    useState = _require.useState,
    useEffect = _require.useEffect;



var TileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
_c = TileWrapper;
var PokemonName = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
_c2 = PokemonName;

exports.handleError = function (error, cb) {
  if (cb) {
    cb('Pokedex-promise-v2 error', error);
  } else {
    throw error;
  }
};

function PokemonTile(_ref) {
  _s();

  var pokemon = _ref.pokemon;

  var _useState = useState({}),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      PokemonInfo = _useState2[0],
      setPokemonInfo = _useState2[1];

  useEffect(function () {
    Object(_Utils_GetPokemonData__WEBPACK_IMPORTED_MODULE_4__["default"])(pokemon.url).then(function (success) {
      setPokemonInfo(success);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(TileWrapper, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("img", {
      src: PokemonInfo.sprites ? PokemonInfo.sprites.fron_default : "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(PokemonName, {
      children: pokemon.name ? pokemon.name : "unknown"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 17
  }, this);
}

_s(PokemonTile, "Oxod4tCkvUy2nRPNaZl1LqsiKTE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb2tlbW9uQ2FyZC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaWxlV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBva2Vtb25OYW1lIiwiZXhwb3J0cyIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJjYiIsIlBva2Vtb25UaWxlIiwicG9rZW1vbiIsIlBva2Vtb25JbmZvIiwic2V0UG9rZW1vbkluZm8iLCJHZXRQb2tlbW9uRGF0YSIsInVybCIsInRoZW4iLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInNwcml0ZXMiLCJmcm9uX2RlZmF1bHQiLCJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFBZ0NBLG1CQUFPLENBQUMsNENBQUQsQztJQUEvQkMsUSxZQUFBQSxRO0lBQVVDLFMsWUFBQUEsUzs7QUFDbEI7QUFDQTtBQUVBLElBQU1DLFdBQVcsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBakI7S0FBTUYsVztBQWdCRixJQUFNRyxXQUFXLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCO01BQU1DLFc7O0FBU0ZDLE9BQU8sQ0FBQ0MsV0FBUixHQUFzQixVQUFVQyxLQUFWLEVBQWlCQyxFQUFqQixFQUFxQjtBQUN2QyxNQUFJQSxFQUFKLEVBQVE7QUFDSkEsTUFBRSxDQUFDLDBCQUFELEVBQTZCRCxLQUE3QixDQUFGO0FBQ0gsR0FGRCxNQUVPO0FBQ0gsVUFBTUEsS0FBTjtBQUNIO0FBQ0osQ0FORDs7QUFVZSxTQUFTRSxXQUFULE9BQWtDO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXOztBQUFBLGtCQUNQWCxRQUFRLENBQUMsRUFBRCxDQUREO0FBQUE7QUFBQSxNQUN0Q1ksV0FEc0M7QUFBQSxNQUN6QkMsY0FEeUI7O0FBR2pEWixXQUFTLENBQUMsWUFBTTtBQUNaYSx5RUFBYyxDQUFDSCxPQUFPLENBQUNJLEdBQVQsQ0FBZCxDQUNDQyxJQURELENBQ00sVUFBRUMsT0FBRixFQUFlO0FBQ2pCSixvQkFBYyxDQUFDSSxPQUFELENBQWQ7QUFDSCxLQUhELFdBSU8sVUFBQ1QsS0FBRCxFQUFXO0FBQ2RVLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWCxLQUFaO0FBQ0gsS0FORDtBQU9ILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFTSSxzQkFDSSxxRUFBQyxXQUFEO0FBQUEsNEJBQ0k7QUFBSyxTQUFHLEVBQUVJLFdBQVcsQ0FBQ1EsT0FBWixHQUFzQlIsV0FBVyxDQUFDUSxPQUFaLENBQW9CQyxZQUExQyxHQUF5RDtBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxXQUFEO0FBQUEsZ0JBQWNWLE9BQU8sQ0FBQ1csSUFBUixHQUFlWCxPQUFPLENBQUNXLElBQXZCLEdBQThCO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQU1IOztHQWxCdUJaLFc7O01BQUFBLFciLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWI3YTY1ZTBiYWU3YWI4YTI0ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9ID0gcmVxdWlyZShcInJlYWN0XCIpXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCBHZXRQb2tlbW9uRGF0YSBmcm9tIFwiLi4vVXRpbHMvR2V0UG9rZW1vbkRhdGFcIjtcclxuXHJcbmNvbnN0IFRpbGVXcmFwcGVyID0gc3R5bGVkLmRpdmBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICB9XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IFBva2Vtb25OYW1lID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYDtcclxuICAgICAgICBleHBvcnRzLmhhbmRsZUVycm9yID0gZnVuY3Rpb24gKGVycm9yLCBjYikge1xyXG4gICAgICAgICAgICBpZiAoY2IpIHtcclxuICAgICAgICAgICAgICAgIGNiKCdQb2tlZGV4LXByb21pc2UtdjIgZXJyb3InLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBva2Vtb25UaWxlKHsgcG9rZW1vbiB9KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtQb2tlbW9uSW5mbywgc2V0UG9rZW1vbkluZm9dID0gdXNlU3RhdGUoe30pXHJcblxyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIEdldFBva2Vtb25EYXRhKHBva2Vtb24udXJsKVxyXG4gICAgICAgICAgICAudGhlbigoIHN1Y2Nlc3MgKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQb2tlbW9uSW5mbyhzdWNjZXNzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgW10pXHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1Bva2Vtb25JbmZvLnNwcml0ZXMgPyBQb2tlbW9uSW5mby5zcHJpdGVzLmZyb25fZGVmYXVsdCA6IFwiaHR0cHM6Ly9wbmdpbWcuY29tL3VwbG9hZHMvcG9rZWJhbGwvcG9rZWJhbGxfUE5HMjEucG5nXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFBva2Vtb25OYW1lPntwb2tlbW9uLm5hbWUgPyBwb2tlbW9uLm5hbWUgOiBcInVua25vd25cIn08L1Bva2Vtb25OYW1lPlxyXG4gICAgICAgICAgICAgICAgPC9UaWxlV3JhcHBlcj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9