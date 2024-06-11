function f(month) {
  let monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
  let monthsWith30Days = [4, 6, 9, 11];

  let days;

  if (month === 2) {
    console.log(29);
  } else if (monthsWith30Days.includes(month)) {
    console.log(30);
  } else if (monthsWith31Days.includes(month)) {
    console.log(31);
  }
}

f(1);
f(2);
f(4);
f(7);
