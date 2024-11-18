

// function changeImage() {
//     const images = document.querySelector('#images')

//     // const URL = prompt("Enter Your Link image")

//     images.setAttribute('src', '');
// }

function changeStyle () {

    const header = document.querySelector('#header');
    const text = document.querySelector('.text')

    header.style.backgroundColor = "black";
    header.style.color = "white";
    text.style.border = "1px solid gray";
    text.style.padding = "30px";
}

function setLightMode() {

    document.body.style.backgroundColor = "white";
    document.body.style.color ="black";
}

function setDarkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white"
}