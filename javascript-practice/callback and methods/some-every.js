// booleans

const grade = [50, 77, 88, 80, 90, 48, 79, 95]

const pass = grade.every(score => score >= 70);

console.log(pass); // false, one or more are below 70.

const okGrade = grade.some(score => score >= 70);

console.log(okGrade); // true, at least one is higher than 70.