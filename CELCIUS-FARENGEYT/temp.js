const format = document.querySelector(".form")


function convert(){
    const button = document.querySelector(".btn")
    const input = document.querySelector(".input")
    const result = document.querySelector(".result")
    const farText = document.querySelector(".far-text")
    const celText = document.querySelector(".cel-text")

    const inputValue = input.value
    const farengeyt = (inputValue * 9/5) + 32
    result.textContent = farengeyt
    result.style.color = "black"
}