function solve(riders, commandsArray) {
  function validateIndex(index, inclusive = true) {
    if (inclusive) {
      return index >= 0 && index < riders.length;
    } else {
      return index >= 0 && index <= riders.length;
    }
  }

  if (riders.length === 0) {
    return;
  }

  for (let i = 0; i < commandsArray.length; i++) {
    let commandArg = commandsArray[i].split(" ");
    let command = commandArg[0];

    switch (command) {
      case "destroy":
        let destroyIndex = Number(commandArg[1]);
        if (validateIndex(destroyIndex)) {
          riders.splice(destroyIndex, 1);
          console.log(riders.join(" "));
        } else {
        }
        break;
      case "swap":
        let swapIndexOne = Number(commandArg[1]);
        let swapIndexTwo = Number(commandArg[2]);

        if (
          validateIndex(swapIndexOne) &&
          validateIndex(swapIndexTwo) &&
          swapIndexOne !== swapIndexTwo
        ) {
          let temp = riders[swapIndexOne];
          riders[swapIndexOne] = riders[swapIndexTwo];
          riders[swapIndexTwo] = temp;
          console.log(riders.join(" "));
        } else {
        }
        break;
      case "add":
        let rider = Number(commandArg[1]);
        riders.push(rider);
        console.log(riders.join(" "));

        break;
      case "insert":
        let newRider = Number(commandArg[1]);
        let idxOfNewRider = Number(commandArg[2]);

        if (validateIndex(idxOfNewRider, false)) {
          riders.splice(idxOfNewRider, 0, newRider);
          console.log(riders.join(" "));
        } else {
        }
        break;
      case "center":
        let x = Math.ceil(riders.length / 2);
        if (riders.length % 2 !== 0) {
          console.log(riders[x - 1]);
        } else if (riders.length < 3) {
        } else if (riders.length % 2 === 0) {
          console.log(riders[x - 1] + " " + riders[x]);
        }
        break;
      default:
        break;
    }
  }
}
solve([1, 2, 3, 4, 5], ["destroy 3", "swap 0 1", "add 6", "center"]);
solve(
  [1, 2, 3, 4, 5],
  [
    "add 6",
    "swap 0 5",
    "swap 1 4",
    "swap 2 3",
    "swap 2 100",
    "swap 2 2",
    "center",
  ]
);
solve([1, 2], ["insert 3 2", "center", "destroy 1", "destroy 2", "center"]);
