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

const  list = { names: "Ayub", age: 20, citye: "Mogadishu" };

const {names,age,citye } = list

console.log(name);
console.log(age);
console.log(city);