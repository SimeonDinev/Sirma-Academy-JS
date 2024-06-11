function f(x) {
  if (x >= 0 && x < 60) {
    console.log("F");
  } else if (x >= 60 && x < 70) {
    console.log("D");
  } else if (x >= 70 && x < 80) {
    console.log("C");
  } else if (x >= 80 && x < 90) {
    console.log("B");
  } else if (x >= 90 && x <= 100) {
    console.log("A");
  }
}

f(95);
f(82);
f(76);
f(65);
f(45);
