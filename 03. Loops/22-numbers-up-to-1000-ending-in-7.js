function solve() {
  for (let i = 0; i < 1000; i++) {
    let x = String(i).split("").pop();
    if (x == 7) {
      // we can do it also with -> x === '7'
      console.log(i);
    }
  }
}
solve();
