import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./css/styles.css";

function animateCSS() {
  let x = document.getElementById("animate");
  x.style.marginLeft = "300px";
  x.style.transition = "1s";
}

function showOption(event) {
  event.preventDefault();

let story = new StoryPrompt();


const storyText = document.getElementById("#story-text")
const textElement = document.getElementById("#story-prompt");
const promptElementA = document.getElementById("#optionA")
const promptElementB = document.getElementById("#optionB");
storyText.innerText = story[0].text;
textElement.innerText = story[0].
promptElementA.innerText = story.storyData.choices[0];
promptElementB.innerText = story.storyData.choices[1];

button.addEventListener("onclick", function(){
let buttonChoice = [document.getElementById("#qa"), document.getElementById("#qb")];
buttonChoice.forEach(click) {
  
if (buttonChoice === "qa") {
  textElement.innerText =
    "Sneak into Monsanto facility: You manage to bypass security and enter the facility, but it's crawling with guards.";
}
if (buttonChoice === "qb") {
  textElement.innerText =
    "Seek out the eco-resistance: You meet a group of environmentalists. They offer you tools and gadgets to help";
}
}
})
}

window.addEventListener("load", function () {
  const form = document.querySelector("form");
  showOption();
  form.addEventListener("submit", showOption);
});


// function showOption(event) {
//   event.preventDefault();

//   // let story = new StoryPrompt();

//   const textElement = document.getElementById("story-prompt");
//   const promptElementA = document.getElementById("optionA")
//   const promptElementB = document.getElementById("optionB");

//   // const currentData = story.storyData[story.currentStep];
//   // forcing in 
//   let currentData = {
//     //index 0
//         text: "Corporate Takedown You are Alex, a young eco-warrior standing against the environmentally destructive Monsanto Corporation. Start: You're in the heart of the city, watching as smog clouds the skyline. Monsanto's logo is everywhere,",
//         choices: [
//           {text: "Sneak into a Monsanto facility to gather information?", arrayIndex: 1 },
//           {text: "Seek out the eco-resistance in the nearby forest?", arrayIndex: 2 }
//         ]
//       }

//   storyText.innerText = currentData.text;



//   // textElement.innerText = story.storyData[0].text
//   // promptElementA.innerText = story.storyData.choices[0].text;
//   // promptElementB.innerText = story.storyData.choices[1].text;

//   if (currentData.choices && currentData.length > 0) {
//     promptElementA.innerText = currentData.choices[0].text;
//     promptElementB.innerText = currentData.choices[1].text;
//   } else {
//     return "error";
//   }

//   let buttonA = document.getElementById("qa").addEventListener("click", function() {
//     if (story.storyData[story.currentStep].choices && story.storyData[story.currentStep].choices[0]) {
//       story.currentStep = story.storyData[story.currentStep].choices[0].arrayIndex;
//       showOption();
//     }
//   });

//   let buttonB = document.getElementById("qb").addEventListener("click", function() {
//     if (story.storyData[story.currentStep].choices && story.storyData[story.currentStep].choices[1]) {
//       story.currentStep = story.storyData[story.currentStep].choices[1].arrayIndex;
//      showOption(); 
//     }
//   })
// }

// document.addEventListener("DOMContentLoaded", function() {
//   showOption();
// })


// class Narrative {
//   constructor(storyData) {
//       this.storyData = storyData;
//       this.currentStep = 0;
//       this.cumulativeValue = 0;
//       this.isGameEnded = false;
//   }

//     getCurrentStep() {
//       return this.storyData[this.currentStep];
//     }

//     // makeChoice(choiceIndex) {
//     //   const step = this.storyData[this.currentStep];
//     //   const nextStepIndex = step.choices[choiceIndex].arrayIndex;
//     //   const choiceValue = step.choices[choiceIndex]?.value || 1;

//     //   if(typeof nextStepIndex !== 'undefined') {
//     //     this.currentStep = nextStepIndex;
//     //   } else if (step.choices[choiceIndex]?.ending) {
//     //     this.isGameEnded = true;
//     //     const ending = this.calculateEnding(choiceValue);
//     //   }
//     //   this.cumulativeValue += choiceValue;
//     // }

//   initalizedGame() {
//     this.currentStep = 0;
//   }
// }

