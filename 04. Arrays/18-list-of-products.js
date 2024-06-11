function solve(arr) {
  arr.sort();
  arr.forEach((word, index) => {
    console.log(`${index + 1}.${word}`);
  });
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"]);
