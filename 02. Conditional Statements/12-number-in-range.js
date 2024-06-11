function f(num) {
  console.log(num < -100 || num > 100 || num === 0 ? "No" : "Yes");
}

f(-25);
f(0);
f(25);
