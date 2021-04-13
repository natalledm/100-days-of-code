const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num){
  console.log(num)
})

numbers.forEach(function(num){
  if(num % 2 === 0){
    console.log(num)
  }
})



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

movies.forEach(function(movie){
  console.log(`${movie.title} - ${movie.score}/100`)
})