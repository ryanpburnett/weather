const apiID = '6e365be137d7d25f10a10cd49612b3b5'

let weatherHTML = document.getElementById("weather");
let city = document.getElementById("city");
let button = document.getElementById("button")

button.addEventListener("click", lookForWeather)

function lookForWeather() {
    let weatherQueryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid${apiID}`
    $.ajax({
        url: weatherQueryURL,
        method: "GET"
    }).then(function(response) {
        weatherHTML.innerText = response.current.temp
    })
}

