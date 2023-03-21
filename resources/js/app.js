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

var numberOfSongs = document.querySelectorAll(".song").length;

for(var i=0; i<numberOfSongs; i++) {
    document.querySelectorAll(".song")[i].addEventListener("click", function(e) {
        var song = (e.target.classList.value);
        var tom1 = new Audio("/music/coniferous-forest.mp3");
        var tom2 = new Audio("/music/relaxing-music.mp3");
        var tom3 = new Audio("/music/calm-chill-beautiful.mp3");
        var tom4 = new Audio("/music/the-first-star-calm-relaxing-piano-solo-music.mp3");
        var tom5 = new Audio("/music/sleep.mp3");
        var tom6 = new Audio("/music/secret-friend.mp3");
        if(e.target.src=="http://localhost:3300/img/play.png"){
            console.log("play");
            e.target.src="http://localhost:3300/img/pause.png";
            if(song=="song 1") {
                //var tom1 = new Audio("/music/coniferous-forest.mp3");
                if(tom1.paused) {
                    tom1.play();
                }
                else {
                    tom1.pause;
                }
            }
            else if(song=="song 2") {
                //var tom1 = new Audio("/music/relaxing-music.mp3");
                if(tom2.paused) {
                    tom2.play();
                }
                else {
                    tom1.pause();
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
                    tom1.pause;
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

        //Sing(i);
})
}


function Sing(s,p) {
    var mysong = document.querySelectorAll(p);
        var icon = document.querySelectorAll(s);
        if(mysong.paused) {
            mysong.play();
            icon.src = "/img/pause.png";
        }
        else {
            mysong.pause();
            icon.src = "/img/play.png"
        }
    }
console.log(numberOfSongs);