
$(document).ready(function(){

  var thermostat = new Thermostat();

  $("#increase-temperature").click(function(){
    thermostat.increaseTemperature()
      $("#display").text(
        thermostat.temperature()
      );
  });

  $("#display").text(
    thermostat.temperature()
  );

  $("#decrease-temperature").click(function(){
    thermostat.decreaseTemperature()
      $("#display").text(
        thermostat.temperature()
      );
  });

  $("#reset").click(function(){
    thermostat.resetTemperature()
      $("#display").text(
        thermostat.temperature()
      );
  });

  $("#psm-button").click(function(){
    thermostat.switchPSM()
      $("#display").text(
        thermostat.temperature()
      );
  });


});
