const form = document.querySelector("#FormValidation");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmpassword = document.querySelector("#confirmpassword").value;

  const error = document.querySelector("#error");

  // UserName section
  error.textContent = `hello Mr ${username}`;

  if (username === "") {
    error.textContent = "UserName Required";
    return;
  }
  // Email section

  const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.match(emailpattern)) {
    error.textContent = "Your Email valid Incorrect please check";

    return;
  }

  error.textContent = "Your data Successfully";

  //    password section

  if (password.length < 8) {
    error.textContent = "Your password at least 8 digits";
    return;
  }

  //    confirm password

  if (password !== confirmpassword) {
    error.textContent = "Your password Not Matched";
  }
});
