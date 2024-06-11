function f(degree, zone) {
  degree = Math.abs(degree);
  if (zone === "N") {
    if (degree > 66.5) {
      console.log("Arctic Zone");
    } else if (degree <= 66.5 && degree > 23.5) {
      console.log("Temperate Zone");
    } else if (degree <= 23.5 && degree > 0) {
      console.log("Tropic Zone");
    } else {
      console.log("Equator");
    }
  } else if (zone === "S") {
    if (degree > 66.5) {
      console.log("Arctic Zone");
    } else if (degree <= 66.5 && degree > 23.5) {
      console.log("Temperate Zone");
    } else if (degree <= 23.5 && degree > 0) {
      console.log("Tropic Zone");
    } else {
      console.log("Equator");
    }
  }
}

f(70, "N");
f(45, "S");
f(10, "N");
f(0, "N");
f(-85, "S");
