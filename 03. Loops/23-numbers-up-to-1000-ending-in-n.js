function solve(n) {
  for (let i = 0; i < 1000; i++) {
    let x = String(i).split("").pop();
    if (x == n) {
      console.log(i);
    }
  }
}
solve(6);
solve(8);
