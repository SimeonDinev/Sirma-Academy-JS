async function makeRequest() {
  const x = await fetch("https://swapi.dev/api/people/1/");
  const y = await x.json();
  console.log(y);
}
