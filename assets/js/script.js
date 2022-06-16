let price1
let price2
let price3
let choiceFood1
let choiceFood2
let choiceFood3

function confirm() {
    const clickedButton = document.querySelector(".aliment .selected");
    const clickedButton1 = document.querySelector(".drink .selected");
    const clickedButton2 = document.querySelector(".dessert .selected");
    if (clickedButton && clickedButton1 && clickedButton2) {
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
    choiceFood1 = document.querySelector('.food-selected')
    choiceFood1.innerHTML = element.querySelector(".name").innerHTML
    choiceFood1 = choiceFood1.innerText
    let choicePrice = document.querySelector(".price-food-selected")
    let priceItem = element.querySelector(".price-item").innerHTML
    choicePrice.innerHTML = 'R$ ' + priceItem
    price1 = parseFloat(priceItem.replace(',','.'))
    confirm()
}

function selectDrink(element) {
    const clickedButton = document.querySelector(".drink .selected");
    if (clickedButton !== null) {
        clickedButton.classList.remove("selected");
    }
    element.classList.add("selected");
    choiceFood2 = document.querySelector('.drink-selected')
    choiceFood2.innerHTML = element.querySelector(".name").innerHTML
    choiceFood2 = choiceFood2.innerText
    let choicePrice = document.querySelector('.price-drink-selected')
    let priceItem = element.querySelector(".price-item").innerHTML
    choicePrice.innerHTML = 'R$ ' + priceItem
    price2 = parseFloat(priceItem.replace(',','.'))
    confirm()
}

function selectDessert(element) {
    const clickedButton = document.querySelector(".dessert .selected");
    if (clickedButton !== null) {
        clickedButton.classList.remove("selected");
    }
    element.classList.add("selected");
    choiceFood3 = document.querySelector('.dessert-selected')
    choiceFood3.innerHTML = element.querySelector(".name").innerHTML
    choiceFood3 = choiceFood3.innerText
    let choicePrice = document.querySelector('.price-dessert-selected')
    let priceItem = element.querySelector(".price-item").innerHTML
    choicePrice.innerHTML = 'R$ ' + priceItem
    price3 = parseFloat(priceItem.replace(',','.'))
    confirm()
}

function confirmButton() {
    let buttonSelected = document.querySelector(".botton-bar .button-confirm");
    if (buttonSelected !== null) {
        let pageConfirm = document.querySelector('.container-confirm')
        pageConfirm.classList.add("confirm-order")
    }
}

function cancelOrder() {
    let pageConfirm = document.querySelector('.container-confirm')
        pageConfirm.classList.remove("confirm-order")
}

function doOrder(){
    let name = prompt('Qual o seu nome?')
    let address = prompt('Qual o seu endereço')
    let total = (price1 + price2 + price3).toFixed(2)
    message = `Olá, gostaria de fazer o pedido:
        
        - Prato: ${choiceFood1}
        - Bebida: ${choiceFood2}
        - Sobremesa: ${choiceFood3} 
        - Total:  ${total}
        
        Nome: ${name} 
        Endereço: ${address}`;
  message = window.encodeURIComponent(message);
  window.open("https://wa.me/5531987572944?text=" + message);
}
