const apiKey = '9d33ba59214b65cc4318f0f9571ae331'; 

async function searchWeather() {
  const city = document.getElementById('search').value;

  if (city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
      const weatherData = await response.json();

      displayWeather(weatherData);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      alert('An error occurred. Please try again.');
    }
  } else {
    alert('Please enter a city name.');
  }
}

function displayWeather(weatherData) {
  const city = document.getElementById('city');
  const temperature = document.getElementById('temperature');
  const description = document.getElementById('description');
  const weatherIcon = document.getElementById('weather-icon');

  city.textContent = weatherData.name;
  temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
  description.textContent = `Weather: ${weatherData.weather[0].description}`;
  weatherIcon.src = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
}

