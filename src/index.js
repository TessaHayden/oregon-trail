import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

// class Narrative {
//   constructor(storyData) {
//     this.storyData = storyData;
//     this.currentStep = 0;
//   }

//   getCurrentStep() {
//     return this.storyData[this.currentStep];
//   }
// }

// 1. Take ChoiceA or ChoiceB and register in showOption function
// 2. Object or class with array of storyline
// 3. class or index to see what order of story we're on i.e. You've chosen A, display A out of index/array, etc.
// 4. button on form to change order of counter

// button.addEventListener('click', () => getCurrentStep());

let storyText =
  "You're in the heart of the city, watching as smog clouds the skyline. Monsanto's logo is everywhere.";
// let storyTextA = "Sneak into a Monsanto facility to gather information?";
// let storyTextB = "Seek out the eco-resistance in the nearby forest?";

// selectoption
function showOption(event) {
  event.preventDefault();
  const textElement = document.querySelector("#story-text"); //Place to display story
  const promptElementA = document.querySelector('#prompt-a');
  promptElementA.innerText = "Sneak into a Monsanto facility to gather information?";
  const promptElementB = document.querySelector('#prompt-b');
  promptElementB.innerText = "Seek out the eco-resistance in the nearby forest?";
  textElement.innerText = storyText;
  const radioValue = document.querySelector(
    "input[name='story-options']:checked"
  ).value;
  if (radioValue === "a") {
    textElement.innerText =
      "Sneak into Monsanto facility: You manage to bypass security and enter the facility, but it's crawling with guards.";
  }
  if (radioValue === "b") {
    textElement.innerText =
      "Seek out the eco-resistance: You meet a group of environmentalists. They offer you tools and gadgets to help";
  }
  // return text
}

window.addEventListener("load", function () {
  const form = document.querySelector('form');
  form.addEventListener('submit',showOption);
});
