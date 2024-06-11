function check(age, gender) {
  if (gender === "m") {
    console.log(age >= 16 ? "Mr." : "Master");
  } else if (gender === "f") {
    console.log(age >= 16 ? "Ms." : "Miss");
  }

  // else {
  //     console.log("Error!");
  //   }
}

check(14, "f");
check(17, "m");
check(10, "m");
check(32, "f");