class StoryPrompt {
  constructor() {
    this.storyData = [
      {
        //index 0
        text: "EcoGuard: Corporate Takedown You are Alex, a young eco-warrior standing against the environmentally destructive Monsanto Corporation. Start: You're in the heart of the city, watching as smog clouds the skyline. Monsanto's logo is everywhere,",
        choices: [
          {
            text: " Sneak into a Monsanto facility to gather information?",
            arrayIndex: 1,
          },
          {
            text: "Seek out the eco-resistance in the nearby forest?",
            arrayIndex: 2,
          },
        ],
      },
      {
        //index 1
        text: "Sneak into Monsanto facility: You manage to bypass security and enter the facility, but it's crawling with guards.",
        choices: [
          {
            text: "Try to hack into their mainframe for evidence?",
            arrayIndex: 3,
          },
          { text: "Look for a physical file or documents?", arrayIndex: 4 },
        ],
      },
      {
        //index 2
        text: "Seek out the eco-resistance: You meet a group of environmentalists. They offer you tools and gadgets to help",
        choices: [
          { text: "Lay low and avoid confrontation?", arrayIndex: 5 },
          {
            text: "Prepare for an imminent Monsanto retaliation?",
            arrayIndex: 6,
          },
        ],
      },
      {
        //index 3
        text: "While hacking the Monsanto mainframe, you're caught while hacking and are thrown into a cell",
        choices: [
          {
            text: "Accept their tech and plan a joint sabotage mission?",
            arrayIndex: 7,
          },
          {
            text: "Decline and decide to gather more allies from the city?",
            arrayIndex: 8,
          },
        ],
      },
      {
        //index 4
        text: "While looking for evidence at the facility, you find incriminating documents about their operations",
        choices: [
          { text: "Leak it to the media immediately?", arrayIndex: 5 },
          { text: "Share it with the resistance?", arrayIndex: 6 },
        ],
      },
      {
        //index 5
        text: "While laying low, .you and eco-resistance plan a mass protest against Monsanto ",
        choices: [
          {
            text: "Accept their tech and plan a joint sabotage mission?",
            arrayIndex: 7,
          },
          {
            text: "Decline and decide to gather more allies from the city?",
            arrayIndex: 8,
          },
        ],
      },
      {
        //index 6
        text: "While looking for evidence at the facility, you find incriminating documents about their operations",
        choices: [
          { text: "Leak it to the media immediately?", arrayIndex: 5 },
          { text: "Share it with the resistance?", arrayIndex: 6 },
        ],
      },
      {
        //index 7
        text: "While pulling off the sabotage operation, you succeed but gather lots of attention",
        choices: [
          { text: "Lay low?", arrayIndex: 5 },
          { text: "Prepare for Retaliation", arrayIndex: 6 },
        ],
      },
      {
        //index 8
        text: "While looking for evidence at the facility, you find incriminating documents about their operations",
        choices: [
          {
            text: "Accept their tech and plan a joint sabotage mission?",
            arrayIndex: 5,
          },
          {
            text: "Decline and decide to gather more allies from the city?",
            arrayIndex: 6,
          },
        ],
      },
      {
        //index 9 -- example winning scenario
        text: "Congratulations!  The diversion works. The smaller group retrieves undeniable evidence against Monsanto, leading to their eventual legal takedown",
        choices: [
          //there are no choices because the game ends here
        ],
        gameover: 1,
      },
    ];
    this.currentStep = 0;
  }
}

// makeChoice(choiceIndex) {
//   if (arrayIndex[gameover]) {
//     getGameEnding(gameover)
//   } else {
//   this.currentStep = nextStepIndex;
//   return this.getCurrentStep();
// }

// UI updated with text and choices;
// User makes a choice;
// this.currentStep = user choice;

// class AdventureGame {
//   constructor(playerName) {
//     this.playerName = playerName;
//     this.points = 0;
//     this.currentStoryKey = 'start';
//     this.stories = this.initializeStories();
//   }

//   initializeStories() {
//     return {
//       'start' : this.createStory('You are + this.playerName +, a young eco-warrior standing against the environmentally destructive Monsanto Corporation. What will you do?', [
//         this.createChoice('Sneak into a Monsanto facility to gather information?', mansanto1, 10),
//         this.createChoice('eek out the eco-resistance in the nearby forest?', eco1, 20)
//       ]),
//       monsanto1: this.createStory('You manage to bypass security and enter the facility, but it\'s crawling with guards. What\s your next move?', [
//         this.createChoice('Try to hack into their mainframe for evidence?', monsanto2A, 15),
//         this.createChoice('Look for a physical file or documents?', monsanto2b, 25)
//       ]),
//       monsanto1: this.createStory('You manage to bypass security and enter the facility, but it\'s crawling with guards. What\s your next move?', [
//         this.createChoice('Try to hack into their mainframe for evidence?', monsanto2A, 15),
//         this.createChoice('Look for a physical file or documents?', monsanto2b, 25)
//       ]),

//     }
//   }
// }
