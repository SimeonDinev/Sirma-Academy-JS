function solve(row, col) {
  for (let i = 1; i <= row; i++) {
    let colStr = "";
    for (let j = 1; j <= col; j++) {
      if (i === 1 || j === 1 || i === row || j === col) {
        colStr += "*";
      } else {
        colStr += " ";
      }
    }
    console.log(colStr);
  }
}

solve(4, 6);
solve(2, 2);
solve(3, 4);
