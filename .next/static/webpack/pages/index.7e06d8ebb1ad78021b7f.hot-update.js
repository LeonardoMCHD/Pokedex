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
      src: PokemonInfo.sprites ? PokemonInfo.sprites : "https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(PokemonName, {
      children: pokemon.name ? pokemon.name : "unknown"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb2tlbW9uQ2FyZC5qcyJdLCJuYW1lcyI6WyJyZXF1aXJlIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUaWxlV3JhcHBlciIsInN0eWxlZCIsImRpdiIsIlBva2Vtb25OYW1lIiwiUG9rZW1vblRpbGUiLCJwb2tlbW9uIiwiUG9rZW1vbkluZm8iLCJzZXRQb2tlbW9uSW5mbyIsIkdldFBva2Vtb25EYXRhIiwidXJsIiwidGhlbiIsInN1Y2Nlc3MiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzcHJpdGVzIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQWdDQSxtQkFBTyxDQUFDLDRDQUFELEM7SUFBL0JDLFEsWUFBQUEsUTtJQUFVQyxTLFlBQUFBLFM7O0FBQ2xCO0FBQ0E7QUFFQSxJQUFNQyxXQUFXLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQWpCO0tBQU1GLFc7QUFnQkYsSUFBTUcsV0FBVyxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFqQjtNQUFNQyxXO0FBYWEsU0FBU0MsV0FBVCxPQUFrQztBQUFBOztBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVzs7QUFBQSxrQkFDUFAsUUFBUSxDQUFDLEVBQUQsQ0FERDtBQUFBO0FBQUEsTUFDdENRLFdBRHNDO0FBQUEsTUFDekJDLGNBRHlCOztBQUdqRFIsV0FBUyxDQUFDLFlBQU07QUFDWlMseUVBQWMsQ0FBQ0gsT0FBTyxDQUFDSSxHQUFULENBQWQsQ0FDQ0MsSUFERCxDQUNNLFVBQUVDLE9BQUYsRUFBZTtBQUNqQkosb0JBQWMsQ0FBQ0ksT0FBRCxDQUFkO0FBQ0gsS0FIRCxXQUlPLFVBQUNDLEtBQUQsRUFBVztBQUNkQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNILEtBTkQ7QUFPSCxHQVJRLEVBUU4sRUFSTSxDQUFUO0FBU0ksc0JBQ0kscUVBQUMsV0FBRDtBQUFBLDRCQUNJO0FBQUssU0FBRyxFQUFFTixXQUFXLENBQUNTLE9BQVosR0FBc0JULFdBQVcsQ0FBQ1MsT0FBbEMsR0FBNEM7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsV0FBRDtBQUFBLGdCQUFjVixPQUFPLENBQUNXLElBQVIsR0FBZVgsT0FBTyxDQUFDVyxJQUF2QixHQUE4QjtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFNSDs7R0FsQnVCWixXOztNQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjdlMDZkOGViYjFhZDc4MDIxYjdmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IHJlcXVpcmUoXCJyZWFjdFwiKVxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgR2V0UG9rZW1vbkRhdGEgZnJvbSBcIi4uL1V0aWxzL0dldFBva2Vtb25EYXRhXCI7XHJcblxyXG5jb25zdCBUaWxlV3JhcHBlciA9IHN0eWxlZC5kaXZgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6MTUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgfVxyXG4gICAgYDtcclxuXHJcbiAgICBjb25zdCBQb2tlbW9uTmFtZSA9IHN0eWxlZC5kaXZgXHJcbiAgICAgICAgYmFja2dyb3VuZDogZ3JheTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vblRpbGUoeyBwb2tlbW9uIH0pIHtcclxuICAgICAgICAgICAgY29uc3QgW1Bva2Vtb25JbmZvLCBzZXRQb2tlbW9uSW5mb10gPSB1c2VTdGF0ZSh7fSlcclxuXHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgR2V0UG9rZW1vbkRhdGEocG9rZW1vbi51cmwpXHJcbiAgICAgICAgICAgIC50aGVuKCggc3VjY2VzcyApID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFBva2Vtb25JbmZvKHN1Y2Nlc3MpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCBbXSlcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUaWxlV3JhcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17UG9rZW1vbkluZm8uc3ByaXRlcyA/IFBva2Vtb25JbmZvLnNwcml0ZXMgOiBcImh0dHBzOi8vcG5naW1nLmNvbS91cGxvYWRzL3Bva2ViYWxsL3Bva2ViYWxsX1BORzIxLnBuZ1wifSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQb2tlbW9uTmFtZT57cG9rZW1vbi5uYW1lID8gcG9rZW1vbi5uYW1lIDogXCJ1bmtub3duXCJ9PC9Qb2tlbW9uTmFtZT5cclxuICAgICAgICAgICAgICAgIDwvVGlsZVdyYXBwZXI+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==