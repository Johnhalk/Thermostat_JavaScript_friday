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
    expect(thermostat.temperature()).toEqual(10)
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

  it('can reset the temperature to default', function(){
    thermostat.increaseTemperature()
    thermostat.resetTemperature()
    expect(thermostat.temperature()).toEqual(20);
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
    var times = 6;
    for(var i=0; i < times; i++){
      thermostat.increaseTemperature();
    };
    expect(thermostat.temperature()).toEqual(25);
  });

  it('If power saving mode is off, the maximum temperature is 32 degrees', function(){
    thermostat.switchPSM();
    var times = 13;
    for(var i=0; i < times; i++){
      thermostat.increaseTemperature();
    };
    expect(thermostat.temperature()).toEqual(32);
  });

  it('When changing to PSM, if temperature > 25 it sets temperature to 25', function(){
    thermostat.switchPSM();
    var times = 13;
    for(var i=0; i < times; i++){
      thermostat.increaseTemperature();
    };
    thermostat.switchPSM();
    expect(thermostat.temperature()).toEqual(25);
  });

});

describe("Energy Usage", function(){
  it('returns low-usage if temperature is less than 18 degrees', function(){
    var times = 2;
    for(var i=0; i < times; i++){
      thermostat.decreaseTemperature();
    };
    expect(thermostat.checkEnergyUsage()).toEqual("low-usage")
  });

  it('returns medium-usage if temperature is less than 25 degrees', function(){
    expect(thermostat.checkEnergyUsage()).toEqual("medium-usage")
  });

  it('returns high-usage if temperature is greater than 25 degrees', function(){
    thermostat.switchPSM()
    var times = 6;
    for(var i=0; i < times; i++){
      thermostat.increaseTemperature();
    };
    expect(thermostat.checkEnergyUsage()).toEqual("high-usage")
  });
});

});
