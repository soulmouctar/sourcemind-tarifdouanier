// Definition des constantes
const baseUrl = 'http://localhost:8080/api/'
// recuperation des data du front HTML
let buttonSearch = document.querySelector(".search");
let search = document.querySelector("#search");
let iconecloud = document.querySelector(".flex");

buttonSearch.addEventListener("click", () => {
    console.log("hello");
    getWeather(search.value)
});

// Getting local data if exists
if(localStorage.getItem('city') != null){
    document.querySelector(".city").innerHTML = localStorage.getItem('city');
    document.querySelector(".temp").innerHTML = localStorage.getItem('temp') + "°C";
    document.querySelector(".humidity").innerHTML = "Humidity: " + localStorage.getItem('humidity') + "%";
    document.querySelector(".pressure").innerHTML = "Pressure: " + localStorage.getItem('pressure') + " hPa";
    document.querySelector(".wind").innerHTML = "Wind speed: " + localStorage.getItem('wind') + " m/s";
    document.querySelector(".description").innerHTML = localStorage.getItem('description');
    const img = document.createElement('img');
    img.src = "https://openweathermap.org/img/wn/" + localStorage.getItem('icon') + ".png";
    img.alt = localStorage.getItem('description');
    img.width = 300;
    img.height = 300;
    iconecloud.appendChild(img);
}

// recuperation des données sur le serveur
async function getWeather(cityName){
    try {
        const response = await fetch(baseUrl + cityName + '&appid=' + apiKey);
        const data = await response.json();
        console.log(data);
        const city = data.name;
        if(data){
            // recuperation des data que nous avons besoins
            const humidity = data.main.humidity;
            const temp = (data.main.temp - 273.15).toFixed(2);
            const pressure = data.main.pressure;
            const wind = data.wind.speed;
            const description = data.weather[0].description;
            const icon = data.weather[0].icon;
            let imgs = document.querySelector(".icon");

            //CREATION DES VARIABLES LOCALSTORAGE
            localStorage.setItem('city', city);
            localStorage.setItem('humidity', humidity);
            localStorage.setItem('temp', temp);
            localStorage.setItem('pressure', pressure);
            localStorage.setItem('wind', wind);
            localStorage.setItem('description', description);
            localStorage.setItem('icon', icon);
            // recupereation des donnees
            document.querySelector(".city").innerHTML = localStorage.getItem('city');
            document.querySelector(".temp").innerHTML = localStorage.getItem('temp') + "°C";
            document.querySelector(".humidity").innerHTML = "Humidity: " + localStorage.getItem('humidity') + "%";
            document.querySelector(".pressure").innerHTML = "Pressure: " + localStorage.getItem('pressure') + " hPa";
            document.querySelector(".wind").innerHTML = "Wind speed: " + localStorage.getItem('wind') + " m/s";
            document.querySelector(".description").innerHTML = localStorage.getItem('description');
            // creation de licone de la meteo
            const img = document.createElement('img');
            img.src = "https://openweathermap.org/img/wn/" + localStorage.getItem('icon') + ".png";
            img.alt = localStorage.getItem('description');
            img.width = 300;
            img.height = 300;
            iconecloud.appendChild(img);
            // redirection vers la nouvelle page
            //  window.location.assign("http://127.0.0.1:5500/souleymane_mouctar_diallo-sourcemind-assessments/assessment2/weather.html");
        }
        if(response.cod == 404){
            alert("City not found");
        }
        console.log(city, humidity, temp, feelsLike, pressure, wind, description, icon);
    } catch (error) {
        console.log(error);
    }
}

