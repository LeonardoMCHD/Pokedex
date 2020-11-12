webpackHotUpdate_N_E("pages/index",{

/***/ "./Utils/ApiPokemons.js":
/*!******************************!*\
  !*** ./Utils/ApiPokemons.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListPokemon; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



function ListPokemon() {
  return _ListPokemon.apply(this, arguments);
}
_c2 = ListPokemon;

function _ListPokemon() {
  _ListPokemon = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://pokeapi.co/api/v2/pokemon?limit=40").then(function (res) {
                return resolve(res.data);
              })["catch"](function (error) {
                return reject(error);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ListPokemon.apply(this, arguments);
}

_c = ListPokemon;

var _c, _c2;

$RefreshReg$(_c, "ListPokemon");
$RefreshReg$(_c2, "ListPokemon");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vVXRpbHMvQXBpUG9rZW1vbnMuanMiXSwibmFtZXMiOlsiTGlzdFBva2Vtb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBZUEsV0FBOUI7QUFBQTtBQUFBO01BQThCQSxXOzs7a01BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUNKLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBb0I7QUFDbkNDLDBEQUFLLENBQ0hDLEdBREYsQ0FDTSw0Q0FETixFQUVFQyxJQUZGLENBRU8sVUFBQ0MsR0FBRDtBQUFBLHVCQUFTTCxPQUFPLENBQUNLLEdBQUcsQ0FBQ0MsSUFBTCxDQUFoQjtBQUFBLGVBRlAsV0FHUSxVQUFDQyxLQUFEO0FBQUEsdUJBQVdOLE1BQU0sQ0FBQ00sS0FBRCxDQUFqQjtBQUFBLGVBSFI7QUFJSCxhQUxNLENBREk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztLQUFlVCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjkzNDQ5MDBjMTQ2ZDk1MDYyNTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBMaXN0UG9rZW1vbigpe1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+e1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgIC5nZXQoXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24/bGltaXQ9NDBcIilcclxuICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzb2x2ZShyZXMuZGF0YSkpXHJcbiAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHJlamVjdChlcnJvcikpO1xyXG4gICAgfSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==