function print(sentence) {
  sentence = filterSentenceOfSignsOrDigits(sentence);

  let longestWord = findLongestWord(sentence);
  let shortestWord = findShortestWord(sentence);

  console.log(`Longest -> ${longestWord}\nShortest -> ${shortestWord}`);
}

function findLongestWord(sentence) {
  let arr = sentence.split(" ");
  let currLongest = "";
  for (let i = 0; i < arr.length; i++) {
    let currWord = arr[i];

    if (currLongest.length < currWord.length || currLongest === "") {
      currLongest = currWord;
    }
  }
  return currLongest;
}

function findShortestWord(sentence) {
  let arr = sentence.split(" ");
  let currShortest = "";
  for (let i = 0; i < arr.length; i++) {
    let currWord = arr[i];

    if (currShortest.length > currWord.length || currShortest === "") {
      currShortest = currWord;
    }
  }
  return currShortest;
}

function filterSentenceOfSignsOrDigits(sentence) {
  for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i];
    if (/[^a-zA-Z\s]/.test(word)) {
      sentence = sentence.replace(word, "");
    }
  }
  return sentence;
}

print("Hello how are you today? I hope you are fine");
print("Lorem Ipsum is dummy text of the typesetting industry.");
