export default class Narrative {
  constructor(storyData) {
    constructor(storyData) {
      this.storyData = storyData;
      this.currentStep = 0;
    }
  
    getCurrentStep() {
      return this.storyData[this.currentStep];
    }
    
    makeChoice(choiceIndex) {
      this.currentStep = userChoice;
      return this.storyData[this.userChoice];
    }
  }
  

  initalizeGame() {

  }
}




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