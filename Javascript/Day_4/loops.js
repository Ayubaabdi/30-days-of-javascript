// Loop

// For loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// exercise

for (let x = 1; x < 51; x++) {
  console.log(x);
}

// Meaningful Example Using Arrays

let classStudents = ["Ayub", "Amina", "Hawa", "salah", "mohamud", "Mohamed"];

//   console.log(classStudents.length)

for (let i = 0; i < classStudents.length; i++) {
  console.log(classStudents[i]);
}

// Exercise

const Fruits = ["apple", "banana", "mouse"];

for (let f = 0; f < Fruits.length; f++) {
  console.log(Fruits[f]);
}

// while loop

let i = 0;

while (i < 5) {
  console.log("Itaration Num" + i);

  i++;
}

// Exercise

let x = 5;

while (x > 0) {
  console.log("this is num" + x);
  x--;
}

//  Do While Loop

// let v = 0;

// do {
//   console.log("numbers is " + v);
//   v++;
// } while (v < 5);

let password;

do {
  password = prompt("enter you passerd");
} while (password !== "1234");

console.log("welcome user");
