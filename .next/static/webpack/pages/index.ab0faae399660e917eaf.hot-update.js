/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./data/data.js":
/*!**********************!*\
  !*** ./data/data.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar work = [{\n  id: 'devGIM',\n  title: 'GIM LCC.',\n  oneLiner: 'GIM LLC is an escape room inspired website where players work together to find clues to free the ghost!',\n  note: null,\n  tech: 'JavaScript | React | Socket.io | Context Api | Node | Express',\n  github: 'https://github.com/GIM-LLC',\n  liveSite: 'https://www.escapegim.com/',\n  npmLink: null,\n  blurb1: 'big blurb #1',\n  blurb2: 'big blurb #2',\n  blurb3: 'big blurb #3',\n  video: '/GIM.mp4',\n  image1: '/GIM.png',\n  image2: '/GIM.png',\n  image3: '/GIM.png',\n  image4: '/GIM.png'\n}, {\n  id: 'devPP',\n  title: 'Pixel Pusher',\n  oneLiner: 'Published NPM package to create unique art right in the terminal window! Users can also save, upload and view artwork in the gallery.',\n  note: null,\n  tech: 'JavaScript | Node | Express | GitHub OAuth | Axios | Inquirer | Blessed',\n  github: 'https://github.com/st-ART-up',\n  liveSite: null,\n  npmLink: 'https://www.npmjs.com/package/@st-art-up/pixel-pusher',\n  blurb1: 'big blurb #1',\n  blurb2: 'big blurb #2',\n  blurb3: 'big blurb #3',\n  video: '/GIM.mp4',\n  image1: '/GIM.png',\n  image2: '/GIM.png',\n  image3: '/GIM.png',\n  image4: '/GIM.png'\n}, {\n  id: 'devGG',\n  title: 'GainfulGarden',\n  oneLiner: 'Gardening site for users to search for new plants, track their gardens, and keep plant care history. Live site is currently limited due to our source API being discontinued.',\n  note: null,\n  tech: 'JavaScript | React | Node | Express | Superagent | Toastify',\n  github: 'https://github.com/GainfulGarden',\n  liveSite: 'https://gainfulgarden.netlify.app/',\n  npmLink: null,\n  blurb1: 'big blurb #1',\n  blurb2: 'big blurb #2',\n  blurb3: 'big blurb #3',\n  video: '/GIM.mp4',\n  image1: '/GIM.png',\n  image2: '/GIM.png',\n  image3: '/GIM.png',\n  image4: '/GIM.png'\n}, {\n  id: 'devVM',\n  title: 'Vampire Match',\n  oneLiner: 'Memory card match game based on the movie and television series ',\n  note: 'What We Do In The Shadows.',\n  tech: 'JavaScript | HTML | CSS | QUnit',\n  github: 'https://github.com/UniKittyCorns/MemoryCardGame',\n  liveSite: 'https://vampirematch.netlify.app/',\n  npmLink: null,\n  blurb1: 'big blurb #1',\n  blurb2: 'big blurb #2',\n  blurb3: 'big blurb #3',\n  video: '/GIM.mp4',\n  image1: '/GIM.png',\n  image2: '/GIM.png',\n  image3: '/GIM.png',\n  image4: '/GIM.png'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (work);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9kYXRhLmpzP2VmYmEiXSwibmFtZXMiOlsid29yayIsImlkIiwidGl0bGUiLCJvbmVMaW5lciIsIm5vdGUiLCJ0ZWNoIiwiZ2l0aHViIiwibGl2ZVNpdGUiLCJucG1MaW5rIiwiYmx1cmIxIiwiYmx1cmIyIiwiYmx1cmIzIiwidmlkZW8iLCJpbWFnZTEiLCJpbWFnZTIiLCJpbWFnZTMiLCJpbWFnZTQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsSUFBRSxFQUFFLFFBRFI7QUFFSUMsT0FBSyxFQUFFLFVBRlg7QUFHSUMsVUFBUSxFQUFFLHlHQUhkO0FBSUlDLE1BQUksRUFBRSxJQUpWO0FBS0lDLE1BQUksRUFBRSwrREFMVjtBQU1JQyxRQUFNLEVBQUUsNEJBTlo7QUFPSUMsVUFBUSxFQUFFLDRCQVBkO0FBUUlDLFNBQU8sRUFBRSxJQVJiO0FBU0lDLFFBQU0sRUFBRSxjQVRaO0FBVUlDLFFBQU0sRUFBRSxjQVZaO0FBV0lDLFFBQU0sRUFBRSxjQVhaO0FBWUlDLE9BQUssRUFBRSxVQVpYO0FBYUlDLFFBQU0sRUFBRSxVQWJaO0FBY0lDLFFBQU0sRUFBRSxVQWRaO0FBZUlDLFFBQU0sRUFBRSxVQWZaO0FBZ0JJQyxRQUFNLEVBQUU7QUFoQlosQ0FEUyxFQW1CVDtBQUNJZixJQUFFLEVBQUUsT0FEUjtBQUVJQyxPQUFLLEVBQUUsY0FGWDtBQUdJQyxVQUFRLEVBQUUsdUlBSGQ7QUFJSUMsTUFBSSxFQUFFLElBSlY7QUFLSUMsTUFBSSxFQUFFLHlFQUxWO0FBTUlDLFFBQU0sRUFBRSw4QkFOWjtBQU9JQyxVQUFRLEVBQUUsSUFQZDtBQVFJQyxTQUFPLEVBQUUsdURBUmI7QUFTSUMsUUFBTSxFQUFFLGNBVFo7QUFVSUMsUUFBTSxFQUFFLGNBVlo7QUFXSUMsUUFBTSxFQUFFLGNBWFo7QUFZSUMsT0FBSyxFQUFFLFVBWlg7QUFhSUMsUUFBTSxFQUFFLFVBYlo7QUFjSUMsUUFBTSxFQUFFLFVBZFo7QUFlSUMsUUFBTSxFQUFFLFVBZlo7QUFnQklDLFFBQU0sRUFBRTtBQWhCWixDQW5CUyxFQXFDVDtBQUNJZixJQUFFLEVBQUUsT0FEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxVQUFRLEVBQUUsK0tBSGQ7QUFJSUMsTUFBSSxFQUFFLElBSlY7QUFLSUMsTUFBSSxFQUFFLDZEQUxWO0FBTUlDLFFBQU0sRUFBRSxrQ0FOWjtBQU9JQyxVQUFRLEVBQUUsb0NBUGQ7QUFRSUMsU0FBTyxFQUFFLElBUmI7QUFTSUMsUUFBTSxFQUFFLGNBVFo7QUFVSUMsUUFBTSxFQUFFLGNBVlo7QUFXSUMsUUFBTSxFQUFFLGNBWFo7QUFZSUMsT0FBSyxFQUFFLFVBWlg7QUFhSUMsUUFBTSxFQUFFLFVBYlo7QUFjSUMsUUFBTSxFQUFFLFVBZFo7QUFlSUMsUUFBTSxFQUFFLFVBZlo7QUFnQklDLFFBQU0sRUFBRTtBQWhCWixDQXJDUyxFQXVEVDtBQUNJZixJQUFFLEVBQUUsT0FEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxVQUFRLEVBQUUsa0VBSGQ7QUFJSUMsTUFBSSxFQUFFLDRCQUpWO0FBS0lDLE1BQUksRUFBRSxpQ0FMVjtBQU1JQyxRQUFNLEVBQUUsaURBTlo7QUFPSUMsVUFBUSxFQUFFLG1DQVBkO0FBUUlDLFNBQU8sRUFBRSxJQVJiO0FBU0lDLFFBQU0sRUFBRSxjQVRaO0FBVUlDLFFBQU0sRUFBRSxjQVZaO0FBV0lDLFFBQU0sRUFBRSxjQVhaO0FBWUlDLE9BQUssRUFBRSxVQVpYO0FBYUlDLFFBQU0sRUFBRSxVQWJaO0FBY0lDLFFBQU0sRUFBRSxVQWRaO0FBZUlDLFFBQU0sRUFBRSxVQWZaO0FBZ0JJQyxRQUFNLEVBQUU7QUFoQlosQ0F2RFMsQ0FBYjtBQTJFQSwrREFBZWhCLElBQWYiLCJmaWxlIjoiLi9kYXRhL2RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3b3JrID0gW1xuICAgIHtcbiAgICAgICAgaWQ6ICdkZXZHSU0nLFxuICAgICAgICB0aXRsZTogJ0dJTSBMQ0MuJyxcbiAgICAgICAgb25lTGluZXI6ICdHSU0gTExDIGlzIGFuIGVzY2FwZSByb29tIGluc3BpcmVkIHdlYnNpdGUgd2hlcmUgcGxheWVycyB3b3JrIHRvZ2V0aGVyIHRvIGZpbmQgY2x1ZXMgdG8gZnJlZSB0aGUgZ2hvc3QhJyxcbiAgICAgICAgbm90ZTogbnVsbCxcbiAgICAgICAgdGVjaDogJ0phdmFTY3JpcHQgfCBSZWFjdCB8IFNvY2tldC5pbyB8IENvbnRleHQgQXBpIHwgTm9kZSB8IEV4cHJlc3MnLFxuICAgICAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vR0lNLUxMQycsXG4gICAgICAgIGxpdmVTaXRlOiAnaHR0cHM6Ly93d3cuZXNjYXBlZ2ltLmNvbS8nLFxuICAgICAgICBucG1MaW5rOiBudWxsLFxuICAgICAgICBibHVyYjE6ICdiaWcgYmx1cmIgIzEnLFxuICAgICAgICBibHVyYjI6ICdiaWcgYmx1cmIgIzInLFxuICAgICAgICBibHVyYjM6ICdiaWcgYmx1cmIgIzMnLFxuICAgICAgICB2aWRlbzogJy9HSU0ubXA0JyxcbiAgICAgICAgaW1hZ2UxOiAnL0dJTS5wbmcnLFxuICAgICAgICBpbWFnZTI6ICcvR0lNLnBuZycsXG4gICAgICAgIGltYWdlMzogJy9HSU0ucG5nJyxcbiAgICAgICAgaW1hZ2U0OiAnL0dJTS5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2RldlBQJyxcbiAgICAgICAgdGl0bGU6ICdQaXhlbCBQdXNoZXInLFxuICAgICAgICBvbmVMaW5lcjogJ1B1Ymxpc2hlZCBOUE0gcGFja2FnZSB0byBjcmVhdGUgdW5pcXVlIGFydCByaWdodCBpbiB0aGUgdGVybWluYWwgd2luZG93ISBVc2VycyBjYW4gYWxzbyBzYXZlLCB1cGxvYWQgYW5kIHZpZXcgYXJ0d29yayBpbiB0aGUgZ2FsbGVyeS4nLFxuICAgICAgICBub3RlOiBudWxsLFxuICAgICAgICB0ZWNoOiAnSmF2YVNjcmlwdCB8IE5vZGUgfCBFeHByZXNzIHwgR2l0SHViIE9BdXRoIHwgQXhpb3MgfCBJbnF1aXJlciB8IEJsZXNzZWQnLFxuICAgICAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vc3QtQVJULXVwJyxcbiAgICAgICAgbGl2ZVNpdGU6IG51bGwsXG4gICAgICAgIG5wbUxpbms6ICdodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9Ac3QtYXJ0LXVwL3BpeGVsLXB1c2hlcicsXG4gICAgICAgIGJsdXJiMTogJ2JpZyBibHVyYiAjMScsXG4gICAgICAgIGJsdXJiMjogJ2JpZyBibHVyYiAjMicsXG4gICAgICAgIGJsdXJiMzogJ2JpZyBibHVyYiAjMycsXG4gICAgICAgIHZpZGVvOiAnL0dJTS5tcDQnLFxuICAgICAgICBpbWFnZTE6ICcvR0lNLnBuZycsXG4gICAgICAgIGltYWdlMjogJy9HSU0ucG5nJyxcbiAgICAgICAgaW1hZ2UzOiAnL0dJTS5wbmcnLFxuICAgICAgICBpbWFnZTQ6ICcvR0lNLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnZGV2R0cnLFxuICAgICAgICB0aXRsZTogJ0dhaW5mdWxHYXJkZW4nLFxuICAgICAgICBvbmVMaW5lcjogJ0dhcmRlbmluZyBzaXRlIGZvciB1c2VycyB0byBzZWFyY2ggZm9yIG5ldyBwbGFudHMsIHRyYWNrIHRoZWlyIGdhcmRlbnMsIGFuZCBrZWVwIHBsYW50IGNhcmUgaGlzdG9yeS4gTGl2ZSBzaXRlIGlzIGN1cnJlbnRseSBsaW1pdGVkIGR1ZSB0byBvdXIgc291cmNlIEFQSSBiZWluZyBkaXNjb250aW51ZWQuJyxcbiAgICAgICAgbm90ZTogbnVsbCxcbiAgICAgICAgdGVjaDogJ0phdmFTY3JpcHQgfCBSZWFjdCB8IE5vZGUgfCBFeHByZXNzIHwgU3VwZXJhZ2VudCB8IFRvYXN0aWZ5JyxcbiAgICAgICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL0dhaW5mdWxHYXJkZW4nLFxuICAgICAgICBsaXZlU2l0ZTogJ2h0dHBzOi8vZ2FpbmZ1bGdhcmRlbi5uZXRsaWZ5LmFwcC8nLFxuICAgICAgICBucG1MaW5rOiBudWxsLFxuICAgICAgICBibHVyYjE6ICdiaWcgYmx1cmIgIzEnLFxuICAgICAgICBibHVyYjI6ICdiaWcgYmx1cmIgIzInLFxuICAgICAgICBibHVyYjM6ICdiaWcgYmx1cmIgIzMnLFxuICAgICAgICB2aWRlbzogJy9HSU0ubXA0JyxcbiAgICAgICAgaW1hZ2UxOiAnL0dJTS5wbmcnLFxuICAgICAgICBpbWFnZTI6ICcvR0lNLnBuZycsXG4gICAgICAgIGltYWdlMzogJy9HSU0ucG5nJyxcbiAgICAgICAgaW1hZ2U0OiAnL0dJTS5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ2RldlZNJyxcbiAgICAgICAgdGl0bGU6ICdWYW1waXJlIE1hdGNoJyxcbiAgICAgICAgb25lTGluZXI6ICdNZW1vcnkgY2FyZCBtYXRjaCBnYW1lIGJhc2VkIG9uIHRoZSBtb3ZpZSBhbmQgdGVsZXZpc2lvbiBzZXJpZXMgJyxcbiAgICAgICAgbm90ZTogJ1doYXQgV2UgRG8gSW4gVGhlIFNoYWRvd3MuJyxcbiAgICAgICAgdGVjaDogJ0phdmFTY3JpcHQgfCBIVE1MIHwgQ1NTIHwgUVVuaXQnLFxuICAgICAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vVW5pS2l0dHlDb3Jucy9NZW1vcnlDYXJkR2FtZScsXG4gICAgICAgIGxpdmVTaXRlOiAnaHR0cHM6Ly92YW1waXJlbWF0Y2gubmV0bGlmeS5hcHAvJyxcbiAgICAgICAgbnBtTGluazogbnVsbCxcbiAgICAgICAgYmx1cmIxOiAnYmlnIGJsdXJiICMxJyxcbiAgICAgICAgYmx1cmIyOiAnYmlnIGJsdXJiICMyJyxcbiAgICAgICAgYmx1cmIzOiAnYmlnIGJsdXJiICMzJyxcbiAgICAgICAgdmlkZW86ICcvR0lNLm1wNCcsXG4gICAgICAgIGltYWdlMTogJy9HSU0ucG5nJyxcbiAgICAgICAgaW1hZ2UyOiAnL0dJTS5wbmcnLFxuICAgICAgICBpbWFnZTM6ICcvR0lNLnBuZycsXG4gICAgICAgIGltYWdlNDogJy9HSU0ucG5nJyxcbiAgICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgd29yazsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/data.js\n");

/***/ })

});