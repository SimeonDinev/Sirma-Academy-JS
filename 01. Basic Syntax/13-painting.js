function paintingCalculator(yellowPaint) {
  let red = yellowPaint / 4;
  let white = yellowPaint * 2;
  let total = red + white + yellowPaint;

  console.log(
    "Red: " +
      red +
      "\nYellow: " +
      yellowPaint +
      "\nWhite: " +
      white +
      "\nTotal: " +
      total
  );
}
paintingCalculator(17);
