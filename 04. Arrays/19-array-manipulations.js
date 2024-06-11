function solve(inputArray) {
  let array = inputArray.shift().split(" ").map(Number);

  for (let i = 0; i < inputArray.length; i++) {
    let command = inputArray[i].split(" ")[0];

    switch (command) {
      case "Add":
        array.push(inputArray[i].split(" ")[1]);
        break;
      case "Remove":
        let index = array.indexOf(parseInt(inputArray[i].split(" ")[1]));
        array.splice(index, 1);
        break;
      case "RemoveAt":
        array.splice(inputArray[i].split(" ")[1], 1);
        break;
      case "Insert":
        let number = inputArray[i].split(" ")[1];
        let idx = inputArray[i].split(" ")[2];
        array.splice(idx, 0, number);
        break;

      //   default:
      //     console.log("Wrong command!");
      //     break;
    }
  }
  console.log(array.join(" "));
}

solve(["4 19 2 53 6 43", "Add 3", "Remove 2", "RemoveAt 1", "Insert 8 3"]);
