const lists = document.querySelector(".lists");

// Adding Element
function newItem() {
  const newItem = document.createElement("li");

  newItem.textContent = "Item 3";

  lists.appendChild(newItem);
}
// Remove Element
function removeElement() {
  if (lists.lastChild) {
    lists.removeChild(lists.lastChild);
  } else {
    alert("all Items is empty");
  }
}
