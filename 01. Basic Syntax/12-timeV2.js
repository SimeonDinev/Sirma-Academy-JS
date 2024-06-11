function converter(minutes) {
  let x = Math.floor(minutes / 60);
  let y = minutes % 60;

  if (x > 9) {
    console.log(x + ":" + y);
  } else {
    if (y < 9) {
      console.log("0" + x + ":" + y + "0");
    } else {
      console.log("0" + x + ":" + y);
    }
  }
}
converter(0);
