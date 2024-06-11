function printSums(num) {
  num = String(num);
  console.log(
    `Odd sum = ${evaluateTheSumOfOddNumbers(
      num
    )}, Even sum = ${evaluateTheSumOfEvenNumbers(num)}`
  );
}

function evaluateTheSumOfEvenNumbers(num) {
  let evenSum = 0;

  for (let i = 0; i < num.length; i++) {
    let x = Number(num[i]);
    if (x % 2 === 0) {
      evenSum += x;
    }
  }
  return evenSum;
}
function evaluateTheSumOfOddNumbers(num) {
  let oddSum = 0;

  for (let i = 0; i < num.length; i++) {
    let x = Number(num[i]);
    if (x % 2 !== 0) {
      oddSum += x;
    }
  }
  return oddSum;
}

printSums(1000435);
printSums(3495892137259234);
