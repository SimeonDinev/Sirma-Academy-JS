function solve(sentence) {
  let startIndex = -1;
  let endIndex = -1;

  for (let i = 0; i < sentence.length; i++) {
    const currCharacter = sentence[i];

    if (currCharacter === "#" && sentence[i + 1] !== " ") {
      startIndex = i;
    }

    if (currCharacter === " " && startIndex !== -1) {
      endIndex = i;
      let word = sentence.substring(startIndex + 1, endIndex);
      console.log(word);
      startIndex = -1;
      endIndex = -1;
    }

    if (i === sentence.length - 1 && startIndex !== -1) {
      endIndex = i + 1;

      let word = sentence.substring(startIndex + 1, endIndex);
      console.log(word);
    }
  }
}

solve("Everyone uses # to tag a #special word in #facebook");
solve(
  "The symbol # is known #variously in English-speaking #regions as the #number sign"
);
