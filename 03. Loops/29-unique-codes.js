function solve(firstDigit, secondDigit, thirdDigit) {
  let primeNumbers = [2, 3, 5, 7];
  for (let i = 1; i <= firstDigit; i++) {
    if (i % 2 === 0) {
      for (let j = 1; j <= secondDigit; j++) {
        if (primeNumbers.includes(j)) {
          for (let k = 1; k <= thirdDigit; k++) {
            if (k % 2 === 0) {
              console.log(`${i} ${j} ${k}`);
            }
          }
        }
      }
    }
  }
}

solve(3, 5, 5);
solve(6, 2, 6);
