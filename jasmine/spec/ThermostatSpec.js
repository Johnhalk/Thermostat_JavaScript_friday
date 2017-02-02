describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

describe("Default Thermostat", function(){
  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('has a minimum temperature of 10 degrees', function(){
    expect(thermostat._minTemperature).toEqual(10);
  });

  it('the minimum temperature is 10 degrees', function() {
    var times = 10;
    for(var i=0; i < times; i++){
      thermostat.decreaseTemperature();
    };
    expect(function(){thermostat.decreaseTemperature()}).toThrow('Temperature cannot be decreased below 10 degrees');
  });
});

describe("Changing temperature", function(){
  it('up function increases temperature', function(){
    thermostat.increaseTemperature()
    expect(thermostat.temperature()).toEqual(21);
  });

  it('down function decreases temperature', function(){
    thermostat.decreaseTemperature()
    expect(thermostat.temperature()).toEqual(19);
  });
});

describe("Power Saving Mode", function(){
  it('switches PSM\'s state', function() {
    thermostat.switchPSM();
    expect(thermostat.isOnPSM()).toBe(false);
  });

  it('checks if power saving mode is on by default', function(){
    expect(thermostat.isOnPSM()).toBe(true);
  });

  it('If power saving mode is on, the maximum temperature is 25 degrees', function(){
    var times = 5;
    for(var i=0; i < times; i++){
      thermostat.increaseTemperature();
    };
    expect(function(){thermostat.increaseTemperature()}).toThrow('Maximum temperature on PSM is 25 degrees');
  });

  it('If power saving mode is off, the maximum temperature is 32 degrees', function(){
    thermostat.switchPSM();
    var times = 12;
    for(var i=0; i < times; i++){
      thermostat.increaseTemperature();
    };
    expect(function(){thermostat.increaseTemperature()}).toThrow('Maximum temperature is 32 degrees');
  });

});

});
