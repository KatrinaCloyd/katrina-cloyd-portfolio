/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/DevDetail";
exports.ids = ["pages/DevDetail"];
exports.modules = {

/***/ "./data/data.js":
/*!**********************!*\
  !*** ./data/data.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst work = [{\n  id: 'GIM',\n  title: 'GIM LCC.',\n  oneLiner: 'GIM LLC is an escape room inspired website where players work together to find clues to free the ghost!',\n  note: null,\n  tech: 'JavaScript | React | Socket.io | Context Api | Node | Express',\n  github: 'https://github.com/GIM-LLC',\n  liveSite: 'https://www.escapegim.com/',\n  npmLink: null,\n  blurb1: 'Created by a remote team of five over an eight day sprint. Inspired by escape rooms and ghost stories, GIM (or the Ghost In the Machine) appears to be an innocuous corporate website, but as users explore they find clues about what is actually happening. Built using Socket.io, the initial idea was that the site would host multiple visitors at the same time, so that users could interact and work together to free the ghost before time ran out, and the ghost gets trapped forever. Users can chat with one another, see what other users are doing, and work together! The ghost can be freed on your own, but it is much more difficult.',\n  blurb2: 'Our first hurdle with this project was getting multiple cursors to render on the screen at once and update with each and every mouse move for all users. Once we got that functionality figured out over the socket connections, all other interactions were fun to figure out!',\n  blurb3: 'This project was really an adventure in CSS animations. Images degrade over time, clues glow, sound effects, shake animations, and modal windows let you know you are making progress, elements flip, move, and dissapear. Explore for yourself to see if you can find all the surprises and free the ghost!',\n  video: '/GIM.mp4',\n  image1: '/GIM.png',\n  image2: '/GIM2.png',\n  image3: '/GIM3.png',\n  image4: '/GIM4.png'\n}, {\n  id: 'PP',\n  title: 'Pixel Pusher',\n  oneLiner: 'Published NPM package to create unique art right in the terminal window! Users can also save, upload and view artwork in the gallery.',\n  note: null,\n  tech: 'JavaScript | Node | Express | GitHub OAuth | Axios | Inquirer | Blessed',\n  github: 'https://github.com/st-ART-up',\n  liveSite: null,\n  npmLink: 'https://www.npmjs.com/package/@st-art-up/pixel-pusher',\n  blurb1: 'PixelPusher by stARTup creates a canvas and gallery experience right in the users terminal window by simply running the command. In the canvas view users can change the canvas color, paint color, brush sizes, erase, and even add text (a poem, maybe?) to their creations. Using GitHub oAuth, users can save and upload their completed art to be viewed in the gallery. When in gallery view users can manage their own artworks or view artworks created by all other PixelPushers!',\n  blurb2: 'Created by a fully remote team of eight developers, this app was a completely new undertaking for everyone on the team. The biggest challenge was navigating how to integrate two very different libraries within node to run in the terminal window.',\n  blurb3: 'This project was so fun to be a part of, being able to bring art and tech together in the terminal window was an adventure. We look forward to seeing your artworks in the gallery collection!',\n  video: '/PPvid.mp4',\n  image1: '/PP1.png',\n  image2: '/PP2.png',\n  image3: '/PP3.png',\n  image4: null\n}, {\n  id: 'GG',\n  title: 'GainfulGarden',\n  oneLiner: 'Gardening site for users to search for new plants, and track their garden info. Live site under construction, as our source API was discontinued.',\n  note: null,\n  tech: 'JavaScript | React | Node | Express | Superagent | Toastify',\n  github: 'https://github.com/GainfulGarden',\n  liveSite: 'https://gainfulgarden.netlify.app/',\n  npmLink: null,\n  blurb1: 'GainfulGarden is a place for gardners new and seasoned alike to search for new plants to add to their gardens, keep a wishlist of plants that would like to grow, and keep detailed notes on the plants they are already growing. Both front and back ends for this app were built by a fully remote team of four in one week. Our back end has three relational tables: user information, wishlist items and garden items both which include an owner id to tie the item to the appropriate user, and lastly notes which carries a owner id and a plant id so the note is tied to the correct plant in the correct users garden.',\n  blurb2: 'After narrowing down the search results by name, edible part, required light or whether it is a vegetable or not, users then get an updated list of plant results. From this matrix users can add the plant directly into their garden or wishlist by clicking on the icons on the card, or they can view a detail page. The detail page calls the plant API once again to get the most detailed info available, including water and light requirement details, genius name, soil needs, and additional photos. If this plant is in your garden this is also where you can add notes to your plant\\'s care journal.',\n  blurb3: 'I designed the logo, icons, branding and look of the entire frontend, personally styling the search reslts page as a roadmap so other team members could take on other pages while maintaining a seamless look across the site. Sadly this app was built referencing information from the Trefle API, which has since been taken down. The team loves GainfulGarden so much that we do have plans to build out our own API to power the backend. So check back soon!',\n  video: null,\n  image1: '/GG1.png',\n  image2: null,\n  image3: '/GG2.png',\n  image4: '/GG3.png'\n}, {\n  id: 'VM',\n  title: 'Vampire Match',\n  oneLiner: 'Memory card match game based on the movie and television series ',\n  note: 'What We Do In The Shadows.',\n  tech: 'JavaScript | HTML | CSS | QUnit',\n  github: 'https://github.com/UniKittyCorns/MemoryCardGame',\n  liveSite: 'https://vampirematch.netlify.app/',\n  npmLink: null,\n  blurb1: 'A memory matching card game created with vanilla javascript, HTML, and CSS. This vampire themed game is a homage to the movie and series What We Do In The Shadows. This app was completed in a five day sprint by a remote team  of four working collaboratively.',\n  blurb2: 'Users are asked to input their name and select one of the three difficulty levels. This info is saved using the browser\\'s local storage for display and for determining the number of cards in the game. A fun challenge was utilizing CSS transform and rotate animations for the card flips.',\n  blurb3: 'User\\'s scores are also added to the local storage info in order to feed the scoreboard page. Because we were so proud of these awesome illustrations, we had to build in a \\\"give up\\\" functionality so that even if you can\\'t beat the hardest level, you can still see all of the cards face up! Illustration credit to Soraya Benson, you can find her on the GitHub link above.',\n  video: '/VampVid.mp4',\n  image1: '/Vamp1.png',\n  image2: '/Vamp2.png',\n  image3: '/Vamp3.png',\n  image4: '/Vamp4.png'\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (work);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXRyaW5hLWNsb3lkLXBvcnRmb2xpby8uL2RhdGEvZGF0YS5qcz9lZmJhIl0sIm5hbWVzIjpbIndvcmsiLCJpZCIsInRpdGxlIiwib25lTGluZXIiLCJub3RlIiwidGVjaCIsImdpdGh1YiIsImxpdmVTaXRlIiwibnBtTGluayIsImJsdXJiMSIsImJsdXJiMiIsImJsdXJiMyIsInZpZGVvIiwiaW1hZ2UxIiwiaW1hZ2UyIiwiaW1hZ2UzIiwiaW1hZ2U0Il0sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsSUFBSSxHQUFHLENBQ1Q7QUFDSUMsSUFBRSxFQUFFLEtBRFI7QUFFSUMsT0FBSyxFQUFFLFVBRlg7QUFHSUMsVUFBUSxFQUFFLHlHQUhkO0FBSUlDLE1BQUksRUFBRSxJQUpWO0FBS0lDLE1BQUksRUFBRSwrREFMVjtBQU1JQyxRQUFNLEVBQUUsNEJBTlo7QUFPSUMsVUFBUSxFQUFFLDRCQVBkO0FBUUlDLFNBQU8sRUFBRSxJQVJiO0FBU0lDLFFBQU0sRUFBRSx5bkJBVFo7QUFVSUMsUUFBTSxFQUFFLGlSQVZaO0FBV0lDLFFBQU0sRUFBRSw4U0FYWjtBQVlJQyxPQUFLLEVBQUUsVUFaWDtBQWFJQyxRQUFNLEVBQUUsVUFiWjtBQWNJQyxRQUFNLEVBQUUsV0FkWjtBQWVJQyxRQUFNLEVBQUUsV0FmWjtBQWdCSUMsUUFBTSxFQUFFO0FBaEJaLENBRFMsRUFtQlQ7QUFDSWYsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGNBRlg7QUFHSUMsVUFBUSxFQUFFLHVJQUhkO0FBSUlDLE1BQUksRUFBRSxJQUpWO0FBS0lDLE1BQUksRUFBRSx5RUFMVjtBQU1JQyxRQUFNLEVBQUUsOEJBTlo7QUFPSUMsVUFBUSxFQUFFLElBUGQ7QUFRSUMsU0FBTyxFQUFFLHVEQVJiO0FBU0lDLFFBQU0sRUFBRSw0ZEFUWjtBQVVJQyxRQUFNLEVBQUUsdVBBVlo7QUFXSUMsUUFBTSxFQUFFLGdNQVhaO0FBWUlDLE9BQUssRUFBRSxZQVpYO0FBYUlDLFFBQU0sRUFBRSxVQWJaO0FBY0lDLFFBQU0sRUFBRSxVQWRaO0FBZUlDLFFBQU0sRUFBRSxVQWZaO0FBZ0JJQyxRQUFNLEVBQUU7QUFoQlosQ0FuQlMsRUFxQ1Q7QUFDSWYsSUFBRSxFQUFFLElBRFI7QUFFSUMsT0FBSyxFQUFFLGVBRlg7QUFHSUMsVUFBUSxFQUFFLG1KQUhkO0FBSUlDLE1BQUksRUFBRSxJQUpWO0FBS0lDLE1BQUksRUFBRSw2REFMVjtBQU1JQyxRQUFNLEVBQUUsa0NBTlo7QUFPSUMsVUFBUSxFQUFFLG9DQVBkO0FBUUlDLFNBQU8sRUFBRSxJQVJiO0FBU0lDLFFBQU0sRUFBRSxtbUJBVFo7QUFVSUMsUUFBTSxFQUFFLHFsQkFWWjtBQVdJQyxRQUFNLEVBQUUsc2NBWFo7QUFZSUMsT0FBSyxFQUFFLElBWlg7QUFhSUMsUUFBTSxFQUFFLFVBYlo7QUFjSUMsUUFBTSxFQUFFLElBZFo7QUFlSUMsUUFBTSxFQUFFLFVBZlo7QUFnQklDLFFBQU0sRUFBRTtBQWhCWixDQXJDUyxFQXVEVDtBQUNJZixJQUFFLEVBQUUsSUFEUjtBQUVJQyxPQUFLLEVBQUUsZUFGWDtBQUdJQyxVQUFRLEVBQUUsa0VBSGQ7QUFJSUMsTUFBSSxFQUFFLDRCQUpWO0FBS0lDLE1BQUksRUFBRSxpQ0FMVjtBQU1JQyxRQUFNLEVBQUUsaURBTlo7QUFPSUMsVUFBUSxFQUFFLG1DQVBkO0FBUUlDLFNBQU8sRUFBRSxJQVJiO0FBU0lDLFFBQU0sRUFBRSxvUUFUWjtBQVVJQyxRQUFNLEVBQUUsaVNBVlo7QUFXSUMsUUFBTSxFQUFFLHVYQVhaO0FBWUlDLE9BQUssRUFBRSxjQVpYO0FBYUlDLFFBQU0sRUFBRSxZQWJaO0FBY0lDLFFBQU0sRUFBRSxZQWRaO0FBZUlDLFFBQU0sRUFBRSxZQWZaO0FBZ0JJQyxRQUFNLEVBQUU7QUFoQlosQ0F2RFMsQ0FBYjtBQTJFQSwrREFBZWhCLElBQWYiLCJmaWxlIjoiLi9kYXRhL2RhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3b3JrID0gW1xuICAgIHtcbiAgICAgICAgaWQ6ICdHSU0nLFxuICAgICAgICB0aXRsZTogJ0dJTSBMQ0MuJyxcbiAgICAgICAgb25lTGluZXI6ICdHSU0gTExDIGlzIGFuIGVzY2FwZSByb29tIGluc3BpcmVkIHdlYnNpdGUgd2hlcmUgcGxheWVycyB3b3JrIHRvZ2V0aGVyIHRvIGZpbmQgY2x1ZXMgdG8gZnJlZSB0aGUgZ2hvc3QhJyxcbiAgICAgICAgbm90ZTogbnVsbCxcbiAgICAgICAgdGVjaDogJ0phdmFTY3JpcHQgfCBSZWFjdCB8IFNvY2tldC5pbyB8IENvbnRleHQgQXBpIHwgTm9kZSB8IEV4cHJlc3MnLFxuICAgICAgICBnaXRodWI6ICdodHRwczovL2dpdGh1Yi5jb20vR0lNLUxMQycsXG4gICAgICAgIGxpdmVTaXRlOiAnaHR0cHM6Ly93d3cuZXNjYXBlZ2ltLmNvbS8nLFxuICAgICAgICBucG1MaW5rOiBudWxsLFxuICAgICAgICBibHVyYjE6ICdDcmVhdGVkIGJ5IGEgcmVtb3RlIHRlYW0gb2YgZml2ZSBvdmVyIGFuIGVpZ2h0IGRheSBzcHJpbnQuIEluc3BpcmVkIGJ5IGVzY2FwZSByb29tcyBhbmQgZ2hvc3Qgc3RvcmllcywgR0lNIChvciB0aGUgR2hvc3QgSW4gdGhlIE1hY2hpbmUpIGFwcGVhcnMgdG8gYmUgYW4gaW5ub2N1b3VzIGNvcnBvcmF0ZSB3ZWJzaXRlLCBidXQgYXMgdXNlcnMgZXhwbG9yZSB0aGV5IGZpbmQgY2x1ZXMgYWJvdXQgd2hhdCBpcyBhY3R1YWxseSBoYXBwZW5pbmcuIEJ1aWx0IHVzaW5nIFNvY2tldC5pbywgdGhlIGluaXRpYWwgaWRlYSB3YXMgdGhhdCB0aGUgc2l0ZSB3b3VsZCBob3N0IG11bHRpcGxlIHZpc2l0b3JzIGF0IHRoZSBzYW1lIHRpbWUsIHNvIHRoYXQgdXNlcnMgY291bGQgaW50ZXJhY3QgYW5kIHdvcmsgdG9nZXRoZXIgdG8gZnJlZSB0aGUgZ2hvc3QgYmVmb3JlIHRpbWUgcmFuIG91dCwgYW5kIHRoZSBnaG9zdCBnZXRzIHRyYXBwZWQgZm9yZXZlci4gVXNlcnMgY2FuIGNoYXQgd2l0aCBvbmUgYW5vdGhlciwgc2VlIHdoYXQgb3RoZXIgdXNlcnMgYXJlIGRvaW5nLCBhbmQgd29yayB0b2dldGhlciEgVGhlIGdob3N0IGNhbiBiZSBmcmVlZCBvbiB5b3VyIG93biwgYnV0IGl0IGlzIG11Y2ggbW9yZSBkaWZmaWN1bHQuJyxcbiAgICAgICAgYmx1cmIyOiAnT3VyIGZpcnN0IGh1cmRsZSB3aXRoIHRoaXMgcHJvamVjdCB3YXMgZ2V0dGluZyBtdWx0aXBsZSBjdXJzb3JzIHRvIHJlbmRlciBvbiB0aGUgc2NyZWVuIGF0IG9uY2UgYW5kIHVwZGF0ZSB3aXRoIGVhY2ggYW5kIGV2ZXJ5IG1vdXNlIG1vdmUgZm9yIGFsbCB1c2Vycy4gT25jZSB3ZSBnb3QgdGhhdCBmdW5jdGlvbmFsaXR5IGZpZ3VyZWQgb3V0IG92ZXIgdGhlIHNvY2tldCBjb25uZWN0aW9ucywgYWxsIG90aGVyIGludGVyYWN0aW9ucyB3ZXJlIGZ1biB0byBmaWd1cmUgb3V0IScsXG4gICAgICAgIGJsdXJiMzogJ1RoaXMgcHJvamVjdCB3YXMgcmVhbGx5IGFuIGFkdmVudHVyZSBpbiBDU1MgYW5pbWF0aW9ucy4gSW1hZ2VzIGRlZ3JhZGUgb3ZlciB0aW1lLCBjbHVlcyBnbG93LCBzb3VuZCBlZmZlY3RzLCBzaGFrZSBhbmltYXRpb25zLCBhbmQgbW9kYWwgd2luZG93cyBsZXQgeW91IGtub3cgeW91IGFyZSBtYWtpbmcgcHJvZ3Jlc3MsIGVsZW1lbnRzIGZsaXAsIG1vdmUsIGFuZCBkaXNzYXBlYXIuIEV4cGxvcmUgZm9yIHlvdXJzZWxmIHRvIHNlZSBpZiB5b3UgY2FuIGZpbmQgYWxsIHRoZSBzdXJwcmlzZXMgYW5kIGZyZWUgdGhlIGdob3N0IScsXG4gICAgICAgIHZpZGVvOiAnL0dJTS5tcDQnLFxuICAgICAgICBpbWFnZTE6ICcvR0lNLnBuZycsXG4gICAgICAgIGltYWdlMjogJy9HSU0yLnBuZycsXG4gICAgICAgIGltYWdlMzogJy9HSU0zLnBuZycsXG4gICAgICAgIGltYWdlNDogJy9HSU00LnBuZycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnUFAnLFxuICAgICAgICB0aXRsZTogJ1BpeGVsIFB1c2hlcicsXG4gICAgICAgIG9uZUxpbmVyOiAnUHVibGlzaGVkIE5QTSBwYWNrYWdlIHRvIGNyZWF0ZSB1bmlxdWUgYXJ0IHJpZ2h0IGluIHRoZSB0ZXJtaW5hbCB3aW5kb3chIFVzZXJzIGNhbiBhbHNvIHNhdmUsIHVwbG9hZCBhbmQgdmlldyBhcnR3b3JrIGluIHRoZSBnYWxsZXJ5LicsXG4gICAgICAgIG5vdGU6IG51bGwsXG4gICAgICAgIHRlY2g6ICdKYXZhU2NyaXB0IHwgTm9kZSB8IEV4cHJlc3MgfCBHaXRIdWIgT0F1dGggfCBBeGlvcyB8IElucXVpcmVyIHwgQmxlc3NlZCcsXG4gICAgICAgIGdpdGh1YjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zdC1BUlQtdXAnLFxuICAgICAgICBsaXZlU2l0ZTogbnVsbCxcbiAgICAgICAgbnBtTGluazogJ2h0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL0BzdC1hcnQtdXAvcGl4ZWwtcHVzaGVyJyxcbiAgICAgICAgYmx1cmIxOiAnUGl4ZWxQdXNoZXIgYnkgc3RBUlR1cCBjcmVhdGVzIGEgY2FudmFzIGFuZCBnYWxsZXJ5IGV4cGVyaWVuY2UgcmlnaHQgaW4gdGhlIHVzZXJzIHRlcm1pbmFsIHdpbmRvdyBieSBzaW1wbHkgcnVubmluZyB0aGUgY29tbWFuZC4gSW4gdGhlIGNhbnZhcyB2aWV3IHVzZXJzIGNhbiBjaGFuZ2UgdGhlIGNhbnZhcyBjb2xvciwgcGFpbnQgY29sb3IsIGJydXNoIHNpemVzLCBlcmFzZSwgYW5kIGV2ZW4gYWRkIHRleHQgKGEgcG9lbSwgbWF5YmU/KSB0byB0aGVpciBjcmVhdGlvbnMuIFVzaW5nIEdpdEh1YiBvQXV0aCwgdXNlcnMgY2FuIHNhdmUgYW5kIHVwbG9hZCB0aGVpciBjb21wbGV0ZWQgYXJ0IHRvIGJlIHZpZXdlZCBpbiB0aGUgZ2FsbGVyeS4gV2hlbiBpbiBnYWxsZXJ5IHZpZXcgdXNlcnMgY2FuIG1hbmFnZSB0aGVpciBvd24gYXJ0d29ya3Mgb3IgdmlldyBhcnR3b3JrcyBjcmVhdGVkIGJ5IGFsbCBvdGhlciBQaXhlbFB1c2hlcnMhJyxcbiAgICAgICAgYmx1cmIyOiAnQ3JlYXRlZCBieSBhIGZ1bGx5IHJlbW90ZSB0ZWFtIG9mIGVpZ2h0IGRldmVsb3BlcnMsIHRoaXMgYXBwIHdhcyBhIGNvbXBsZXRlbHkgbmV3IHVuZGVydGFraW5nIGZvciBldmVyeW9uZSBvbiB0aGUgdGVhbS4gVGhlIGJpZ2dlc3QgY2hhbGxlbmdlIHdhcyBuYXZpZ2F0aW5nIGhvdyB0byBpbnRlZ3JhdGUgdHdvIHZlcnkgZGlmZmVyZW50IGxpYnJhcmllcyB3aXRoaW4gbm9kZSB0byBydW4gaW4gdGhlIHRlcm1pbmFsIHdpbmRvdy4nLFxuICAgICAgICBibHVyYjM6ICdUaGlzIHByb2plY3Qgd2FzIHNvIGZ1biB0byBiZSBhIHBhcnQgb2YsIGJlaW5nIGFibGUgdG8gYnJpbmcgYXJ0IGFuZCB0ZWNoIHRvZ2V0aGVyIGluIHRoZSB0ZXJtaW5hbCB3aW5kb3cgd2FzIGFuIGFkdmVudHVyZS4gV2UgbG9vayBmb3J3YXJkIHRvIHNlZWluZyB5b3VyIGFydHdvcmtzIGluIHRoZSBnYWxsZXJ5IGNvbGxlY3Rpb24hJyxcbiAgICAgICAgdmlkZW86ICcvUFB2aWQubXA0JyxcbiAgICAgICAgaW1hZ2UxOiAnL1BQMS5wbmcnLFxuICAgICAgICBpbWFnZTI6ICcvUFAyLnBuZycsXG4gICAgICAgIGltYWdlMzogJy9QUDMucG5nJyxcbiAgICAgICAgaW1hZ2U0OiBudWxsLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogJ0dHJyxcbiAgICAgICAgdGl0bGU6ICdHYWluZnVsR2FyZGVuJyxcbiAgICAgICAgb25lTGluZXI6ICdHYXJkZW5pbmcgc2l0ZSBmb3IgdXNlcnMgdG8gc2VhcmNoIGZvciBuZXcgcGxhbnRzLCBhbmQgdHJhY2sgdGhlaXIgZ2FyZGVuIGluZm8uIExpdmUgc2l0ZSB1bmRlciBjb25zdHJ1Y3Rpb24sIGFzIG91ciBzb3VyY2UgQVBJIHdhcyBkaXNjb250aW51ZWQuJyxcbiAgICAgICAgbm90ZTogbnVsbCxcbiAgICAgICAgdGVjaDogJ0phdmFTY3JpcHQgfCBSZWFjdCB8IE5vZGUgfCBFeHByZXNzIHwgU3VwZXJhZ2VudCB8IFRvYXN0aWZ5JyxcbiAgICAgICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL0dhaW5mdWxHYXJkZW4nLFxuICAgICAgICBsaXZlU2l0ZTogJ2h0dHBzOi8vZ2FpbmZ1bGdhcmRlbi5uZXRsaWZ5LmFwcC8nLFxuICAgICAgICBucG1MaW5rOiBudWxsLFxuICAgICAgICBibHVyYjE6ICdHYWluZnVsR2FyZGVuIGlzIGEgcGxhY2UgZm9yIGdhcmRuZXJzIG5ldyBhbmQgc2Vhc29uZWQgYWxpa2UgdG8gc2VhcmNoIGZvciBuZXcgcGxhbnRzIHRvIGFkZCB0byB0aGVpciBnYXJkZW5zLCBrZWVwIGEgd2lzaGxpc3Qgb2YgcGxhbnRzIHRoYXQgd291bGQgbGlrZSB0byBncm93LCBhbmQga2VlcCBkZXRhaWxlZCBub3RlcyBvbiB0aGUgcGxhbnRzIHRoZXkgYXJlIGFscmVhZHkgZ3Jvd2luZy4gQm90aCBmcm9udCBhbmQgYmFjayBlbmRzIGZvciB0aGlzIGFwcCB3ZXJlIGJ1aWx0IGJ5IGEgZnVsbHkgcmVtb3RlIHRlYW0gb2YgZm91ciBpbiBvbmUgd2Vlay4gT3VyIGJhY2sgZW5kIGhhcyB0aHJlZSByZWxhdGlvbmFsIHRhYmxlczogdXNlciBpbmZvcm1hdGlvbiwgd2lzaGxpc3QgaXRlbXMgYW5kIGdhcmRlbiBpdGVtcyBib3RoIHdoaWNoIGluY2x1ZGUgYW4gb3duZXIgaWQgdG8gdGllIHRoZSBpdGVtIHRvIHRoZSBhcHByb3ByaWF0ZSB1c2VyLCBhbmQgbGFzdGx5IG5vdGVzIHdoaWNoIGNhcnJpZXMgYSBvd25lciBpZCBhbmQgYSBwbGFudCBpZCBzbyB0aGUgbm90ZSBpcyB0aWVkIHRvIHRoZSBjb3JyZWN0IHBsYW50IGluIHRoZSBjb3JyZWN0IHVzZXJzIGdhcmRlbi4nLFxuICAgICAgICBibHVyYjI6ICdBZnRlciBuYXJyb3dpbmcgZG93biB0aGUgc2VhcmNoIHJlc3VsdHMgYnkgbmFtZSwgZWRpYmxlIHBhcnQsIHJlcXVpcmVkIGxpZ2h0IG9yIHdoZXRoZXIgaXQgaXMgYSB2ZWdldGFibGUgb3Igbm90LCB1c2VycyB0aGVuIGdldCBhbiB1cGRhdGVkIGxpc3Qgb2YgcGxhbnQgcmVzdWx0cy4gRnJvbSB0aGlzIG1hdHJpeCB1c2VycyBjYW4gYWRkIHRoZSBwbGFudCBkaXJlY3RseSBpbnRvIHRoZWlyIGdhcmRlbiBvciB3aXNobGlzdCBieSBjbGlja2luZyBvbiB0aGUgaWNvbnMgb24gdGhlIGNhcmQsIG9yIHRoZXkgY2FuIHZpZXcgYSBkZXRhaWwgcGFnZS4gVGhlIGRldGFpbCBwYWdlIGNhbGxzIHRoZSBwbGFudCBBUEkgb25jZSBhZ2FpbiB0byBnZXQgdGhlIG1vc3QgZGV0YWlsZWQgaW5mbyBhdmFpbGFibGUsIGluY2x1ZGluZyB3YXRlciBhbmQgbGlnaHQgcmVxdWlyZW1lbnQgZGV0YWlscywgZ2VuaXVzIG5hbWUsIHNvaWwgbmVlZHMsIGFuZCBhZGRpdGlvbmFsIHBob3Rvcy4gSWYgdGhpcyBwbGFudCBpcyBpbiB5b3VyIGdhcmRlbiB0aGlzIGlzIGFsc28gd2hlcmUgeW91IGNhbiBhZGQgbm90ZXMgdG8geW91ciBwbGFudFxcJ3MgY2FyZSBqb3VybmFsLicsXG4gICAgICAgIGJsdXJiMzogJ0kgZGVzaWduZWQgdGhlIGxvZ28sIGljb25zLCBicmFuZGluZyBhbmQgbG9vayBvZiB0aGUgZW50aXJlIGZyb250ZW5kLCBwZXJzb25hbGx5IHN0eWxpbmcgdGhlIHNlYXJjaCByZXNsdHMgcGFnZSBhcyBhIHJvYWRtYXAgc28gb3RoZXIgdGVhbSBtZW1iZXJzIGNvdWxkIHRha2Ugb24gb3RoZXIgcGFnZXMgd2hpbGUgbWFpbnRhaW5pbmcgYSBzZWFtbGVzcyBsb29rIGFjcm9zcyB0aGUgc2l0ZS4gU2FkbHkgdGhpcyBhcHAgd2FzIGJ1aWx0IHJlZmVyZW5jaW5nIGluZm9ybWF0aW9uIGZyb20gdGhlIFRyZWZsZSBBUEksIHdoaWNoIGhhcyBzaW5jZSBiZWVuIHRha2VuIGRvd24uIFRoZSB0ZWFtIGxvdmVzIEdhaW5mdWxHYXJkZW4gc28gbXVjaCB0aGF0IHdlIGRvIGhhdmUgcGxhbnMgdG8gYnVpbGQgb3V0IG91ciBvd24gQVBJIHRvIHBvd2VyIHRoZSBiYWNrZW5kLiBTbyBjaGVjayBiYWNrIHNvb24hJyxcbiAgICAgICAgdmlkZW86IG51bGwsXG4gICAgICAgIGltYWdlMTogJy9HRzEucG5nJyxcbiAgICAgICAgaW1hZ2UyOiBudWxsLFxuICAgICAgICBpbWFnZTM6ICcvR0cyLnBuZycsXG4gICAgICAgIGltYWdlNDogJy9HRzMucG5nJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdWTScsXG4gICAgICAgIHRpdGxlOiAnVmFtcGlyZSBNYXRjaCcsXG4gICAgICAgIG9uZUxpbmVyOiAnTWVtb3J5IGNhcmQgbWF0Y2ggZ2FtZSBiYXNlZCBvbiB0aGUgbW92aWUgYW5kIHRlbGV2aXNpb24gc2VyaWVzICcsXG4gICAgICAgIG5vdGU6ICdXaGF0IFdlIERvIEluIFRoZSBTaGFkb3dzLicsXG4gICAgICAgIHRlY2g6ICdKYXZhU2NyaXB0IHwgSFRNTCB8IENTUyB8IFFVbml0JyxcbiAgICAgICAgZ2l0aHViOiAnaHR0cHM6Ly9naXRodWIuY29tL1VuaUtpdHR5Q29ybnMvTWVtb3J5Q2FyZEdhbWUnLFxuICAgICAgICBsaXZlU2l0ZTogJ2h0dHBzOi8vdmFtcGlyZW1hdGNoLm5ldGxpZnkuYXBwLycsXG4gICAgICAgIG5wbUxpbms6IG51bGwsXG4gICAgICAgIGJsdXJiMTogJ0EgbWVtb3J5IG1hdGNoaW5nIGNhcmQgZ2FtZSBjcmVhdGVkIHdpdGggdmFuaWxsYSBqYXZhc2NyaXB0LCBIVE1MLCBhbmQgQ1NTLiBUaGlzIHZhbXBpcmUgdGhlbWVkIGdhbWUgaXMgYSBob21hZ2UgdG8gdGhlIG1vdmllIGFuZCBzZXJpZXMgV2hhdCBXZSBEbyBJbiBUaGUgU2hhZG93cy4gVGhpcyBhcHAgd2FzIGNvbXBsZXRlZCBpbiBhIGZpdmUgZGF5IHNwcmludCBieSBhIHJlbW90ZSB0ZWFtICBvZiBmb3VyIHdvcmtpbmcgY29sbGFib3JhdGl2ZWx5LicsXG4gICAgICAgIGJsdXJiMjogJ1VzZXJzIGFyZSBhc2tlZCB0byBpbnB1dCB0aGVpciBuYW1lIGFuZCBzZWxlY3Qgb25lIG9mIHRoZSB0aHJlZSBkaWZmaWN1bHR5IGxldmVscy4gVGhpcyBpbmZvIGlzIHNhdmVkIHVzaW5nIHRoZSBicm93c2VyXFwncyBsb2NhbCBzdG9yYWdlIGZvciBkaXNwbGF5IGFuZCBmb3IgZGV0ZXJtaW5pbmcgdGhlIG51bWJlciBvZiBjYXJkcyBpbiB0aGUgZ2FtZS4gQSBmdW4gY2hhbGxlbmdlIHdhcyB1dGlsaXppbmcgQ1NTIHRyYW5zZm9ybSBhbmQgcm90YXRlIGFuaW1hdGlvbnMgZm9yIHRoZSBjYXJkIGZsaXBzLicsXG4gICAgICAgIGJsdXJiMzogJ1VzZXJcXCdzIHNjb3JlcyBhcmUgYWxzbyBhZGRlZCB0byB0aGUgbG9jYWwgc3RvcmFnZSBpbmZvIGluIG9yZGVyIHRvIGZlZWQgdGhlIHNjb3JlYm9hcmQgcGFnZS4gQmVjYXVzZSB3ZSB3ZXJlIHNvIHByb3VkIG9mIHRoZXNlIGF3ZXNvbWUgaWxsdXN0cmF0aW9ucywgd2UgaGFkIHRvIGJ1aWxkIGluIGEgXFxcImdpdmUgdXBcXFwiIGZ1bmN0aW9uYWxpdHkgc28gdGhhdCBldmVuIGlmIHlvdSBjYW5cXCd0IGJlYXQgdGhlIGhhcmRlc3QgbGV2ZWwsIHlvdSBjYW4gc3RpbGwgc2VlIGFsbCBvZiB0aGUgY2FyZHMgZmFjZSB1cCEgSWxsdXN0cmF0aW9uIGNyZWRpdCB0byBTb3JheWEgQmVuc29uLCB5b3UgY2FuIGZpbmQgaGVyIG9uIHRoZSBHaXRIdWIgbGluayBhYm92ZS4nLFxuICAgICAgICB2aWRlbzogJy9WYW1wVmlkLm1wNCcsXG4gICAgICAgIGltYWdlMTogJy9WYW1wMS5wbmcnLFxuICAgICAgICBpbWFnZTI6ICcvVmFtcDIucG5nJyxcbiAgICAgICAgaW1hZ2UzOiAnL1ZhbXAzLnBuZycsXG4gICAgICAgIGltYWdlNDogJy9WYW1wNC5wbmcnLFxuICAgIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCB3b3JrOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/data.js\n");

/***/ }),

