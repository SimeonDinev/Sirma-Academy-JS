function calculate(unit, rate) {
  let x = unit * rate + 10;

  console.log(x.toFixed(2));
}

calculate(100, 1.0);
calculate(200, 1.0);
calculate(150, 1.1);
