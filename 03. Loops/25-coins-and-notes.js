function solve(oneLV, twoLV, fiveLV, targetSum) {
  for (let i = 0; i <= oneLV; i++) {
    for (let j = 0; j <= twoLV; j++) {
      for (let k = 0; k <= fiveLV; k++) {
        let total = i * 1 + j * 2 + k * 5;
        if (total === targetSum) {
          console.log(
            `${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${targetSum} lv.`
          );
        }
      }
    }
  }
}

solve(3, 2, 3, 10);
solve(5, 3, 1, 7);
