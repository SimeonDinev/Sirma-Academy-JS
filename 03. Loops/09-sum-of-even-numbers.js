function solve(num) {
  let sum = 0;
  for (let i = 0; i <= num * 2; i += 2) {
    sum += i;
  }
  console.log(sum);
}

solve(3);
solve(5);
solve(1);
solve(0);
solve(10);
