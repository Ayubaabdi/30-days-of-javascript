const Color = document.querySelector('#Color');
const selectedColor = document.querySelector("#selectedColor")

Color.addEventListener('change', function() {
    console.log("Selected Color" , Color.value);

    selectedColor.textContent = `selected Color : ${Color.value}`
})