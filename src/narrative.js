export default class Narrative {
  constructor(storyData) {
    this.storyData = storyData;
    this.currentStep = 0;
    this.isGameEnded = false;
    this.storyData = [
      {
        //index 0
        text: "Corporate Takedown You are Alex, a young eco-warrior standing against the environmentally destructive Monsantanato Corporation. Start: You're in the heart of the city, watching as smog clouds the skyline. Monsantanato's logo is everywhere,",
        choices: [
          {
            text: "Sneak into a Monsantanato facility to gather information?",
            arrayIndex: 1,
          },
          {
            text: "Seek out the eco-resistance in the nearby forest?",
            arrayIndex: 2,
          },
        ],
      },
      {
        //index 1 from 0{0}
        text: "Sneak into Monsantanato facility: You manage to bypass security and enter the facility, but it's crawling with guards.",
        choices: [
          {
            text: "Try to hack into their mainframe for evidence?",
            arrayIndex: 3,
          },
          { text: "Look for a physical file or documents?", arrayIndex: 4 },
        ],
      },
      {
        //index 2 from 0[1]
        text: "Seek out the eco-resistance: You meet a group of environmentalists. They offer you tools and gadgets to help",
        choices: [
          {
            text: "Accept their tech and plan a joint sabotage mission",
            arrayIndex: 5,
          },
          {
            text: "Decline and decide to gather more allies from the city?",
            arrayIndex: 6,
          },
        ],
      },
      {
        //index 3 from 1[0]
        text: "While hacking the Monsantanato mainframe, you're caught while hacking and are thrown into a cell",
        choices: [
          { text: "Try to escape and risk being caught", arrayIndex: 7 },
          { text: "Wait for an opportunity and ally to help?", arrayIndex: 8 },
        ],
      },
      {
        //index 4 from 1[1]
        text: "While looking for evidence at the facility, you find incriminating documents about their operations",
        choices: [
          { text: "Leak it to the media immediately?", arrayIndex: 9 },
          {
            text: "Share it with the resistance for a strategic reveal?",
            arrayIndex: 10,
          },
        ],
      },
      {
        //index 5 from 2[0]
        text: "Sabotage Mission",
        choices: [
          { text: "Lay low and avoid confrontation", arrayIndex: 11 },
          {
            text: "Prepare for an imminent Monsantanato retaliation?",
            arrayIndex: 12,
          },
        ],
      },
      {
        //index 6 from 2[1]
        text: "As you gather more allies from the city, do you",
        choices: [
          { text: "Plan a mass protest against Monsantanato?", arrayIndex: 13 },
          {
            text: "Use the crowd as a diversion while a smaller group infiltrates Monsantanato?",
            arrayIndex: 14,
          },
        ],
      },
      {
        //index 7
        text: "You're recaptured but your story becomes public, inspiring a movement against Monsantanato. ",
        gameOver: "The Game is Now Over",
      },
      {
        //index 8
        text: "An eco-resistance member rescues you, and together you plan Monsantanato's downfall.",
        gameOver: "The Game is Now Over",
      },

      {
        //index 9
        text: "While Leaking it to the media immediately, The media is compromised; Monsantanato suppresses the news. You're forced to rethink.",
        gameOver: "The Game is Now Over",
      },
      {
        //index 10
        text: "The eco-resistance strategically exposes Monsantanato, leading to mass protests.",
        gameOver: "The Game is Now Over",
      },
      {
        //index 11
        text: "Monsantanato launches a smear campaign against the resistance, but your low profile keeps you safe.",
        gameOver: "The Game is Now Over",
      },
      {
        //index 12
        text: "The world watches as eco-warriors clash with corporate goons.",
        gameOver: "The Game is Now Over",
      },
      {
        //index 13
        text: "The protest forces Monsantanato into the public eye, starting a global movement.",
        gameOver: "The Game is Now Over",
      },
      {
        //index 14
        text: "The diversion works. The smaller group retrieves undeniable evidence against Monsantanato, leading to their eventual legal takedown.",
        gameOver: "The Game is Now Over",
      },
    ];
  }

  getCurrentStep() {
    return this.storyData[this.currentStep];
  }

  makeChoice(userChoice) {
    this.currentStep =
      this.storyData[this.currentStep].choices[userChoice].arrayIndex;
  }
}
