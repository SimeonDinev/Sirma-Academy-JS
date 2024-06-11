function solve(arr) {
  let output = [];
  let counter = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      counter++;
      output.push(counter);
    } else if (arr[i] === "remove") {
      output.pop();
    } else {
      continue;
    }
  }
  if (output.length < 1) {
    console.log("Empty");
  } else {
    console.log(output.join(" "));
  }
}

solve(["add", "add", "add", "add"]);
solve(["add", "add", "remove", "add", "add"]);
solve(["remove", "remove", "remove"]);
