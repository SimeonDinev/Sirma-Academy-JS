function minutesConverterToHour(minutes) {
  let x = minutes / 60;
  let y = minutes % 60;
  console.log(Math.floor(x) + ":" + y);
}
minutesConverterToHour(90);
