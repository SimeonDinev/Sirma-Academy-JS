function solve(k, arr) {
  let arrOne = [];
  let arrTwo = [];

  for (let i = 0; i < k; i++) {
    arrOne.push(arr[i]);
  }
  for (let j = arr.length - k; j <= arr.length; j++) {
    arrTwo.push(arr[j]);
  }

  console.log(arrOne.join(" ") + "\n" + arrTwo.join(" "));
}

solve(2, [7, 8, 9]);
solve(3, [6, 7, 8, 9]);
