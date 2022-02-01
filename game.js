//alert("hello");
gamePattern=[];
userClickedPattern=[];
buttonColours=["red", "green", "blue", "yellow"];
var started=false;
var level=0;

$(document).keypress(function(){
if(!started)
{
  started=true;
  nextSequence();
  $("h1").text("Level "+level);
}
});


$(".btn").click(function(event){
  userChosenColour=event.target.id;
  userClickedPattern.push(userChosenColour);
  //console.log(userClickedPattern);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  gonext(userClickedPattern.length-1);
});


function gonext(currentlevel)
{if(userClickedPattern[currentlevel]==gamePattern[currentlevel])
  {console.log("success");
  if(userClickedPattern.length==gamePattern.length)
  {


  setTimeout(nextSequence,700);
}
}
else {
  {
setTimeout(function() {
  playSound("wrong");
  $("body").addClass("game-over");
  setTimeout(function() {
  $("body").removeClass("game-over");
},300);
},300);

    userClickedPattern=[];
    gamePattern=[];
    level=0;
    started=false;
    $("h1").text("Game Over");
    setTimeout(function(){
      $("h1").text("Press any key to play again");
    },1000)

  }
}
}



function nextSequence()
{
level++;
userClickedPattern=[];
$("h1").text("Level "+level);

randomNumber=Math.floor((Math.random() * 4));
//console.log(randomNumber);

randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);
//console.log(randomChosenColour);
 $("#" + randomChosenColour).delay(100).fadeOut().fadeIn('slow');

 playSound(randomChosenColour);

}

  function playSound(name) {
    var audio = new Audio(name + ".mp3");
    audio.play();
  }
  function animatePress(currentColour)
  {
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
    $("#"+currentColour).removeClass("pressed");
  },100);
  }
