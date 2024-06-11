function f(age) {
  if (age >= 0 && age <= 12) {
    console.log("$" + 5);
  } else if (age >= 13 && age <= 19) {
    console.log("$" + 8);
  } else if (age > 19) {
    console.log("$" + 10);
  }
}

f(10);
f(16);
f(25);
f(13);
