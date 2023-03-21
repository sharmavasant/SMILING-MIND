/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ (() => {

var hamburger = document.querySelector(".hamburger");
var navLinks = document.querySelector(".nav-links");
var links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener('click', function () {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach(function (link) {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});
var numberOfSongs = document.querySelectorAll(".song").length;
for (var i = 0; i < numberOfSongs; i++) {
  document.querySelectorAll(".song")[i].addEventListener("click", function (e) {
    var song = e.target.classList.value;
    var tom1 = new Audio("/music/coniferous-forest.mp3");
    var tom2 = new Audio("/music/relaxing-music.mp3");
    var tom3 = new Audio("/music/calm-chill-beautiful.mp3");
    var tom4 = new Audio("/music/the-first-star-calm-relaxing-piano-solo-music.mp3");
    var tom5 = new Audio("/music/sleep.mp3");
    var tom6 = new Audio("/music/secret-friend.mp3");
    if (e.target.src == "http://localhost:3300/img/play.png") {
      console.log("play");
      e.target.src = "http://localhost:3300/img/pause.png";
      if (song == "song 1") {
        //var tom1 = new Audio("/music/coniferous-forest.mp3");
        if (tom1.paused) {
          tom1.play();
        } else {
          tom1.pause;
        }
      } else if (song == "song 2") {
        //var tom1 = new Audio("/music/relaxing-music.mp3");
        if (tom2.paused) {
          tom2.play();
        } else {
          tom1.pause();
        }
      } else if (song == "song 3") {
        //var tom1 = new Audio("/music/calm-chill-beautiful.mp3");
        if (tom1.paused) {
          tom1.play();
        }
      } else if (song == "song 4") {
        //var tom1 = new Audio("/music/the-first-star-calm-relaxing-piano-solo-music.mp3");
        if (tom1.paused) {
          tom1.play();
        }
      } else if (song == "song 5") {
        //var tom1 = new Audio("/music/sleep.mp3");
        if (tom1.paused) {
          tom1.play();
        }
      } else if (song == "song 6") {
        //var tom1 = new Audio("/music/secret-friend.mp3");
        if (tom1.paused) {
          tom1.play();
        }
      }
    } else if (e.target.src == "http://localhost:3300/img/pause.png") {
      e.target.src = "http://localhost:3300/img/play.png";
      var song = e.target.classList.value;
      console.log(song);
      if (song == "song 1") {
        //var tom1 = new Audio("/music/coniferous-forest.mp3");
        if (tom1.played) {
          tom1.pause;
        }
      } else if (song == "song 2") {
        var tom1 = new Audio("/music/relaxing-music.mp3");
        tom1.pause();
      } else if (song == "song 3") {
        var tom1 = new Audio("/music/calm-chill-beautiful.mp3");
        //tom1.pause();
        if (tom1.play) {
          tom1.pause;
        }
      } else if (song == "song 4") {
        var tom1 = new Audio("/music/the-first-star-calm-relaxing-piano-solo-music.mp3");
        tom1.pause();
      } else if (song == "song 5") {
        var tom1 = new Audio("/music/sleep.mp3");
        tom1.pause();
      } else if (song == "song 6") {
        var tom1 = new Audio("/music/secret-friend.mp3");
        tom1.pause();
      }
    }

    //Sing(i);
  });
}

function Sing(s, p) {
  var mysong = document.querySelectorAll(p);
  var icon = document.querySelectorAll(s);
  if (mysong.paused) {
    mysong.play();
    icon.src = "/img/pause.png";
  } else {
    mysong.pause();
    icon.src = "/img/play.png";
  }
}
console.log(numberOfSongs);

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/public/js/app": 0,
/******/ 			"public/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhack36"] = self["webpackChunkhack36"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["public/css/app"], () => (__webpack_require__("./resources/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["public/css/app"], () => (__webpack_require__("./resources/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;