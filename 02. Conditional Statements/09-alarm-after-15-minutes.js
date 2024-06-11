function timeChecker(hour, minutes) {
  let min;

  minutes += 15;

  if (minutes >= 60) {
    let min = minutes - 60;
    hour += 1;
    if (hour === 24) {
      hour = 0;
      console.log(hour + ":" + min);
    } else {
      console.log(min < 10 ? hour + ":" + "0" + min : hour + ":" + minutes);
    }
  } else {
    console.log(hour + ":" + minutes);
  }
}
timeChecker(1, 47);
timeChecker(0, 2);
timeChecker(23, 59);
timeChecker(11, 7);
