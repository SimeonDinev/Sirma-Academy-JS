function solve(n, k) {
  //   if (k < 2 || n < 4) {
  //     console.log("Error!");
  //   }

  let arr = [1, 1, 2];
  let sum = 0;

  while (arr.length !== n) {
    if (k >= arr.length) {
      sum = arr.reduce((acc, curr) => acc + curr, 0);
      arr.push(sum);
      sum = 0;
    } else {
      arr.reverse();

      for (let i = 0; i < k; i++) {
        sum += arr[i];
      }
      arr.reverse();
      arr.push(sum);
      sum = 0;
    }
  }
  console.log(arr.join(" "));
}

solve(6, 3);
solve(8, 2);
