const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// if(hamburger == null){
//     console.log('hamberger null hai');
// }
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

var audioElement;

		function playMusic(musicFile) {
			if (audioElement) {
				audioElement.pause();
				audioElement = null;
			}
			audioElement = new Audio(musicFile);
			audioElement.play();
		}

		function stopMusic() {
			if (audioElement) {
				audioElement.pause();
				audioElement = null;
			}
		}

/*****************************************************************************************************************************************/
//quiz 
const correctAnswers = ['B','B','B','B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')

form.addEventListener('submit', e => {
    e.preventDefault();

    let score=0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]) {
            score+=25;
        }
    })

    window.scrollTo(0,0);
    //result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval( () => {
        result.querySelector('span').textContent = `${score}%`;
        if(output === score) {
            clearInterval(timer);
        }
        else {
            output++;
        }
    }, 10);
});