class Thermostat {
  constructor() {
    this._temperature = 20
    this._powerSavingMode = true
  }
  temperature () {
    if(this._temperature < 10) {
      return 10
    }
    return this._temperature
  }
  
  up() {
    this._temperature += 1
  }

  down() {
    this._temperature -= 1
  }
}

Thermostat.prototype.powerSavingMode = function() {
  return this._powerSavingMode
}

Thermostat.prototype.powerSaveToggle = function() {
  if(this._powerSavingMode === true) {
    this._powerSavingMode = false
  }
  else {
    this._powerSavingMode = true
  }
}