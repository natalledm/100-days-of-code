const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = numbers.filter(n => n % 2 === 0);

console.log(evenNumbers);

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

// chaining the filter with map

const OkMovies = movies.filter(m => m.score < 90).map(m => m.title);

console.log(OkMovies);

// filter an array of names into names with length until 10.
function validUserNames(strings){
    return strings.filter(name => name.length < 10);
}