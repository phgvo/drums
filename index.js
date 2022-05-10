
// Detecting Button Press

var buttonNumber = document.querySelectorAll(".drum").length;
for (var i = 0; i < buttonNumber; i++) {   // start i = 0 , and next ask when should loops stop, finn ut ved check length
document.querySelectorAll(".drum")[i].addEventListener("click", function() {
//alert("I got a clicked on ");
//this.style.color = "white";
var buttonInnerHTML = this.innerHTML;
playSound(buttonInnerHTML);
buttonAmination(buttonInnerHTML);
console.log(buttonInnerHTML);
});
}

//Detecting Keyboard

document.addEventListener("keydown", function(event) {
 playSound(event.key);
 buttonAmination(event.key);
 console.log(event.key);
//this.style.color = "white";
//var key = event.key;
});

function playSound(key) {
switch (key) {
case "w":
var crash = new Audio("sounds/crash.mp3");
crash.play();
break;

case "a":
var kickbass = new Audio("sounds/kick-bass.mp3");
kickbass.play();
break;

case "s":
var snare = new Audio("sounds/snare.mp3");
snare.play();
break;

case "d":
var tom1 = new Audio("sounds/tom-1.mp3");
tom1.play();
break;

case "j":
var tom2 = new Audio("sounds/tom-2.mp3");
tom2.play();
break;

case "k":
var tom3 = new Audio("sounds/tom-3.mp3");
tom3.play();
break;

case "l":
var tom4 = new Audio("sounds/tom-4.mp3");
tom4.play();
break;

default: console.log();
}
}

function buttonAmination(currentKey) {
  var activeButton = document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
