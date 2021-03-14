const apiID = '476bb8ed1264e5d0ca7169cf86193cf6';

let weatherHTML = document.getElementById("weather");
let city = document.getElementById("city")
let button = document.getElementById("button")

let weatherQueryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiID}`

function getWeather() {
    $.ajax({
        url: weatherQueryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response)
    })
}
console.log(city.value)

// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid${apiID}`