function solve(x) {
  x = String(x).split("").reverse().join("");
  for (let i = 0; i < x.length; i++) {
    let b = parseInt(x[i]);
    let a = String.fromCharCode(b + 33);

    console.log(b === 0 ? "ZERO" : a.repeat(b));
  }
}

solve(2049);
solve(9347439);
