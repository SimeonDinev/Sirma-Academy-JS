// May have a false!!!
function calculateBMI(weight, height) {
  let x = (weight / (height * height)).toFixed(2);

  console.log(x);
}

calculateBMI(70, 1.73);
calculateBMI(60, 1.75);
calculateBMI(85, 1.8);
calculateBMI(74, 1.765);
