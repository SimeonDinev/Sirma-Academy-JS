function solve(initNumOne, initNumTwo, additionToNumOne, additionToNumTwo) {
  let primeNumbers = [
    11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83,
    89, 97,
  ];
  let numOneEnd = initNumOne + additionToNumOne;
  let numTwoEnd = initNumTwo + additionToNumTwo;

  for (let i = initNumOne; i <= numOneEnd; i++) {
    for (let j = initNumTwo; j <= numTwoEnd; j++) {
      if (primeNumbers.includes(i) && primeNumbers.includes(j)) {
        console.log(parseInt(String(i) + String(j)));
      }
    }
  }
}

solve(10, 20, 5, 5);
solve(10, 30, 9, 6);
