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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Nav.module.css */ \"./styles/Nav.module.css\");\n/* harmony import */ var _styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\nvar _jsxFileName = \"/Users/kmc/Alchemy/projects/katrina-cloyd-portfolio/components/navigation.js\";\n\n\nfunction Navigation(_ref) {\n  var page = _ref.page,\n      setPage = _ref.setPage;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n    className: (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navList),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/About\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: router.asPath === 'About' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n        children: \"ABOUT - new\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"text-secondary-300\",\n        children: item.label\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n      href: \"/About\",\n      className: page === 'about' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('about');\n      },\n      children: \"ABOUT - new\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: page === 'home' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('home');\n      },\n      children: \"HOME\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: page === 'about' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('about');\n      },\n      children: \"ABOUT\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: page === 'dev' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('dev');\n      },\n      children: \"DEV WORK\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: page === 'design' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('design');\n      },\n      children: \"DESIGN WORK\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n      className: page === 'contact' ? [(_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().selected), (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem)].join(' ') : (_styles_Nav_module_css__WEBPACK_IMPORTED_MODULE_2___default().navItem),\n      onClick: function onClick() {\n        setPage('contact');\n      },\n      children: \"CONTACT\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, this);\n}\n_c = Navigation;\n;\n\nvar _c;\n\n$RefreshReg$(_c, \"Navigation\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZpZ2F0aW9uLmpzPzkzMDgiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInBhZ2UiLCJzZXRQYWdlIiwic3R5bGVzIiwicm91dGVyIiwiYXNQYXRoIiwiam9pbiIsIml0ZW0iLCJsYWJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxVQUFULE9BQXVDO0FBQUEsTUFBakJDLElBQWlCLFFBQWpCQSxJQUFpQjtBQUFBLE1BQVhDLE9BQVcsUUFBWEEsT0FBVztBQUVsRCxzQkFDSTtBQUFLLGFBQVMsRUFBRUMsdUVBQWhCO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxVQUFJLEVBQUMsUUFBWDtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUMsTUFBTSxDQUFDQyxNQUFQLEtBQWtCLE9BQWxCLEdBQTRCLENBQUNGLHdFQUFELEVBQWtCQSx1RUFBbEIsRUFBa0NHLElBQWxDLENBQXVDLEdBQXZDLENBQTVCLEdBQTBFSCx1RUFBMUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUtJO0FBQUcsaUJBQVMsRUFBQyxvQkFBYjtBQUFBLGtCQUFtQ0ksSUFBSSxDQUFDQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFXSSw4REFBQyxrREFBRDtBQUNJLFVBQUksRUFBQyxRQURUO0FBRUksZUFBUyxFQUFFUCxJQUFJLEtBQUssT0FBVCxHQUFtQixDQUFDRSx3RUFBRCxFQUFrQkEsdUVBQWxCLEVBQWtDRyxJQUFsQyxDQUF1QyxHQUF2QyxDQUFuQixHQUFpRUgsdUVBRmhGO0FBR0ksYUFBTyxFQUFFLG1CQUFNO0FBQUVELGVBQU8sQ0FBQyxPQUFELENBQVA7QUFBa0IsT0FIdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSixlQW1CSTtBQUFHLGVBQVMsRUFBRUQsSUFBSSxLQUFLLE1BQVQsR0FBa0IsQ0FBQ0Usd0VBQUQsRUFBa0JBLHVFQUFsQixFQUFrQ0csSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBbEIsR0FBZ0VILHVFQUE5RTtBQUNJLGFBQU8sRUFBRSxtQkFBTTtBQUFFRCxlQUFPLENBQUMsTUFBRCxDQUFQO0FBQWlCLE9BRHRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbkJKLGVBc0JJO0FBQUcsZUFBUyxFQUFFRCxJQUFJLEtBQUssT0FBVCxHQUFtQixDQUFDRSx3RUFBRCxFQUFrQkEsdUVBQWxCLEVBQWtDRyxJQUFsQyxDQUF1QyxHQUF2QyxDQUFuQixHQUFpRUgsdUVBQS9FO0FBQ0ksYUFBTyxFQUFFLG1CQUFNO0FBQUVELGVBQU8sQ0FBQyxPQUFELENBQVA7QUFBa0IsT0FEdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0QkosZUEwQkk7QUFBRyxlQUFTLEVBQUVELElBQUksS0FBSyxLQUFULEdBQWlCLENBQUNFLHdFQUFELEVBQWtCQSx1RUFBbEIsRUFBa0NHLElBQWxDLENBQXVDLEdBQXZDLENBQWpCLEdBQStESCx1RUFBN0U7QUFDSSxhQUFPLEVBQUUsbUJBQU07QUFBRUQsZUFBTyxDQUFDLEtBQUQsQ0FBUDtBQUFnQixPQURyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCSixlQThCSTtBQUFHLGVBQVMsRUFBRUQsSUFBSSxLQUFLLFFBQVQsR0FBb0IsQ0FBQ0Usd0VBQUQsRUFBa0JBLHVFQUFsQixFQUFrQ0csSUFBbEMsQ0FBdUMsR0FBdkMsQ0FBcEIsR0FBa0VILHVFQUFoRjtBQUNJLGFBQU8sRUFBRSxtQkFBTTtBQUFFRCxlQUFPLENBQUMsUUFBRCxDQUFQO0FBQW1CLE9BRHhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBOUJKLGVBa0NJO0FBQUcsZUFBUyxFQUFFRCxJQUFJLEtBQUssU0FBVCxHQUFxQixDQUFDRSx3RUFBRCxFQUFrQkEsdUVBQWxCLEVBQWtDRyxJQUFsQyxDQUF1QyxHQUF2QyxDQUFyQixHQUFtRUgsdUVBQWpGO0FBQ0ksYUFBTyxFQUFFLG1CQUFNO0FBQUVELGVBQU8sQ0FBQyxTQUFELENBQVA7QUFBb0IsT0FEekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5Q0g7S0EzQ3VCRixVO0FBMkN2QiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbmF2aWdhdGlvbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9OYXYubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbih7IHBhZ2UsIHNldFBhZ2UgfSkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZMaXN0fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9BYm91dCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3JvdXRlci5hc1BhdGggPT09ICdBYm91dCcgPyBbc3R5bGVzLnNlbGVjdGVkLCBzdHlsZXMubmF2SXRlbV0uam9pbignICcpIDogc3R5bGVzLm5hdkl0ZW19ID5cbiAgICAgICAgICAgICAgICAgICAgQUJPVVQgLSBuZXdcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5LTMwMFwiPntpdGVtLmxhYmVsfTwvcD5cbiAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxuXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGhyZWY9Jy9BYm91dCdcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3BhZ2UgPT09ICdhYm91dCcgPyBbc3R5bGVzLnNlbGVjdGVkLCBzdHlsZXMubmF2SXRlbV0uam9pbignICcpIDogc3R5bGVzLm5hdkl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRQYWdlKCdhYm91dCcpIH19XG4gICAgICAgICAgICA+QUJPVVQgLSBuZXc8L0xpbms+XG5cbiAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cblxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwYWdlID09PSAnaG9tZScgPyBbc3R5bGVzLnNlbGVjdGVkLCBzdHlsZXMubmF2SXRlbV0uam9pbignICcpIDogc3R5bGVzLm5hdkl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRQYWdlKCdob21lJykgfX0+XG4gICAgICAgICAgICAgICAgSE9NRTwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cGFnZSA9PT0gJ2Fib3V0JyA/IFtzdHlsZXMuc2VsZWN0ZWQsIHN0eWxlcy5uYXZJdGVtXS5qb2luKCcgJykgOiBzdHlsZXMubmF2SXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFBhZ2UoJ2Fib3V0JykgfX0+XG4gICAgICAgICAgICAgICAgQUJPVVRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17cGFnZSA9PT0gJ2RldicgPyBbc3R5bGVzLnNlbGVjdGVkLCBzdHlsZXMubmF2SXRlbV0uam9pbignICcpIDogc3R5bGVzLm5hdkl0ZW19XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBzZXRQYWdlKCdkZXYnKSB9fT5cbiAgICAgICAgICAgICAgICBERVYgV09SS1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtwYWdlID09PSAnZGVzaWduJyA/IFtzdHlsZXMuc2VsZWN0ZWQsIHN0eWxlcy5uYXZJdGVtXS5qb2luKCcgJykgOiBzdHlsZXMubmF2SXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFBhZ2UoJ2Rlc2lnbicpIH19PlxuICAgICAgICAgICAgICAgIERFU0lHTiBXT1JLXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3BhZ2UgPT09ICdjb250YWN0JyA/IFtzdHlsZXMuc2VsZWN0ZWQsIHN0eWxlcy5uYXZJdGVtXS5qb2luKCcgJykgOiBzdHlsZXMubmF2SXRlbX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IHNldFBhZ2UoJ2NvbnRhY3QnKSB9fT5cbiAgICAgICAgICAgICAgICBDT05UQUNUXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbmF2PlxuICAgIClcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navigation.js\n");

/***/ })

});