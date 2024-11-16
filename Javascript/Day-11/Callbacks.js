function great(name) {
  console.log("hello ", name);
}

function userDataInfo(callback) {
  const name = prompt("Enter Your Name");

  callback(name);
}

userDataInfo(great);

// Another Callback example

function operate (a, b, callback) {
  return callback(a, b)
  
}

function add (a, b) {
  return a+b;
}

function substaction (a,b) {
  return a - b
}


console.log("additional" , operate(10, 20, add));
console.log("Substraction" , operate(20, 10, substaction));