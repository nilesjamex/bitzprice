webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/Prices.js":
/*!******************************!*\
  !*** ./Components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\User\\Desktop\\nextjs\\Components\\Prices.js",
    _this = undefined,
    _s = $RefreshSig$();



var Prices = function Prices(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    currency: 'USD'
  }),
      sign = _useState[0],
      setSign = _useState[1];

  var onChange = setState({
    currency: 'e.target.value'
  });
  var list = " ";

  if (sign.currency === 'USD') {
    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "list-group-item",
      children: ["Bitcoin rate for ", props.bpi.USD.description, " : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "badge badge-primary",
        children: props.bpi.USD.code
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 56
      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: props.bpi.USD.rate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, _this);
  } else if (sign.currency === 'GBP') {
    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "list-group-item",
      children: ["Bitcoin rate for ", props.bpi.GBP.description, " : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "badge badge-primary",
        children: props.bpi.GBP.code
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 56
      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: props.bpi.GBP.rate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }, _this);
  } else if (sign.currency === 'EUR') {
    list = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: "list-group-item",
      children: ["Bitcoin rate for ", props.bpi.EUR.description, " : ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "badge badge-primary",
        children: props.bpi.EUR.code
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 56
      }, _this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
        children: props.bpi.EUR.rate
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      className: "list-group",
      children: list
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 14
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("select", {
      onChange: onChange,
      className: "form-control",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: "USD",
        children: "USD"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: "EUR",
        children: "EUR"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
        value: "GBP",
        children: "GBP"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 14
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, _this);
};

_s(Prices, "UtjJr/+5vusLYENyl2ieDAkzNU4=");

_c = Prices;
/* harmony default export */ __webpack_exports__["default"] = (Prices);

var _c;

