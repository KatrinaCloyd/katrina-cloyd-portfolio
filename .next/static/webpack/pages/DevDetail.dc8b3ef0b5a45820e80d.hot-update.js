/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/DevDetail",{

/***/ "./pages/DevDetail.js":
/*!****************************!*\
  !*** ./pages/DevDetail.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DevDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/workDetail.module.css */ \"./styles/workDetail.module.css\");\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/kmc/Alchemy/projects/katrina-cloyd-portfolio/pages/DevDetail.js\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction DevDetail() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var project = router.query.id;\n  var currentProj = _data_data__WEBPACK_IMPORTED_MODULE_2__.default.find(function (e) {\n    return e.id === project;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [currentProj && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n        children: currentProj.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().tech),\n        children: currentProj.tech\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icons),\n        children: [currentProj.github && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().tool),\n            href: currentProj.github,\n            target: \"_blank\",\n            onMouseEnter: function onMouseEnter() {\n              return fadeInNote('Click to visit my GitHub page');\n            },\n            onMouseLeave: function onMouseLeave() {\n              return fadeOutNote('');\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n              src: \"/git.svg\",\n              alt: \"github\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 37\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().tooltiptext),\n              children: \"GitHub\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 37\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 33\n          }, this)\n        }, void 0, false), currentProj.liveSite && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().tool),\n          href: currentProj.liveSite,\n          target: \"_blank\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n            src: \"/site.svg\",\n            alt: \"live site\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 33\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().tooltiptext),\n            children: \"live site\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 32,\n            columnNumber: 33\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 29\n        }, this), currentProj.npmLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().tool),\n          href: currentProj.npmLink,\n          target: \"_blank\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n            src: \"/npm.svg\",\n            alt: \"npm\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 33\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().tooltiptext),\n            children: \"npm page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 37,\n            columnNumber: 33\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 29\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 21\n      }, this), currentProj.video && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().demo),\n        controls: true,\n        autoPlay: true,\n        muted: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n          src: currentProj.video,\n          type: \"video/mp4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 29\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 25\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().detailImgContainer),\n        children: [currentProj.image1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image1,\n          alt: \"screenshot 1 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 48\n        }, this), currentProj.image2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image2,\n          alt: \"screenshot 2 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 48\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().detailImgContainer),\n        children: [currentProj.image3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image3,\n          alt: \"screenshot 3 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 48\n        }, this), currentProj.image4 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image4,\n          alt: \"screenshot 4 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 48\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb3\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().backBtn),\n        onClick: function onClick() {\n          return router.push('/DevWork');\n        },\n        children: \"BACK TO DEV WORK\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 17\n    }, this), !currentProj && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [\" Hmmm.... something went wrong. \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 67\n      }, this), \" Please navigate back to the DEV WORK page and try again.\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 30\n    }, this)]\n  }, void 0, true);\n}\n\n_s(DevDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c = DevDetail;\n\nvar _c;\n\n$RefreshReg$(_c, \"DevDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV2RGV0YWlsLmpzP2IyNzAiXSwibmFtZXMiOlsiRGV2RGV0YWlsIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvamVjdCIsInF1ZXJ5IiwiaWQiLCJjdXJyZW50UHJvaiIsIndvcmsiLCJlIiwic3R5bGVzIiwidGl0bGUiLCJ0ZWNoIiwiZ2l0aHViIiwiZmFkZUluTm90ZSIsImZhZGVPdXROb3RlIiwibGl2ZVNpdGUiLCJucG1MaW5rIiwidmlkZW8iLCJibHVyYjEiLCJpbWFnZTEiLCJpbWFnZTIiLCJibHVyYjIiLCJpbWFnZTMiLCJpbWFnZTQiLCJibHVyYjMiLCJwdXNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQ2hDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdGLE1BQU0sQ0FBQ0csS0FBUCxDQUFhQyxFQUE3QjtBQUVBLE1BQUlDLFdBQVcsR0FBR0Msb0RBQUEsQ0FBVSxVQUFBQyxDQUFDO0FBQUEsV0FBSUEsQ0FBQyxDQUFDSCxFQUFGLEtBQVNGLE9BQWI7QUFBQSxHQUFYLENBQWxCO0FBRUEsc0JBQ0k7QUFBQSxlQUNLRyxXQUFXLGlCQUNSO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFFRyw0RUFBZjtBQUFBLGtCQUE4QkgsV0FBVyxDQUFDSTtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFHLGlCQUFTLEVBQUVELDJFQUFkO0FBQUEsa0JBQTRCSCxXQUFXLENBQUNLO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUssaUJBQVMsRUFBRUYsNEVBQWhCO0FBQUEsbUJBQ0tILFdBQVcsQ0FBQ00sTUFBWixpQkFDRztBQUFBLGlDQUNJO0FBQUcscUJBQVMsRUFBRUgsMkVBQWQ7QUFDSSxnQkFBSSxFQUFFSCxXQUFXLENB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QUFDaUIsTUFBWixpQkFBc0I7QUFBSyxhQUFHLEVBQUVqQixXQUFXLENBQUNpQixNQUF0QjtBQUE4QixhQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBekNKLGVBNkNJO0FBQUEsa0JBQUlqQixXQUFXLENBQUNrQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0NKLGVBOENJO0FBQVEsaUJBQVMsRUFBRWYsOEVBQW5CO0FBQW1DLGVBQU8sRUFBRTtBQUFBLGlCQUFNUixNQUFNLENBQUN3QixJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E5Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsRUFrREssQ0FBQ25CLFdBQUQsaUJBQWdCO0FBQUEsa0VBQXFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbERyQjtBQUFBLGtCQURKO0FBc0RIOztHQTVEdUJOLFM7VUFDTEUsa0Q7OztLQURLRixTIiwiZmlsZSI6Ii4vcGFnZXMvRGV2RGV0YWlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy93b3JrRGV0YWlsLm1vZHVsZS5jc3MnXG5pbXBvcnQgd29yayBmcm9tICcuLi9kYXRhL2RhdGEnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERldkRldGFpbCgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBwcm9qZWN0ID0gcm91dGVyLnF1ZXJ5LmlkO1xuXG4gICAgbGV0IGN1cnJlbnRQcm9qID0gd29yay5maW5kKGUgPT4gZS5pZCA9PT0gcHJvamVjdCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAge2N1cnJlbnRQcm9qICYmXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57Y3VycmVudFByb2oudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGVjaH0+e2N1cnJlbnRQcm9qLnRlY2h9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai5naXRodWIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50b29sfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Y3VycmVudFByb2ouZ2l0aHVifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PSdfYmxhbmsnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGZhZGVJbk5vdGUoJ0NsaWNrIHRvIHZpc2l0IG15IEdpdEh1YiBwYWdlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGZhZGVPdXROb3RlKCcnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz0nL2dpdC5zdmcnIGFsdD0nZ2l0aHViJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbHRpcHRleHR9PkdpdEh1Yjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai5saXZlU2l0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRvb2x9IGhyZWY9e2N1cnJlbnRQcm9qLmxpdmVTaXRlfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPScvc2l0ZS5zdmcnIGFsdD0nbGl2ZSBzaXRlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sdGlwdGV4dH0+bGl2ZSBzaXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFByb2oubnBtTGluayAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRvb2x9IGhyZWY9e2N1cnJlbnRQcm9qLm5wbUxpbmt9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9Jy9ucG0uc3ZnJyBhbHQ9J25wbScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbHRpcHRleHR9Pm5wbSBwYWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFByb2oudmlkZW8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2N1cnJlbnRQcm9qLnZpZGVvfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+fVxuICAgICAgICAgICAgICAgICAgICA8cD57Y3VycmVudFByb2ouYmx1cmIxfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxJbWdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmltYWdlMSAmJiA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2UxfSBhbHQ9J3NjcmVlbnNob3QgMSBvZiBhcHAnIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmltYWdlMiAmJiA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2UyfSBhbHQ9J3NjcmVlbnNob3QgMiBvZiBhcHAnIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRQcm9qLmJsdXJiMn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsSW1nQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai5pbWFnZTMgJiYgPGltZyBzcmM9e2N1cnJlbnRQcm9qLmltYWdlM30gYWx0PSdzY3JlZW5zaG90IDMgb2YgYXBwJyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai5pbWFnZTQgJiYgPGltZyBzcmM9e2N1cnJlbnRQcm9qLmltYWdlNH0gYWx0PSdzY3JlZW5zaG90IDQgb2YgYXBwJyAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPntjdXJyZW50UHJvai5ibHVyYjN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhY2tCdG59IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvRGV2V29yaycpfT5CQUNLIFRPIERFViBXT1JLPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgeyFjdXJyZW50UHJvaiAmJiA8ZGl2PiBIbW1tLi4uLiBzb21ldGhpbmcgd2VudCB3cm9uZy4gPGJyIC8+IFBsZWFzZSBuYXZpZ2F0ZSBiYWNrIHRvIHRoZSBERVYgV09SSyBwYWdlIGFuZCB0cnkgYWdhaW4uPC9kaXY+fVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DevDetail.js\n");

/***/ })

});