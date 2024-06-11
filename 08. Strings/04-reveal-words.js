function solve(rawWordsInuput, sentence) {
  const words = rawWordsInuput.split(", ");

  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < sentence.length; i++) {
    let currWord = sentence[i];

    if (i === sentence.length - 1 && sentence[sentence.length - 1] === "*") {
      endIndex = i;

      sentence = changeWord(sentence, words, startIndex, endIndex);
    } else if (currWord === "*" && startIndex === -1) {
      startIndex = i;
      endIndex = i;
    } else if (currWord === "*") {
      endIndex = i;
    } else {
      sentence = changeWord(sentence, words, startIndex, endIndex);

      startIndex = -1;
      endIndex = -1;
    }
  }

  console.log(sentence);
}

function changeWord(sentence, words, startIndex, endIndex) {
  let word = sentence.substring(startIndex, endIndex + 1);

  for (const w of words) {
    if (w.length === word.length) {
      return sentence.replace("*".repeat(word.length), w);
    }
  }
  return sentence;
}
solve("great", "JavaScript* is ***** programming language");
solve("the, best, learn", "JavaScript is *** **** language to *****");
