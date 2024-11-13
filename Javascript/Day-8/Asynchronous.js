


// Synchronous

function UserData() {
    alert("this is your data");
    return{id: 1, name: "ayub"}
}

console.log("yes your data secure")

const user = UserData();

console.log("this is your data", user)

console.log("checked Synchronous")


// ASynchronous

function getUserData (callback) {
        setTimeout( ()=>  {
               const user = {id: 1, name: "ayub"}
               callback(user)
        } , 3000 )

}

getUserData( function(user) {
    console.log("this is your data", user)
} )

console.log("hi am your data")

