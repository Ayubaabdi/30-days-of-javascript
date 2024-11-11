// Template Literals

const name = "Ayub";
const lastName = "Abdi";
const city = "Mogadishu";

let message = `hi mr ${name} ${lastName} welcome to ${city}`;

console.log(message);

// Array Destructuring

let fruits = ["apple", "banana", "jerry"];

const [ayub, banana, jerry] = fruits;

console.log(ayub);

// exercise Array Destructuring

let numbers = ["Red", "blue", "green"];

const [red, blue, green] = numbers;

const messages = `this color is ${red} and this color is ${blue}`;

console.log(messages);

// Object Destructuring

const list = { names: "Ayub", age: 20, citye: "Mogadishu" };

const { names, age, citye } = list;

console.log(name);
console.log(age);
console.log(city);

// exercise Object Destructuring

const car = { make: "Toyota", Model: "Corrala", Year: 2024 };

const { make, Model } = car;

console.log(make);
console.log(Model);

// Default Parameters

function person(name = "Guest") {
  console.log(`hello ${name}`);
}

person("Amina");

// exercise  Default Parameters

function calculateArea(width, height = 5) {
  console.log(`width is ${width} and height is ${height}`);
}

calculateArea(5);

// Spread  Operators

const sum1 = [1, 2, 4, 5];

const sum2 = [...sum1, 6, 7, 8];

console.log(sum2);

//Rest Operators

function sum(...numbers) {
  return numbers.reduce((total, sum) => total + sum, 0);
}

console.log(sum(20, 30, 40));

// Exercise Spread  Operators and rest Operator

const array1 = [1, 2, 3, 4];

const array2 = [...array1, 5, 6, 7, 8];

console.log(array2);

function rest(...number) {
  return number.reduce((total, mult) => total * mult, 1);
}

console.log(rest(10, 10));
