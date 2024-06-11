function findFirstAndLastOccurrences(namesArray, searchedName) {
  // Code is case sensitive
  let copyNamesArray = namesArray.map(function (x) {
    return x.toLowerCase();
  });

  let firstOccurrence = copyNamesArray.findIndex(
    (x) => x === searchedName.toLowerCase()
  );
  let lastOccurrence = copyNamesArray.findLastIndex(
    (x) => x === searchedName.toLowerCase()
  );

  if (firstOccurrence === -1) {
    console.log("Record not found");
  } else {
    console.log(
      `First Occurrence: ${firstOccurrence} \nLast Occurrence: ${lastOccurrence}`
    );
  }
}

findFirstAndLastOccurrences(["Frodo", "Sam", "Frodo", "Merry"], "Frodo");
findFirstAndLastOccurrences(["Pippin", "Merry", "Sam", "Pippin"], "Pippin");
findFirstAndLastOccurrences(["Aragorn", "Legolas", "Gimli"], "Boromir");
findFirstAndLastOccurrences(["Gandalf", "Sam", "Aragorn", "Frodo"], "Frodo");

// Additional tests
// findFirstAndLastOccurrences(["gandalf", "Sam", "aragorn", "Frodo"], "sam");