$RefreshReg$(_c, "Prices");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImN1cnJlbmN5Iiwic2lnbiIsInNldFNpZ24iLCJvbkNoYW5nZSIsInNldFN0YXRlIiwibGlzdCIsImJwaSIsIlVTRCIsImRlc2NyaXB0aW9uIiwiY29kZSIsInJhdGUiLCJHQlAiLCJFVVIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNFQyxzREFBUSxDQUFDO0FBQUNDLFlBQVEsRUFBRTtBQUFYLEdBQUQsQ0FEVjtBQUFBLE1BQ2ZDLElBRGU7QUFBQSxNQUNUQyxPQURTOztBQUd0QixNQUFNQyxRQUFRLEdBQUdDLFFBQVEsQ0FBQztBQUFDSixZQUFRLEVBQUU7QUFBWCxHQUFELENBQXpCO0FBRUEsTUFBSUssSUFBSSxHQUFHLEdBQVg7O0FBRUEsTUFBR0osSUFBSSxDQUFDRCxRQUFMLEtBQWtCLEtBQXJCLEVBQTRCO0FBQ3hCSyxRQUFJLGdCQUFJO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsc0NBQ1VQLEtBQUssQ0FBQ1EsR0FBTixDQUFVQyxHQUFWLENBQWNDLFdBRHhCLHNCQUN1QztBQUFNLGlCQUFTLEVBQUMscUJBQWhCO0FBQUEsa0JBQzFDVixLQUFLLENBQUNRLEdBQU4sQ0FBVUMsR0FBVixDQUFjRTtBQUQ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHZDLG9CQUdBO0FBQUEsa0JBQ0hYLEtBQUssQ0FBQ1EsR0FBTixDQUFVQyxHQUFWLENBQWNHO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBT0gsR0FSRCxNQVFPLElBQUdULElBQUksQ0FBQ0QsUUFBTCxLQUFrQixLQUFyQixFQUE0QjtBQUMvQkssUUFBSSxnQkFBSTtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBLHNDQUNVUCxLQUFLLENBQUNRLEdBQU4sQ0FBVUssR0FBVixDQUFjSCxXQUR4QixzQkFDdUM7QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBLGtCQUMxQ1YsS0FBSyxDQUFDUSxHQUFOLENBQVVLLEdBQVYsQ0FBY0Y7QUFENEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR2QyxvQkFHQTtBQUFBLGtCQUNIWCxLQUFLLENBQUNRLEdBQU4sQ0FBVUssR0FBVixDQUFjRDtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUjtBQU9ILEdBUk0sTUFRQSxJQUFHVCxJQUFJLENBQUNELFFBQUwsS0FBa0IsS0FBckIsRUFBNEI7QUFDL0JLLFFBQUksZ0JBQUk7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQSxzQ0FDVVAsS0FBSyxDQUFDUSxHQUFOLENBQVVNLEdBQVYsQ0FBY0osV0FEeEIsc0JBQ3VDO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxrQkFDMUNWLEtBQUssQ0FBQ1EsR0FBTixDQUFVTSxHQUFWLENBQWNIO0FBRDRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEdkMsb0JBR0E7QUFBQSxrQkFDSFgsS0FBSyxDQUFDUSxHQUFOLENBQVVNLEdBQVYsQ0FBY0Y7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFPSDs7QUFDRCxzQkFDSTtBQUFBLDRCQUNDO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQSxnQkFDR0w7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFJSztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkwsZUFLSztBQUFRLGNBQVEsRUFBRUYsUUFBbEI7QUFBNEIsZUFBUyxFQUFDLGNBQXRDO0FBQUEsOEJBQ0M7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURELGVBRUM7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZELGVBR0M7QUFBUSxhQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBYUgsQ0E3Q0Q7O0dBQU1OLE07O0tBQUFBLE07QUE4Q1NBLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUyMGRjMjAyMDViMDA1MzUwYjRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcblxyXG5jb25zdCBQcmljZXMgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtzaWduLCBzZXRTaWduXSA9IHVzZVN0YXRlKHtjdXJyZW5jeTogJ1VTRCd9KTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IHNldFN0YXRlKHtjdXJyZW5jeTogJ2UudGFyZ2V0LnZhbHVlJ30pXHJcblxyXG4gICAgbGV0IGxpc3QgPSBcIiBcIjtcclxuXHJcbiAgICBpZihzaWduLmN1cnJlbmN5ID09PSAnVVNEJykge1xyXG4gICAgICAgIGxpc3QgPSAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3Byb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259IDogPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuYnBpLlVTRC5jb2RlfVxyXG4gICAgICAgIDwvc3Bhbj4gPHN0cm9uZz5cclxuICAgICAgICAgICAge3Byb3BzLmJwaS5VU0QucmF0ZX1cclxuICAgICAgICA8L3N0cm9uZz5cclxuICAgIDwvbGk+IFxyXG4gICAgfSBlbHNlIGlmKHNpZ24uY3VycmVuY3kgPT09ICdHQlAnKSB7XHJcbiAgICAgICAgbGlzdCA9ICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgQml0Y29pbiByYXRlIGZvciB7cHJvcHMuYnBpLkdCUC5kZXNjcmlwdGlvbn0gOiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5icGkuR0JQLmNvZGV9XHJcbiAgICAgICAgPC9zcGFuPiA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cHJvcHMuYnBpLkdCUC5yYXRlfVxyXG4gICAgICAgIDwvc3Ryb25nPlxyXG4gICAgPC9saT4gXHJcbiAgICB9IGVsc2UgaWYoc2lnbi5jdXJyZW5jeSA9PT0gJ0VVUicpIHtcclxuICAgICAgICBsaXN0ID0gIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHtwcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9ufSA6IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5cclxuICAgICAgICAgICAge3Byb3BzLmJwaS5FVVIuY29kZX1cclxuICAgICAgICA8L3NwYW4+IDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwcm9wcy5icGkuRVVSLnJhdGV9XHJcbiAgICAgICAgPC9zdHJvbmc+XHJcbiAgICA8L2xpPiBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgIDwvdWw+ICBcclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICA8c2VsZWN0IG9uQ2hhbmdlPXtvbkNoYW5nZX0gY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlVTRFwiPlVTRDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJFVVJcIj5FVVI8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiR0JQXCI+R0JQPC9vcHRpb24+ICBcclxuICAgICAgICAgICAgIDwvc2VsZWN0PiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcmljZXMiXSwic291cmNlUm9vdCI6IiJ9