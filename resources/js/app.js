const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
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
var songs = [icon1,icon2,icon3,icon4,icon5,icon6]
var song1 = document.getElementById("sing 1");
var song2 = document.getElementById("sing 2");
var song3 = document.getElementById("sing 3");
var song4 = document.getElementById("sing 4");
var song5 = document.getElementById("sing 5");
var song6 = document.getElementById("sing 6");
console.log(songs)

songs.forEach(myfunction);

function myfunction(item,index,arr) {
    item.addEventListener("click", (e) => {
        if(song1.paused) {
            //console.log("pause")
            song1.play();
            e.target.src = "http://localhost:3300/img/pause.png"
        }
        else if(song1.played){
            song1.pause();
            e.target.src = "http://localhost:3300/img/play.png"
        }
        if(song2.paused) {
            //console.log("pause")
            song2.play();
            e.target.src = "http://localhost:3300/img/pause.png"
        }
        else if(song2.played){
            song2.pause();
            e.target.src = "http://localhost:3300/img/play.png"
        }
        if(song3.paused) {
            //console.log("pause")
            song3.play();
            e.target.src = "http://localhost:3300/img/pause.png"
        }
        else if(song3.played){
            song3.pause();
            e.target.src = "http://localhost:3300/img/play.png"
        }
        if(song4.paused) {
            //console.log("pause")
            song4.play();
            e.target.src = "http://localhost:3300/img/pause.png"
        }
        else if(song4.played){
            song4.pause();
            e.target.src = "http://localhost:3300/img/play.png"
        }
        if(song5.paused) {
            //console.log("pause")
            song5.play();
            e.target.src = "http://localhost:3300/img/pause.png"
        }
        else if(song5.played){
            song5.pause();
            e.target.src = "http://localhost:3300/img/play.png"
        }
        if(song6.paused) {
            //console.log("pause")
            song6.play();
            e.target.src = "http://localhost:3300/img/pause.png"
            console.log(song6)
        }
        else if(song6.played){
            song6.pause();
            e.target.src = "http://localhost:3300/img/play.png"
        }
    })
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
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
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
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
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
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}