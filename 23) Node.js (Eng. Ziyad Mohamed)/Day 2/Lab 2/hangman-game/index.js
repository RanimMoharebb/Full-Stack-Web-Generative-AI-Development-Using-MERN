const getRandomWord = require("./game/wordSelector");
const createHiddenWord = require("./game/display");
const rl = require("./utils/input");

const word = getRandomWord();

let hiddenWord = createHiddenWord(word);

let attempts = 3;

console.log("🎮 Welcome to Hangman!");
console.log(hiddenWord.join(" "));

function askUser() {
  rl.question("Enter a letter: ", (input) => {
    const letter = input.toLowerCase();

    // quit game
    if (letter === "exit") {
      console.log("Game ended.");
      rl.close();
      return;
    }

    // validation
    if (letter.length !== 1) {
      console.log("Please enter ONE letter only.");
      askUser();
      return;
    }

    // correct guess
    if (word.includes(letter)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          hiddenWord[i] = letter;
        }
      }

      console.log("Correct!");
    } 
    
    // wrong guess
    else {
      attempts--;

      console.log("Wrong!");
      console.log("Attempts left:", attempts);
    }

    console.log(hiddenWord.join(" "));

    // win
    if (!hiddenWord.includes("_")) {
      console.log("🎉 You won!");
      rl.close();
      return;
    }

    // lose
    if (attempts === 0) {
      console.log("💀 You lost!");
      console.log("The word was:", word);

      rl.close();
      return;
    }

    askUser();
  });
}

askUser();