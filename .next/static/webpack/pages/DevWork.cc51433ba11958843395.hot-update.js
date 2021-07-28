/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/DevWork",{

/***/ "./data/data.js":
/*!**********************!*\
  !*** ./data/data.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar work = [{\n  id: 'GIM',\n  title: 'GIM LCC.',\n  oneLiner: 'GIM LLC is an escape room inspired website where players work together to find clues to free the ghost!',\n  note: null,\n  tech: 'JavaScript | React | Socket.io | Context Api | Node | Express',\n  github: 'https://github.com/GIM-LLC',\n  liveSite: 'https://www.escapegim.com/',\n  npmLink: null,\n  blurb1: 'Created by a remote team of five over an eight day sprint. Inspired by escape rooms and ghost stories, GIM (or the Ghost In the Machine) appears to be an innocuous corporate website, but as users explore they find clues about what is actually happening. Built using Socket.io, the initial idea was that the site would host multiple visitors at the same time, so that users could interact and work together to free the ghost before time ran out, and the ghost gets trapped forever. Users can chat with one another, see what other users are doing, and work together! The ghost can be freed on your own, but it is much more difficult.',\n  blurb2: 'Our first hurdle with this project was getting multiple cursors to render on the screen at once and update with each and every mouse move for all users. Once we got that functionality figured out over the socket connections, all other interactions were fun to figure out!',\n  blurb3: 'This project was really an adventure in CSS animations. Images degrade over time, clues glow, sound effects, shake animations, and modal windows let you know you are making progress, elements flip, move, and dissapear. Explore for yourself to see if you can find all the surprises and free the ghost!',\n  video: '/GIM.mp4',\n  image1: '/GIM.png',\n  image2: '/GIM2.png',\n  image3: '/GIM3.png',\n  image4: '/GIM4.png'\n}, {\n  id: 'PP',\n  title: 'Pixel Pusher',\n  oneLiner: 'Published NPM package to create unique art right in the terminal window! Users can also save, upload and view artwork in the gallery.',\n  note: null,\n  tech: 'JavaScript | Node | Express | GitHub OAuth | Axios | Inquirer | Blessed',\n  github: 'https://github.com/st-ART-up',\n  liveSite: null,\n  npmLink: 'https://www.npmjs.com/package/@st-art-up/pixel-pusher',\n  blurb1: 'PixelPusher by stARTup creates a canvas and gallery experience right in the users terminal window by simply running the command. In the canvas view users can change the canvas color, paint color, brush sizes, erase, and even add text (a poem, maybe?) to their creations. Using GitHub oAuth, users can save and upload their completed art to be viewed in the gallery. When in gallery view users can manage their own artworks or view artworks created by all other PixelPushers!',\n  blurb2: 'Created by a fully remote team of eight developers, this app was a completely new undertaking for everyone on the team. The biggest challenge was navigating how to integrate two very different libraries within node to run in the terminal window.',\n  blurb3: 'This project was so fun to be a part of, being able to bring art and tech together in the terminal window was an adventure. We look forward to seeing your artworks in the gallery collection!',\n  video: '/PPvid.mp4',\n  image1: '/PP1.png',\n  image2: '/PP2.png',\n  image3: '/PP3.png',\n  image4: null\n}, {\n  id: 'GG',\n  title: 'GainfulGarden',\n  oneLiner: 'Gardening site for users to search for new plants, and track their garden info.',\n  note: 'Live site under construction, as our source API was discontinued.',\n  tech: 'JavaScript | React | Node | Express | Superagent | Toastify',\n  github: 'https://github.com/GainfulGarden',\n  liveSite: 'https://gainfulgarden.netlify.app/',\n  npmLink: null,\n  blurb1: 'GainfulGarden is a place for gardners new and seasoned alike to search for new plants to add to their gardens, keep a wishlist of plants that would like to grow, and keep detailed notes on the plants they are already growing. Both front and back ends for this app were built by a fully remote team of four in one week. Our back end has three relational tables: user information, wishlist items and garden items both which include an owner id to tie the item to the appropriate user, and lastly notes which carries a owner id and a plant id so the note is tied to the correct plant in the correct users garden.',\n  blurb2: 'After narrowing down the search results by name, edible part, required light or whether it is a vegetable or not, users then get an updated list of plant results. From this matrix users can add the plant directly into their garden or wishlist by clicking on the icons on the card, or they can view a detail page. The detail page calls the plant API once again to get the most detailed info available, including water and light requirement details, genius name, soil needs, and additional photos. If this plant is in your garden this is also where you can add notes to your plant\\'s care journal.',\n  blurb3: 'I designed the logo, icons, branding and look of the entire frontend, personally styling the search reslts page as a roadmap so other team members could take on other pages while maintaining a seamless look across the site. Sadly this app was built referencing information from the Trefle API, which has since been taken down. The team loves GainfulGarden so much that we do have plans to build out our own API to power the backend. So check back soon!',\n  video: null,\n  image1: '/GG1.png',\n  image2: null,\n  image3: '/GG2.png',\n  image4: '/GG3.png'\n}, {\n  id: 'VM',\n  title: 'Vampire Match',\n  oneLiner: 'Memory card match game based on the movie and television series ',\n  note: 'What We Do In The Shadows.',\n  tech: 'JavaScript | HTML | CSS | QUnit',\n  github: 'https://github.com/UniKittyCorns/MemoryCardGame',\n  liveSite: 'https://vampirematch.netlify.app/',\n  npmLink: null,\n  blurb1: 'A memory matching card game created with vanilla javascript, HTML, and CSS. This vampire themed game is a homage to the movie and series What We Do In The Shadows. This app was completed in a five day sprint by a remote team  of four working collaboratively.',\n  blurb2: 'Users are asked to input their name and select one of the three difficulty levels. This info is saved using the browser\\'s local storage for display and for determining the number of cards in the game. A fun challenge was utilizing CSS transform and rotate animations for the card flips.',\n  blurb3: 'User\\'s scores are also added to the local storage info in order to feed the scoreboard page. Because we were so proud of these awesome illustrations, we had to build in a \\\"give up\\\" functionality so that even if you can\\'t beat the hardest level, you can still see all of the cards face up! Illustration credit to Soraya Benson, you can find her on the GitHub link above.',\n  video: '/VampVid.mp4',\n  image1: '/Vamp1.png',\n  image2: '/Vamp2.png',\n  image3: '/Vamp3.png',\n  image4: '/Vamp4.png'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (work);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZGF0YS9kYXRhLmpzP2VmYmEiXSwibmFtZXMiOlsid29yayIsImlkIiwidGl0bGUiLCJvbmVMaW5lciIsIm5vdGUiLCJ0ZWNoIiwiZ2l0aHViIiwibGl2ZVNpdGUiLCJucG1MaW5rIiwiYmx1cmIxIiwiYmx1cmIyIiwiYmx1cmIzIiwidmlkZW8iLCJpbWFnZTEiLCJpbWFnZTIiLCJpbWFnZTMiLCJpbWFnZTQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsSUFBRSxFQUFFLEtBRFI7QUFFSUMsT0FBSyxFQUFFLFVBRlg7QUFHSUMsVUFBUSxFQUFFLHlHQUhkO0FBSUlDLE1BQUksRUFBRSxJQUpWO0FBS0lDLE1BQUksRUFBRSwrREFMVjtBQU1JQyxRQUFNLEVBQUUsNEJBTlo7QUFPSUMsVUFBUSxFQUFFLDRCQVBkO0FBUUlDLFNBQU8sRUFBRSxJQVJiO0FBU0lDLFFBQU0sRUFBRSx5bkJBVFo7QUFVSUMsUUFBTSxFQUFFLGlSQVZaO0FBV0lDLFFBQU0sRUFBRSw4U0FYWjtBQVlJQyxPQUFLLEVBQUUsVUFaWDtBQWFJQyxRQUFNLEVBQUUsVUFiWjtBQWNJQyxRQUFNLEVBQUUsV0FkWjtBQWVJQyxRQUFNLEVBQUUsV0FmWjtBQWdCSUMsUUFBTSxFQUFFO0FBaEJaLENBRFMsRUFtQlQ7QUFDSWYsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGNBRlg7QUFHSUMsVUFBUSxFQUFFLHVJQUhkO0FBSUlDLE1BQUksRUFBRSxJQUpWO0FBS0lDLE1BQUksRUFBRSx5RUFMVjtBQU1JQyxRQUFNLEVBQUUsOEJBTlo7QUFPSUMsVUFBUSxFQUFFLElBUGQ7QUFRSUMsU0FBTyxFQUFFLHVEQVJiO0FBU0lDLFFBQU0sRUFBRSw0ZEFUWjtBQVVJQyxRQUFNLEVBQUUsdVBBVlo7QUFXSUMsUUFBTSxFQUFFLGdNQVhaO0FBWUlDLE9BQUssRUFBRSxZQVpYO0FBYUlDLFFBQU0sRUFBRSxVQWJaO0FBY0lDLFFBQU0sRUFBRSxVQWRaO0FBZUlDLFFBQU0sRUFBRSxVQWZaO0FBZ0JJQyxRQUFNLEVBQUU7QUFoQlosQ0FuQlMsRUFxQ1Q7QUFDSWYsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGVBRlg7QUFHSUMsVUFBUSxFQUFFLGlGQUhkO0FBSUlDLE1BQUksRUFBRSxtRUFKVjtBQUtJQyxNQUFJLEVBQUUsNkRBTFY7QUFNSUMsUUFBTSxFQUFFLGtDQU5aO0FBT0lDLFVBQVEsRUFBRSxvQ0FQZDtBQVFJQyxTQUFPLEVBQUUsSUFSYjtBQVNJQyxRQUFNLEVBQUUsbW1CQVRaO0FBVUlDLFFBQU0sRUFBRSxxbEJBVlo7QUFXSUMsUUFBTSxFQUFFLHNjQVhaO0FBWUlDLE9BQUssRUFBRSxJQVpYO0FBYUlDLFFBQU0sRUFBRSxVQWJaO0FBY0lDLFFBQU0sRUFBRSxJQWRaO0FBZUlDLFFBQU0sRUFBRSxVQWZaO0FBZ0JJQyxRQUFNLEVBQUU7QUFoQlosQ0FyQ1MsRUF1RFQ7QUFDSWYsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGVBRlg7QUFHSUMsVUFBUSxFQUFFLGtFQUhkO0FBSUlDLE1BQUksRUFBRSw0QkFKVjtBQUtJQyxNQUFJLEVBQUUsaUNBTFY7QUFNSUMsUUFBTSxFQUFFLGlEQU5aO0FBT0lDLFVBQVEsRUFBRSxtQ0FQZDtBQVFJQyxTQUFPLEVBQUUsSUFSYjtBQVNJQyxRQUFNLEVBQUUsb1FBVFo7QUFVSUMsUUFBTSxFQUFFLGlTQVZaO0FBV0lDLFFBQU0sRUFBRSx1WEFYWjtBQVlJQyxPQUFLLEVBQUUsY0FaWDtBQWFJQyxRQUFNLEVBQUUsWUFiWjtBQWNJQyxRQUFNLEVBQUUsWUFkWjtBQWVJQyxRQUFNLEVBQUUsWUFmWjtBQWdCSUMsUUFBTSxFQUFFO0FBaEJaLENBdkRTLENBQWI7QUEyRUEsK0RBQWVoQixJQUFmIiwiZmlsZSI6Ii4vZGF0YS9kYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd29yayA9IFtcbiAgICB7XG4gICAgICAgIGlkOiAnR0lNJyxcbiAgICAgICAgdGl0bGU6ICdHSU0gTENDLicsXG4gICAgICAgIG9uZUxpbmVyOiAnR0lNIExMQyBpcyBhbiBlc2NhcGUgcm9vbSBpbnNwaXJlZCB3ZWJzaXRlIHdoZXJlIHBsYXllcnMgd29yayB0b2dldGhlciB0byBmaW5kIGNsdWVzIHRvIGZyZWUgdGhlIGdob3N0IScsXG4gICAgICAgIG5vdGU6IG51bGwsXG4gICAgICAgIHRlY2g6ICdKYXZhU2NyaXB0IHwgUmVhY3QgfCBTb2NrZXQuaW8gfCBDb250ZXh0IEFwaSB8IE5vZGUgfCBFeHByZXNzJyxcbiAgICAgICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL0dJTS1MTEMnLFxuICAgICAgICBsaXZlU2l0ZTogJ2h0dHBzOi8vd3d3LmVzY2FwZWdpbS5jb20vJyxcbiAgICAgICAgbnBtTGluazogbnVsbCxcbiAgICAgICAgYmx1cmIxOiAnQ3JlYXRlZCBieSBhIHJlbW90ZSB0ZWFtIG9mIGZpdmUgb3ZlciBhbiBlaWdodCBkYXkgc3ByaW50LiBJbnNwaXJlZCBieSBlc2NhcGUgcm9vbXMgYW5kIGdob3N0IHN0b3JpZXMsIEdJTSAob3IgdGhlIEdob3N0IEluIHRoZSBNYWNoaW5lKSBhcHBlYXJzIHRvIGJlIGFuIGlubm9jdW91cyBjb3Jwb3JhdGUgd2Vic2l0ZSwgYnV0IGFzIHVzZXJzIGV4cGxvcmUgdGhleSBmaW5kIGNsdWVzIGFib3V0IHdoYXQgaXMgYWN0dWFsbHkgaGFwcGVuaW5nLiBCdWlsdCB1c2luZyBTb2NrZXQuaW8sIHRoZSBpbml0aWFsIGlkZWEgd2FzIHRoYXQgdGhlIHNpdGUgd291bGQgaG9zdCBtdWx0aXBsZSB2aXNpdG9ycyBhdCB0aGUgc2FtZSB0aW1lLCBzbyB0aGF0IHVzZXJzIGNvdWxkIGludGVyYWN0IGFuZCB3b3JrIHRvZ2V0aGVyIHRvIGZyZWUgdGhlIGdob3N0IGJlZm9yZSB0aW1lIHJhbiBvdXQsIGFuZCB0aGUgZ2hvc3QgZ2V0cyB0cmFwcGVkIGZvcmV2ZXIuIFVzZXJzIGNhbiBjaGF0IHdpdGggb25lIGFub3RoZXIsIHNlZSB3aGF0IG90aGVyIHVzZXJzIGFyZSBkb2luZywgYW5kIHdvcmsgdG9nZXRoZXIhIFRoZSBnaG9zdCBjYW4gYmUgZnJlZWQgb24geW91ciBvd24sIGJ1dCBpdCBpcyBtdWNoIG1vcmUgZGlmZmljdWx0LicsXG4gICAgICAgIGJsdXJiMjogJ091ciBmaXJzdCBodXJkbGUgd2l0aCB0aGlzIHByb2plY3Qgd2FzIGdldHRpbmcgbXVsdGlwbGUgY3Vyc29ycyB0byByZW5kZXIgb24gdGhlIHNjcmVlbiBhdCBvbmNlIGFuZCB1cGRhdGUgd2l0aCBlYWNoIGFuZCBldmVyeSBtb3VzZSBtb3ZlIGZvciBhbGwgdXNlcnMuIE9uY2Ugd2UgZ290IHRoYXQgZnVuY3Rpb25hbGl0eSBmaWd1cmVkIG91dCBvdmVyIHRoZSBzb2NrZXQgY29ubmVjdGlvbnMsIGFsbCBvdGhlciBpbnRlcmFjdGlvbnMgd2VyZSBmdW4gdG8gZmlndXJlIG91dCEnLFxuICAgICAgICBibHVyYjM6ICdUaGlzIHByb2plY3Qgd2FzIHJlYWxseSBhbiBhZHZlbnR1cmUgaW4gQ1NTIGFuaW1hdGlvbnMuIEltYWdlcyBkZWdyYWRlIG92ZXIgdGltZSwgY2x1ZXMgZ2xvdywgc291bmQgZWZmZWN0cywgc2hha2UgYW5pbWF0aW9ucywgYW5kIG1vZGFsIHdpbmRvd3MgbGV0IHlvdSBrbm93IHlvdSBhcmUgbWFraW5nIHByb2dyZXNzLCBlbGVtZW50cyBmbGlwLCBtb3ZlLCBhbmQgZGlzc2FwZWFyLiBFeHBsb3JlIGZvciB5b3Vyc2VsZiB0byBzZWUgaWYgeW91IGNhbiBmaW5kIGFsbCB0aGUgc3VycHJpc2VzIGFuZCBmcmVlIHRoZSBnaG9zdCEnLFxuICAgICAgICB2aWRlbzogJy9HSU0ubXA0JyxcbiAgICAgICAgaW1hZ2UxOiAnL0dJTS5wbmcnLFxuICAgICAgICBpbWFnZTI6ICcvR0lNMi5wbmcnLFxuICAgICAgICBpbWFnZTM6ICcvR0lNMy5wbmcnLFxuICAgICAgICBpbWFnZTQ6ICcvR0lNNC5wbmcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ1BQJyxcbiAgICAgICAgdGl0bGU6ICdQaXhlbCBQdXNoZXInLFxuICAgICAgICBvbmVMaW5lcjogJ1B1Ymxpc2hlZCBOUE0gcGFja2FnZSB0byBjcmVhdGUgdW5pcXVlIGFydCByaWdodCBpbiB0aGUgdGVybWluYWwgd2luZG93ISBVc2VycyBjYW4gYWxzbyBzYXZlLCB1cGxvYWQgYW5kIHZpZXcgYXJ0d29yayBpbiB0aGUgZ2FsbGVyeS4nLFxuICAgICAgICBub3RlOiBudWxsLFxuICAgICAgICB0ZWNoOiAnSmF2YVNjcmlwdCB8IE5vZGUgfCBFeHByZXNzIHwgR2l0SHViIE9BdXRoIHwgQXhpb3MgfCBJbnF1aXJlciB8IEJsZXNzZWQnLFxuICAgICAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vc3QtQVJULXVwJyxcbiAgICAgICAgbGl2ZVNpdGU6IG51bGwsXG4gICAgICAgIG5wbUxpbms6ICdodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9Ac3QtYXJ0LXVwL3BpeGVsLXB1c2hlcicsXG4gICAgICAgIGJsdXJiMTogJ1BpeGVsUHVzaGVyIGJ5IHN0QVJUdXAgY3JlYXRlcyBhIGNhbnZhcyBhbmQgZ2FsbGVyeSBleHBlcmllbmNlIHJpZ2h0IGluIHRoZSB1c2VycyB0ZXJtaW5hbCB3aW5kb3cgYnkgc2ltcGx5IHJ1bm5pbmcgdGhlIGNvbW1hbmQuIEluIHRoZSBjYW52YXMgdmlldyB1c2VycyBjYW4gY2hhbmdlIHRoZSBjYW52YXMgY29sb3IsIHBhaW50IGNvbG9yLCBicnVzaCBzaXplcywgZXJhc2UsIGFuZCBldmVuIGFkZCB0ZXh0IChhIHBvZW0sIG1heWJlPykgdG8gdGhlaXIgY3JlYXRpb25zLiBVc2luZyBHaXRIdWIgb0F1dGgsIHVzZXJzIGNhbiBzYXZlIGFuZCB1cGxvYWQgdGhlaXIgY29tcGxldGVkIGFydCB0byBiZSB2aWV3ZWQgaW4gdGhlIGdhbGxlcnkuIFdoZW4gaW4gZ2FsbGVyeSB2aWV3IHVzZXJzIGNhbiBtYW5hZ2UgdGhlaXIgb3duIGFydHdvcmtzIG9yIHZpZXcgYXJ0d29ya3MgY3JlYXRlZCBieSBhbGwgb3RoZXIgUGl4ZWxQdXNoZXJzIScsXG4gICAgICAgIGJsdXJiMjogJ0NyZWF0ZWQgYnkgYSBmdWxseSByZW1vdGUgdGVhbSBvZiBlaWdodCBkZXZlbG9wZXJzLCB0aGlzIGFwcCB3YXMgYSBjb21wbGV0ZWx5IG5ldyB1bmRlcnRha2luZyBmb3IgZXZlcnlvbmUgb24gdGhlIHRlYW0uIFRoZSBiaWdnZXN0IGNoYWxsZW5nZSB3YXMgbmF2aWdhdGluZyBob3cgdG8gaW50ZWdyYXRlIHR3byB2ZXJ5IGRpZmZlcmVudCBsaWJyYXJpZXMgd2l0aGluIG5vZGUgdG8gcnVuIGluIHRoZSB0ZXJtaW5hbCB3aW5kb3cuJyxcbiAgICAgICAgYmx1cmIzOiAnVGhpcyBwcm9qZWN0IHdhcyBzbyBmdW4gdG8gYmUgYSBwYXJ0IG9mLCBiZWluZyBhYmxlIHRvIGJyaW5nIGFydCBhbmQgdGVjaCB0b2dldGhlciBpbiB0aGUgdGVybWluYWwgd2luZG93IHdhcyBhbiBhZHZlbnR1cmUuIFdlIGxvb2sgZm9yd2FyZCB0byBzZWVpbmcgeW91ciBhcnR3b3JrcyBpbiB0aGUgZ2FsbGVyeSBjb2xsZWN0aW9uIScsXG4gICAgICAgIHZpZGVvOiAnL1BQdmlkLm1wNCcsXG4gICAgICAgIGltYWdlMTogJy9QUDEucG5nJyxcbiAgICAgICAgaW1hZ2UyOiAnL1BQMi5wbmcnLFxuICAgICAgICBpbWFnZTM6ICcvUFAzLnBuZycsXG4gICAgICAgIGltYWdlNDogbnVsbCxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdHRycsXG4gICAgICAgIHRpdGxlOiAnR2FpbmZ1bEdhcmRlbicsXG4gICAgICAgIG9uZUxpbmVyOiAnR2FyZGVuaW5nIHNpdGUgZm9yIHVzZXJzIHRvIHNlYXJjaCBmb3IgbmV3IHBsYW50cywgYW5kIHRyYWNrIHRoZWlyIGdhcmRlbiBpbmZvLicsXG4gICAgICAgIG5vdGU6ICdMaXZlIHNpdGUgdW5kZXIgY29uc3RydWN0aW9uLCBhcyBvdXIgc291cmNlIEFQSSB3YXMgZGlzY29udGludWVkLicsXG4gICAgICAgIHRlY2g6ICdKYXZhU2NyaXB0IHwgUmVhY3QgfCBOb2RlIHwgRXhwcmVzcyB8IFN1cGVyYWdlbnQgfCBUb2FzdGlmeScsXG4gICAgICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9HYWluZnVsR2FyZGVuJyxcbiAgICAgICAgbGl2ZVNpdGU6ICdodHRwczovL2dhaW5mdWxnYXJkZW4ubmV0bGlmeS5hcHAvJyxcbiAgICAgICAgbnBtTGluazogbnVsbCxcbiAgICAgICAgYmx1cmIxOiAnR2FpbmZ1bEdhcmRlbiBpcyBhIHBsYWNlIGZvciBnYXJkbmVycyBuZXcgYW5kIHNlYXNvbmVkIGFsaWtlIHRvIHNlYXJjaCBmb3IgbmV3IHBsYW50cyB0byBhZGQgdG8gdGhlaXIgZ2FyZGVucywga2VlcCBhIHdpc2hsaXN0IG9mIHBsYW50cyB0aGF0IHdvdWxkIGxpa2UgdG8gZ3JvdywgYW5kIGtlZXAgZGV0YWlsZWQgbm90ZXMgb24gdGhlIHBsYW50cyB0aGV5IGFyZSBhbHJlYWR5IGdyb3dpbmcuIEJvdGggZnJvbnQgYW5kIGJhY2sgZW5kcyBmb3IgdGhpcyBhcHAgd2VyZSBidWlsdCBieSBhIGZ1bGx5IHJlbW90ZSB0ZWFtIG9mIGZvdXIgaW4gb25lIHdlZWsuIE91ciBiYWNrIGVuZCBoYXMgdGhyZWUgcmVsYXRpb25hbCB0YWJsZXM6IHVzZXIgaW5mb3JtYXRpb24sIHdpc2hsaXN0IGl0ZW1zIGFuZCBnYXJkZW4gaXRlbXMgYm90aCB3aGljaCBpbmNsdWRlIGFuIG93bmVyIGlkIHRvIHRpZSB0aGUgaXRlbSB0byB0aGUgYXBwcm9wcmlhdGUgdXNlciwgYW5kIGxhc3RseSBub3RlcyB3aGljaCBjYXJyaWVzIGEgb3duZXIgaWQgYW5kIGEgcGxhbnQgaWQgc28gdGhlIG5vdGUgaXMgdGllZCB0byB0aGUgY29ycmVjdCBwbGFudCBpbiB0aGUgY29ycmVjdCB1c2VycyBnYXJkZW4uJyxcbiAgICAgICAgYmx1cmIyOiAnQWZ0ZXIgbmFycm93aW5nIGRvd24gdGhlIHNlYXJjaCByZXN1bHRzIGJ5IG5hbWUsIGVkaWJsZSBwYXJ0LCByZXF1aXJlZCBsaWdodCBvciB3aGV0aGVyIGl0IGlzIGEgdmVnZXRhYmxlIG9yIG5vdCwgdXNlcnMgdGhlbiBnZXQgYW4gdXBkYXRlZCBsaXN0IG9mIHBsYW50IHJlc3VsdHMuIEZyb20gdGhpcyBtYXRyaXggdXNlcnMgY2FuIGFkZCB0aGUgcGxhbnQgZGlyZWN0bHkgaW50byB0aGVpciBnYXJkZW4gb3Igd2lzaGxpc3QgYnkgY2xpY2tpbmcgb24gdGhlIGljb25zIG9uIHRoZSBjYXJkLCBvciB0aGV5IGNhbiB2aWV3IGEgZGV0YWlsIHBhZ2UuIFRoZSBkZXRhaWwgcGFnZSBjYWxscyB0aGUgcGxhbnQgQVBJIG9uY2UgYWdhaW4gdG8gZ2V0IHRoZSBtb3N0IGRldGFpbGVkIGluZm8gYXZhaWxhYmxlLCBpbmNsdWRpbmcgd2F0ZXIgYW5kIGxpZ2h0IHJlcXVpcmVtZW50IGRldGFpbHMsIGdlbml1cyBuYW1lLCBzb2lsIG5lZWRzLCBhbmQgYWRkaXRpb25hbCBwaG90b3MuIElmIHRoaXMgcGxhbnQgaXMgaW4geW91ciBnYXJkZW4gdGhpcyBpcyBhbHNvIHdoZXJlIHlvdSBjYW4gYWRkIG5vdGVzIHRvIHlvdXIgcGxhbnRcXCdzIGNhcmUgam91cm5hbC4nLFxuICAgICAgICBibHVyYjM6ICdJIGRlc2lnbmVkIHRoZSBsb2dvLCBpY29ucywgYnJhbmRpbmcgYW5kIGxvb2sgb2YgdGhlIGVudGlyZSBmcm9udGVuZCwgcGVyc29uYWxseSBzdHlsaW5nIHRoZSBzZWFyY2ggcmVzbHRzIHBhZ2UgYXMgYSByb2FkbWFwIHNvIG90aGVyIHRlYW0gbWVtYmVycyBjb3VsZCB0YWtlIG9uIG90aGVyIHBhZ2VzIHdoaWxlIG1haW50YWluaW5nIGEgc2VhbWxlc3MgbG9vayBhY3Jvc3MgdGhlIHNpdGUuIFNhZGx5IHRoaXMgYXBwIHdhcyBidWlsdCByZWZlcmVuY2luZyBpbmZvcm1hdGlvbiBmcm9tIHRoZSBUcmVmbGUgQVBJLCB3aGljaCBoYXMgc2luY2UgYmVlbiB0YWtlbiBkb3duLiBUaGUgdGVhbSBsb3ZlcyBHYWluZnVsR2FyZGVuIHNvIG11Y2ggdGhhdCB3ZSBkbyBoYXZlIHBsYW5zIHRvIGJ1aWxkIG91dCBvdXIgb3duIEFQSSB0byBwb3dlciB0aGUgYmFja2VuZC4gU28gY2hlY2sgYmFjayBzb29uIScsXG4gICAgICAgIHZpZGVvOiBudWxsLFxuICAgICAgICBpbWFnZTE6ICcvR0cxLnBuZycsXG4gICAgICAgIGltYWdlMjogbnVsbCxcbiAgICAgICAgaW1hZ2UzOiAnL0dHMi5wbmcnLFxuICAgICAgICBpbWFnZTQ6ICcvR0czLnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnVk0nLFxuICAgICAgICB0aXRsZTogJ1ZhbXBpcmUgTWF0Y2gnLFxuICAgICAgICBvbmVMaW5lcjogJ01lbW9yeSBjYXJkIG1hdGNoIGdhbWUgYmFzZWQgb24gdGhlIG1vdmllIGFuZCB0ZWxldmlzaW9uIHNlcmllcyAnLFxuICAgICAgICBub3RlOiAnV2hhdCBXZSBEbyBJbiBUaGUgU2hhZG93cy4nLFxuICAgICAgICB0ZWNoOiAnSmF2YVNjcmlwdCB8IEhUTUwgfCBDU1MgfCBRVW5pdCcsXG4gICAgICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9VbmlLaXR0eUNvcm5zL01lbW9yeUNhcmRHYW1lJyxcbiAgICAgICAgbGl2ZVNpdGU6ICdodHRwczovL3ZhbXBpcmVtYXRjaC5uZXRsaWZ5LmFwcC8nLFxuICAgICAgICBucG1MaW5rOiBudWxsLFxuICAgICAgICBibHVyYjE6ICdBIG1lbW9yeSBtYXRjaGluZyBjYXJkIGdhbWUgY3JlYXRlZCB3aXRoIHZhbmlsbGEgamF2YXNjcmlwdCwgSFRNTCwgYW5kIENTUy4gVGhpcyB2YW1waXJlIHRoZW1lZCBnYW1lIGlzIGEgaG9tYWdlIHRvIHRoZSBtb3ZpZSBhbmQgc2VyaWVzIFdoYXQgV2UgRG8gSW4gVGhlIFNoYWRvd3MuIFRoaXMgYXBwIHdhcyBjb21wbGV0ZWQgaW4gYSBmaXZlIGRheSBzcHJpbnQgYnkgYSByZW1vdGUgdGVhbSAgb2YgZm91ciB3b3JraW5nIGNvbGxhYm9yYXRpdmVseS4nLFxuICAgICAgICBibHVyYjI6ICdVc2VycyBhcmUgYXNrZWQgdG8gaW5wdXQgdGhlaXIgbmFtZSBhbmQgc2VsZWN0IG9uZSBvZiB0aGUgdGhyZWUgZGlmZmljdWx0eSBsZXZlbHMuIFRoaXMgaW5mbyBpcyBzYXZlZCB1c2luZyB0aGUgYnJvd3NlclxcJ3MgbG9jYWwgc3RvcmFnZSBmb3IgZGlzcGxheSBhbmQgZm9yIGRldGVybWluaW5nIHRoZSBudW1iZXIgb2YgY2FyZHMgaW4gdGhlIGdhbWUuIEEgZnVuIGNoYWxsZW5nZSB3YXMgdXRpbGl6aW5nIENTUyB0cmFuc2Zvcm0gYW5kIHJvdGF0ZSBhbmltYXRpb25zIGZvciB0aGUgY2FyZCBmbGlwcy4nLFxuICAgICAgICBibHVyYjM6ICdVc2VyXFwncyBzY29yZXMgYXJlIGFsc28gYWRkZWQgdG8gdGhlIGxvY2FsIHN0b3JhZ2UgaW5mbyBpbiBvcmRlciB0byBmZWVkIHRoZSBzY29yZWJvYXJkIHBhZ2UuIEJlY2F1c2Ugd2Ugd2VyZSBzbyBwcm91ZCBvZiB0aGVzZSBhd2Vzb21lIGlsbHVzdHJhdGlvbnMsIHdlIGhhZCB0byBidWlsZCBpbiBhIFxcXCJnaXZlIHVwXFxcIiBmdW5jdGlvbmFsaXR5IHNvIHRoYXQgZXZlbiBpZiB5b3UgY2FuXFwndCBiZWF0IHRoZSBoYXJkZXN0IGxldmVsLCB5b3UgY2FuIHN0aWxsIHNlZSBhbGwgb2YgdGhlIGNhcmRzIGZhY2UgdXAhIElsbHVzdHJhdGlvbiBjcmVkaXQgdG8gU29yYXlhIEJlbnNvbiwgeW91IGNhbiBmaW5kIGhlciBvbiB0aGUgR2l0SHViIGxpbmsgYWJvdmUuJyxcbiAgICAgICAgdmlkZW86ICcvVmFtcFZpZC5tcDQnLFxuICAgICAgICBpbWFnZTE6ICcvVmFtcDEucG5nJyxcbiAgICAgICAgaW1hZ2UyOiAnL1ZhbXAyLnBuZycsXG4gICAgICAgIGltYWdlMzogJy9WYW1wMy5wbmcnLFxuICAgICAgICBpbWFnZTQ6ICcvVmFtcDQucG5nJyxcbiAgICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgd29yazsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./data/data.js\n");

/***/ })

});