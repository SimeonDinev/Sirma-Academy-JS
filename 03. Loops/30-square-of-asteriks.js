function solve(x) {
  let arr = [];
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      arr.push("*");
    }
    console.log(arr.join(" "));
    arr = [];
  }
}

solve(2);
solve(3);
