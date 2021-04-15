const prices = [9.99, 1.50, 19.99, 49.99, 30.5];

// const totalPrice = prices.reduce((total, price) => {
//     return total + price;
// })

//or
// const totalPrice = prices.reduce((total, price) => total + price)

// there's a second parameter that is usable as a starting point:
const totalPrice = prices.reduce((total, price) => total + price, 1000)

console.log(totalPrice);

const minimum = prices.reduce((minimal, price) => {
    if(minimal < price) {
        return minimal;
    }
    return price;
})

console.log(minimum);

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

const highestRate = movies.reduce((highest, currScore) => {
    if(highest.score > currScore.score){
        return highest;
    }
    return currScore;
})

console.log(highestRate);