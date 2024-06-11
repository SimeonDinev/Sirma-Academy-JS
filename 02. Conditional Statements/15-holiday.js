function f(budget, season) {
  let destination;
  let holidayType;
  let amountSpent;

  if (season === "summer") {
    holidayType = "Camp";
    // here we can check if the budget is negative number
    if (budget <= 100) {
      destination = "Bulgaria";
      amountSpent = budget * 0.3;
    } else if (budget > 100 && budget <= 1000) {
      destination = "Europe";
      amountSpent = budget * 0.4;
    } else {
      holidayType = "Hotel";
      destination = "Asia";
      amountSpent = budget * 0.9;
    }
  } else if (season === "winter") {
    holidayType = "Hotel";
    if (budget <= 100) {
      destination = "Bulgaria";
      amountSpent = budget * 0.7;
    } else if (budget > 100 && budget <= 1000) {
      destination = "Europe";
      amountSpent = budget * 0.8;
    } else {
      destination = "Asia";
      amountSpent = budget * 0.9;
    }
  }
  // else { console.log("Error!")}

  console.log(
    `Somewhere in ${destination}\n${holidayType} - ${amountSpent.toFixed(2)}`
  );
}

f(50, "summer");
f(75, "winter");
f(312, "summer");
f(678.53, "winter");
f(1500, "summer");
