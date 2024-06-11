function solve(day) {
  let daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  for (let i = 0; i < daysOfTheWeek.length; i++) {
    if (day - 1 === i) {
      console.log(daysOfTheWeek[i]);
      return;
    }
  }
  console.log("Invalid day!");
}

solve(3);
solve(6);
solve(11);
