const elForm = document.querySelector(".form")
const elButton = document.querySelector(".button")


function calculate(){
    const elInput = document.querySelector(".input")
    const elResultHuman = document.querySelector(".result-human")
    const elResultBike = document.querySelector(".result-bike")
    const elResultCar = document.querySelector(".result-car")
    const elResultPlane = document.querySelector(".result-plane")

    let inputValue = elInput.value;
    let humanTime = inputValue / 3.6;
    let bikeTime = inputValue / 20.1;
    let carTime = inputValue / 70;
    let planeTime = inputValue / 800;

    elResultHuman.textContent = `${humanTime.toFixed(2)} hours`
    elResultBike.textContent = `${bikeTime.toFixed(2)} hours`
    elResultCar.textContent = `${carTime.toFixed(2)} hours`
    elResultPlane.textContent = `${planeTime.toFixed(2)} hours`
}

