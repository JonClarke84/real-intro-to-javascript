'use strict';

describe('Thermostat', function() {

  let thermostat

  beforeEach(() => {
    thermostat = new Thermostat();
  })
  describe('#temperature', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    })

    it('cannot go below 10 degrees using only the down method', function() {
      for(let i=0; i<11; i++) {
        thermostat.down();
      }
      expect(thermostat.temperature()).toEqual(10);
    })

    it('cannot go below 10 degree after using up and down', function() {
      for(let i=0; i<11; i++) {
        thermostat.down()
      }
      for(let i=0; i<4; i++) {
        thermostat.up()
      }
      for(let i=0; i<6; i++) {
        thermostat.down()
      }
      expect(thermostat.temperature()).toEqual(10);
    })

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
  
  describe('Power Saving Mode', function() {
    it('is on by default', function() {
      expect(thermostat.powerSavingMode()).toEqual(true);
    })
    it('can be turned off', function() {
      thermostat.powerSaveToggle()
      expect(thermostat.powerSavingMode()).toEqual(false);
    })
    it('can be turned off and on again', function() {
      thermostat.powerSaveToggle()
      thermostat.powerSaveToggle()
      expect(thermostat.powerSavingMode()).toEqual(true);
    })
    it('sets max temp to 25 when turned on', function() {
      for(let i=0; i<6; i++) {
        thermostat.up()
      }
      expect(thermostat.temperature()).toEqual(25);
    })
    it('sets max temp to 32 when turned off', function() {
      thermostat.powerSaveToggle()
      for(let i=0; i<20; i++) {
        thermostat.up()
      }
      expect(thermostat.temperature()).toEqual(32);
    })
  })
})