function calculate(waterConsumptionPerWeek, people) {
  let daily = waterConsumptionPerWeek / (7 * people);
  console.log(daily.toFixed(2));
}

calculate(2450, 7);
calculate(3150, 10);
calculate(980, 7);
