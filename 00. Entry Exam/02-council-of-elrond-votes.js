function calculateVotes(inputArray) {
  let yesVotes = 0;
  let noVotes = 0;
  let abstainVotes = 0;

  if (inputArray.length === 0) {
    return;
  }

  for (let i = 0; i < inputArray.length; i++) {
    // validation for case sensitivity
    let vote = inputArray[i].toLowerCase();

    if (vote === "yes") {
      yesVotes++;
    } else if (vote === "no") {
      noVotes++;
    } else if (vote === "abstain") {
      abstainVotes++;
    }
  }

  if (yesVotes === 0 && noVotes === 0) {
    if (abstainVotes > 0) {
      console.log("Abstain");
    }
  } else if (yesVotes > noVotes) {
    console.log("Yes");
  } else if (yesVotes < noVotes) {
    console.log("No");
  } else {
    console.log("Tie");
  }
}

calculateVotes(["Yes", "No", "Yes", "Abstain", "Yes"]);
calculateVotes(["No", "No", "Yes"]);
calculateVotes(["Yes", "No"]);
calculateVotes(["Abstain"]);
calculateVotes(["No", "No", "Abstain", "Abstain", "Yes", "Yes"]);
calculateVotes(["No", "Abstain", "Abstain"]);

// Additional tests
// calculateVotes([]);
// calculateVotes(["no", "abstain", "Abstain", "yes"]);
