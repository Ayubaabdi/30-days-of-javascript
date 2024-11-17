const lists = document.querySelector(".lists");

function newItem () {
    const newItem = document.createElement('li')

    newItem.textContent = "Item 3";

    lists.appendChild(newItem)
}
