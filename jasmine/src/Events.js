
$(document).ready(function(){
  var thermostat = new Thermostat();

function update(){
  $("#display").text(
    thermostat.temperature());
  $("#energy-usage-display").text(
    thermostat.checkEnergyUsage());
  if (thermostat.checkEnergyUsage() === 'low-usage') {
    $("#energy-usage-display").css("color", "green");
  }
  else if (thermostat.checkEnergyUsage() === 'medium-usage') {
    $("#energy-usage-display").css("color", "yellow");
  }
  else  {
    $("#energy-usage-display").css("color", "red");
  };
};
update();

  $("#city_selector").change(function(){
    var city = $("#city_selector").val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=9c01ca583b73254a087834fc09e38d23&units=metric", function(response) {
      $("#weather").text("Temperature outside in " + city + " is " + Math.floor(response.main.temp) + "°C");
    });
  });

  $("#increase-temperature").click(function(){
    thermostat.increaseTemperature()
      update();
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
      update();
  });

  $("#reset").click(function(){
    thermostat.resetTemperature()
      update();
  });

  $("#psm-button").click(function(){
    thermostat.switchPSM()
      $("#PSM-display").text(
        thermostat.isOnPSM()
      );
      update();
  });


});
