function solve(n) {
  let currentNumber = 1;
  let row = "";

  for (let i = 1; currentNumber <= n; i++) {
    row = "";
    for (let j = 0; j < i && currentNumber <= n; j++) {
      row += currentNumber + " ";
      currentNumber++;
    }
    console.log(row.trim());
  }
}

solve(7);
solve(10);
solve(15);
