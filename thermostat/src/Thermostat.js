class Thermostat {
  constructor() {
    this._temperature = 20;
  }
  temperature () {
    return this._temperature
  }

  down() {
    this._temperature -= 1
  }
}

Thermostat.prototype.up = function() {
  this._temperature += 1
}