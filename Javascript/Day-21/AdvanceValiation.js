const form = document.querySelector("#validationUser");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");

const error = document.querySelector("#error");
const success = document.querySelector("#success");


form.addEventListener('submit', function(event) {
    event.preventDefault()

    const resultShow = validationUser()
})


function validationUser () {

    if(username.value === '') {
        setError(username, "username is required")
        return false
    }else {
        setSuccess(username)
        return true
    }
   
}

function setError (userShow, message) {

    userShow.classList.add('invalid')
    userShow.classList.remove('valid')
}

function setSuccess(userShow) {

    userShow.classList.add('valid')
    userShow.classList.remove('invalid')
}