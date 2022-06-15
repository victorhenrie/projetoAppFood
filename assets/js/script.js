function confirm() {
    const clickedButton = document.querySelector(".aliment .selected");
    const clickedButton1 = document.querySelector(".drink .selected");
    const clickedButton2 = document.querySelector(".dessert .selected");
    if (clickedButton !== null && clickedButton1 !== null && clickedButton2 !== null) {
        let button = document.querySelector(".button");
        button.innerHTML = "Fechar pedido"
        button.classList.add("button-confirm")
    }
}

function selectFood(element) {
    const clickedButton = document.querySelector(".aliment .selected");
    if (clickedButton !== null) {
        clickedButton.classList.remove("selected");
    }
    element.classList.add("selected");
    confirm()

}

function selectDrink(element) {
    const clickedButton = document.querySelector(".drink .selected");
    if (clickedButton !== null) {
        clickedButton.classList.remove("selected");
    }
    element.classList.add("selected");
    confirm()
}

function selectDessert(element) {
    const clickedButton = document.querySelector(".dessert .selected");
    if (clickedButton !== null) {
        clickedButton.classList.remove("selected");
    }
    element.classList.add("selected");
    confirm()
}
