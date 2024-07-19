function createPrivateCounter() {
  let x = 0;

  return (obj = {
    increment() {
      x++;
    },
    getCount() {
      return x;
    },
    setCount(value) {
      x = value;
    },
  });
}

const counter = createPrivateCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
counter.setCount(5);
console.log(counter.getCount()); // Output: 5
