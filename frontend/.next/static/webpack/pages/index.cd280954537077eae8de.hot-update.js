self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./lib/formatMoney.js":
/*!****************************!*\
  !*** ./lib/formatMoney.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormatMoney; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
function FormatMoney() {
  var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var options = {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  }; //check for clean dollar ammount

  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  var formatter = Intl.NumberFormat("de-DE", options);
  return formatter.format(amount / 100);
}
_c = FormatMoney;

var _c;

$RefreshReg$(_c, "FormatMoney");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2Zvcm1hdE1vbmV5LmpzIl0sIm5hbWVzIjpbIkZvcm1hdE1vbmV5IiwiYW1vdW50Iiwib3B0aW9ucyIsInN0eWxlIiwiY3VycmVuY3kiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJmb3JtYXR0ZXIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLFdBQVQsR0FBaUM7QUFBQSxNQUFaQyxNQUFZLHVFQUFILENBQUc7QUFDOUMsTUFBTUMsT0FBTyxHQUFHO0FBQ2RDLFNBQUssRUFBRSxVQURPO0FBRWRDLFlBQVEsRUFBRSxLQUZJO0FBR2RDLHlCQUFxQixFQUFFO0FBSFQsR0FBaEIsQ0FEOEMsQ0FPOUM7O0FBRUEsTUFBSUosTUFBTSxHQUFHLEdBQVQsS0FBaUIsQ0FBckIsRUFBd0I7QUFDdEJDLFdBQU8sQ0FBQ0cscUJBQVIsR0FBZ0MsQ0FBaEM7QUFDRDs7QUFFRCxNQUFNQyxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsWUFBTCxDQUFrQixPQUFsQixFQUEyQk4sT0FBM0IsQ0FBbEI7QUFFQSxTQUFPSSxTQUFTLENBQUNHLE1BQVYsQ0FBaUJSLE1BQU0sR0FBRyxHQUExQixDQUFQO0FBQ0Q7S0FoQnVCRCxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkMjgwOTU0NTM3MDc3ZWFlOGRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtYXRNb25leShhbW91bnQgPSAwKSB7XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcbiAgICBjdXJyZW5jeTogXCJVU0RcIixcbiAgICBtaW5pbXVtRnJhY3Rpb25EaWdpdHM6IDIsXG4gIH07XG5cbiAgLy9jaGVjayBmb3IgY2xlYW4gZG9sbGFyIGFtbW91bnRcblxuICBpZiAoYW1vdW50ICUgMTAwID09PSAwKSB7XG4gICAgb3B0aW9ucy5taW5pbXVtRnJhY3Rpb25EaWdpdHMgPSAwO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0dGVyID0gSW50bC5OdW1iZXJGb3JtYXQoXCJkZS1ERVwiLCBvcHRpb25zKTtcblxuICByZXR1cm4gZm9ybWF0dGVyLmZvcm1hdChhbW91bnQgLyAxMDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==