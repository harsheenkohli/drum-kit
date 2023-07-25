// detecting button press

for (var i = 0; i < document.querySelectorAll(".set > .drum").length; i++)
    document.querySelectorAll(".set > .drum")[i].addEventListener("click", function () {        
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });

document.addEventListener("keydown", function(alphabet) {
    makeSound(alphabet.key);
    buttonAnimation(alphabet.key);
})

// detecting keyboard press
function makeSound(key) {
    switch (key) {
        case "d" :
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
        case "r" :
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
        case "u" :
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        break;
        case "m" :
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;
        case "s" :
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        break;
        case "e" :
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;
        case "t" :
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
        default : console.log(buttonInnerHTML); 
    }
}

function buttonAnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.toggle("pressed");
    setTimeout(function () {
        activeButton.classList.toggle("pressed");
    }, 150);
}

// function handleClick() {
//     // button to trigger this function on being clicked
//     var audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
// }
// this.style.color = "#2e2e2e"