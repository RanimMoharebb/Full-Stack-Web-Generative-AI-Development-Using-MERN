const fs = require("fs");

function getRandomWord() {
  const data = fs.readFileSync("words.txt", "utf-8");

  const words = data.split("\n");

  const randomIndex = Math.floor(Math.random() * words.length);

  return words[randomIndex].trim().toLowerCase();
}

module.exports = getRandomWord;