/***/ "./pages/DevDetail.js":
/*!****************************!*\
  !*** ./pages/DevDetail.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DevDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/workDetail.module.css */ \"./styles/workDetail.module.css\");\n/* harmony import */ var _styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n\nvar _jsxFileName = \"/Users/kmc/Alchemy/projects/katrina-cloyd-portfolio/pages/DevDetail.js\";\n\n\n\nfunction DevDetail() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const project = router.query.id;\n  let currentProj = _data_data__WEBPACK_IMPORTED_MODULE_2__.default.find(e => e.id === project);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n      className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),\n      children: currentProj.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().tech),\n      children: currentProj.tech\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icons),\n      children: [currentProj.github && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: currentProj.github,\n        target: \"_blank\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n          src: \"/git.svg\",\n          alt: \"github\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 21\n      }, this), currentProj.liveSite && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: currentProj.liveSite,\n        target: \"_blank\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n          src: \"/site.svg\",\n          alt: \"live site\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 21\n      }, this), currentProj.npmLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n        href: currentProj.npmLink,\n        target: \"_blank\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n          className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon),\n          src: \"/npm.svg\",\n          alt: \"npm\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 21\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), currentProj.video && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n      className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().demo),\n      controls: true,\n      autoPlay: true,\n      muted: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n        src: currentProj.video,\n        type: \"video/mp4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 17\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: currentProj.blurb1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().detailImgContainer),\n      children: [currentProj.image1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: currentProj.image1,\n        alt: \"screenshot 1 of app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 40\n      }, this), currentProj.image2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: currentProj.image2,\n        alt: \"screenshot 2 of app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 40\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: currentProj.blurb2\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().detailImgContainer),\n      children: [currentProj.image3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: currentProj.image3,\n        alt: \"screenshot 3 of app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 40\n      }, this), currentProj.image4 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: currentProj.image4,\n        alt: \"screenshot 4 of app\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 40\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      children: currentProj.blurb3\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      className: (_styles_workDetail_module_css__WEBPACK_IMPORTED_MODULE_3___default().backBtn),\n      onClick: () => router.push('/DevWork'),\n      children: \"BACK TO DEV WORK\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXRyaW5hLWNsb3lkLXBvcnRmb2xpby8uL3BhZ2VzL0RldkRldGFpbC5qcz9iMjcwIl0sIm5hbWVzIjpbIkRldkRldGFpbCIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2plY3QiLCJxdWVyeSIsImlkIiwiY3VycmVudFByb2oiLCJ3b3JrIiwiZSIsInN0eWxlcyIsInRpdGxlIiwidGVjaCIsImdpdGh1YiIsImxpdmVTaXRlIiwibnBtTGluayIsInZpZGVvIiwiYmx1cmIxIiwiaW1hZ2UxIiwiaW1hZ2UyIiwiYmx1cmIyIiwiaW1hZ2UzIiwiaW1hZ2U0IiwiYmx1cmIzIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsR0FBcUI7QUFDaEMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU1DLE9BQU8sR0FBR0YsTUFBTSxDQUFDRyxLQUFQLENBQWFDLEVBQTdCO0FBRUEsTUFBSUMsV0FBVyxHQUFHQyxvREFBQSxDQUFVQyxDQUFDLElBQUlBLENBQUMsQ0FBQ0gsRUFBRixLQUFTRixPQUF4QixDQUFsQjtBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUVNLDRFQUFmO0FBQUEsZ0JBQThCSCxXQUFXLENBQUNJO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUcsZUFBUyxFQUFFRCwyRUFBZDtBQUFBLGdCQUE0QkgsV0FBVyxDQUFDSztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFLLGVBQVMsRUFBRUYsNEVBQWhCO0FBQUEsaUJBQ0tILFdBQVcsQ0FBQ00sTUFBWixpQkFDRztBQUFHLFlBQUksRUFBRU4sV0FBVyxDQUFDTSxNQUFyQjtBQUE2QixjQUFNLEVBQUMsUUFBcEM7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUVILDJFQUFoQjtBQUE2QixhQUFHLEVBQUMsVUFBakM7QUFBNEMsYUFBRyxFQUFDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRlIsRUFLS0gsV0FBVyxDQUFDTyxRQUFaLGlCQUNHO0FBQUcsWUFBSSxFQUFFUCxXQUFXLENBQUNPLFFBQXJCO0FBQStCLGNBQU0sRUFBQyxRQUF0QztBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBRUosMkVBQWhCO0FBQTZCLGFBQUcsRUFBQyxXQUFqQztBQUE2QyxhQUFHLEVBQUM7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOUixFQVNLSCxXQUFXLENBQUNRLE9BQVosaUJBQ0c7QUFBRyxZQUFJLEVBQUVSLFdBQVcsQ0FBQ1EsT0FBckI7QUFBOEIsY0FBTSxFQUFDLFFBQXJDO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFFTCwyRUFBaEI7QUFBNkIsYUFBRyxFQUFDLFVBQWpDO0FBQTRDLGFBQUcsRUFBQztBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKLEVBaUJLSCxXQUFXLENBQUNTLEtBQVosaUJBQ0c7QUFDSSxlQUFTLEVBQUVOLDJFQURmO0FBRUksY0FBUSxNQUZaO0FBR0ksY0FBUSxNQUhaO0FBSUksV0FBSyxNQUpUO0FBQUEsNkJBTUk7QUFBUSxXQUFHLEVBQUVILFdBQVcsQ0FBQ1MsS0FBekI7QUFBZ0MsWUFBSSxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEJSLGVBMEJJO0FBQUEsZ0JBQUlULFdBQVcsQ0FBQ1U7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCSixlQTJCSTtBQUFLLGVBQVMsRUFBRVAseUZBQWhCO0FBQUEsaUJBQ0tILFdBQVcsQ0FBQ1csTUFBWixpQkFBc0I7QUFBSyxXQUFHLEVBQUVYLFdBQVcsQ0FBQ1csTUFBdEI7QUFBOEIsV0FBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEM0IsRUFFS1gsV0FBVyxDQUFDWSxNQUFaLGlCQUFzQjtBQUFLLFdBQUcsRUFBRVosV0FBVyxDQUFDWSxNQUF0QjtBQUE4QixXQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQkosZUErQkk7QUFBQSxnQkFBSVosV0FBVyxDQUFDYTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JKLGVBZ0NJO0FBQUssZUFBUyxFQUFFVix5RkFBaEI7QUFBQSxpQkFDS0gsV0FBVyxDQUFDYyxNQUFaLGlCQUFzQjtBQUFLLFdBQUcsRUFBRWQsV0FBVyxDQUFDYyxNQUF0QjtBQUE4QixXQUFHLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUQzQixFQUVLZCxXQUFXLENBQUNlLE1BQVosaUJBQXNCO0FBQUssV0FBRyxFQUFFZixXQUFXLENBQUNlLE1BQXRCO0FBQThCLFdBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDSixlQW9DSTtBQUFBLGdCQUFJZixXQUFXLENBQUNnQjtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcENKLGVBcUNJO0FBQVEsZUFBUyxFQUFFYiw4RUFBbkI7QUFBbUMsYUFBTyxFQUFFLE1BQU1SLE1BQU0sQ0FBQ3NCLElBQVAsQ0FBWSxVQUFaLENBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIIiwiZmlsZSI6Ii4vcGFnZXMvRGV2RGV0YWlsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy93b3JrRGV0YWlsLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHdvcmsgZnJvbSAnLi4vZGF0YS9kYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGV2RGV0YWlsKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IHByb2plY3QgPSByb3V0ZXIucXVlcnkuaWQ7XG5cbiAgICBsZXQgY3VycmVudFByb2ogPSB3b3JrLmZpbmQoZSA9PiBlLmlkID09PSBwcm9qZWN0KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PntjdXJyZW50UHJvai50aXRsZX08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGVjaH0+e2N1cnJlbnRQcm9qLnRlY2h9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uc30+XG4gICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmdpdGh1YiAmJlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjdXJyZW50UHJvai5naXRodWJ9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPScvZ2l0LnN2ZycgYWx0PSdnaXRodWInIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYT59XG4gICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmxpdmVTaXRlICYmXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2N1cnJlbnRQcm9qLmxpdmVTaXRlfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz0nL3NpdGUuc3ZnJyBhbHQ9J2xpdmUgc2l0ZScgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPn1cbiAgICAgICAgICAgICAgICB7Y3VycmVudFByb2oubnBtTGluayAmJlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtjdXJyZW50UHJvai5ucG1MaW5rfSB0YXJnZXQ9J19ibGFuayc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz0nL25wbS5zdmcnIGFsdD0nbnBtJyAvPlxuICAgICAgICAgICAgICAgICAgICA8L2E+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7Y3VycmVudFByb2oudmlkZW8gJiZcbiAgICAgICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVtb31cbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHNcbiAgICAgICAgICAgICAgICAgICAgYXV0b1BsYXlcbiAgICAgICAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXtjdXJyZW50UHJvai52aWRlb30gdHlwZT1cInZpZGVvL21wNFwiIC8+XG4gICAgICAgICAgICAgICAgPC92aWRlbz59XG4gICAgICAgICAgICA8cD57Y3VycmVudFByb2ouYmx1cmIxfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsSW1nQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudFByb2ouaW1hZ2UxICYmIDxpbWcgc3JjPXtjdXJyZW50UHJvai5pbWFnZTF9IGFsdD0nc2NyZWVuc2hvdCAxIG9mIGFwcCcgLz59XG4gICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmltYWdlMiAmJiA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2UyfSBhbHQ9J3NjcmVlbnNob3QgMiBvZiBhcHAnIC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD57Y3VycmVudFByb2ouYmx1cmIyfTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsSW1nQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudFByb2ouaW1hZ2UzICYmIDxpbWcgc3JjPXtjdXJyZW50UHJvai5pbWFnZTN9IGFsdD0nc2NyZWVuc2hvdCAzIG9mIGFwcCcgLz59XG4gICAgICAgICAgICAgICAge2N1cnJlbnRQcm9qLmltYWdlNCAmJiA8aW1nIHNyYz17Y3VycmVudFByb2ouaW1hZ2U0fSBhbHQ9J3NjcmVlbnNob3QgNCBvZiBhcHAnIC8+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cD57Y3VycmVudFByb2ouYmx1cmIzfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYmFja0J0bn0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9EZXZXb3JrJyl9PkJBQ0sgVE8gREVWIFdPUks8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/DevDetail.js\n");

