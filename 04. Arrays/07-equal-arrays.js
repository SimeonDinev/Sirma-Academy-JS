function solve(arrOne, arrTwo) {
  let sum = 0;

  for (let i = 0; i < arrOne.length; i++) {
    const firstArrayElement = arrOne[i];

    for (let j = i; j < arrTwo.length; j++) {
      const secondArrayElement = arrTwo[j];

      if (firstArrayElement === secondArrayElement) {
        sum += parseInt(firstArrayElement);
        break;
      } else {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        return;
      }
    }
  }
  console.log(`Arrays are identical. Sum: ${sum}`);
}

solve(["10", "20", "30"], ["10", "20", "30"]);
solve(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
solve(["1"], ["10"]);
