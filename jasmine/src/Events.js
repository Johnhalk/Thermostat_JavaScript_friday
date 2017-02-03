
$(document).ready(function(){


  $.get( "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=9c01ca583b73254a087834fc09e38d23", function( response ) {
    $("#weather").text(response.name) +
    $("#weather").append(": ")
    $("#weather").append(Math.floor(response.main.temp))
    $("#weather").append("°C")
    console.log(response)
});

// $("#city_selector").change(function(){
//   var city =
//
// })

  var thermostat = new Thermostat();

  $("#increase-temperature").click(function(){
    thermostat.increaseTemperature()
      $("#display").text(
        thermostat.temperature()
      );
      $("#energy-usage-display").text(
        thermostat.checkEnergyUsage()
      );
  });

  $("#display").text(
    thermostat.temperature()
  );

  $("#energy-usage-display").text(
    thermostat.checkEnergyUsage()
  );

  $("#PSM-display").text(
    thermostat.isOnPSM()
  );

  $("#decrease-temperature").click(function(){
    thermostat.decreaseTemperature()
      $("#display").text(
        thermostat.temperature()
      );
      $("#energy-usage-display").text(
        thermostat.checkEnergyUsage()
      );
  });

  $("#reset").click(function(){
    thermostat.resetTemperature()
      $("#display").text(
        thermostat.temperature()
      );
      $("#energy-usage-display").text(
        thermostat.checkEnergyUsage()
      );
  });

  $("#psm-button").click(function(){
    thermostat.switchPSM()
      $("#display").text(
        thermostat.temperature()
      );
      $("#PSM-display").text(
        thermostat.isOnPSM()
      );

  });


});
