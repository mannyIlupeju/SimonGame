//Step 1 
// const red = $(".red");
// const green= $(".green");
// const blue = $(".blue");
// const yellow = $(".yellow")

//ButtonColours holding array of colours 
//Step 1 array  
var buttonColours = ["red", "green","blue","yellow"]

//gamePattern which will hold the new randomChosenColour generated 
//gamePattern stores the random colour generator. 

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).on("keypress", function(){
  if(!started) {
    console.log("hey there");
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});



$(".btn").on("click", function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playAudio(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
})


function checkAnswer(currentLevel) {

  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if(userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    playAudio("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game over, press Any key to Restart");

    setTimeout(function (){
      $("body").removeClass("game-over"); 
    },300);

    startOver();
  }
}



//-------------------------------------------------------------
//Step 2 - Create a new pattern (1 and 2)
//nextSequence function generates random numbers from the array
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level "+ level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

//Step 3.2 - Animate flash to the button and give it sound when it plays
  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
  playAudio(randomChosenColour);
}




//Add Animations to user clicks
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed")
  
  setTimeout(function(){
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//to play Audio when user clicks
function playAudio(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

//Step 7
//Start the game
// var level = 0 

// if ($("level-title").text == "Press A Key to Start") {
//   $(document).on("keypress", function(){
//     nextSequence; 
//     button.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
//     var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
//     audio.play();
//     $("level-title").text = "Level 0"
//   });
// }













