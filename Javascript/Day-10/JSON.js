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
  console.log("Starting Fetching data");

  const respose = await fetch("Data.json");

  console.log(respose);

  const data = await respose.json();

  console.log("respose", data);
}

displayUserData();
