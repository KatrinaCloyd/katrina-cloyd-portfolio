/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/GIM.js":
/*!***************************!*\
  !*** ./components/GIM.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GIM; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/workDetail.module.css */ \"./styles/workDetail.module.css\");\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kmc/Alchemy/projects/katrina-cloyd-portfolio/components/GIM.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction GIM(_ref) {\n  _s();\n\n  var setPage = _ref.setPage,\n      project = _ref.project;\n  var currentProj = {\n    title: 'nothing'\n  };\n\n  var getProject = function getProject(prj) {\n    currentProj = _data_data__WEBPACK_IMPORTED_MODULE_2__.default.find(function (e) {\n      return e.id === prj;\n    });\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    getProject(project);\n    console.log(currentProj.title);\n  }, [currentProj]);\n  return (\n    /*#__PURE__*/\n    // <div>Hello</div>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n        children: currentProj.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this)\n  );\n}\n\n_s(GIM, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = GIM;\n\nvar _c;\n\n$RefreshReg$(_c, \"GIM\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HSU0uanM/MmZkOCJdLCJuYW1lcyI6WyJHSU0iLCJzZXRQYWdlIiwicHJvamVjdCIsImN1cnJlbnRQcm9qIiwidGl0bGUiLCJnZXRQcm9qZWN0IiwicHJqIiwid29yayIsImUiLCJpZCIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUU5QyxNQUFJQyxXQUFXLEdBQUc7QUFBRUMsU0FBSyxFQUFFO0FBQVQsR0FBbEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3hCSCxlQUFXLEdBQUdJLG9EQUFBLENBQVUsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTSCxHQUFiO0FBQUEsS0FBWCxDQUFkO0FBRUgsR0FIRDs7QUFLQUksa0RBQVMsQ0FBQyxZQUFNO0FBQ1pMLGNBQVUsQ0FBQ0gsT0FBRCxDQUFWO0FBQ0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVCxXQUFXLENBQUNDLEtBQXhCO0FBQ0gsR0FIUSxFQUdOLENBQUNELFdBQUQsQ0FITSxDQUFUO0FBS0E7QUFBQTtBQUNJO0FBQ0E7QUFBQSw2QkFDSTtBQUFJLGlCQUFTLEVBQUVVLDRFQUFmO0FBQUEsa0JBQThCVixXQUFXLENBQUNDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUF5Q0g7O0dBdkR1QkosRzs7S0FBQUEsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvR0lNLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd29ya0RldGFpbC5tb2R1bGUuY3NzJztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3b3JrIGZyb20gJy4uL2RhdGEvZGF0YSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHSU0oeyBzZXRQYWdlLCBwcm9qZWN0IH0pIHtcblxuICAgIGxldCBjdXJyZW50UHJvaiA9IHsgdGl0bGU6ICdub3RoaW5nJyB9O1xuXG4gICAgY29uc3QgZ2V0UHJvamVjdCA9IChwcmopID0+IHtcbiAgICAgICAgY3VycmVudFByb2ogPSB3b3JrLmZpbmQoZSA9PiBlLmlkID09PSBwcmopO1xuXG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZ2V0UHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFByb2oudGl0bGUpO1xuICAgIH0sIFtjdXJyZW50UHJval0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gPGRpdj5IZWxsbzwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y3VycmVudFByb2oudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZWNofT57Y3VycmVudFByb2oudGVjaH08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudFByb2ouZ2l0aHViICYmXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2N1cnJlbnRQcm9qLmdpdGh1Yn0gdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9Jy9naXQuc3ZnJyBhbHQ9J2dpdGh1YicgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPn1cbiAgICAgICAgICAgICAgICB7Y3VycmVudFByb2oubGl2ZVNpdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y3VycmVudFByb2oubGl2ZVNpdGV9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPScvc2l0ZS5zdmcnIGFsdD0nbGl2ZSBzaXRlJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai5ucG1MaW5rICYmXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2N1cnJlbnRQcm9qLm5wbUxpbmt9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPScvbnBtLnN2ZycgYWx0PSducG0nIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbW99XG4gICAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgICAgICBhdXRvcGxheVxuICAgICAgICAgICAgICAgIG11dGVkXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2N1cnJlbnRQcm9qLnZpZGVvfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICA8cD57Y3VycmVudFByb2ouYmx1cmIxfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsSW1nQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2UxfSBhbHQ9J3NjcmVlbnNob3QgMSBvZiBhcHAnIC8+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnRQcm9qLmltYWdlMn0gYWx0PSdzY3JlZW5zaG90IDIgb2YgYXBwJyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD57Y3VycmVudFByb2ouYmx1cmIyfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsSW1nQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2UzfSBhbHQ9J3NjcmVlbnNob3QgMyBvZiBhcHAnIC8+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnRQcm9qLmltYWdlNH0gYWx0PSdzY3JlZW5zaG90IDQgb2YgYXBwJyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD57Y3VycmVudFByb2ouYmx1cmIzfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFja0J0bn0gb25DbGljaz17KCkgPT4gc2V0UGFnZSgnZGV2Jyl9PkJBQ0sgVE8gREVWIFdPUks8L2J1dHRvbj4gKi99XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GIM.js\n");

/***/ })

});