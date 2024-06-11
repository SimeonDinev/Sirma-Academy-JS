function printOutput(n) {
  let output = checkForCompletion(n);
  console.log(output);
}

function checkForCompletion(num) {
  if (num === 100) {
    return `[%%%%%%%%%%]\nComplete!`;
  } else {
    return `${num}% [${"%".repeat(num / 10)}${".".repeat(
      10 - num / 10
    )}]\nLoading...`;
  }
}

printOutput(30);
printOutput(50);
printOutput(100);
