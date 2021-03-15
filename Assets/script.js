const apiID = '476bb8ed1264e5d0ca7169cf86193cf6';

let date = document.getElementById("date")
let weatherHTML = document.getElementById("weather");
let iconDiv = document.getElementById("icon-div")
let city = document.getElementById("city");
let button = document.getElementById("button");


function getWeather() {
    let weatherQueryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&cnt=5&appid=${apiID}&units=imperial`
    $.ajax({
        url: weatherQueryURL,
        method: "GET"
    }).then(function(response) {
        let icon = response.weather[0].icon
        let iconURL = "https://openweathermap.org/img/wn/" +
        icon + ".png"
        console.log(response)
        date.innerText = new Date()
        weatherHTML.innerText = 
        `Current temperature in ${city.value}: 
        ${response.main.temp} °F`
        iconDiv.innerHTML = `<img src="${iconURL}">`

        if (icon.includes("d")) {
            document.body.setAttribute("class", "day")
        }else if (icon.includes("n")) {
            document.body.setAttribute("class", "night")
        }
    })
    
}

