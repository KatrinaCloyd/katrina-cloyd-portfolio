/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/DevWork",{

/***/ "./pages/DevWork.js":
/*!**************************!*\
  !*** ./pages/DevWork.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DevWork; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/workList.module.css */ \"./styles/workList.module.css\");\n/* harmony import */ var _styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/kmc/Alchemy/projects/katrina-cloyd-portfolio/pages/DevWork.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction DevWork() {\n  _s();\n\n  var _this = this;\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3___default().list),\n    children: _data_data__WEBPACK_IMPORTED_MODULE_1__.default.map(function (e) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: (_styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3___default().projectTitle),\n          children: e.title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n          className: (_styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3___default().projectImage),\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: e.image1,\n            alt: \"screenshot of app\",\n            width: \"300\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 14,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3___default().projectInfo),\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [e.oneLiner, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n              children: e.note\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 40\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: e.tech\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3___default().icons),\n            children: [e.github && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              href: e.github,\n              target: \"_blank\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n                src: \"/git.svg\",\n                alt: \"github\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 22,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 21,\n              columnNumber: 33\n            }, _this), e.liveSite && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              href: e.liveSite,\n              target: \"_blank\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n                src: \"/site.svg\",\n                alt: \"live site\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 33\n            }, _this), e.npmLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              href: e.npmLink,\n              target: \"_blank\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_styles_workList_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n                src: \"/npm.svg\",\n                alt: \"npm\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 33\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: function onClick() {\n              return router.push(\"/DevDetail?id=\".concat(e.id));\n            },\n            children: \"MORE INFO\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, _this)]\n      }, e.title, true, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 9\n  }, this);\n}\n\n_s(DevWork, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = DevWork;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"DevWork\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV2V29yay5qcz9mNGJiIl0sIm5hbWVzIjpbIkRldldvcmsiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJ3b3JrIiwiZSIsInRpdGxlIiwiaW1hZ2UxIiwib25lTGluZXIiLCJub3RlIiwidGVjaCIsImdpdGh1YiIsImxpdmVTaXRlIiwibnBtTGluayIsInB1c2giLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxPQUFULEdBQW1CO0FBQUE7O0FBQUE7O0FBQzlCLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBRUMseUVBQWhCO0FBQUEsY0FDS0MsbURBQUEsQ0FBUyxVQUFBQyxDQUFDO0FBQUEsMEJBQ1A7QUFBSyxpQkFBUyxFQUFFRiw4RUFBaEI7QUFBQSxnQ0FDSTtBQUFJLG1CQUFTLEVBQUVBLGlGQUFmO0FBQUEsb0JBQXFDRSxDQUFDLENBQUNDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFRLG1CQUFTLEVBQUVILGlGQUFuQjtBQUFBLGlDQUNJO0FBQUssZUFBRyxFQUFFRSxDQUFDLENBQUNFLE1BQVo7QUFBb0IsZUFBRyxFQUFDLG1CQUF4QjtBQUE0QyxpQkFBSyxFQUFDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLGVBS0k7QUFBSyxtQkFBUyxFQUFFSixnRkFBaEI7QUFBQSxrQ0FDSTtBQUFBLHVCQUFJRSxDQUFDLENBQUNHLFFBQU4sZUFBZTtBQUFBLHdCQUFLSCxDQUFDLENBQUNJO0FBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFBLHNCQUFJSixDQUFDLENBQUNLO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSixlQUdJO0FBQUsscUJBQVMsRUFBRVAsMEVBQWhCO0FBQUEsdUJBQ0tFLENBQUMsQ0FBQ00sTUFBRixpQkFDRztBQUFHLGtCQUFJLEVBQUVOLENBQUMsQ0FBQ00sTUFBWDtBQUFtQixvQkFBTSxFQUFDLFFBQTFCO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFFUix5RUFBaEI7QUFBNkIsbUJBQUcsRUFBQyxVQUFqQztBQUE0QyxtQkFBRyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZSLEVBS0tFLENBQUMsQ0FBQ08sUUFBRixpQkFDRztBQUFHLGtCQUFJLEVBQUVQLENBQUMsQ0FBQ08sUUFBWDtBQUFxQixvQkFBTSxFQUFDLFFBQTVCO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFFVCx5RUFBaEI7QUFBNkIsbUJBQUcsRUFBQyxXQUFqQztBQUE2QyxtQkFBRyxFQUFDO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5SLEVBU0tFLENBQUMsQ0FBQ1EsT0FBRixpQkFDRztBQUFHLGtCQUFJLEVBQUVSLENBQUMsQ0FBQ1EsT0FBWDtBQUFvQixvQkFBTSxFQUFDLFFBQTNCO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFFVix5RUFBaEI7QUFBNkIsbUJBQUcsRUFBQyxVQUFqQztBQUE0QyxtQkFBRyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQWlCSTtBQUFRLG1CQUFPLEVBQUU7QUFBQSxxQkFBTUYsTUFBTSxDQUFDYSxJQUFQLHlCQUE2QlQsQ0FBQyxDQUFDVSxFQUEvQixFQUFOO0FBQUEsYUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSjtBQUFBLFNBQXVDVixDQUFDLENBQUNDLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETztBQUFBLEtBQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQ0g7O0dBbkN1Qk4sTztVQUNMRSxrRDs7O0tBREtGLE87QUFtQ3ZCIiwiZmlsZSI6Ii4vcGFnZXMvRGV2V29yay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dvcmtMaXN0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgd29yayBmcm9tICcuLi9kYXRhL2RhdGEnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV2V29yaygpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XG4gICAgICAgICAgICB7d29yay5tYXAoZSA9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSBrZXk9e2UudGl0bGV9PlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdFRpdGxlfT57ZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RJbWFnZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZS5pbWFnZTF9IGFsdD0nc2NyZWVuc2hvdCBvZiBhcHAnIHdpZHRoPSczMDAnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZmlndXJlID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0SW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZS5vbmVMaW5lcn08ZW0+e2Uubm90ZX08L2VtPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntlLnRlY2h9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2UuZ2l0aHViICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2UuZ2l0aHVifSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz0nL2dpdC5zdmcnIGFsdD0nZ2l0aHViJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLmxpdmVTaXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2UubGl2ZVNpdGV9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPScvc2l0ZS5zdmcnIGFsdD0nbGl2ZSBzaXRlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlLm5wbUxpbmsgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17ZS5ucG1MaW5rfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz0nL25wbS5zdmcnIGFsdD0nbnBtJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvRGV2RGV0YWlsP2lkPSR7ZS5pZH1gKX0+TU9SRSBJTkZPXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxidXR0b24gb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZShlLmlkKX0+TU9SRSBJTkZPICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2Pil9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DevWork.js\n");

/***/ })

});