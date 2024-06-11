function calculate(numOne, numTwo) {
  let sum = numOne + numTwo;
  let difference = Math.abs(numOne - numTwo);
  let product = numOne * numTwo;
  let avg = sum / 2;

  console.log(
    "Sum: " +
      sum +
      "\nDifference: " +
      difference +
      "\nProduct: " +
      product +
      "\nAverage: " +
      avg
  );
}
calculate(25, 5);
