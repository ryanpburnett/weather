const apiID = '476bb8ed1264e5d0ca7169cf86193cf6';

let weatherHTML = document.getElementById("weather");
let icon = document.getElementById("icon")
let city = document.getElementById("city");
let button = document.getElementById("button");

let weatherQueryURL = `https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=${apiID}&units=imperial`

function getWeather() {
    $.ajax({
        url: weatherQueryURL,
        method: "GET"
    }).then(function(response) {
        let icon = response.weather[0].icon
        let iconURL = "https://openweathermap.org/img/wn/" +
        icon + ".png"
        console.log(response)
        weatherHTML.innerText = 
        `current temperature: ${response.main.temp}`
        icon.innerText = `<img src="${iconURL}>"`
        console.log(iconURL)
        console.log(icon)
    })
}

