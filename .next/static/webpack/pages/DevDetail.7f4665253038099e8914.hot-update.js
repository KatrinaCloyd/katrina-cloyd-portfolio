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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DevDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kmc_Alchemy_projects_katrina_cloyd_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/workDetail.module.css */ \"./styles/workDetail.module.css\");\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/kmc/Alchemy/projects/katrina-cloyd-portfolio/pages/DevDetail.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_kmc_Alchemy_projects_katrina_cloyd_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction DevDetail() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    'github': '0',\n    'live': '0',\n    'npm': '0'\n  }),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  var fadeInNote = function fadeInNote(icon) {\n    setTimeout(function () {\n      setShow(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, (0,_Users_kmc_Alchemy_projects_katrina_cloyd_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, icon, '.8'));\n      });\n    }, 500);\n  };\n\n  var fadeOutNote = function fadeOutNote(icon) {\n    setTimeout(function () {\n      setShow(function (prev) {\n        return _objectSpread(_objectSpread({}, prev), {}, (0,_Users_kmc_Alchemy_projects_katrina_cloyd_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, icon, '0'));\n      });\n    }, 20);\n  };\n\n  var project = router.query.id;\n  var currentProj = _data_data__WEBPACK_IMPORTED_MODULE_4__.default.find(function (e) {\n    return e.id === project;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [currentProj && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n        children: currentProj.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tech),\n        children: currentProj.tech\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().icons),\n        children: [currentProj.github && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tool),\n            href: currentProj.github,\n            target: \"_blank\",\n            onMouseEnter: function onMouseEnter() {\n              return fadeInNote('github');\n            },\n            onMouseLeave: function onMouseLeave() {\n              return fadeOutNote('github');\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n              src: \"/git.svg\",\n              alt: \"github\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 37\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tooltiptext),\n              style: {\n                opacity: show.github\n              },\n              children: \"GitHub\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 37\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 33\n          }, this)\n        }, void 0, false), currentProj.liveSite && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tool),\n          href: currentProj.liveSite,\n          target: \"_blank\",\n          onMouseEnter: function onMouseEnter() {\n            return fadeInNote('live');\n          },\n          onMouseLeave: function onMouseLeave() {\n            return fadeOutNote('live');\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n            src: \"/site.svg\",\n            alt: \"live site\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 33\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tooltiptext),\n            children: \"live site\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 33\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 29\n        }, this), currentProj.npmLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tool),\n          href: currentProj.npmLink,\n          target: \"_blank\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n            src: \"/npm.svg\",\n            alt: \"npm\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 33\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tooltiptext),\n            children: \"npm page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 33\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 29\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }, this), currentProj.video && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().demo),\n        controls: true,\n        autoPlay: true,\n        muted: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n          src: currentProj.video,\n          type: \"video/mp4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 29\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 25\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().detailImgContainer),\n        children: [currentProj.image1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image1,\n          alt: \"screenshot 1 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 48\n        }, this), currentProj.image2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image2,\n          alt: \"screenshot 2 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 48\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().detailImgContainer),\n        children: [currentProj.image3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image3,\n          alt: \"screenshot 3 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 48\n        }, this), currentProj.image4 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image4,\n          alt: \"screenshot 4 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 48\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb3\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().backBtn),\n        onClick: function onClick() {\n          return router.push('/DevWork');\n        },\n        children: \"BACK TO DEV WORK\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }, this), !currentProj && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [\" Hmmm.... something went wrong. \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 67\n      }, this), \" Please navigate back to the DEV WORK page and try again.\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 30\n    }, this)]\n  }, void 0, true);\n}\n\n_s(DevDetail, \"hv/cAMI7fR2k6DkZaIsH2QZNpD0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = DevDetail;\n\nvar _c;\n\n$RefreshReg$(_c, \"DevDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV2RGV0YWlsLmpzP2IyNzAiXSwibmFtZXMiOlsiRGV2RGV0YWlsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImZhZGVJbk5vdGUiLCJpY29uIiwic2V0VGltZW91dCIsInByZXYiLCJmYWRlT3V0Tm90ZSIsInByb2plY3QiLCJxdWVyeSIsImlkIiwiY3VycmVudFByb2oiLCJ3b3JrIiwiZSIsInN0eWxlcyIsInRpdGxlIiwidGVjaCIsImdpdGh1YiIsIm9wYWNpdHkiLCJsaXZlU2l0ZSIsIm5wbUxpbmsiLCJ2aWRlbyIsImJsdXJiMSIsImltYWdlMSIsImltYWdlMiIsImJsdXJiMiIsImltYWdlMyIsImltYWdlNCIsImJsdXJiMyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQ2hDLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7O0FBRGdDLGtCQUVSQywrQ0FBUSxDQUFDO0FBQzdCLGNBQVUsR0FEbUI7QUFFN0IsWUFBUSxHQUZxQjtBQUc3QixXQUFPO0FBSHNCLEdBQUQsQ0FGQTtBQUFBLE1BRXpCQyxJQUZ5QjtBQUFBLE1BRW5CQyxPQUZtQjs7QUFRaEMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsSUFBRCxFQUFVO0FBQ3pCQyxjQUFVLENBQUMsWUFBTTtBQUNiSCxhQUFPLENBQUMsVUFBQ0ksSUFBRDtBQUFBLCtDQUFnQkEsSUFBaEIsOEpBQXVCRixJQUF2QixFQUE4QixJQUE5QjtBQUFBLE9BQUQsQ0FBUDtBQUNILEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHSCxHQUpEOztBQU1BLE1BQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNILElBQUQsRUFBVTtBQUMxQkMsY0FBVSxDQUFDLFlBQU07QUFDYkgsYUFB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QUFBQSxrQkFBSWhCLFdBQVcsQ0FBQ2lCO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FqREosZUFrREk7QUFBUSxpQkFBUyxFQUFFZCw4RUFBbkI7QUFBbUMsZUFBTyxFQUFFO0FBQUEsaUJBQU1oQixNQUFNLENBQUMrQixJQUFQLENBQVksVUFBWixDQUFOO0FBQUEsU0FBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FsREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsRUFzREssQ0FBQ2xCLFdBQUQsaUJBQWdCO0FBQUEsa0VBQXFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBdERyQjtBQUFBLGtCQURKO0FBMERIOztHQWpGdUJkLFM7VUFDTEUsa0Q7OztLQURLRixTIiwiZmlsZSI6Ii4vcGFnZXMvRGV2RGV0YWlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd29ya0RldGFpbC5tb2R1bGUuY3NzJ1xuaW1wb3J0IHdvcmsgZnJvbSAnLi4vZGF0YS9kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXZEZXRhaWwoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoe1xuICAgICAgICAnZ2l0aHViJzogJzAnLFxuICAgICAgICAnbGl2ZSc6ICcwJyxcbiAgICAgICAgJ25wbSc6ICcwJ1xuICAgIH0pXG5cbiAgICBjb25zdCBmYWRlSW5Ob3RlID0gKGljb24pID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG93KChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbaWNvbl06ICcuOCcgfSkpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgfVxuXG4gICAgY29uc3QgZmFkZU91dE5vdGUgPSAoaWNvbikgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHNldFNob3coKHByZXYpID0+ICh7IC4uLnByZXYsIFtpY29uXTogJzAnIH0pKVxuICAgICAgICB9LCAyMCk7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdCA9IHJvdXRlci5xdWVyeS5pZDtcbiAgICBsZXQgY3VycmVudFByb2ogPSB3b3JrLmZpbmQoZSA9PiBlLmlkID09PSBwcm9qZWN0KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICB7Y3VycmVudFByb2ogJiZcbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntjdXJyZW50UHJvai50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZWNofT57Y3VycmVudFByb2oudGVjaH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbnN9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmdpdGh1YiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRvb2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtjdXJyZW50UHJvai5naXRodWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17KCkgPT4gZmFkZUluTm90ZSgnZ2l0aHViJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGZhZGVPdXROb3RlKCdnaXRodWInKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz0nL2dpdC5zdmcnIGFsdD0nZ2l0aHViJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbHRpcHRleHR9IHN0eWxlPXt7IG9wYWNpdHk6IHNob3cuZ2l0aHViIH19PkdpdEh1Yjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai5saXZlU2l0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRvb2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2N1cnJlbnRQcm9qLmxpdmVTaXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBmYWRlSW5Ob3RlKCdsaXZlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gZmFkZU91dE5vdGUoJ2xpdmUnKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPScvc2l0ZS5zdmcnIGFsdD0nbGl2ZSBzaXRlJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sdGlwdGV4dH0+bGl2ZSBzaXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFByb2oubnBtTGluayAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRvb2x9IGhyZWY9e2N1cnJlbnRQcm9qLm5wbUxpbmt9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9Jy9ucG0uc3ZnJyBhbHQ9J25wbScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudG9vbHRpcHRleHR9Pm5wbSBwYWdlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFByb2oudmlkZW8gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbW99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2N1cnJlbnRQcm9qLnZpZGVvfSB0eXBlPVwidmlkZW8vbXA0XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+fVxuICAgICAgICAgICAgICAgICAgICA8cD57Y3VycmVudFByb2ouYmx1cmIxfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxJbWdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmltYWdlMSAmJiA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2UxfSBhbHQ9J3NjcmVlbnNob3QgMSBvZiBhcHAnIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmltYWdlMiAmJiA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2UyfSBhbHQ9J3NjcmVlbnNob3QgMiBvZiBhcHAnIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRQcm9qLmJsdXJiMn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsSW1nQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai5pbWFnZTMgJiYgPGltZyBzcmM9e2N1cnJlbnRQcm9qLmltYWdlM30gYWx0PSdzY3JlZW5zaG90IDMgb2YgYXBwJyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai5pbWFnZTQgJiYgPGltZyBzcmM9e2N1cnJlbnRQcm9qLmltYWdlNH0gYWx0PSdzY3JlZW5zaG90IDQgb2YgYXBwJyAvPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPntjdXJyZW50UHJvai5ibHVyYjN9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJhY2tCdG59IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvRGV2V29yaycpfT5CQUNLIFRPIERFViBXT1JLPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+fVxuICAgICAgICAgICAgeyFjdXJyZW50UHJvaiAmJiA8ZGl2PiBIbW1tLi4uLiBzb21ldGhpbmcgd2VudCB3cm9uZy4gPGJyIC8+IFBsZWFzZSBuYXZpZ2F0ZSBiYWNrIHRvIHRoZSBERVYgV09SSyBwYWdlIGFuZCB0cnkgYWdhaW4uPC9kaXY+fVxuICAgICAgICA8Lz5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/DevDetail.js\n");

/***/ })

});