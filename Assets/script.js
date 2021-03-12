var weatherQueryURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=41.8781&lon=87.6298&exclude={part}&appid=6e365be137d7d25f10a10cd49612b3b5';

var weather = $('#weather');

$.ajax({
    url: weatherQueryURL,
    method: "GET"
}).then(function(response) {
    weather.attr('src', 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=6e365be137d7d25f10a10cd49612b3b5')
    console.log(response)
})
