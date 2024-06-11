function f(
  renovationPrice,
  countOfPowders,
  countOfLipsticks,
  countOfSpirals,
  countOfShadows,
  countOfConcealers
) {
  const powder = 2.6;
  const lipstick = 3;
  const spiral = 4.1;
  const shadows = 8.2;
  const concealer = 2;

  let price =
    countOfPowders * powder +
    countOfLipsticks * lipstick +
    countOfSpirals * spiral +
    countOfShadows * shadows +
    countOfConcealers * concealer;

  if (
    countOfPowders +
      countOfLipsticks +
      countOfSpirals +
      countOfShadows +
      countOfConcealers >=
    50
  ) {
    price -= price * 0.25;
  }

  price -= price * 0.1;

  if (price < renovationPrice) {
    console.log(
      `Not enough money! ${(renovationPrice - price).toFixed(2)} BGN needed.`
    );
  } else {
    console.log(`Yes! ${(price - renovationPrice).toFixed(2)} BGN left.`);
  }
}

f(40.8, 20, 25, 30, 50, 10);
f(320, 8, 2, 5, 5, 1);
