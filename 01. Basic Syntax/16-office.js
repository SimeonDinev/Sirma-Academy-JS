function calculation(firstCabinetPrice) {
  let secondCabinetPrice = firstCabinetPrice - firstCabinetPrice * 0.2;
  let thirdCabinetPrice =
    firstCabinetPrice +
    secondCabinetPrice +
    (firstCabinetPrice + secondCabinetPrice) * 0.15;
  let sum = firstCabinetPrice + secondCabinetPrice + thirdCabinetPrice;
  console.log(sum.toFixed(3));
}
calculation(380);
calculation(720.5);
calculation(455.3);
