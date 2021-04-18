const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;


const user = {
  email: "anna@gmail.com",
  password: "1243",
  firstName: "Anna",
  lastName: "Mark",
  born: 1996
}

const { email, password, firstName, lastName } = user; // it's the same as saying:
// const email = user.email; without repeating for everything.

console.log(email);

const { born: birthYear, died = "N/A" } = user; //renaming the variable and assigning a default value for another variable.