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
      setSign = _useState[1]; // const onChange = setSign({currency: 'e.target.value'})


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9QcmljZXMuanMiXSwibmFtZXMiOlsiUHJpY2VzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImN1cnJlbmN5Iiwic2lnbiIsInNldFNpZ24iLCJsaXN0IiwiYnBpIiwiVVNEIiwiZGVzY3JpcHRpb24iLCJjb2RlIiwicmF0ZSIsIkdCUCIsIkVVUiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUM7QUFBQ0MsWUFBUSxFQUFFO0FBQVgsR0FBRCxDQURWO0FBQUEsTUFDZkMsSUFEZTtBQUFBLE1BQ1RDLE9BRFMsaUJBR3RCOzs7QUFFQSxNQUFJQyxJQUFJLEdBQUcsR0FBWDs7QUFFQSxNQUFHRixJQUFJLENBQUNELFFBQUwsS0FBa0IsS0FBckIsRUFBNEI7QUFDeEJHLFFBQUksZ0JBQUk7QUFBSSxlQUFTLEVBQUMsaUJBQWQ7QUFBQSxzQ0FDVUwsS0FBSyxDQUFDTSxHQUFOLENBQVVDLEdBQVYsQ0FBY0MsV0FEeEIsc0JBQ3VDO0FBQU0saUJBQVMsRUFBQyxxQkFBaEI7QUFBQSxrQkFDMUNSLEtBQUssQ0FBQ00sR0FBTixDQUFVQyxHQUFWLENBQWNFO0FBRDRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEdkMsb0JBR0E7QUFBQSxrQkFDSFQsS0FBSyxDQUFDTSxHQUFOLENBQVVDLEdBQVYsQ0FBY0c7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVI7QUFPSCxHQVJELE1BUU8sSUFBR1AsSUFBSSxDQUFDRCxRQUFMLEtBQWtCLEtBQXJCLEVBQTRCO0FBQy9CRyxRQUFJLGdCQUFJO0FBQUksZUFBUyxFQUFDLGlCQUFkO0FBQUEsc0NBQ1VMLEtBQUssQ0FBQ00sR0FBTixDQUFVSyxHQUFWLENBQWNILFdBRHhCLHNCQUN1QztBQUFNLGlCQUFTLEVBQUMscUJBQWhCO0FBQUEsa0JBQzFDUixLQUFLLENBQUNNLEdBQU4sQ0FBVUssR0FBVixDQUFjRjtBQUQ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRHZDLG9CQUdBO0FBQUEsa0JBQ0hULEtBQUssQ0FBQ00sR0FBTixDQUFVSyxHQUFWLENBQWNEO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFSO0FBT0gsR0FSTSxNQVFBLElBQUdQLElBQUksQ0FBQ0QsUUFBTCxLQUFrQixLQUFyQixFQUE0QjtBQUMvQkcsUUFBSSxnQkFBSTtBQUFJLGVBQVMsRUFBQyxpQkFBZDtBQUFBLHNDQUNVTCxLQUFLLENBQUNNLEdBQU4sQ0FBVU0sR0FBVixDQUFjSixXQUR4QixzQkFDdUM7QUFBTSxpQkFBUyxFQUFDLHFCQUFoQjtBQUFBLGtCQUMxQ1IsS0FBSyxDQUFDTSxHQUFOLENBQVVNLEdBQVYsQ0FBY0g7QUFENEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUR2QyxvQkFHQTtBQUFBLGtCQUNIVCxLQUFLLENBQUNNLEdBQU4sQ0FBVU0sR0FBVixDQUFjRjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUjtBQU9IOztBQUNELHNCQUNJO0FBQUEsNEJBQ0M7QUFBSSxlQUFTLEVBQUMsWUFBZDtBQUFBLGdCQUNHTDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxlQUlLO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWFILENBN0NEOztHQUFNTixNOztLQUFBQSxNO0FBOENTQSxxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZjYyODI4ZTU2YTA4NzlkZmZkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUHJpY2VzID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbc2lnbiwgc2V0U2lnbl0gPSB1c2VTdGF0ZSh7Y3VycmVuY3k6ICdVU0QnfSk7XHJcblxyXG4gICAgLy8gY29uc3Qgb25DaGFuZ2UgPSBzZXRTaWduKHtjdXJyZW5jeTogJ2UudGFyZ2V0LnZhbHVlJ30pXHJcblxyXG4gICAgbGV0IGxpc3QgPSBcIiBcIjtcclxuXHJcbiAgICBpZihzaWduLmN1cnJlbmN5ID09PSAnVVNEJykge1xyXG4gICAgICAgIGxpc3QgPSAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPlxyXG4gICAgICAgIEJpdGNvaW4gcmF0ZSBmb3Ige3Byb3BzLmJwaS5VU0QuZGVzY3JpcHRpb259IDogPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuYnBpLlVTRC5jb2RlfVxyXG4gICAgICAgIDwvc3Bhbj4gPHN0cm9uZz5cclxuICAgICAgICAgICAge3Byb3BzLmJwaS5VU0QucmF0ZX1cclxuICAgICAgICA8L3N0cm9uZz5cclxuICAgIDwvbGk+IFxyXG4gICAgfSBlbHNlIGlmKHNpZ24uY3VycmVuY3kgPT09ICdHQlAnKSB7XHJcbiAgICAgICAgbGlzdCA9ICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+XHJcbiAgICAgICAgQml0Y29pbiByYXRlIGZvciB7cHJvcHMuYnBpLkdCUC5kZXNjcmlwdGlvbn0gOiA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5icGkuR0JQLmNvZGV9XHJcbiAgICAgICAgPC9zcGFuPiA8c3Ryb25nPlxyXG4gICAgICAgICAgICB7cHJvcHMuYnBpLkdCUC5yYXRlfVxyXG4gICAgICAgIDwvc3Ryb25nPlxyXG4gICAgPC9saT4gXHJcbiAgICB9IGVsc2UgaWYoc2lnbi5jdXJyZW5jeSA9PT0gJ0VVUicpIHtcclxuICAgICAgICBsaXN0ID0gIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5cclxuICAgICAgICBCaXRjb2luIHJhdGUgZm9yIHtwcm9wcy5icGkuRVVSLmRlc2NyaXB0aW9ufSA6IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLXByaW1hcnlcIj5cclxuICAgICAgICAgICAge3Byb3BzLmJwaS5FVVIuY29kZX1cclxuICAgICAgICA8L3NwYW4+IDxzdHJvbmc+XHJcbiAgICAgICAgICAgIHtwcm9wcy5icGkuRVVSLnJhdGV9XHJcbiAgICAgICAgPC9zdHJvbmc+XHJcbiAgICA8L2xpPiBcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICB7bGlzdH1cclxuICAgICAgICAgICAgIDwvdWw+ICBcclxuICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICB7LyogPHNlbGVjdCBvbkNoYW5nZT17b25DaGFuZ2V9IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0RcIj5VU0Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRVVSXCI+RVVSPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkdCUFwiPkdCUDwvb3B0aW9uPiAgXHJcbiAgICAgICAgICAgICA8L3NlbGVjdD4gICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlcyJdLCJzb3VyY2VSb290IjoiIn0=