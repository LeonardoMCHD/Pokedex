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
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n        background: gray;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        bottom: 0;\n        color: #fff;\n        text-align: center;\n        font-size: 20px;\n        "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    background-color: white;\n    padding: 15px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    border: 2px solid gray;\n    width: 200px;\n    height: 200px;\n    margin: 15px;\n    img{\n        width:150px;\n        height:150px;\n    }\n    "]);

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
      src: PokemonInfo.sprites ? PokemonInfo.sprites.front_default : "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(PokemonName, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb2tlbW9uQ2FyZC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaWxlV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBva2Vtb25OYW1lIiwiUG9rZW1vblRpbGUiLCJwb2tlbW9uIiwiUG9rZW1vbkluZm8iLCJzZXRQb2tlbW9uSW5mbyIsIkdldFBva2Vtb25EYXRhIiwidXJsIiwidGhlbiIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzcHJpdGVzIiwiZnJvbnRfZGVmYXVsdCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUFnQ0EsbUJBQU8sQ0FBQyw0Q0FBRCxDO0lBQS9CQyxRLFlBQUFBLFE7SUFBVUMsUyxZQUFBQSxTOztBQUNsQjtBQUNBO0FBRUEsSUFBTUMsV0FBVyxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFqQjtLQUFNRixXO0FBaUJGLElBQU1HLFdBQVcsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBakI7TUFBTUMsVztBQWNhLFNBQVNDLFdBQVQsT0FBa0M7QUFBQTs7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQUEsa0JBQ1BQLFFBQVEsQ0FBQyxFQUFELENBREQ7QUFBQTtBQUFBLE1BQ3RDUSxXQURzQztBQUFBLE1BQ3pCQyxjQUR5Qjs7QUFHakRSLFdBQVMsQ0FBQyxZQUFNO0FBQ1pTLHlFQUFjLENBQUNILE9BQU8sQ0FBQ0ksR0FBVCxDQUFkLENBQ0NDLElBREQsQ0FDTSxVQUFFQyxPQUFGLEVBQWU7QUFDakJKLG9CQUFjLENBQUNJLE9BQUQsQ0FBZDtBQUNILEtBSEQsV0FJTyxVQUFDQyxLQUFELEVBQVc7QUFDZEMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVo7QUFDSCxLQU5EO0FBT0gsR0FSUSxFQVFOLEVBUk0sQ0FBVDtBQVNJLHNCQUNJLHFFQUFDLFdBQUQ7QUFBQSw0QkFDSTtBQUFLLFNBQUcsRUFBRU4sV0FBVyxDQUFDUyxPQUFaLEdBQXNCVCxXQUFXLENBQUNTLE9BQVosQ0FBb0JDLGFBQTFDLEdBQTBEO0FBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLFdBQUQ7QUFBQSxnQkFBY1gsT0FBTyxDQUFDWSxJQUFSLEdBQWVaLE9BQU8sQ0FBQ1ksSUFBdkIsR0FBOEI7QUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBTUg7O0dBbEJ1QmIsVzs7TUFBQUEsVyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMWFhZWUzMmM4YjczODgxOTFkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gPSByZXF1aXJlKFwicmVhY3RcIilcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IEdldFBva2Vtb25EYXRhIGZyb20gXCIuLi9VdGlscy9HZXRQb2tlbW9uRGF0YVwiO1xyXG5cclxuY29uc3QgVGlsZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGltZ3tcclxuICAgICAgICB3aWR0aDoxNTBweDtcclxuICAgICAgICBoZWlnaHQ6MTUwcHg7XHJcbiAgICB9XHJcbiAgICBgO1xyXG5cclxuICAgIGNvbnN0IFBva2Vtb25OYW1lID0gc3R5bGVkLmRpdmBcclxuICAgICAgICBiYWNrZ3JvdW5kOiBncmF5O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vblRpbGUoeyBwb2tlbW9uIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgW1Bva2Vtb25JbmZvLCBzZXRQb2tlbW9uSW5mb10gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgR2V0UG9rZW1vbkRhdGEocG9rZW1vbi51cmwpXHJcbiAgICAgICAgICAgIC50aGVuKCggc3VjY2VzcyApID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFBva2Vtb25JbmZvKHN1Y2Nlc3MpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e1Bva2Vtb25JbmZvLnNwcml0ZXMgPyBQb2tlbW9uSW5mby5zcHJpdGVzLmZyb250X2RlZmF1bHQgOiBcImh0dHBzOi8vcG5naW1nLmNvbS91cGxvYWRzL3Bva2ViYWxsL3Bva2ViYWxsX1BORzIxLnBuZ1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb2tlbW9uTmFtZT57cG9rZW1vbi5uYW1lID8gcG9rZW1vbi5uYW1lIDogXCJ1bmtub3duXCJ9PC9Qb2tlbW9uTmFtZT5cclxuICAgICAgICAgICAgICAgIDwvVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==