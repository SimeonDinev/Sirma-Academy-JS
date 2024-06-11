function f(left, right) {
  if (left === "sword") {
    if (right === "shield") {
      console.log("Path to the castle");
    } else {
      console.log("Path to the forest");
    }
  } else if (left === "map") {
    if (right === "coins") {
      console.log("Go to the town");
    } else {
      console.log("Camp");
    }
  } else {
    console.log("Wander aimlessly");
  }
}

f("sword", "shield");
f("map", "coins");
f("torch", "flower");
f("sword", "pouch");
f("map", "compass");
