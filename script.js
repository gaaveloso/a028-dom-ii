const adicionaItem = (event) => {
    let container = document.getElementById("container")
    let item = document.createElement("article")
    item.innerHTML = "item"
    container.insertAdjacentElement('beforeend', item)
    item.classList.add("item")
    // item.addEventListener('click', () => removeItem())
    item.onclick = (event) => removeItem(event)
}
const removeItem = (event) => {
    event.target.remove()
}
