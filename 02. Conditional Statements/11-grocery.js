function f(product, city, quantity) {
  let price;
  if (city === "Sofia") {
    switch (product) {
      case "tea":
        price = 0.5;
        break;
      case "water":
        price = 0.8;
        break;
      case "juice":
        price = 1.2;
        break;
      case "sweets":
        price = 1.45;
        break;
      case "chips":
        price = 1.6;
        break;
    }
  } else if (city === "Plovdiv") {
    switch (product) {
      case "tea":
        price = 0.4;
        break;
      case "water":
        price = 0.7;
        break;
      case "juice":
        price = 1.15;
        break;
      case "sweets":
        price = 1.3;
        break;
      case "chips":
        price = 1.5;
        break;
    }
  } else if (city === "Varna") {
    switch (product) {
      case "tea":
        price = 0.45;
        break;
      case "water":
        price = 0.7;
        break;
      case "juice":
        price = 1.1;
        break;
      case "sweets":
        price = 1.35;
        break;
      case "chips":
        price = 1.55;
        break;
    }
  }

  console.log((quantity * price).toFixed(2));
}
f("tea", "Varna", 2);
f("chips", "Plovdiv", 1);
f("juice", "Sofia", 6);
f("sweets", "Plovdiv", 1);
