const Color = document.querySelector("#Color");
const selectedColor = document.querySelector("#selectedColor");
const userName = document.querySelector("#userName");
const currentUser = document.querySelector("#currentUser")

Color.addEventListener("change", function () {
  console.log("Selected Color", Color.value);

  selectedColor.textContent = `selected Color : ${Color.value}`;
     
  userName.addEventListener('change', function() {
        console.log("Current Name is " , userName.value)

        currentUser.textContent = `Current Name is : ${userName.value}`
  })
});
