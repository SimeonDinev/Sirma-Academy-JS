function convertObjectToStringOutput(obj) {
  for (const key in obj) {
    console.log(key + " -> " + obj[key]);
  }
}

convertObjectToStringOutput({
  name: "Sofia",
  population: 1234567,
  country: "Bulgaria",
  postcode: 1000,
});
