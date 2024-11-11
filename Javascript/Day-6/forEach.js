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

// filter() Method

const numing = [1, 2, 3, 5, 6, 7, 8, 9, 10];

const evernnum = numing.filter((numing) => numing % 2 === 0);

console.log(evernnum);

// another example

const score = [40, 50, 60, 70, 90];

const pass = score.filter((score) => score <= 60);

console.log(pass);

// reduce() Method

const value = [1, 2, 3, 4, 5, 6];

const values = value.reduce((total, sum) => total * sum, 1);

console.log(values);


// Exercise 

let val = [1,2,3,4,5]

const valuess = val.reduce((total, mult) => total * mult, 1)

console.log(values)   
