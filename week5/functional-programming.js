const obj1 = {
  mother_name: "Megha",
  myAge: 22,
};

const obj2 = {
  mother_name: obj1.mother_name,
};

const colours1 = ["r", "g", "b", "a", "y"];
const colours2 = [...colours1, "m", "n"];
console.log(colours1, colours2);

// -----------------------------------

const birthday = (person) => ({ ...person, age: person.age + 1 });
console.log(birthday({ name: "Raksha", age: 22 }));

// -----------
const nums = [1, 2, 5, 8, 10, 15, 12, 16];
const checkNum = (num) => num > 10;

console.log(nums.filter(checkNum));

// Given an array of numbers, return an array with all numbers incremented by 2

const incrementBy2 = nums.map((item) => item + 2);
console.log(incrementBy2);

// Reduce

const arr2 = [1, 3, 5, 2, 22, 11, 9];

// Q1.
const getOddSum = (sum, num) => (num % 2 === 0 ? sum : sum + num); //Reducer
console.log(arr2.reduce(getOddSum)); //Initial value is 0

// Q2.
const reduceObj = (oddEvenObj, num) =>
  num % 2 === 0
    ? { ...oddEvenObj, even: oddEvenObj.even + num }
    : { ...oddEvenObj, odd: oddEvenObj.odd + num }; //Reducer

const oddEvenObj = { odd: 0, even: 0 }; //Initial value
console.log(reduceObj, oddEvenObj);

// Currying
// --Function which returns a function. Use case: When we don't have all parameters of the first function

const giveYourName = (name) => (greeting) => `${greeting} ${name}`;

console.log(giveYourName("Raksha")("Hello"));

// Function composition

const logWithMyName = (msg) => `Raksha says ${msg}`;
const logWithMyId = (msg) => `ID: 1234 : ${msg}`;
const logWithIdAndName = (msg) => logWithMyId(logWithMyName(msg));

console.log(logWithIdAndName("Hello World"));
