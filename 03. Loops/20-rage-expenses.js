function solve(
  lostGamesCount,
  headsetPrice,
  mousePrice,
  keyboardPrice,
  displayPrice
) {
  let expenses = 0;
  let trashedKeyboards = 0;

  for (let i = 1; i <= lostGamesCount; i++) {
    if (i % 2 === 0) {
      expenses += headsetPrice;
    }
    if (i % 3 === 0) {
      expenses += mousePrice;
    }
    if (i % 2 === 0 && i % 3 === 0) {
      expenses += keyboardPrice;
      trashedKeyboards++;
    }
    if (trashedKeyboards === 2) {
      expenses += displayPrice;
      trashedKeyboards = 0;
    }
  }

  console.log(`Rage expenses: ${expenses.toFixed(2)} lv.`);
}
solve(7, 2, 3, 4, 5);
solve(23, 12.5, 21.5, 40, 200);
