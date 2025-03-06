var noofbuttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noofbuttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonclicked = this.innerHTML;
        makesound(buttonclicked);
        newanimation(buttonclicked);
    });
}

document.addEventListener("keypress", function (event) {
    makesound(event.key);
    newanimation(event.key);
});

function makesound(key) {
    switch (key) {
        case "w":
            var tom3 = new Audio("tom-3.mp3");
            tom3.play();
            break;
        case "a":
            var tom1 = new Audio("tom-1.mp3");
            tom1.play();
            break;
        case "s":
            var tom2 = new Audio("tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var tom4 = new Audio("tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("kickbass.mpeg");
            kick.play();
            break;
        case "l":
            var snare = new Audio("snare.mp3");
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

var music1 = new Audio("music.mp3");

function makesound1() {
    music1.pause();
    music1.currentTime = 0;
    music1.play();
}

document.addEventListener("keypress", function (event) {
    if ("wasdjkl".includes(event.key)) {
        if (!music1.paused) {
            music1.pause();
            music1.currentTime = 0;
        }
    }
});
