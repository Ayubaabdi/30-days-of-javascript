// const header = document.getElementById("header");

// console.log(header);

// const text = document.getElementsByClassName("text");

// console.log(text);

// const button = document.getElementsByTagName('button')[1]

// console.log(button)

// using by querySelectors

const header = document.querySelector('#header');

console.log(header)

// const text = document.querySelector('.text');

// console.log(text)

const text = document.querySelectorAll('.text')

console.log(text)

const button = document.querySelectorAll('button')
console.log(button)


function ChangeContent() {

    header.textContent= "welcome to Dom"


}

function ChangeElement() {
    header.innerHTML = `this is my website please <strong> welcome open hand </strong>`
}