function solve(sentence, word) {
  console.log(sentence.replaceAll(word, "*".repeat(word.length)));
}

solve("A small sentence with some words", "small");
solve("Find the hidden word", "hidden");
solve("A small sentence with small words", "small");
