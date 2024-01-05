"use strict";


const moveBackButton = document.querySelector("[data-back]");
const forwardButton = document.querySelector("[data-forward]");
const backgroundSideLine = document.querySelectorAll("[data-backLine]");
const stepElements = document.querySelectorAll(".step");
const stepInfoTextElem = document.querySelector(".info").querySelectorAll("div");


let step = 0 ;

function changeContent(index,prop){

  switch(prop){
    case "forward" : {
      let div = stepElements[index + 1].querySelector("div");
      let parent = div.parentNode;
    
      parent.style.backgroundColor = "white";
      parent.style.borderColor = "rgb(15,144,3)";
    
      div.textContent = "✓";
      div.style.color = "rgb(15,144,3)";
    }
    break;

    case "back" : 
      let div = stepElements[index + 1].querySelector("div");
      let parent = div.parentNode;

      parent.style.backgroundColor = "rgb(240, 231, 231)";
      parent.style.borderColor = "rgb(195, 188, 188)";
      parent.style.transition = "0.01s ese-in";

      div.textContent = "X";
      div.style.color = "black";
      div.style.transition = "0.01s ese-in";

  }
 

}

function displayStep(index){
  let opacity = 0;
  let timer = setInterval(() => {
      stepInfoTextElem[index + 1].style.opacity = opacity ;
      opacity+= 0.1;
      if (opacity >= 1){
        clearInterval(timer);
      }
  },20);
}

function hideStep(index){
  let opacity = 1;
  let timer = setInterval(() => {
      stepInfoTextElem[index + 1].style.opacity = opacity ;
      opacity-= 0.1;
      if (opacity <= 0){
        clearInterval(timer);
      }
  },20);
}

function moveForward(){
  if (step === 4) { return ;}

  let width = 0.1;
  let timer = setInterval(() => {
    backgroundSideLine[step].style.visibility = "visible";
    backgroundSideLine[step].style.width = width + "vw";
    width+= 0.2;
    if ( width >= 4){
      clearInterval(timer);
      changeContent(step,"forward");
      displayStep(step);
      step++;
    } 
  },20);



}

function moveBack(){
 
  if (step <= 0) { return ;}
  step--;

  let width = 4;
  let timer = setInterval(() => {
    backgroundSideLine[step].style.width = width + "vw";
    width-= 0.2;
    if ( width <= 0){
      clearInterval(timer);
      backgroundSideLine[step].style.visibility = "hidden";
      changeContent(step,"back");
      hideStep(step);
      
    } 
  },20);
}

forwardButton.addEventListener("click", moveForward);
moveBackButton.addEventListener("click", moveBack );