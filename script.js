let weather = {
    fetchWeather: function (city) {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&timeformat=unixtime")

            .then((respone) => respone.json())
            .then((data) => this.displayWeather(data));

    },
    displayWeather: function (data) {

        const { windspeed } = data.current_weather;
        const { temperature } = data.current_weather;
        const { time } = data.current_weather;
        const { weathercode } = data.current_weather;

        console.log(windspeed, temperature , weathercode);
        console.log(time/6500000);
        document.querySelector(".temp").innerHTML = "temperature:"+temperature + "° C";
        document.querySelector(".wind").innerHTML = " Wind Speed: " + windspeed + " km/h";
        document.querySelector(".time").innerHTML = (time/650000000) + " minuets ago";

    },
    search: function () {
        weather.fetchWeather(document.querySelector(".search-box").value);
    }
}
document.querySelector(".search button").addEventListener("click", function () {

    weather.search()
});
document.querySelector(".search-box").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();

    }

})

weather.fetchWeather("berlin")