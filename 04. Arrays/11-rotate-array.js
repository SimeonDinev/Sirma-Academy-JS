function solve(arr, n) {
  for (let i = 0; i < n; i++) {
    let x = arr.pop();
    arr.unshift(x);
  }
  console.log(arr.join(" "));
}

solve(["1", "2", "3", "4"], 2);
solve(["Banana", "Orange", "Coconut", "Apple"], 15);
