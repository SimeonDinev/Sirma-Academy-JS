function convertToJSON(name, lastName, eyeColor) {
  const obj = { name, lastName, eyeColor };
  const json = JSON.stringify(obj);
  console.log(json);
}

convertToJSON("Ivan", "Ivanov", "blue");
convertToJSON("Maria", "Petrova", "brown");
