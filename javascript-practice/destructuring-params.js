const user = {
  email: "anna@gmail.com",
  password: "1243",
  firstName: "Anna",
  lastName: "Mark",
  born: 1996
}

function fullName({ firstName, lastName = "Anon"}){ // don't need to ask for the entire object, only what will be used. Also, default param.
  return `${firstName} ${lastName}`; // because of that, there's no need to say "user.firstName"
}

console.log(fullName(user));