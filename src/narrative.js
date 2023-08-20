export default class Narrative {
  constructor(storyData) {
      this.storyData = storyData;
      this.currentStep = 0;
      this.cumulativeValue = 0;
      this.isGameEnded = false;
  }

    getCurrentStep() {
      return this.storyData[this.currentStep];
    }
    
    makeChoice(choiceIndex) {
      const step = this.storyData[this.currentStep];
      const nextStepIndex = step.choices[choiceIndex].arrayIndex;
      const choiceValue = step.choices[choiceIndex]?. value || 1;

      if(typeof nextStepIndex !== 'undefined') {
        this.currentStep = nextStepIndex;
      } else if (step.choices[choiceIndex]?.ending) {
        this.isGameEnded = true;
        const ending = this.calculateEnding(choiceValue);
      }
      this.cumulativeValue += choiceValue;
    }

  initalizedGame() {
    this.currentStep = 0;
  }

  calculateEnding(cumulativeValue) {
    if (cumulativeValue  === 11010) {
      return firstEnding; //1st ending
    } else if (cumulativeValue === 11015) {
      return secondEnding; //2nd ending
    } else if (cumulativeValue === 11020) {
      return thirdEnding;
    } else if (cumulativeValue === 11025) {
      return fourthEnding;
    } else if (cumulativeValue === 12010) {
      return fifthEnding;
    } else if (cumulativeValue === 12015) {
      return sixEnding;
    } else if (cumulativeValue === 12020) {
      return seventhEnding;
    } else if (cumulativeValue === 12025) {
      return eightEnding;
    }
  }
}


class StoryPrompt{
  points = 0;

  constructor(choice) {
    this.storyData = [
      { //index 0
        text: "EcoGuard: Corporate Takedown You are Alex, a young eco-warrior standing against the environmentally destructive Monsanto Corporation. Start: You're in the heart of the city, watching as smog clouds the skyline. Monsanto's logo is everywhere,",
        choices: [
          {text: " Sneak into a Monsanto facility to gather information?", arrayIndex: 1 },
          {text: "Seek out the eco-resistance in the nearby forest?", arrayIndex: 2 }
        ]
      },
      { //index 1
        text: "Sneak into Monsanto facility: You manage to bypass security and enter the facility, but it's crawling with guards.",
        choices: [
          {text: "Try to hack into their mainframe for evidence?", arrayIndex: 3 },
          {text: "Look for a physical file or documents?", arrayIndex: 4 }
        ]
      },
      { //index 2
        text: "Seek out the eco-resistance: You meet a group of environmentalists. They offer you tools and gadgets to help",
        choices: [
          {text: "Lay low and avoid confrontation?", arrayIndex: 5 },
          {text: "Prepare for an imminent Monsanto retaliation?", arrayIndex: 6 }
        ]
      },
      { //index 3
      text: "While hacking the Monsanto mainframe, you're caught while hacking and are thrown into a cell",
        choices: [
          {text: "Accept their tech and plan a joint sabotage mission?", arrayIndex: 7},
          {text: "Decline and decide to gather more allies from the city?", arrayIndex: 8 }
        ]
      },
      { //index 4
      text: "While looking for evidence at the facility, you find incriminating documents about their operations",
        choices: [
          {text: "Leak it to the media immediately?", arrayIndex: 5},
          {text: "Share it with the resistance?", arrayIndex: 6 }
        ]
      },
      { //index 5
      text: "While laying low, .you and eco-resistance plan a mass protest against Monsanto ",
        choices: [
          {text: "Accept their tech and plan a joint sabotage mission?", arrayIndex: 7},
          {text: "Decline and decide to gather more allies from the city?", arrayIndex: 8 }
        ]
      },
      { //index 6
      text: "While looking for evidence at the facility, you find incriminating documents about their operations",
        choices: [
          {text: "Leak it to the media immediately?", arrayIndex: 5},
          {text: "Share it with the resistance?", arrayIndex: 6 }
        ]
      },
      { //index 7
      text: "While pulling off the sabotage operation, you succeed but gather lots of attention",
        choices: [
          {text: "Lay low?", arrayIndex: 5},
          {text: "Prepare for Retaliation", arrayIndex: 6 }
        ]
      },
      { //index 8
      text: "While looking for evidence at the facility, you find incriminating documents about their operations",
        choices: [
          {text: "Accept their tech and plan a joint sabotage mission?", arrayIndex: 5},
          {text: "Decline and decide to gather more allies from the city?", arrayIndex: 6 }
        ]
      },
      { //index 9 -- example winning scenario
      text: "Congratulations!  The diversion works. The smaller group retrieves undeniable evidence against Monsanto, leading to their eventual legal takedown",
        choices: [
          //there are no choices because the game ends here
        ],
        gameover: 1
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