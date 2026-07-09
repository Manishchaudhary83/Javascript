const apiKey = "da5cc509bc967933cf9f957a7a06eb9b";

const cityInput = document.getElementById("city")
const searchBtn = document.getElementById("searchBtn")
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const flag = document.getElementById('flag');
const forecast = document.getElementById('forecast');

searchBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Enter city name");
        return;
    }
    getCurrentWeather(city)
    getForecast(city)
})


async function getCurrentWeather(city) {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


    try {

        const response = await fetch(currentWeatherUrl)

        const data = await response.json()

        if (data.cod != 200) {
            alert("City not found");
            return;
        }

        cityName.innerText = data.name;
        
        const icon = data.weather[0].icon;

        weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
        weatherIcon.alt = data.weather[0].description;

        temperature.innerText = `  ${Math.round(data.main.temp)} ℃` ;

        const desc = data.weather[0].description;
        description.innerText = desc.charAt(0).toUpperCase() + desc.slice(1);

        updateFlag(data.main.temp )

    }
    catch (error) {
        console.log(error)
    }
}

function updateFlag(temp) {
    if (temp < 22) {
        flag.innerText = "⛅️ Good"
        flag.style.background = "green";
    }

    else if (temp < 30) {
        flag.innerText = "🌤️ Warm";
        flag.style.background = "#f1c40f";
        flag.style.color = "black";
    }

    else {
        flag.innerText = "☀️ Hot"
        flag.style.background = "red"
        flag.style.color = "white"
    }
}


async function getForecast(city) {

    const forecastWeatherUrl =
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(forecastWeatherUrl);

        const data = await response.json();


        forecast.innerHTML = "";

        const daily = [];

        data.list.forEach(item => {

            if (item.dt_txt.includes("12:00:00")) {
                daily.push(item);
            }

        });

        daily.slice(0, 3).forEach(day => {

            const date = new Date(day.dt_txt);

            const div = document.createElement("div");

            div.className = "card";

            div.innerHTML = `
            
            <h3>${data.city.name}</h3>
            <p><strong>${date.toDateString()}</strong></p>
            <p>🌡 ${Math.round(day.main.temp)} ℃</p>
            <p>☁ ${day.weather[0].main}</p>

            `;

            forecast.appendChild(div);

        });

    }

    catch (error) {

        console.log(error);

    }

}



window.addEventListener("DOMContentLoaded", () => {
    cityInput.value = "";
    getCurrentWeather("Bharatpur");
    getForecast("Bharatpur");
});