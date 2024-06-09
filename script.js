document.getElementById('search-btn').addEventListener('click', function () {
    var city = document.getElementById('city-input').value;
    var apiKey = '2d0c86664d7949acb7cf8fe9809024d3';
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            alert(error.message);
        });
});

function displayWeather(data) {
    var weatherInfo = document.getElementById('weather-info');
    var date = new Date().toLocaleDateString();
    var time = new Date().toLocaleTimeString();

    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Description: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

document.getElementById('toggle-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
