/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Nav.module.css */ \"./styles/Nav.module.css\");\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kmc/Alchemy/projects/katrina-cloyd-portfolio/components/navigation.js\";\n\n\nfunction Navigation(_ref) {\n  var page = _ref.page,\n      setPage = _ref.setPage;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n    className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navList),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/About\",\n      className: page === 'home' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('about');\n      },\n      children: \"ABOUT - new\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: page === 'home' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('home');\n      },\n      children: \"HOME\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: page === 'about' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('about');\n      },\n      children: \"ABOUT\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: page === 'dev' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('dev');\n      },\n      children: \"DEV WORK\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: page === 'design' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('design');\n      },\n      children: \"DESIGN WORK\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: page === 'contact' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('contact');\n      },\n      children: \"CONTACT\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n}\n_c = Navigation;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzPzkzMDgiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInBhZ2UiLCJzZXRQYWdlIiwic3R5bGVzIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQXVDO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUVsRCxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsdUVBQWhCO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFDSSxVQUFJLEVBQUMsUUFEVDtBQUVJLGVBQVMsRUFBRUYsSUFBSSxLQUFLLE1BQVQsR0FBa0IsQ0FBQ0Usd0VBQUQsRUFBa0JBLHVFQUFsQixFQUFrQ0MsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBbEIsR0FBZ0VELHVFQUYvRTtBQUdJLGFBQU8sRUFBRSxtQkFBTTtBQUFFRCxlQUFPLENBQUMsT0FBRCxDQUFQO0FBQWtCLE9BSHZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFNSTtBQUFHLGVBQVMsRUFBRUQsSUFBSSxLQUFLLE1BQVQsR0FBa0IsQ0FBQ0Usd0VBQUQsRUFBa0JBLHVFQUFsQixFQUFrQ0MsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBbEIsR0FBZ0VELHVFQUE5RTtBQUNJLGFBQU8sRUFBRSxtQkFBTTtBQUFFRCxlQUFPLENBQUMsTUFBRCxDQUFQO0FBQWlCLE9BRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkosZUFTSTtBQUFHLGVBQVMsRUFBRUQsSUFBSSxLQUFLLE9BQVQsR0FBbUIsQ0FBQ0Usd0VBQUQsRUFBa0JBLHVFQUFsQixFQUFrQ0MsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBbkIsR0FBaUVELHVFQUEvRTtBQUNJLGFBQU8sRUFBRSxtQkFBTTtBQUFFRCxlQUFPLENBQUMsT0FBRCxDQUFQO0FBQWtCLE9BRHZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosZUFhSTtBQUFHLGVBQVMsRUFBRUQsSUFBSSxLQUFLLEtBQVQsR0FBaUIsQ0FBQ0Usd0VBQUQsRUFBa0JBLHVFQUFsQixFQUFrQ0MsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBakIsR0FBK0RELHVFQUE3RTtBQUNJLGFBQU8sRUFBRSxtQkFBTTtBQUFFRCxlQUFPLENBQUMsS0FBRCxDQUFQO0FBQWdCLE9BRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYkosZUFpQkk7QUFBRyxlQUFTLEVBQUVELElBQUksS0FBSyxRQUFULEdBQW9CLENBQUNFLHdFQUFELEVBQWtCQSx1RUFBbEIsRUFBa0NDLElBQWxDLENBQXVDLEdBQXZDLENBQXBCLEdBQWtFRCx1RUFBaEY7QUFDSSxhQUFPLEVBQUUsbUJBQU07QUFBRUQsZUFBTyxDQUFDLFFBQUQsQ0FBUDtBQUFtQixPQUR4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpCSixlQXFCSTtBQUFHLGVBQVMsRUFBRUQsSUFBSSxLQUFLLFNBQVQsR0FBcUIsQ0FBQ0Usd0VBQUQsRUFBa0JBLHVFQUFsQixFQUFrQ0MsSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBckIsR0FBbUVELHVFQUFqRjtBQUNJLGFBQU8sRUFBRSxtQkFBTTtBQUFFRCxlQUFPLENBQUMsU0FBRCxDQUFQO0FBQW9CLE9BRHpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNEJIO0tBOUJ1QkYsVTtBQThCdkIiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmF2Lm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24oeyBwYWdlLCBzZXRQYWdlIH0pIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2TGlzdH0+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9Jy9BYm91dCdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2UgPT09ICdob21lJyA/IFtzdHlsZXMuc2VsZWN0ZWQsIHN0eWxlcy5uYXZJdGVtXS5qb2luKCcgJykgOiBzdHlsZXMubmF2SXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFBhZ2UoJ2Fib3V0JykgfX1cbiAgICAgICAgICAgID5BQk9VVCAtIG5ldzwvTGluaz5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cGFnZSA9PT0gJ2hvbWUnID8gW3N0eWxlcy5zZWxlY3RlZCwgc3R5bGVzLm5hdkl0ZW1dLmpvaW4oJyAnKSA6IHN0eWxlcy5uYXZJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0UGFnZSgnaG9tZScpIH19PlxuICAgICAgICAgICAgICAgIEhPTUU8L2E+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhZ2UgPT09ICdhYm91dCcgPyBbc3R5bGVzLnNlbGVjdGVkLCBzdHlsZXMubmF2SXRlbV0uam9pbignICcpIDogc3R5bGVzLm5hdkl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRQYWdlKCdhYm91dCcpIH19PlxuICAgICAgICAgICAgICAgIEFCT1VUXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhZ2UgPT09ICdkZXYnID8gW3N0eWxlcy5zZWxlY3RlZCwgc3R5bGVzLm5hdkl0ZW1dLmpvaW4oJyAnKSA6IHN0eWxlcy5uYXZJdGVtfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgc2V0UGFnZSgnZGV2JykgfX0+XG4gICAgICAgICAgICAgICAgREVWIFdPUktcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cGFnZSA9PT0gJ2Rlc2lnbicgPyBbc3R5bGVzLnNlbGVjdGVkLCBzdHlsZXMubmF2SXRlbV0uam9pbignICcpIDogc3R5bGVzLm5hdkl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRQYWdlKCdkZXNpZ24nKSB9fT5cbiAgICAgICAgICAgICAgICBERVNJR04gV09SS1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwYWdlID09PSAnY29udGFjdCcgPyBbc3R5bGVzLnNlbGVjdGVkLCBzdHlsZXMubmF2SXRlbV0uam9pbignICcpIDogc3R5bGVzLm5hdkl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRQYWdlKCdjb250YWN0JykgfX0+XG4gICAgICAgICAgICAgICAgQ09OVEFDVFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICA8L25hdj5cbiAgICApXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ })

});