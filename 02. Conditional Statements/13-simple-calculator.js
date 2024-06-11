function calculate(x, y, operator) {
  let result;

  switch (operator) {
    case "add":
      result = x + y;
      break;
    case "subtract":
      result = x - y;
      break;
    case "divide":
      result = x / y;
      break;
    case "multiply":
      result = x * y;
      break;
  }
  console.log(result.toFixed(2));
}

calculate(5, 5, "add");
calculate(10, 12, "subtract");
calculate(9, 3, "divide");
calculate(5, 2, "divide");
calculate(3.1, 0.1, "multiply");
