

document.addEventListener("DOMContentLoaded", () => {
  const displayWeather = (city) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f47a2e709e9dcfc13b376d1c7198d5d5&units=metric`

  fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      document.querySelector('#current-temperature').innerText = data.main.temp;
    })
  }
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature();
    document.querySelector('#temperature').className = thermostat.usage();
  }

  displayWeather('London');

  document.querySelector('#select-city').addEventListener('submit', (event) => {
  event.preventDefault();
  const city = document.querySelector('#current-city').value;

  displayWeather(city);
  })
  
  const thermostat = new Thermostat();
  updateTemperature();

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  });

  document.querySelector('#powersaving-toggle').addEventListener('click', () => {
    thermostat.powerSaveToggle();
    document.querySelector('#power-saving-status').innerText = thermostat.psmStatus();
    updateTemperature();
  });
});

const updateTemperature = () => {
  document.querySelector('#temperature').innerText = thermostat.temperature;
  document.querySelector('#temperature').className = thermostat.usage();
}