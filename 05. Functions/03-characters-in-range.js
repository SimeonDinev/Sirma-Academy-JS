function findCharactersInRange(a, b) {
  let start = a.charCodeAt(0);
  let end = b.charCodeAt(0);
  printCharsInRange(start, end);
}

function printCharsInRange(start, end) {
  let arr = [];

  if (start < end) {
    for (let i = start + 1; i < end; i++) {
      arr.push(String.fromCharCode(i));
    }
  } else {
    for (let i = end + 1; i < start; i++) {
      arr.push(String.fromCharCode(i));
    }
  }

  return console.log(arr.join(" "));
}

findCharactersInRange("a", "d");
findCharactersInRange("#", ":");
findCharactersInRange("C", "#");
