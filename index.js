var noofbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonclicked = this.innerHTML;
        makesound(buttonclicked);
        newanimation(buttonclicked);
    });
}

document.addEventListener("keypress", function (event) {
    if ("wasdjkl".includes(event.key)) {
        if (!music1.paused) {
            music1.pause();  // Stop the music if playing
            music1.currentTime = 0; // Reset music to start
        }
        makesound(event.key);
        newanimation(event.key);
    }
});

function makesound(key) {
    switch (key) {
        case "w":
            var tom3 = new Audio("assets/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "a":
            var tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom4 = new Audio("assets/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("assets/sounds/kickbass.mpeg");
            kick.play();
            break;
        case "l":
            var snare = new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(this);
    }
}

function newanimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);
    activebutton.classList.add("pressed");
    activebutton.classList.add("drum1");

    setTimeout(function () {
        activebutton.classList.remove("pressed");
        activebutton.classList.remove("drum1");
    }, 100);
}

// Global music variable
var music1 = new Audio("assets/sounds/music.mp3");

function makesound1() {
    music1.pause(); // Stop the current playback if playing
    music1.currentTime = 0; // Reset music to the start
    music1.play(); // Play from the beginning
}
