"use strict";

//Step 1 
var red = $(".red");
var green = $(".grblue");
var blue = $(".blue");
var yellow = $(".yellow"); //ButtonColours holding array of colours 
//Step 1 array  

var buttonColours = ["red", "green", "blue", "yellow"]; //gamePattern which will hold the new randomChosenColour generated 
//gamePattern stores the random colour generator. 
//Step 2 array 

var gamePattern = [];
console.log(gamePattern); //-------------------------------------------------------------
//Step 4 array

var userClickedPattern = [];
console.log(userClickedPattern); //-------------------------------------------------------------
//Step 2 - Create a new pattern (1 and 2)
//nextSequence function generates random numbers from the array

function nextSequence() {
  var randomNumber = buttonColours[Math.floor(Math.random() * buttonColours.length)];
  return randomNumber;
}

var randomChosenColour = nextSequence(buttonColours);
console.log(randomChosenColour); //Add the values of randomChosenColour to the gamePattern array. 

gamePattern.push(randomChosenColour); //-------------------------------------------------------------
//Step 3 - Show Sequence to the user with Animations and Sounds. 

var button = $("#" + randomChosenColour);
console.log(button); //Step 3.2 - Animate flash to the button and give it sound when it plays
// button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
// var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
// audio.play();
//-------------------------------------------------------------
//Step 4
//Check which button is pressed and push them into userClickedPattern array

$(".btn").on("click", function () {
  var userChosenColour = this;
  userClickedPattern.push(userChosenColour);
}); //Step 5
//to play Audio when user clicks

button.on("click", function () {
  var audio = new Audio("sounds/" + $(this).attr("id") + ".mp3");
  audio.play();
}); //Step 6 
//Add Animations to user clicks

$(".btn").on("click", function animatePress(currentColour) {
  currentColour = $(this);
  currentColour.addClass("pressed");
  setTimeout(function () {
    currentColour.removeClass("pressed");
  }, 100);
}); //Step 7
//Start the game

$(document).on("keypress", function () {
  // console.log("key was pressed")
  nextSequence();
  button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  var level = 0;
  $("h1").text("Level 0");
});
//# sourceMappingURL=game.dev.js.map
