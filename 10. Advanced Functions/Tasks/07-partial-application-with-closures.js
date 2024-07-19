function sum(numOne, numTwo, numThree, numFour) {
  return numOne + numTwo + numThree + numFour;
}

function partialSum(x) {
  return function (numOne, numTwo, numThree) {
    return numOne + numTwo + numThree + x;
  };
}

const addFive = partialSum(5);
console.log(addFive(1, 2, 3)); // Output: 11
