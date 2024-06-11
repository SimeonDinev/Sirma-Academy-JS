function printOutput(numOne, numTwo) {
  console.log(
    (calculateFactorial(numOne) / calculateFactorial(numTwo)).toFixed(2)
  );
}

function calculateFactorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * calculateFactorial(number - 1);
}

printOutput(5, 2);
printOutput(6, 2);
