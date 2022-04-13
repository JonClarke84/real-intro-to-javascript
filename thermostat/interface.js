

document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature();
    document.querySelector('#temperature').className = thermostat.usage();
  }
  
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
    document.querySelector('#power-saving-status').innerText = thermostat.psmStatus;
    updateTemperature();
  });
});

const updateTemperature = () => {
  document.querySelector('#temperature').innerText = thermostat.temperature;
  document.querySelector('#temperature').className = thermostat.usage();
}