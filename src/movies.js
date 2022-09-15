const movies = require("./data.js");

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(moviesArray) {
  const rawList = moviesArray.map((movie) => movie.director);
  const cleanList = rawList.filter((director, index) => {
    return rawList.indexOf(director) === index;
  });
  return cleanList;
}
console.log(`ITERATION 1. List of all directors cleaned:`);
console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// function howManyMovies(moviesArray) {}

function howManyMovies(moviesArray) {
  const steven = moviesArray.filter(
    (movie) => movie.director === "Steven Spielberg" //todas pelis spielberg
  );
  const dramaMovies = steven.filter((movie) => movie.genre.includes("Drama")); //filtramos solo las de drama
  return dramaMovies;
}
console.log(`ITERATION 2. List of Spielberg's Drama Movies:`);
console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  totalSum = 0;
  const scores = moviesArray.map((movie) => movie.score);
  for (let i = 0; i < scores.length; i++) {
    totalSum += scores[i];
  }
  const numFixed = totalSum / moviesArray.length;
  return numFixed.toFixed(2);
}
console.log(`ITERATION 3. Scores Average:`);
console.log(scoresAverage(movies));

//version con reduce
// function scoresAverage2(moviesArray) {
//   const scores = moviesArray.reduce((total, movie) => {
//     return total + movie.score;
//   }, 0);
//   const reduced = scores / moviesArray.length;
//   return reduced.toFixed(2);
// }
// console.log(scoresAverage2(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });
  const scoresDrama = dramaMovies.reduce((total, movie) => {
    return total + movie.score;
  }, 0);
  const reduced = scoresDrama / dramaMovies.length;
  return reduced.toFixed(2);
}

console.log(`ITERATION 4. Drama Scores Average:`);
console.log(dramaMoviesScore(movies));
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  const cloned = [...moviesArray];
  const orderedList = cloned.sort((a, b) => a.year - b.year);
  return orderedList;
}

console.log(`ITERATION 5. Ordered List by year:`);
console.log(orderByYear(movies));

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  return moviesArray
    .map((movie) => movie.title)
    .sort()
    .slice(0, 20);
}
console.log(`ITERATION 6. Alphabetic Order:`);
console.log(orderAlphabetically(movies));
// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
