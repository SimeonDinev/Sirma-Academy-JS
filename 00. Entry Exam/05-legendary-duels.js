function checkForLegendaryFight(input) {
  let result = input;
  let lastResult = result;

  if (input.length === 0) {
    return;
  }

  while (result !== "") {
    result = result.replaceAll("!!", "");
    result = result.replaceAll("{}", "");
    result = result.replaceAll("()", "");

    if (lastResult === result) {
      return console.log("Not Legendary");
    }

    lastResult = result;
  }

  console.log("Legendary");
}

checkForLegendaryFight("()()(()())");
checkForLegendaryFight("((!!)(({!!})))");
checkForLegendaryFight("((())");
checkForLegendaryFight("{!}!");
checkForLegendaryFight("({(!!}))");
