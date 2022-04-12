class Thermostat {
  constructor() {
    this._temperature = 20
    this._powerSavingMode = true
  }
  temperature () {
    if(this._temperature < 10) {
      return 10
    }
    if(this._powerSavingMode === true && this._temperature > 25) {
      return 25
    }
    if(this._temperature > 32) {
      return 32
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

Thermostat.prototype.reset = function() {
  this._temperature = 20
}

Thermostat.prototype.usage = function() {
  if(this._temperature < 18) {
    return 'low-usage'
  }
  else if(this._temperature < 25) {
    return 'medium-usage'
  }
  else {
    return 'high-usage'
  }
}