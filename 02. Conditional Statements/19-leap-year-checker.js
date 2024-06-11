function f(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("It's a leap year!");
  } else {
    console.log("It's not a leap year!");
  }
}

f(2020);
f(1900);
f(2000);
f(2023);
f(1600);
