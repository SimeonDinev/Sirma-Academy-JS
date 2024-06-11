function decipherMessage(code, n) {
  const startIndexOfASCII = 32;
  const endIndexOfASCII = 127;
  let result = "";

  if (code.length > 0 && code.length <= 100 && n > 0 && n <= 25) {
    for (let i = 0; i < code.length; i++) {
      let idx = code[i].charCodeAt(0) - n;

      // Check if the element idx < ASCII(Dec: 32, Char: " ")
      if (idx < startIndexOfASCII) {
        let x = startIndexOfASCII - idx;
        idx = endIndexOfASCII - x;
      }

      result += String.fromCharCode(idx);
    }
  }

  console.log(result);
}

decipherMessage('Uifsf!jt!b!tfdsfu"', 1);
decipherMessage("Wkurz#lw#lq#wkh#iluh$", 3);
decipherMessage("Fwfltws", 5);

// Additional tests
// decipherMessage('Fwfltws"', 5);
