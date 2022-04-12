class Thermostat {
  constructor() {
    this._temperature = 20;
  }
  temperature () {
    return this._temperature
  }
}

Thermostat.prototype.up = function() {
  this._temperature += 1;
}