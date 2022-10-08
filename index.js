var lengthofButtons = document.querySelectorAll(".drum").length;
for (let i=0;i<lengthofButtons; i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function (){
  var key = this.innerHTML;
  buttonAnimation(key);
  playSound(key);
  console.log();
});
}


function playSound(key){
switch (key) {
  case "w":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
    break;

  case "a":
  var tom1 = new Audio("sounds/tom-2.mp3");
  tom1.play();
    break;

  case "s":
  var tom1 = new Audio("sounds/tom-3.mp3");
  tom1.play();
    break;

  case "d":
  var tom1 = new Audio("sounds/tom-4.mp3");
  tom1.play();
    break;
  case "j":
  var tom1 = new Audio("sounds/snare.mp3");
  tom1.play();
    break;

  case "k":
  var tom1 = new Audio("sounds/kick-bass.mp3");
  tom1.play();
    break;

  case "l":
  var tom1 = new Audio("sounds/crash.mp3");
  tom1.play();
    break
  }
}

var keypress = document.addEventListener("keypress",(event)=> {
  playSound(event.key);
  buttonAnimation(event.key);
  beat(event.key)
  console.log(event.key);
  });

function buttonAnimation(currentKey){
  document.querySelector("."+currentKey).classList.add("pressed");
  setTimeout(()=>document.querySelector("."+currentKey).classList.remove("pressed"),100);
}

function tom() {
document.querySelector(".w").click();
setTimeout(()=>document.querySelector(".s").click(),200);
setTimeout(()=>document.querySelector(".d").click(),300);
setTimeout(()=>document.querySelector(".l").click(),500);
}


function beat(key){
if (key === "j"){
  tom();
  }
}
