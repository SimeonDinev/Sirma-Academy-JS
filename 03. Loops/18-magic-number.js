function solve(beginning, end, magicNumber) {
  let combinationCounter = 1;

  // Optional check if beginning is bigger num that end

  // if (beginning >= end) {
  //   console.log("Error");
  //   return;
  // }

  for (let i = beginning; i <= end; i++) {
    for (let j = beginning; j <= end; j++) {
      let sum = i + j;

      if (sum === magicNumber) {
        console.log(
          `Combination ${combinationCounter} - (${i} + ${j} = ${sum})`
        );
        return;
      }
      combinationCounter++;
    }
  }
  console.log(
    `${combinationCounter} combinations - neither equals ${magicNumber}`
  );
}

solve(1, 10, 5);
solve(23, 24, 20);
solve(1, 2, 3);
//solve(2, 2, 3);
