const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector("cityInput");
const card = document.querySelector("card");
const apiKey = "afff6d02c35346a33bbf5746ff39847b";

weatherForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const city = cityInput.value;
  if (city) {
    try {
      const weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      console.error(error);
      displayError(error);
    }
  } else {
    displayError("Please enter a city");
  }
});

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${city}&lon={lon}&exclude={part}&appid=${apiKey}`
    const response = await fetch(apiUrl)
    console.log(response)
}
function displayWeatherInfo(data) {}

function getWeatherEmoji(weatherId) {}
function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}
