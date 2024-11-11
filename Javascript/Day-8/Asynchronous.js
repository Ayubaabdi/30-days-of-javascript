// synchronous

// function userdata() {
//   alert("check your data user");

//   return { id: 1, name: "ayub abdi" };
// }

// console.log("this is your first data");

// const user = userdata();

// console.log("this is your data ", user);

// console.log("this is data secure is free ");


// Asynchronous

function accountData(callback) {
   setTimeout(()=>{
   const user = {id:1, name: "ali" }
   callback(user)
   }, 3000);
}

console.log("start fetch user data ")

accountData(function(user) {
    console.log("this is your data ",user)
});

console.log("this is message show up imidiately")


