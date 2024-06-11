function calculate(shape, x, y) {
  if (shape === "square") {
    console.log((x * x).toFixed(2));
  } else if (shape === "rectangle") {
    console.log((x * y).toFixed(2));
  } else if (shape === "triangle") {
    console.log(((1 / 2) * x * y).toFixed(2));
  } else if (shape === "circle") {
    console.log((Math.PI * Math.pow(x, 2)).toFixed(2));
  }
}
calculate("square", 5);
calculate("rectangle", 10, 3.5);
calculate("triangle", 4.5, 20);
calculate("circle", 10);
