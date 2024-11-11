// forEach() Method

const fruits = ["apple", "banana", "jerry"];

fruits.forEach((fruits) => {
  console.log("this is " + fruits);
});

// Exercise forEach() Method

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((numbers) => {
  console.log("this is Number " + numbers);
});

// Map

let number = [1, 2, 3, 4, 5];

const newnumbers = number.map((number) => number * 2);

console.log(newnumbers);

// Exercise Map

const vit = ["apple", "banana", "jerry"];

const newvit = vit.map((vit) => vit.length);

console.log(newvit);
