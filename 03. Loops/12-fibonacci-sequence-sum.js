function solve(n) {
  if (n === 0) {
    console.log(0);
    return;
  } else if (n === 1) {
    console.log(1);
    return;
  } else if (n === 2) {
    console.log(2);
    return;
  }

  let fibunacciArray = [0, 1];
  let sum = 1;

  for (let i = 2; i <= n; i++) {
    let nextFibunacci = fibunacciArray[i - 1] + fibunacciArray[i - 2];
    fibunacciArray.push(nextFibunacci);
    sum += nextFibunacci;
  }

  console.log(sum);
}

solve(3);
solve(5);
solve(1);
solve(0);
solve(10);
