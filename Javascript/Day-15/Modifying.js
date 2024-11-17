
function ChangeImage() {

    const images = document.querySelector('#images');
    const url = prompt("please Enter Your Image Url")

    images.setAttribute('src', url);
}