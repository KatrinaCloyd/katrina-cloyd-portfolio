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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GIM; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/workDetail.module.css */ \"./styles/workDetail.module.css\");\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kmc/Alchemy/projects/katrina-cloyd-portfolio/components/GIM.js\";\n\n\n\nfunction GIM(_ref) {\n  var setPage = _ref.setPage,\n      project = _ref.project;\n  var currentProj = _data_data__WEBPACK_IMPORTED_MODULE_1__.default.find(function (e) {\n    return e.id === project;\n  });\n  return (\n    /*#__PURE__*/\n    // <div>Hello</div>\n    (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n        children: currentProj.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().tech),\n        children: currentProj.tech\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icons),\n        children: [currentProj.github && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: currentProj.github,\n          target: \"_blank\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n            src: \"/git.svg\",\n            alt: \"github\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 21\n        }, this), currentProj.liveSite && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: currentProj.liveSite,\n          target: \"_blank\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n            src: \"/site.svg\",\n            alt: \"live site\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 21\n        }, this), currentProj.npmLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          href: currentProj.npmLink,\n          target: \"_blank\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n            src: \"/npm.svg\",\n            alt: \"npm\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().demo),\n        controls: true,\n        autoplay: true,\n        muted: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n          src: currentProj.video,\n          type: \"video/mp4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().detailImgContainer),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image1,\n          alt: \"screenshot 1 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image2,\n          alt: \"screenshot 2 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().detailImgContainer),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image3,\n          alt: \"screenshot 3 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image4,\n          alt: \"screenshot 4 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb3\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 13\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().backBtn),\n        onClick: function onClick() {\n          return setPage('dev');\n        },\n        children: \"BACK TO DEV WORK\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 13\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }, this)\n  );\n}\n_c = GIM;\n\nvar _c;\n\n$RefreshReg$(_c, \"GIM\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HSU0uanM/MmZkOCJdLCJuYW1lcyI6WyJHSU0iLCJzZXRQYWdlIiwicHJvamVjdCIsImN1cnJlbnRQcm9qIiwid29yayIsImUiLCJpZCIsInN0eWxlcyIsInRpdGxlIiwidGVjaCIsImdpdGh1YiIsImxpdmVTaXRlIiwibnBtTGluayIsInZpZGVvIiwiYmx1cmIxIiwiaW1hZ2UxIiwiaW1hZ2UyIiwiYmx1cmIyIiwiaW1hZ2UzIiwiaW1hZ2U0IiwiYmx1cmIzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLEdBQVQsT0FBbUM7QUFBQSxNQUFwQkMsT0FBb0IsUUFBcEJBLE9BQW9CO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBRTlDLE1BQUlDLFdBQVcsR0FBR0Msb0RBQUEsQ0FBVSxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDQyxFQUFGLEtBQVNKLE9BQWI7QUFBQSxHQUFYLENBQWxCO0FBRUE7QUFBQTtBQUNJO0FBQ0E7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUVLLDRFQUFmO0FBQUEsa0JBQThCSixXQUFXLENBQUNLO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQUcsaUJBQVMsRUFBRUQsMkVBQWQ7QUFBQSxrQkFBNEJKLFdBQVcsQ0FBQ007QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBSyxpQkFBUyxFQUFFRiw0RUFBaEI7QUFBQSxtQkFDS0osV0FBVyxDQUFDTyxNQUFaLGlCQUNHO0FBQUcsY0FBSSxFQUFFUCxXQUFXLENBQUNPLE1BQXJCO0FBQTZCLGdCQUFNLEVBQUMsUUFBcEM7QUFBQSxpQ0FDSTtBQUFLLHFCQUFTLEVBQUVILDJFQUFoQjtBQUE2QixlQUFHLEVBQUMsVUFBakM7QUFBNEMsZUFBRyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZSLEVBS0tKLFdBQVcsQ0FBQ1EsUUFBWixpQkFDRztBQUFHLGNBQUksRUFBRVIsV0FBVyxDQUFDUSxRQUFyQjtBQUErQixnQkFBTSxFQUFDLFFBQXRDO0FBQUEsaUNBQ0k7QUFBSyxxQkFBUyxFQUFFSiwyRUFBaEI7QUFBNkIsZUFBRyxFQUFDLFdBQWpDO0FBQTZDLGVBQUcsRUFBQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFOUixFQVNLSixXQUFXLENBQUNTLE9BQVosaUJBQ0c7QUFBRyxjQUFJLEVBQUVULFdBQVcsQ0FBQ1MsT0FBckI7QUFBOEIsZ0JBQU0sRUFBQyxRQUFyQztBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBRUwsMkVBQWhCO0FBQTZCLGVBQUcsRUFBQyxVQUFqQztBQUE0QyxlQUFHLEVBQUM7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEosZUFpQkk7QUFDSSxpQkFBUyxFQUFFQSwyRUFEZjtBQUVJLGdCQUFRLE1BRlo7QUFHSSxnQkFBUSxNQUhaO0FBSUksYUFBSyxNQUpUO0FBQUEsK0JBTUk7QUFBUSxhQUFHLEVBQUVKLFdBQVcsQ0FBQ1UsS0FBekI7QUFBZ0MsY0FBSSxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakJKLGVBeUJJO0FBQUEsa0JBQUlWLFdBQVcsQ0FBQ1c7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXpCSixlQTBCSTtBQUFLLGlCQUFTLEVBQUVQLHlGQUFoQjtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFFSixXQUFXLENBQUNZLE1BQXRCO0FBQThCLGFBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxhQUFHLEVBQUVaLFdBQVcsQ0FBQ2EsTUFBdEI7QUFBOEIsYUFBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJKLGVBOEJJO0FBQUEsa0JBQUliLFdBQVcsQ0FBQ2M7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTlCSixlQStCSTtBQUFLLGlCQUFTLEVBQUVWLHlGQUFoQjtBQUFBLGdDQUNJO0FBQUssYUFBRyxFQUFFSixXQUFXLENBQUNlLE1BQXRCO0FBQThCLGFBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBSyxhQUFHLEVBQUVmLFdBQVcsQ0FBQ2dCLE1BQXRCO0FBQThCLGFBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CSixlQW1DSTtBQUFBLGtCQUFJaEIsV0FBVyxDQUFDaUI7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5DSixlQW9DSTtBQUFRLGlCQUFTLEVBQUViLDhFQUFuQjtBQUFtQyxlQUFPLEVBQUU7QUFBQSxpQkFBTU4sT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLFNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBeUNIO0tBN0N1QkQsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvR0lNLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd29ya0RldGFpbC5tb2R1bGUuY3NzJztcbmltcG9ydCB3b3JrIGZyb20gJy4uL2RhdGEvZGF0YSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHSU0oeyBzZXRQYWdlLCBwcm9qZWN0IH0pIHtcblxuICAgIGxldCBjdXJyZW50UHJvaiA9IHdvcmsuZmluZChlID0+IGUuaWQgPT09IHByb2plY3QpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgLy8gPGRpdj5IZWxsbzwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y3VycmVudFByb2oudGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRlY2h9PntjdXJyZW50UHJvai50ZWNofTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai5naXRodWIgJiZcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y3VycmVudFByb2ouZ2l0aHVifSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz0nL2dpdC5zdmcnIGFsdD0nZ2l0aHViJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai5saXZlU2l0ZSAmJlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjdXJyZW50UHJvai5saXZlU2l0ZX0gdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9Jy9zaXRlLnN2ZycgYWx0PSdsaXZlIHNpdGUnIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLm5wbUxpbmsgJiZcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17Y3VycmVudFByb2oubnBtTGlua30gdGFyZ2V0PSdfYmxhbmsnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9Jy9ucG0uc3ZnJyBhbHQ9J25wbScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVtb31cbiAgICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICAgIGF1dG9wbGF5XG4gICAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17Y3VycmVudFByb2oudmlkZW99IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgIDxwPntjdXJyZW50UHJvai5ibHVyYjF9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxJbWdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50UHJvai5pbWFnZTF9IGFsdD0nc2NyZWVuc2hvdCAxIG9mIGFwcCcgLz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2UyfSBhbHQ9J3NjcmVlbnNob3QgMiBvZiBhcHAnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPntjdXJyZW50UHJvai5ibHVyYjJ9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxJbWdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50UHJvai5pbWFnZTN9IGFsdD0nc2NyZWVuc2hvdCAzIG9mIGFwcCcgLz5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2U0fSBhbHQ9J3NjcmVlbnNob3QgNCBvZiBhcHAnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPntjdXJyZW50UHJvai5ibHVyYjN9PC9wPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrQnRufSBvbkNsaWNrPXsoKSA9PiBzZXRQYWdlKCdkZXYnKX0+QkFDSyBUTyBERVYgV09SSzwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/GIM.js\n");

/***/ })

});