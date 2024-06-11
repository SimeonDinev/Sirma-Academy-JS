function solve(arr) {
  let condensed = [];

  while (arr.length > 1) {
    for (let i = 0; i < arr.length - 1; i++) {
      condensed.push(arr[i] + arr[i + 1]);
    }
    arr = [];
    arr = condensed;
    condensed = [];
  }

  console.log(arr[0]);
}

solve([2, 10, 3]);
solve([5, 0, 4, 1, 2]);
solve([1]);
