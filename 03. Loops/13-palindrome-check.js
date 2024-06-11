function solve(word) {
  let x = word.split("").reverse().join("");
  if (x === word) {
    console.log("true");
  } else {
    console.log("false");
  }
}

solve("radar");
solve("hello");
solve("racecar");
solve("java");
solve("madam");
