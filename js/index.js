//! do not show API Key on your js file
const API_KEY = `ce6b7c6b13b54e3abc5ec8d4f3dd5169`

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    const temperature = document.getElementById("temperature");
    const city = document.getElementById("city");
    const conditions = document.getElementById("conditions");

    console.log(data.main.temp);
    console.log(data.name);
    console.log(data.weather[0].main);
    console.log(data);

    temperature.innerText = data.main.temp;
    city.innerText = data.name;
    conditions.innerText = data.weather[0].main

}

document.getElementById("btn-search").addEventListener("click", function () {
    const searField = document.getElementById("search-field");
    const cityTemperature = searField.value;
    loadTemperature(cityTemperature);
})
loadTemperature("london");