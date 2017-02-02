describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('has a minimum temperature of 10 degrees', function(){
    expect(thermostat._minTemperature).toEqual(10);
  });

  it('up function increases temperature', function(){
    thermostat.increaseTemperature()
    expect(thermostat.temperature()).toEqual(21);
  });

  it('down function decreases temperature', function(){
    thermostat.decreaseTemperature()
    expect(thermostat.temperature()).toEqual(19);
  });

  it('the minimum temperature is 10 degrees', function() {
    var times = 10;
    for(var i=0; i < times; i++){
      thermostat.decreaseTemperature();
    };
    expect(function(){thermostat.decreaseTemperature()}).toThrow('Temperature cannot be decreased below 10 degrees');
  });

});
