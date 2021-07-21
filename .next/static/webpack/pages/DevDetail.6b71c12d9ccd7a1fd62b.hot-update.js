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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DevDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_kmc_Alchemy_projects_katrina_cloyd_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/workDetail.module.css */ \"./styles/workDetail.module.css\");\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/kmc/Alchemy/projects/katrina-cloyd-portfolio/pages/DevDetail.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction DevDetail() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n    'github': '0',\n    'live': '0',\n    'npm': '0'\n  }),\n      show = _useState[0],\n      setShow = _useState[1];\n\n  var fadeInNote = function fadeInNote(icon) {\n    setTimeout(function () {\n      setShow((0,_Users_kmc_Alchemy_projects_katrina_cloyd_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, icon, '.8'));\n    }, 1000);\n  };\n\n  var fadeOutNote = function fadeOutNote(icon) {\n    setTimeout(function () {\n      setShow((0,_Users_kmc_Alchemy_projects_katrina_cloyd_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, icon, '0'));\n    }, 20);\n  };\n\n  var project = router.query.id;\n  var currentProj = _data_data__WEBPACK_IMPORTED_MODULE_4__.default.find(function (e) {\n    return e.id === project;\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [currentProj && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n        children: currentProj.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tech),\n        children: currentProj.tech\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().icons),\n        children: [currentProj.github && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tool),\n            href: currentProj.github,\n            target: \"_blank\",\n            onMouseEnter: function onMouseEnter() {\n              return fadeInNote('github');\n            },\n            onMouseLeave: function onMouseLeave() {\n              return fadeOutNote('github');\n            },\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n              className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n              src: \"/git.svg\",\n              alt: \"github\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 43,\n              columnNumber: 37\n            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n              className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tooltiptext),\n              style: {\n                opacity: show.github\n              },\n              children: \"GitHub\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 44,\n              columnNumber: 37\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 33\n          }, this)\n        }, void 0, false), currentProj.liveSite && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tool),\n          href: currentProj.liveSite,\n          target: \"_blank\",\n          onMouseEnter: function onMouseEnter() {\n            return fadeInNote('live');\n          },\n          onMouseLeave: function onMouseLeave() {\n            return fadeOutNote('live');\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n            src: \"/site.svg\",\n            alt: \"live site\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 33\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tooltiptext),\n            style: {\n              opacity: show.live\n            },\n            children: \"live site\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 54,\n            columnNumber: 33\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 29\n        }, this), currentProj.npmLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n          className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tool),\n          href: currentProj.liveSite,\n          target: \"_blank\",\n          onMouseEnter: function onMouseEnter() {\n            return fadeInNote('npm');\n          },\n          onMouseLeave: function onMouseLeave() {\n            return fadeOutNote('npm');\n          },\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n            src: \"/npm.svg\",\n            alt: \"npm\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 33\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().tooltiptext),\n            style: {\n              opacity: show.npm\n            },\n            children: \"npm page\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 63,\n            columnNumber: 33\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 29\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }, this), currentProj.video && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().demo),\n        controls: true,\n        autoPlay: true,\n        muted: true,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n          src: currentProj.video,\n          type: \"video/mp4\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 29\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 25\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb1\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().detailImgContainer),\n        children: [currentProj.image1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image1,\n          alt: \"screenshot 1 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 48\n        }, this), currentProj.image2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image2,\n          alt: \"screenshot 2 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 48\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb2\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().detailImgContainer),\n        children: [currentProj.image3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image3,\n          alt: \"screenshot 3 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 48\n        }, this), currentProj.image4 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          src: currentProj.image4,\n          alt: \"screenshot 4 of app\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 83,\n          columnNumber: 48\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: currentProj.blurb3\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 21\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_5___default().backBtn),\n        onClick: function onClick() {\n          return router.push('/DevWork');\n        },\n        children: \"BACK TO DEV WORK\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 17\n    }, this), !currentProj && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: [\" Hmmm.... something went wrong. \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 67\n      }, this), \" Please navigate back to the DEV WORK page and try again.\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 30\n    }, this)]\n  }, void 0, true);\n}\n\n_s(DevDetail, \"hv/cAMI7fR2k6DkZaIsH2QZNpD0=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];\n});\n\n_c = DevDetail;\n\nvar _c;\n\n$RefreshReg$(_c, \"DevDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvRGV2RGV0YWlsLmpzP2IyNzAiXSwibmFtZXMiOlsiRGV2RGV0YWlsIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImZhZGVJbk5vdGUiLCJpY29uIiwic2V0VGltZW91dCIsImZhZGVPdXROb3RlIiwicHJvamVjdCIsInF1ZXJ5IiwiaWQiLCJjdXJyZW50UHJvaiIsIndvcmsiLCJlIiwic3R5bGVzIiwidGl0bGUiLCJ0ZWNoIiwiZ2l0aHViIiwib3BhY2l0eSIsImxpdmVTaXRlIiwibGl2ZSIsIm5wbUxpbmsiLCJucG0iLCJ2aWRlbyIsImJsdXJiMSIsImltYWdlMSIsImltYWdlMiIsImJsdXJiMiIsImltYWdlMyIsImltYWdlNCIsImJsdXJiMyIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFBQTs7QUFDaEMsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4Qjs7QUFEZ0Msa0JBRVJDLCtDQUFRLENBQUM7QUFDN0IsY0FBVSxHQURtQjtBQUU3QixZQUFRLEdBRnFCO0FBRzdCLFdBQU87QUFIc0IsR0FBRCxDQUZBO0FBQUEsTUFFekJDLElBRnlCO0FBQUEsTUFFbkJDLE9BRm1COztBQVFoQyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQVU7QUFDekJDLGNBQVUsQ0FBQyxZQUFNO0FBQ2JILGFBQU8sQ0FBQyx1SkFBR0UsSUFBSixFQUFXLElBQVgsRUFBUDtBQUNILEtBRlMsRUFFUCxJQUZPLENBQVY7QUFHSCxHQUpEOztBQU1BLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNGLElBQUQsRUFBVTtBQUMxQkMsY0FBVSxDQUFDLFlBQU07QUFDYkgsYUFBTyxDQUFDLHVKQUFHRSxJQUFKLEVBQVcsR0FBWCxFQUFQO0FBQ0gsS0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUdILEdBSkQ7O0FBTUEsTUFBTUcsT0FBTyxHQUFHVCxNQUFNLENBQUNVLEtBQVAsQ0FBYUMsRUFBN0I7QUFDQSxNQUFJQyxXQUFXLEdBQUdDLG9EQUFBLENBQVUsVUFBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0gsRUFBRixLQUFTRixPQUFiO0FBQUEsR0FBWCxDQUFsQjtBQUVBLHNCQUNJO0FBQUEsZUFDS0csV0FBVyxpQkFDUjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBRUcsNEVBQWY7QUFBQSxrQkFBOEJILFdBQVcsQ0FBQ0k7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBRyxpQkFBUyxFQUFFRCwyRUFBZDtBQUFBLGtCQUE0QkgsV0FBVyxDQUFDSztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFLLGlCQUFTLEVBQUVGLDRFQUFoQjtBQUFBLG1CQUNLSCxXQUFXLENBQUNNLE1BQVosaUJBQ0c7QUFBQSxpQ0FDSTtBQUFHLHFCQUFTLEVBQUVILDJFQUFkO0FBQ0ksZ0JBQUksRUFBRUgsV0FBVyxDQUFDTSxNQUR0QjtBQUVJLGtCQUFNLEVBQUMsUUFGWDtBQUdJLHdCQUFZLEVBQUU7QUFBQSxxQkFBTWIsVUFBVSxDQUFDLFFBQUQsQ0FBaEI7QUFBQSxhQUhsQjtBQUlJLHdCQUFZLEVBQUU7QUFBQSxxQkFBTUcsV0FBVyxDQUFDLFFBQUQsQ0FBakI7QUFBQSxhQUpsQjtBQUFBLG9DQUtJO0FBQUssdUJBQVMsRUFBRU8sMkVBQWhCO0FBQTZCLGlCQUFHLEVBQUMsVUFBakM7QUFBNEMsaUJBQUcsRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUxKLGVBTUk7QUFBTSx1QkFBUyxFQUFFQSxrRkFBakI7QUFBcUMsbUJBQUssRUFBRTtBQUFFSSx1QkFBTyxFQUFFaEIsSUFBSSxDQUFDZTtBQUFoQixlQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESix5QkFGUixFQVlLTixXQUFXLENBQUNRLFFBQVosaUJBQ0c7QUFBRyxtQkFBUyxFQUFFTCwyRUFBZDtBQUNJLGNBQUksRUFBRUgsV0FBVyxDQUFDUSxRQUR0QjtBQUVJLGdCQUFNLEVBQUMsUUFGWDtBQUdJLHNCQUFZLEVBQUU7QUFBQSxtQkFBTWYsVUFBVSxDQUFDLE1BQUQsQ0FBaEI7QUFBQSxXQUhsQjtBQUlJLHNCQUFZLEVBQUU7QUFBQSxtQkFBTUcsV0FBVyxDQUFDLE1BQUQsQ0FBakI7QUFBQSxXQUpsQjtBQUFBLGtDQUtJO0FBQUsscUJBQVMsRUFBRU8sMkVBQWhCO0FBQTZCLGVBQUcsRUFBQyxXQUFqQztBQUE2QyxlQUFHLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMSixlQU1JO0FBQU0scUJBQVMsRUFBRUEsa0ZBQWpCO0FBQXFDLGlCQUFLLEVBQUU7QUFBRUkscUJBQU8sRUFBRWhCLElBQUksQ0FBQ2tCO0FBQWhCLGFBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiUixFQXFCS1QsV0FBVyxDQUFDVSxPQUFaLGlCQUNHO0FBQUcsbUJBQVMsRUFBRVAsMkVBQWQ7QUFDSSxjQUFJLEVBQUVILFdBQVcsQ0FBQ1EsUUFEdEI7QUFFSSxnQkFBTSxFQUFDLFFBRlg7QUFHSSxzQkFBWSxFQUFFO0FBQUEsbUJBQU1mLFVBQVUsQ0FBQyxLQUFELENBQWhCO0FBQUEsV0FIbEI7QUFJSSxzQkFBWSxFQUFFO0FBQUEsbUJBQU1HLFdBQVcsQ0FBQyxLQUFELENBQWpCO0FBQUEsV0FKbEI7QUFBQSxrQ0FLSTtBQUFLLHFCQUFTLEVBQUVPLDJFQUFoQjtBQUE2QixlQUFHLEVBQUMsVUFBakM7QUFBNEMsZUFBRyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEosZUFNSTtBQUFNLHFCQUFTLEVBQUVBLGtGQUFqQjtBQUFxQyxpQkFBSyxFQUFFO0FBQUVJLHFCQUFPLEVBQUVoQixJQUFJLENBQUNvQjtBQUFoQixhQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdEJSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhKLEVBa0NLWCxXQUFXLENBQUNZLEtBQVosaUJBQ0c7QUFDSSxpQkFBUyxFQUFFVCwyRUFEZjtBQUVJLGdCQUFRLE1BRlo7QUFHSSxnQkFBUSxNQUhaO0FBSUksYUFBSyxNQUpUO0FBQUEsK0JBTUk7QUFBUSxhQUFHLEVBQUVILFdBQVcsQ0FBQ1ksS0FBekI7QUFBZ0MsY0FBSSxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbkNSLGVBMkNJO0FBQUEsa0JBQUlaLFdBQVcsQ0FBQ2E7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNDSixlQTRDSTtBQUFLLGlCQUFTLEVBQUVWLHlGQUFoQjtBQUFBLG1CQUNLSCxXQUFXLENBQUNjLE1BQVosaUJBQXNCO0FBQUssYUFBRyxFQUFFZCxXQUFXLENBQUNjLE1BQXRCO0FBQThCLGFBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQzQixFQUVLZCxXQUFXLENBQUNlLE1BQVosaUJBQXNCO0FBQUssYUFBRyxFQUFFZixXQUFXLENBQUNlLE1BQXRCO0FBQThCLGFBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1Q0osZUFnREk7QUFBQSxrQkFBSWYsV0FBVyxDQUFDZ0I7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhESixlQWlESTtBQUFLLGlCQUFTLEVBQUViLHlGQUFoQjtBQUFBLG1CQUNLSCxXQUFXLENBQUNpQixNQUFaLGlCQUFzQjtBQUFLLGFBQUcsRUFBRWpCLFdBQVcsQ0FBQ2lCLE1BQXRCO0FBQThCLGFBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUQzQixFQUVLakIsV0FBVyxDQUFDa0IsTUFBWixpQkFBc0I7QUFBSyxhQUFHLEVBQUVsQixXQUFXLENBQUNrQixNQUF0QjtBQUE4QixhQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakRKLGVBcURJO0FBQUEsa0JBQUlsQixXQUFXLENBQUNtQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckRKLGVBc0RJO0FBQVEsaUJBQVMsRUFBRWhCLDhFQUFuQjtBQUFtQyxlQUFPLEVBQUU7QUFBQSxpQkFBTWYsTUFBTSxDQUFDZ0MsSUFBUCxDQUFZLFVBQVosQ0FBTjtBQUFBLFNBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZSLEVBMERLLENBQUNwQixXQUFELGlCQUFnQjtBQUFBLGtFQUFxQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFEckI7QUFBQSxrQkFESjtBQThESDs7R0FyRnVCYixTO1VBQ0xFLGtEOzs7S0FES0YsUyIsImZpbGUiOiIuL3BhZ2VzL0RldkRldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dvcmtEZXRhaWwubW9kdWxlLmNzcydcbmltcG9ydCB3b3JrIGZyb20gJy4uL2RhdGEvZGF0YSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV2RGV0YWlsKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKHtcbiAgICAgICAgJ2dpdGh1Yic6ICcwJyxcbiAgICAgICAgJ2xpdmUnOiAnMCcsXG4gICAgICAgICducG0nOiAnMCdcbiAgICB9KVxuXG4gICAgY29uc3QgZmFkZUluTm90ZSA9IChpY29uKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvdyh7IFtpY29uXTogJy44JyB9KVxuICAgICAgICB9LCAxMDAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBmYWRlT3V0Tm90ZSA9IChpY29uKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvdyh7IFtpY29uXTogJzAnIH0pXG4gICAgICAgIH0sIDIwKTtcbiAgICB9XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gcm91dGVyLnF1ZXJ5LmlkO1xuICAgIGxldCBjdXJyZW50UHJvaiA9IHdvcmsuZmluZChlID0+IGUuaWQgPT09IHByb2plY3QpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtjdXJyZW50UHJvaiAmJlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2N1cnJlbnRQcm9qLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRlY2h9PntjdXJyZW50UHJvai50ZWNofTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFByb2ouZ2l0aHViICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudG9vbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2N1cnJlbnRQcm9qLmdpdGh1Yn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBmYWRlSW5Ob3RlKCdnaXRodWInKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gZmFkZU91dE5vdGUoJ2dpdGh1YicpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPScvZ2l0LnN2ZycgYWx0PSdnaXRodWInIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sdGlwdGV4dH0gc3R5bGU9e3sgb3BhY2l0eTogc2hvdy5naXRodWIgfX0+R2l0SHViPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmxpdmVTaXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudG9vbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17Y3VycmVudFByb2oubGl2ZVNpdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD0nX2JsYW5rJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IGZhZGVJbk5vdGUoJ2xpdmUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBmYWRlT3V0Tm90ZSgnbGl2ZScpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9Jy9zaXRlLnN2ZycgYWx0PSdsaXZlIHNpdGUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRvb2x0aXB0ZXh0fSBzdHlsZT17eyBvcGFjaXR5OiBzaG93LmxpdmUgfX0+bGl2ZSBzaXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFByb2oubnBtTGluayAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRvb2x9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2N1cnJlbnRQcm9qLmxpdmVTaXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBmYWRlSW5Ob3RlKCducG0nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBmYWRlT3V0Tm90ZSgnbnBtJyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz0nL25wbS5zdmcnIGFsdD0nbnBtJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50b29sdGlwdGV4dH0gc3R5bGU9e3sgb3BhY2l0eTogc2hvdy5ucG0gfX0+bnBtIHBhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UHJvai52aWRlbyAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVtb31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17Y3VycmVudFByb2oudmlkZW99IHR5cGU9XCJ2aWRlby9tcDRcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC92aWRlbz59XG4gICAgICAgICAgICAgICAgICAgIDxwPntjdXJyZW50UHJvai5ibHVyYjF9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbEltZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFByb2ouaW1hZ2UxICYmIDxpbWcgc3JjPXtjdXJyZW50UHJvai5pbWFnZTF9IGFsdD0nc2NyZWVuc2hvdCAxIG9mIGFwcCcgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFByb2ouaW1hZ2UyICYmIDxpbWcgc3JjPXtjdXJyZW50UHJvai5pbWFnZTJ9IGFsdD0nc2NyZWVuc2hvdCAyIG9mIGFwcCcgLz59XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cD57Y3VycmVudFByb2ouYmx1cmIyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXRhaWxJbWdDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmltYWdlMyAmJiA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2UzfSBhbHQ9J3NjcmVlbnNob3QgMyBvZiBhcHAnIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmltYWdlNCAmJiA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2U0fSBhbHQ9J3NjcmVlbnNob3QgNCBvZiBhcHAnIC8+fVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRQcm9qLmJsdXJiM308L3A+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFja0J0bn0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9EZXZXb3JrJyl9PkJBQ0sgVE8gREVWIFdPUks8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj59XG4gICAgICAgICAgICB7IWN1cnJlbnRQcm9qICYmIDxkaXY+IEhtbW0uLi4uIHNvbWV0aGluZyB3ZW50IHdyb25nLiA8YnIgLz4gUGxlYXNlIG5hdmlnYXRlIGJhY2sgdG8gdGhlIERFViBXT1JLIHBhZ2UgYW5kIHRyeSBhZ2Fpbi48L2Rpdj59XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/DevDetail.js\n");

/***/ })

});