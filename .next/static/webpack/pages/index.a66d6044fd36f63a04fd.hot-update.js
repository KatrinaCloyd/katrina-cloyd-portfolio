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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GIM; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/workDetail.module.css */ \"./styles/workDetail.module.css\");\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kmc/Alchemy/projects/katrina-cloyd-portfolio/components/GIM.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction GIM(_ref) {\n  _s();\n\n  var setPage = _ref.setPage,\n      project = _ref.project;\n  var currentProj = {};\n\n  var getProject = function getProject(prj) {\n    currentProj = _data_data__WEBPACK_IMPORTED_MODULE_2__.default.find(function (e) {\n      return e.id === prj;\n    });\n    console.log(currentProj);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    getProject(project);\n    console.log(currentProj.title);\n  }, []);\n  return (\n    /*#__PURE__*/\n    // <div>Hello</div>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n        children: \"booger\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }, this)\n  );\n}\n\n_s(GIM, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = GIM;\n\nvar _c;\n\n$RefreshReg$(_c, \"GIM\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HSU0uanM/MmZkOCJdLCJuYW1lcyI6WyJHSU0iLCJzZXRQYWdlIiwicHJvamVjdCIsImN1cnJlbnRQcm9qIiwiZ2V0UHJvamVjdCIsInByaiIsIndvcmsiLCJlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwidGl0bGUiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxHQUFULE9BQW1DO0FBQUE7O0FBQUEsTUFBcEJDLE9BQW9CLFFBQXBCQSxPQUFvQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUU5QyxNQUFJQyxXQUFXLEdBQUcsRUFBbEI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsR0FBRCxFQUFTO0FBQ3hCRixlQUFXLEdBQUdHLG9EQUFBLENBQVUsVUFBQUMsQ0FBQztBQUFBLGFBQUlBLENBQUMsQ0FBQ0MsRUFBRixLQUFTSCxHQUFiO0FBQUEsS0FBWCxDQUFkO0FBQ0FJLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxXQUFaO0FBRUgsR0FKRDs7QUFNQVEsa0RBQVMsQ0FBQyxZQUFNO0FBQ1pQLGNBQVUsQ0FBQ0YsT0FBRCxDQUFWO0FBQ0FPLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxXQUFXLENBQUNTLEtBQXhCO0FBQ0gsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBO0FBQUE7QUFDSTtBQUNBO0FBQUEsNkJBQ0k7QUFBSSxpQkFBUyxFQUFFQyw0RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQXlDSDs7R0F4RHVCYixHOztLQUFBQSxHIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9HSU0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy93b3JrRGV0YWlsLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdvcmsgZnJvbSAnLi4vZGF0YS9kYXRhJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdJTSh7IHNldFBhZ2UsIHByb2plY3QgfSkge1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qID0ge307XG5cbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByaikgPT4ge1xuICAgICAgICBjdXJyZW50UHJvaiA9IHdvcmsuZmluZChlID0+IGUuaWQgPT09IHByaik7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qKTtcblxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGdldFByb2plY3QocHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qLnRpdGxlKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyA8ZGl2PkhlbGxvPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PmJvb2dlcjwvaDI+XG4gICAgICAgICAgICB7LyogPHAgY2xhc3NOYW1lPXtzdHlsZXMudGVjaH0+e2N1cnJlbnRQcm9qLnRlY2h9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XG4gICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmdpdGh1YiAmJlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjdXJyZW50UHJvai5naXRodWJ9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPScvZ2l0LnN2ZycgYWx0PSdnaXRodWInIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmxpdmVTaXRlICYmXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2N1cnJlbnRQcm9qLmxpdmVTaXRlfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz0nL3NpdGUuc3ZnJyBhbHQ9J2xpdmUgc2l0ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPn1cbiAgICAgICAgICAgICAgICB7Y3VycmVudFByb2oubnBtTGluayAmJlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjdXJyZW50UHJvai5ucG1MaW5rfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz0nL25wbS5zdmcnIGFsdD0nbnBtJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kZW1vfVxuICAgICAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlcbiAgICAgICAgICAgICAgICBtdXRlZFxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtjdXJyZW50UHJvai52aWRlb30gdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRQcm9qLmJsdXJiMX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbEltZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnRQcm9qLmltYWdlMX0gYWx0PSdzY3JlZW5zaG90IDEgb2YgYXBwJyAvPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50UHJvai5pbWFnZTJ9IGFsdD0nc2NyZWVuc2hvdCAyIG9mIGFwcCcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRQcm9qLmJsdXJiMn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbEltZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2N1cnJlbnRQcm9qLmltYWdlM30gYWx0PSdzY3JlZW5zaG90IDMgb2YgYXBwJyAvPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50UHJvai5pbWFnZTR9IGFsdD0nc2NyZWVuc2hvdCA0IG9mIGFwcCcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+e2N1cnJlbnRQcm9qLmJsdXJiM308L3A+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhY2tCdG59IG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoJ2RldicpfT5CQUNLIFRPIERFViBXT1JLPC9idXR0b24+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GIM.js\n");

/***/ })

});