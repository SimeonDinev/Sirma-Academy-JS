function printOutput(num) {
  let properDevisors = takeProperDevisors(num);

  if (checkForPerfectNumber(properDevisors, num)) {
    console.log(`Perfect number!\n${properDevisors.join(" + ")}`);
  } else {
    console.log("It's not so perfect.");
  }
}

function takeProperDevisors(number) {
  let arr = [];
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      arr.push(i);
    }
  }

  return arr;
}
function checkForPerfectNumber(numArray, num) {
  let sum = numArray.reduce((acc, curr) => acc + curr, 0);
  if (sum !== num) {
    return false;
  }
  return true;
}

printOutput(6);
printOutput(28);
printOutput(1236498);
