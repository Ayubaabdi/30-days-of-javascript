// Conditional Statements (if-else)

let age = 17;

if (age >= 18) {
  console.log("you're Adult");
}

// if-else Statement

let ages = 10;

if (ages >= 20) {
  console.log("you're an adult");
} else {
  console.log("you're a minor");
}

// Exercise

let score = 10;

if (score >= 50) {
  console.log("You're passed");
} else {
  console.log("you're fail");
}

// else if Statement

const aga = 20;

if (age < 18) {
  console.log("you're are child");
} else if (aga < 20) {
  console.log("you're an adult");
} else {
  console.log("you're Man");
}

// Exercise

let temperature = -14;

if (temperature < -0) {
  console.log("Very Cold");
} else if (temperature < 15) {
  console.log("Cold");
} else if (temperature < 25) {
  console.log("warm");
} else {
  console.log("Hot");
}

// Ternary Operator

const message = age >= 30 ? "You're Adult" : "Your an Minor";

console.log(message);

// and Operator &&

const inbox = (age = 18 && "this is an adult");

console.log(inbox);    


// Exercise Ternary Operator



let exam = 69;
let result = exam >= 70? "you're passed" : "you're fail"

console.log(result)

