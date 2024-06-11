function solve(arr) {
  if (arr.length === 0) {
    return [];
  }

  let result = [arr[0]];
  let currentBiggest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    let currNum = arr[i];
    if (currNum > currentBiggest) {
      result.push(currNum);
      currentBiggest = currNum;
    }
  }
  console.log(result.join(" "));
}

solve([1, 3, 3, 8, 4, 10, 12, 3, 2, 24]);
solve([1, 2, 3, 4]);
solve([20, 3, 2, 15, 6, 1]);
