function createHiddenWord(word) {
  return Array(word.length).fill("_");
}

module.exports = createHiddenWord;