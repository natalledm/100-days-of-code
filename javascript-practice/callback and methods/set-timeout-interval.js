console.log("Hello!");

setTimeout(() => console.log("...are you still there?"), 3000);

console.log("Goodbye!") //comes first because it's not async

const id = setInterval(() => console.log(Math.random()), 2000);

clearInterval(id); //to stop the Interval or it will continue to loop forever.