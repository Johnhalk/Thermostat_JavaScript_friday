describe("Thermostat", function() {

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20 degrees', function(){
    expect(thermostat.temperature()).toEqual(20);
  });

  it('up function increases temperature', function(){
    thermostat.increaseTemperature()
    expect(thermostat.temperature()).toEqual(21);
  });

  it('down function increases temperature', function(){
    thermostat.decreaseTemperature()
    expect(thermostat.temperature()).toEqual(19);
  });

});
