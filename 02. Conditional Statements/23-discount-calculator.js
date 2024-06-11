function f(age, memberCard) {
  if (age < 18) {
    console.log("10% discount");
  } else if (age >= 18 && age <= 64) {
    console.log(memberCard === "Yes" ? "20% discount" : "10% discount");
  } else {
    console.log("30% discount");
  }
}

f(20, "Yes");
f(15, "No");
f(70, "No");
