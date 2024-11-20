const form = document.querySelector("#FormValiation")


form.addEventListener('submit' , function(event) {
    event.preventDefault()

    const username = document.querySelector("#username").value;
    const email =  document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const confirmpassword = document.querySelector("#confirmpassword").value;

    const error = document.querySelector("#error")

   

    // UserName section
    error.textContent = `hello Mr ${username}`
   
    
    if(username === '') {
        error.textContent = "UserName Required";
        return
    }
      // Email section

      if(email === '') {
        error.textContent = "Email Required"
        return
      }

})