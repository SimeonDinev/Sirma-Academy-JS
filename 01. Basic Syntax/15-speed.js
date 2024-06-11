function calculateSpeed(distance, hours, minutes, seconds) {
  let timeInSecons = hours * 60 * 60 + minutes * 60 + seconds;
  let speed = distance / timeInSecons;
  console.log(speed.toFixed(6));
}

calculateSpeed(100, 1, 20, 20);
calculateSpeed(2500, 5, 56, 23);
calculateSpeed(600, 7, 35, 55);
