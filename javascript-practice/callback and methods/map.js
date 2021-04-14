const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = numbers.map(function(n){
  return n*n;
})

console.log(doubleNumbers);

const movies = [
  {
    title: "Amadeus",
    score: 99
  },
  {
    title: "Stand by Me",
    score: 85
  },
  {
    title: "Parasite",
    score: 95
  }
]

const movieNames = movies.map(function(movie){
  return movie.title;
})

console.log(movieNames);

// map needs an arrow function/anonymous function to work. Nothing like passing, for example, trim() into it but a function that uses trim().

const movieScores = movies.map(movie => movie.score);

console.log(movieScores);