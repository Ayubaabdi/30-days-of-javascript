const form = document.querySelector("#validationUser");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmPassword");

const error = document.querySelector("#error");
const success = document.querySelector("#success");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  error.textContent = "";
  success.textContent = "";

  const userNameShow = validationUser();
  const emailShow = validateEmail();
  const passShow = validPassword();
  const confirm = confirmPass();

  if (!userNameShow) {
    username.focus();
    return;
  } else if (!emailShow) {
    email.focus();
    return;
  } else if (!passShow) {
    password.focus();
    return;
  } else if (!confirm) {
    confirmpassword.focus();
    return;
  }

  success.textContent = "Your Data Successfully";
});

function validationUser() {
  if (username.value === "") {
    setError(username, "username is required");
    return false;
  } else {
    setSuccess(username);
    return true;
  }
}
function validateEmail() {
  const emailpattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!email.value.match(emailpattern)) {
    setError(email, "Your email don't same please try again");
    return false;
  } else {
    setSuccess(email);
    return true;
  }
}

function validPassword() {
  if (password.value.length < 8) {
    setError(password, "Your password is not match");
    return false;
  } else {
    setSuccess(password);
    return true;
  }
}

function confirmPass() {
  if (password.value !== confirmpassword.value) {
    setError(confirmpassword, "Your password is not match");
    return false;
  } else {
    setSuccess(confirmpassword);
    return true;
  }
}
function setError(userShow, message) {
  userShow.classList.add("invalid");
  userShow.classList.remove("valid");
  error.textContent = message;
}

function setSuccess(userShow) {
  userShow.classList.add("valid");
  userShow.classList.remove("invalid");
}
