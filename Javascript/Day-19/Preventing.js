const  form = document.querySelector('#myForm');
const forMessage = document.querySelector('#forMessage')

form.addEventListener('submit', function(event) {

    event.preventDefault()

    forMessage.textContent = "submission is preventing "
})