function solve(change) {
  // Coins 0.01, 0.02, 0.05, 0.10, 0.20, 0.50, 1, 2
  let coinsCounter = 0;
  while (change !== 0) {
    if (change >= 2) {
      change -= 2;
    } else if (change >= 1) {
      change -= 1;
    } else if (change >= 0.5) {
      change -= 0.5;
    } else if (change >= 0.2) {
      change -= 0.2;
    } else if (change >= 0.1) {
      change -= 0.1;
    } else if (change >= 0.05) {
      change -= 0.05;
    } else if (change >= 0.02) {
      change -= 0.02;
    } else {
      change -= 0.01;
    }
    change = parseFloat(change.toFixed(2));
    coinsCounter++;
  }
  console.log(coinsCounter);
}

solve(1.23);
solve(2);
solve(0.56);
solve(2.73);
