// Introduction to Promises

function userData() {
  return new Promise((Resolve, Reject) => {
    const Success = false;

    setTimeout(()=> {
        if (Success) {
            Resolve({ id: 1, name: "Ayub abdi" });
          } else {
            Reject("this data fail");
          }
    }, 3000)

})

}

userData()
  .then((data) => console.log("User data", data))
  .catch((err) => console.log("your data failer", err));
