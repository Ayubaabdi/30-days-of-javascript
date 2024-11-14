

function great(name) {
    console.log("hello ", name)
}

function userDataInfo(callback) {
    const name = prompt("Enter Your Name")

    callback(name)
}

userDataInfo(great)