/***/ }),

/***/ "./styles/workDetail.module.css":
/*!**************************************!*\
  !*** ./styles/workDetail.module.css ***!
  \**************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"title\": \"workDetail_title__1cQ03\",\n\t\"tech\": \"workDetail_tech__3kSuP\",\n\t\"demo\": \"workDetail_demo__1skEI\",\n\t\"icons\": \"workDetail_icons__1BPsx\",\n\t\"icon\": \"workDetail_icon__3rpnE\",\n\t\"detailImgContainer\": \"workDetail_detailImgContainer__2dKg8\",\n\t\"backBtn\": \"workDetail_backBtn__2Xp56\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXRyaW5hLWNsb3lkLXBvcnRmb2xpby8uL3N0eWxlcy93b3JrRGV0YWlsLm1vZHVsZS5jc3M/N2Q5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3N0eWxlcy93b3JrRGV0YWlsLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcIndvcmtEZXRhaWxfdGl0bGVfXzFjUTAzXCIsXG5cdFwidGVjaFwiOiBcIndvcmtEZXRhaWxfdGVjaF9fM2tTdVBcIixcblx0XCJkZW1vXCI6IFwid29ya0RldGFpbF9kZW1vX18xc2tFSVwiLFxuXHRcImljb25zXCI6IFwid29ya0RldGFpbF9pY29uc19fMUJQc3hcIixcblx0XCJpY29uXCI6IFwid29ya0RldGFpbF9pY29uX18zcnBuRVwiLFxuXHRcImRldGFpbEltZ0NvbnRhaW5lclwiOiBcIndvcmtEZXRhaWxfZGV0YWlsSW1nQ29udGFpbmVyX18yZEtnOFwiLFxuXHRcImJhY2tCdG5cIjogXCJ3b3JrRGV0YWlsX2JhY2tCdG5fXzJYcDU2XCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/workDetail.module.css\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/DevDetail.js"));
module.exports = __webpack_exports__;

})();