function solve(floors, roomsPerFloor) {
  let arr = [];
  for (let i = floors; i >= 1; i--) {
    for (let j = 0; j < roomsPerFloor; j++) {
      if (i === floors) {
        // apartment
        arr.push(`L${i}${j}`);
      } else if (i % 2 !== 0) {
        // odd
        arr.push(`A${i}${j}`);
      } else if (i % 2 === 0) {
        // even
        arr.push(`O${i}${j}`);
      }
    }
    console.log(arr.join(" "));

    arr = [];
  }
}

solve(6, 4);
solve(3, 3);
solve(4, 4);
