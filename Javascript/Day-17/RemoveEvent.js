const button = document.querySelector('#ClickMe');
const Click = document.querySelector('#removeUser');

function handClick () {
    console.log("Button Clicked")
}

button.addEventListener('click', handClick);

Click.addEventListener('click', function() {
    button.removeEventListener('click', handClick)

    console.log("clicked Removed")
})