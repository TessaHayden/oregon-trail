import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

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
  form.addEventListener('submit', showOption);
});
