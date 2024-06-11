function f(weight, dimension) {
  let text = "";
  let fee = 0;
  if (weight > 50) {
    fee += 100;
    text += "Overweight ";
  }
  if (dimension > 158) {
    let x = dimension - 158;
    if (x >= 1 && x <= 20) {
      fee += 50;
    } else if (x >= 21 && x <= 50) {
      fee += 100;
    } else if (x > 50) {
      fee += 200;
    }
  }
  // If $150 (Overweight + Slightly oversize) is wrong then we must add = on the right if condition to be fee >= 150,
  // It isn't stated in the condition which is correct
  if (fee > 150) {
    fee += 50;
  }

  if (fee === 150) {
    console.log("$" + `${fee} (Overweight + Slightly oversize)`);
  } else if (fee === 100) {
    console.log("$" + `${fee} (Oversize)`);
  } else if (fee >= 250) {
    console.log("$" + `${fee} (Overweight + Oversize + Handling)`);
  }
}

f(52, 160);
f(48, 180);
f(55, 190);
