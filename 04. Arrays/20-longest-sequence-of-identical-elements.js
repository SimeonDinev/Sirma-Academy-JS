function solve(arr) {
  let maxLen = 0;
  let currLen = 1;
  let biggestSeqStartIdx = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currLen++;
    } else {
      currLen = 1;
    }

    if (currLen > maxLen) {
      maxLen = currLen;
      biggestSeqStartIdx = i - currLen + 1;
    }
  }

  console.log(arr.slice(biggestSeqStartIdx, biggestSeqStartIdx + maxLen));
}

solve([2, 2, 2, 3, 4, 4, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3, 1, 1]);
solve([1, 1, 2, 3, 4, 5, 6, 2, 2]);
solve([1, 1, 4, 4, 4, 4]);
solve([0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
