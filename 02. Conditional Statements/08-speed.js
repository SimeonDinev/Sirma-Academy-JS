function speedChecker(km) {
  if (km >= 0 && km <= 10) {
    console.log("slow");
  } else if (km > 10 && km <= 60) {
    console.log("average");
  } else if (km > 60 && km <= 120) {
    console.log("fast");
  } else if (km > 120 && km <= 160) {
    console.log("super-fast");
  } else if (km > 160) {
    console.log("turbo-fast");
  }
  // else {
  //     console.log("The speed must be positive number!");
  //   }
}

speedChecker(10);
speedChecker(59);
speedChecker(120);
speedChecker(121);
speedChecker(183);
speedChecker(59.99);
speedChecker(60.001);
