function f(potionOne, potionTwo) {
  if (potionOne === "herbs") {
    if (potionTwo === "water") {
      console.log("Health potion");
    } else if (potionTwo === "oil") {
      console.log("Stealth potion");
    } else {
      console.log("Minor stamina potion");
    }
  } else if (potionOne === "berries") {
    if (potionTwo === "sugar") {
      console.log("Speed potion");
    } else {
      console.log("Minor energy potion");
    }
  } else {
    console.log("No potion");
  }
}

f("herbs", "water");
f("herbs", "oil");
f("herbs", "banana");
f("berries", "sugar");
f("berries", "banana");
f("herbs", "sugar");
f("sugar", "salt");
