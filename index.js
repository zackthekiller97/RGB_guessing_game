const color1 = document.querySelector(".color1")
const color2 = document.querySelector(".color2")
const color3 = document.querySelector(".color3")
const color4 = document.querySelector(".color4")
const color5 = document.querySelector(".color5")
const color6 = document.querySelector(".color6")
const rgb = document.getElementById("rgb")
const divs = document.querySelectorAll("div")
let goodDiv 

let randomNumbers = []

function createRandomNumbers() {
    let number1 = Math.round(Math.random()*255,1)
    let number2 = Math.round(Math.random()*255,1)
    let number3 = Math.round(Math.random()*255,1)
    randomNumbers[0] = number1
    randomNumbers[1] = number2
    randomNumbers[2] = number3
    rgb.innerHTML = "RGB(" + number1 + ", " + number2 + ", " + number3 + ")"
    console.log(randomNumbers)
}

function addColorToOtherDivs(div) {
    div.style.backgroundColor = "rgb(" + Math.round(Math.random()*255,1) + ", " + Math.round(Math.random()*255,1) + ", " + Math.round(Math.random()*255,1) + ")"
}

function addGoodColorToDiv(div) {
    div.style.backgroundColor = "rgb(" + randomNumbers[0] + ", " + randomNumbers[1] + ", " + randomNumbers[2] + ")"
    goodDiv = div
}

function whichdivisgood() {
    let randomNumber = Math.round(Math.random()*6,1)
    switch(randomNumber) {
        case 1: 
            addGoodColorToDiv(color1)
            addColorToOtherDivs(color2)
            addColorToOtherDivs(color3)
            addColorToOtherDivs(color4)
            addColorToOtherDivs(color5)
            addColorToOtherDivs(color6)
            break
        case 2:
            addGoodColorToDiv(color2)
            addColorToOtherDivs(color1)
            addColorToOtherDivs(color3)
            addColorToOtherDivs(color4)
            addColorToOtherDivs(color5)
            addColorToOtherDivs(color6)
            break
        case 3:
            addGoodColorToDiv(color3)
            addColorToOtherDivs(color2)
            addColorToOtherDivs(color1)
            addColorToOtherDivs(color4)
            addColorToOtherDivs(color5)
            addColorToOtherDivs(color6)
            break
        case 4:
            addGoodColorToDiv(color4)
            addColorToOtherDivs(color2)
            addColorToOtherDivs(color3)
            addColorToOtherDivs(color1)
            addColorToOtherDivs(color5)
            addColorToOtherDivs(color6)
            break
        case 5:
            addGoodColorToDiv(color5)
            addColorToOtherDivs(color2)
            addColorToOtherDivs(color3)
            addColorToOtherDivs(color4)
            addColorToOtherDivs(color1)
            addColorToOtherDivs(color6)
            break
        case 6:
            addGoodColorToDiv(color6)
            addColorToOtherDivs(color2)
            addColorToOtherDivs(color3)
            addColorToOtherDivs(color4)
            addColorToOtherDivs(color5)
            addColorToOtherDivs(color1)
            break
    }
}

document.addEventListener('DOMContentLoaded', function() {
    createRandomNumbers()
    whichdivisgood()
})

divs.forEach(div => {div.addEventListener('click', (e) => {
    if (e.target.id === goodDiv.id) {
        alert("You choose the right color!")
        resetGame()
    } else {
        alert("You didn't choose the right color, please try again")
    }
})})

function resetGame() {
    createRandomNumbers()
    whichdivisgood()
}

