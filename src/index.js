import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import "animate.css";
import Narrative from "./narrative";

let narrative = new Narrative();

document.addEventListener("DOMContentLoaded", function () {
  const cityImage = document.getElementById("city-image");

  cityImage.addEventListener("click", function () {
      cityImage.style.display = "hidden";
  });
});

function animateCSS() {
  const x = document.getElementById('animate');
  const originalMarginLeft = x.style.marginLeft;
  const targetMarginLeft = '85%';

  if (originalMarginLeft === targetMarginLeft) {
    x.style.marginLeft = '0';
  } else {
    x.style.marginLeft = targetMarginLeft;
  }
  x.style.transition = "1.5s";
}

function updateStoryDisplay() {
  const textElement = document.querySelector("#story-text");
  const promptElementA = document.querySelector("#prompt-a");
  const promptElementB = document.querySelector("#prompt-b");
  const storyEndElement = document.querySelector('#story-end');

  const currentStep = narrative.getCurrentStep();

  if (currentStep.gameOver) {
    document.querySelector('#options').style.display = 'none';
    storyEndElement.classList.remove('hidden');
    storyEndElement.innerText = currentStep.gameOver;
  } else {
    document.querySelector('#options').style.display = 'block';
    storyEndElement.classList.add('hidden');
    textElement.innerText = currentStep.text;
    promptElementA.innerText = currentStep.choices[0].text;
    promptElementB.innerText = currentStep.choices[1].text;
  }
}

function showOption(event) {
  event.preventDefault()
  const radioValue = parseInt(document.querySelector("input[name='story-options']:checked").value);
  narrative.makeChoice(radioValue);
  updateStoryDisplay();
  animateCSS();
}

window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", showOption);


  updateStoryDisplay();
});
