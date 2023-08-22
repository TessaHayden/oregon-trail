import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import "animate.css";
// import Narrative from "./narrative";

function animateCSS() {
    let x = document.getElementById("animate");
    x.style.marginLeft = "300px";
    x.style.transition = "1s";
}

function showOption(event) {
  event.preventDefault();
  let narrative = new Narrative();
  let userChoice = narrative.makeChoice(radioValue);
  console.log(userChoice);
  let textElement = document.querySelector("#story-text");
  const promptElementA = document.querySelector("#prompt-a");
  promptElementA.innerText =
    "Sneak into a Monsanto facility to gather information?";
  const promptElementB = document.querySelector("#prompt-b");
  promptElementB.innerText =
    "Seek out the eco-resistance in the nearby forest?";
  textElement.innerText = null;
  const radioValue = document.querySelector(
    "input[name='story-options']:checked"
  ).value;
  if (radioValue === "0") {
    textElement.innerText = "hi";
  }
  if (radioValue === "1") {
    textElement.innerText = "narrativeVal";
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
