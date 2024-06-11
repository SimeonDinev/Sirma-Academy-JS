function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function solve(a, b, c) {
  let sumOfAB = sum(a, b);
  console.log(subtract(sumOfAB, c));
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);
