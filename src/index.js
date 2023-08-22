import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import "animate.css";
import Narrative from "./narrative";

function animateCSS() {
  let x = document.getElementById("animate");
  x.style.marginLeft = "85%";
  x.style.transition = "1.5s";
}

function showOption(event) {
  // story.printCurrentStep();
  // story.makeChoice();
  event.preventDefault();
  const radioValue = document.querySelector(
    "input[name='story-options']:checked"
  ).value;
  let narrative = new Narrative();
  let textElement = document.querySelector("#story-text");
  const promptElementA = document.querySelector("#prompt-a");
  promptElementA.innerText = narrative.storyData[narrative.currentStep].choices[0].text;
  const promptElementB = document.querySelector("#prompt-b");
  promptElementB.innerText = narrative.storyData[narrative.currentStep].choices[1].text;
  textElement.innerText = null;
  if (radioValue === "0") {
    textElement.innerText = narrative.storyData[narrative.currentStep].text;
  }
  if (radioValue === "1") {
    textElement.innerText = narrative.storyData[narrative.currentStep].text;
  }
}

// function findStoryPath() {
//   let narrative = new Narrative();
//   console.log(narrative);
//   let value = document.querySelector("input[name='story-options']:checked");
//   let storyLineIdx0 = this.storyData[0].choices[0];
//   console.log(storyLineIdx0);
//   if (storyLineIdx0 && value === "a") {
//     console.log("working");
//   }
// }

window.addEventListener("load", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", showOption);
  form.addEventListener("submit", animateCSS);
});
