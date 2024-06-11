function convertJSONtoObject(jsonFile) {
  const obj = JSON.parse(jsonFile);

  for (const key in obj) {
    console.log(key + ": " + obj[key]);
  }
}

convertJSONtoObject('{"name": "Ivan", "age": 40, "town": "Sofia"}');
convertJSONtoObject('{"firstName": "Ivan", "lastName": "Ivanov"}');
