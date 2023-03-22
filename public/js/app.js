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

/*******************************************************************************************************************************************************/
//music backend
var icon1 = document.getElementById("song 1");
var icon2 = document.getElementById("song 2");
var icon3 = document.getElementById("song 3");
var icon4 = document.getElementById("song 4");
var icon5 = document.getElementById("song 5");
var icon6 = document.getElementById("song 6");
var songs = [icon1, icon2, icon3, icon4, icon5, icon6];
var song1 = document.getElementById("sing 1");
var song2 = document.getElementById("sing 2");
var song3 = document.getElementById("sing 3");
var song4 = document.getElementById("sing 4");
var song5 = document.getElementById("sing 5");
var song6 = document.getElementById("sing 6");
console.log(songs);
songs.forEach(myfunction);
function myfunction(item, index, arr) {
  item.addEventListener("click", function (e) {
    if (song1.paused) {
      //console.log("pause")
      song1.play();
      e.target.src = "http://localhost:3300/img/pause.png";
    } else if (song1.played) {
      song1.pause();
      e.target.src = "http://localhost:3300/img/play.png";
    }
    if (song2.paused) {
      //console.log("pause")
      song2.play();
      e.target.src = "http://localhost:3300/img/pause.png";
    } else if (song2.played) {
      song2.pause();
      e.target.src = "http://localhost:3300/img/play.png";
    }
    if (song3.paused) {
      //console.log("pause")
      song3.play();
      e.target.src = "http://localhost:3300/img/pause.png";
    } else if (song3.played) {
      song3.pause();
      e.target.src = "http://localhost:3300/img/play.png";
    }
    if (song4.paused) {
      //console.log("pause")
      song4.play();
      e.target.src = "http://localhost:3300/img/pause.png";
    } else if (song4.played) {
      song4.pause();
      e.target.src = "http://localhost:3300/img/play.png";
    }
    if (song5.paused) {
      //console.log("pause")
      song5.play();
      e.target.src = "http://localhost:3300/img/pause.png";
    } else if (song5.played) {
      song5.pause();
      e.target.src = "http://localhost:3300/img/play.png";
    }
    if (song6.paused) {
      //console.log("pause")
      song6.play();
      e.target.src = "http://localhost:3300/img/pause.png";
      console.log(song6);
    } else if (song6.played) {
      song6.pause();
      e.target.src = "http://localhost:3300/img/play.png";
    }
  });
  //console.log(item.src)
}

//******************************************************************************************************************************************************/
/*
var numberOfSongs = document.querySelectorAll(".song").length;

    for(var i=0, j=0; i<numberOfSongs; i++,j++) {
    // var sing = document.querySelectorAll("audio");
    document.querySelectorAll(".song")[i].addEventListener("click", function(e) {
         //var sing = document.querySelectorAll("audio")[i];
        //console.log(sing[j]);
        var song = (e.target.classList.value);
        var tom1 = new Audio("/music/coniferous-forest.mp3");
        var tom2 = new Audio("/music/relaxing-music.mp3");
        var tom3 = new Audio("/music/calm-chill-beautiful.mp3");
        var tom4 = new Audio("/music/the-first-star-calm-relaxing-piano-solo-music.mp3");
        var tom5 = new Audio("/music/sleep.mp3");
        var tom6 = new Audio("/music/secret-friend.mp3");
        if(tom1.paused) {
            tom1.play();
            e.target.src="http://localhost:3300/img/pause.png";
        }
        else {
            tom1.pause();
            e.target.src="http://localhost:3300/img/play.png";
        }
       if(e.target.src=="http://localhost:3300/img/play.png"){
            console.log("play");
            e.target.src="http://localhost:3300/img/pause.png";
            if(song=="song 1") {
                var tom1 = new Audio("/music/coniferous-forest.mp3");
                if(tom1.paused) {
                    tom1.play();
                }
                else {
                    tom1.pause();
                }
            }
            else if(song=="song 2") {
                //var tom1 = new Audio("/music/relaxing-music.mp3");
                if(tom2.paused) {
                    tom2.play();
                }
            }
            else if(song=="song 3") {
                //var tom1 = new Audio("/music/calm-chill-beautiful.mp3");
                if(tom1.paused) {
                    tom1.play();
                }
            }
            else if(song=="song 4") {
                //var tom1 = new Audio("/music/the-first-star-calm-relaxing-piano-solo-music.mp3");
                if(tom1.paused) {
                    tom1.play();
                }
            }   
            else if(song=="song 5") {
                //var tom1 = new Audio("/music/sleep.mp3");
                if(tom1.paused) {
                    tom1.play();
                }
            }
            else if(song=="song 6") {
                //var tom1 = new Audio("/music/secret-friend.mp3");
                if(tom1.paused) {
                    tom1.play();
                }
            }
        } 
        else if(e.target.src=="http://localhost:3300/img/pause.png") {
            e.target.src="http://localhost:3300/img/play.png";
            var song = (e.target.classList.value);
            console.log(song);
            if(song=="song 1") {
                //var tom1 = new Audio("/music/coniferous-forest.mp3");
                if(tom1.played) {
                    tom1.pause();
                }
            }
            else if(song=="song 2") {
                var tom1 = new Audio("/music/relaxing-music.mp3");
                tom1.pause();
            }
            else if(song=="song 3") {
                var tom1 = new Audio("/music/calm-chill-beautiful.mp3");
                //tom1.pause();
                if(tom1.play) {
                    tom1.pause;
                }
            }
            else if(song=="song 4") {
                var tom1 = new Audio("/music/the-first-star-calm-relaxing-piano-solo-music.mp3");
                tom1.pause();
            }   
            else if(song=="song 5") {
                var tom1 = new Audio("/music/sleep.mp3");
                tom1.pause();
            }
            else if(song=="song 6") {
                var tom1 = new Audio("/music/secret-friend.mp3");
                tom1.pause();
            }
        }

        
})

    }


console.log(numberOfSongs);
*/

/*****************************************************************************************************************************************/
//game configuration
score = 0;
cross = true;
audio = new Audio('/music/music.mp3');
audiogo = new Audio('/music/gameover.mp3');
setTimeout(function () {
  audio.play();
}, 1000);
document.onkeydown = function (e) {
  console.log("Key code is: ", e.keyCode);
  if (e.keyCode == 38) {
    dino = document.querySelector('.dino');
    dino.classList.add('animateDino');
    setTimeout(function () {
      dino.classList.remove('animateDino');
    }, 700);
  }
  if (e.keyCode == 39) {
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinoX + 112 + "px";
  }
  if (e.keyCode == 37) {
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinoX - 112 + "px";
  }
};
setInterval(function () {
  dino = document.querySelector('.dino');
  gameOver = document.querySelector('.gameOver');
  obstacle = document.querySelector('.obstacle');
  dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
  dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
  ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
  oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));
  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  // console.log(offsetX, offsetY)
  if (offsetX < 73 && offsetY < 52) {
    gameOver.innerHTML = "Game Over - Reload to Play Again";
    obstacle.classList.remove('obstacleAni');
    audiogo.play();
    setTimeout(function () {
      audiogo.pause();
      audio.pause();
    }, 1000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(function () {
      cross = true;
    }, 1000);
    setTimeout(function () {
      aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
      newDur = aniDur - 0.1;
      obstacle.style.animationDuration = newDur + 's';
      console.log('New animation duration: ', newDur);
    }, 500);
  }
}, 10);
function updateScore(score) {
  scoreCont.innerHTML = "Your Score: " + score;
}

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