function solve(
  budget,
  studentsCount,
  pricePerLightSaber,
  pricePerRobe,
  pricePerlBelt
) {
  let paidBelts = Math.floor(studentsCount / 6);

  let sum =
    pricePerLightSaber * (studentsCount + Math.ceil(studentsCount * 0.1)) +
    pricePerRobe * studentsCount +
    pricePerlBelt * (studentsCount - paidBelts);

  if (budget >= sum) {
    console.log(`The money is enough - it would cost ${sum.toFixed(2)}lv.`);
  } else
    console.log(`George Lucas will need ${(sum - budget).toFixed(2)}lv more.`);
}

solve(100, 2, 1.0, 2.0, 3.0);
solve(100, 42, 12.0, 4.0, 3.0);
