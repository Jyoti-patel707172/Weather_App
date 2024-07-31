const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humdity = document.getElementById('humdity');
const wind_speed = document.getElementById('wind-speed');
const loction_not = document.querySelector('.loction-not');
const Weather_body = document.querySelector('.Weather-body');

async function checkWeather(city) {
    const apiKey  = "7a2d40c4ed8b27ce47ee3ad32fd0d500";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const weather_data = await response.json();

    if (weather_data.cod !== 200 ) {
        loction_not.style.display = "flex";
        Weather_body.style.display = "none";
        console.log("Error fetching weather data:", weather.data.message);
        return;
    }

    loction_not.style.display="none";
    Weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humdity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    switch (weather_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "cloud.jpg";
            break;
        case 'Clear':
            weather_img.src = "clear.jpg";
            break; 
        case 'Rain':
            weather_img.src = "rain.jpg";
            break;
        case 'Mist':
            weather_img.src = "mist.png";
            break;
        case 'Snow':
            weather_img.src = "show.jpg";
            break;
         
    }
    console.log(weather_data);
}
    catch (error) {
        loction_not.style.display = "flex";
        Weather_body.style.display = "none";
        console.error("Error fetching weather data:", error);
    }

}
searchBtn.addEventListener('click', () => {
    checkWeather(inputBox.value);
});