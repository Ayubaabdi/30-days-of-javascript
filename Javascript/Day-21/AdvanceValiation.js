const form = document.querySelector("#validationUser");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmpassword = document.querySelector("#confirmpassword");

const error = document.querySelector("#error");
const success = document.querySelector("#success");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  error.textContent = "";
  success.textContent = "";

  const resultShow = validationUser();

  if (!resultShow) {
    username.focus();
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

function setError(userShow, message) {
  userShow.classList.add("invalid");
  userShow.classList.remove("valid");

  error.textContent = message;
}

function setSuccess(userShow) {
  userShow.classList.add("valid");
  userShow.classList.remove("invalid");
}
