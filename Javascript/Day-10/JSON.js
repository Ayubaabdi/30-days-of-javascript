// const user = {
//   id: 1,
//   name: "Ali ahmed",
//   age: 20,
//   email: "Aliahemd@gmail.com",
// };
// console.log(user);

// // Object to JSON

// const jsonstring = JSON.stringify(user);

// console.log(jsonstring);

// // JSON TO OBJECT

// const parseData = JSON.parse(jsonstring);

// console.log(parseData);

async function displayUserData() {
  console.log("started fetching Data");

  const response = await fetch("Data.json");
  const data = await response.json();

  console.log("fetching data", data);
}
displayUserData();
