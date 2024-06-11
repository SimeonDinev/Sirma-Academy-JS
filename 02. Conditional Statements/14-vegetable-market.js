function f(vegetable, day, quantity) {
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const weekendDays = ["Saturday", "Sunday"];

  const weekdayVegetablePrices = {
    tomato: 2.5,
    onion: 1.2,
    lettuce: 0.85,
    cucumber: 1.45,
    pepper: 5.5,
  };
  const weekendVegetablePrice = {
    tomato: 2.8,
    onion: 1.3,
    lettuce: 0.85,
    cucumber: 1.75,
    pepper: 3.5,
  };

  let x;
  let checkForVege = weekdayVegetablePrices.hasOwnProperty(vegetable);

  if (weekDays.includes(day) && checkForVege) {
    x = Object.entries(weekdayVegetablePrices).forEach(([key, value]) => {
      if (key === vegetable) {
        console.log((quantity * value).toFixed(2));
      }
    });
  } else if (weekendDays.includes(day) && checkForVege) {
    x = Object.entries(weekendVegetablePrice).forEach(([key, value]) => {
      if (key === vegetable) {
        console.log((quantity * value).toFixed(2));
      }
    });
  } else {
    console.log("error");
  }
}

f("tomato", "Tuesday", 2);
f("onion", "Sunday", 3);
f("pepper", "Monday", 10);
f("bannana", "Friday", 5);
