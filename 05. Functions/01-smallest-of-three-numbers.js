function printSmallestNumber(a, b, c) {
  if (a < b) {
    if (a < c) {
      console.log(a);
    } else {
      console.log(c);
    }
  } else if (b < c) {
    if (b < a) {
      console.log(b);
    } else {
      console.log(a);
    }
  } else {
    console.log(c);
  }
}

printSmallestNumber(5, 3, 2);
