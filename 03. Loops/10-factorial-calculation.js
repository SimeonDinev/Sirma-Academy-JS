function solve(num) {
  let x = 1;
  for (let i = num; i > 0; i--) {
    x = x * i;
  }
  console.log(x);
}

solve(5);
solve(3);
solve(0);
solve(1);
solve(10);
