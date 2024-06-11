function solve(input) {
  let moviesList = populatingTheListWithMovies(input);

  for (let i = 0; i < moviesList.length; i++) {
    const element = moviesList[i];
    if (
      element.name !== undefined &&
      element.director !== undefined &&
      element.date !== undefined
    ) {
      console.log(JSON.stringify(element));
    }
  }
}

function createObject(movieName, directedBy, releaseDate) {
  return {
    name: movieName,
    director: directedBy,
    date: releaseDate,
  };
}
function populatingTheListWithMovies(input) {
  let arrayWithMovies = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i].includes("addMovie")) {
      let movieName = input[i].split("addMovie ")[1];
      arrayWithMovies.push(createObject(movieName));
    } else if (input[i].includes("directedBy")) {
      let movieName = input[i].split(" directedBy ")[0];
      let director = input[i].split(" directedBy ")[1];

      let obj = arrayWithMovies.find(({ name }) => name === movieName);
      if (obj === undefined) {
        continue;
      }
      obj.director = director;
    } else if (input[i].includes("onDate")) {
      let movieName = input[i].split(" onDate ")[0];
      let date = input[i].split(" onDate ")[1];

      let obj = arrayWithMovies.find(({ name }) => name === movieName);
      if (obj === undefined) {
        continue;
      }
      obj.date = date;
    } else {
      console.log("Error!!!");
    }
  }
  return arrayWithMovies;
}

solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Spinderman 2 onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
solve([
  "addMovie The Avengers",
  "addMovie Spiderman",
  "The Avengers directedBy Pesho Peshov",
  "The Avengers onDate 30.07.2010",
  "Captain America onDate 30.07.2010",
  "Captain America directedBy Joe Russo",
  "The Avengers directedBy Anthony Russo",
]);
