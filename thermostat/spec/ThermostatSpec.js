'use strict';

describe('Thermostat', function() {

  let thermostat

  beforeEach(() => {
    thermostat = new Thermostat();
  })

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  })

  describe('#up', function() {
    it('increases temperature by 1 degree', function() {
      thermostat.up()
      expect(thermostat.temperature()).toEqual(21);
    })
  })

  describe('#down', function() {
    it('decreases temperature by 1 degree', function() {
      thermostat.down()
      expect(thermostat.temperature()).toEqual(19);
    })
    it('decreases by two degrees when pressed twice', function() {
      thermostat.down()
      thermostat.down()
      expect(thermostat.temperature()).toEqual(18);
    })
  })
})