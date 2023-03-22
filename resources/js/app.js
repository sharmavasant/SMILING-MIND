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
        //var sing = "sing"+(index+1);
        //console.log(sing);
        if(song1.paused) {
            console.log(item)
            song1.play();
            e.target.src = "http://localhost:3300/img/pause.png"
        }
        else if(song1.played){
            song1.pause();
            e.target.src = "http://localhost:3300/img/play.png"
        }
        /*
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
        }*/
    })
    item.addEventListener("click", (e) => {
        //var sing = "sing"+(index+1);
        //console.log(sing);
        if(song2.paused) {
            console.log(item)
            song2.play();
            e.target.src = "http://localhost:3300/img/pause.png"
        }
        else if(song2.played){
            song2.pause();
            e.target.src = "http://localhost:3300/img/play.png"
        }
        /*
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
        }*/
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
