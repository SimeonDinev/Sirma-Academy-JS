function countingOrcs(n, m, h) {
  let totalCount = 0;

  for (let i = 0; i < h; i++) {
    totalCount += n;
    n += m;
  }
  console.log(totalCount);
}

countingOrcs(5, 2, 3);
countingOrcs(7, 1, 2);
countingOrcs(10, -1, 1);
countingOrcs(8, -2, 3);
