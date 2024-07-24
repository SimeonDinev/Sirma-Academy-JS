function getFibonacci() {
  let previousNum = 0;
  let currentNum = 1;

  let isFirstNum = true;

  return function () {
    if (isFirstNum === true) {
      isFirstNum = false;
      return 1;
    } else {
      let temp = currentNum;
      currentNum += previousNum;
      previousNum = temp;
      return currentNum;
    }
  };
}

let fibonacci = getFibonacci();
console.log(fibonacci()); // 1
console.log(fibonacci()); // 1
console.log(fibonacci()); // 2
console.log(fibonacci()); // 3
console.log(fibonacci()); // 5
console.log(fibonacci()); // 8
console.log(fibonacci()); // 13
console.log(fibonacci()); // 21
