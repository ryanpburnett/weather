# Weather App

[Description](#description)

[Licence](#license)

[Installation](#installation)

[Usage](#usage)

[Dependencies](#dependencies)

[Contributing](#contributing)

[GitHub Link](#github-link)


## Description
An app that gives you the weather for any given city, using the OpenWeather API

### License
GNU General Public Licence

### Installation
N/A

### Usage
Type in the name of the city of your choice, and hit Submit!
Note: background changes based on local time of day.  

```
date.innerText = new Date()
weatherHTML.innerText = 
`Current temperature in ${city.value}: 
${response.main.temp} °F.`
iconDiv.innerHTML = `<img src="${iconURL}">`
humidity.innerText = 
`Humidity is ${response.main.humidity}%.`
wind.innerText = 
`Wind speed is ${response.wind.speed} mph.`

if (icon.includes("d")) {
   document.body.setAttribute("class", "day")
}else if (icon.includes("n")) {
   document.body.setAttribute("class", "night")
}
```

![Title](./assets/screenshot.bmp)

### Dependencies
OpenWeather API

### Contributing
email Ryan @ ryanpburnett@yahoo.com

### GitHub Link
https://github.com/ryanpburnett

The repo for this readme generator can be found on RPB's [Github](https://github.com/ryanpburnett/readme-generator) page.