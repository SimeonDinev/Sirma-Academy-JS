const double = (x) => x * 2;
const square = (x) => x * x;

const compose = (d, s) => {
  return function (x) {
    return s(d(x));
  };
};

const doubleThenSquare = compose(double, square);

console.log(doubleThenSquare(3)); // Output: 36
