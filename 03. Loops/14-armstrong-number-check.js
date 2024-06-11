function solve(num) {
  let numStr = String(num);
  let sum = 0;
  for (let i = 0; i < numStr.length; i++) {
    let x = parseInt(numStr[i]);
    x = Math.pow(x, numStr.length);
    sum += x;
  }
  console.log(sum === num ? "true" : "false");
  // console.log(sum === num ? "Armstrong" : "Not Armstrong");
}

solve(153);
solve(370);
solve(123);
solve(407);
solve(1634);
