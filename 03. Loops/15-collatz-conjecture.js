function solve(n) {
  let str = `${n} `;
  while (n !== 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else if (n % 2 !== 0) {
      n = n * 3 + 1;
    }
    str += String(n + " ");
  }
  console.log(str);
}

solve(6);
solve(12);
solve(9);
solve(200);
solve(15);
