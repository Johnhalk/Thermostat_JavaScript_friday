function Thermostat(){
  this._defaultTemperature = 20;
};

Thermostat.prototype.temperature = function(){
  return this._defaultTemperature;
};

Thermostat.prototype.increaseTemperature = function(){
  this._defaultTemperature ++;
};

Thermostat.prototype.decreaseTemperature = function(){
  this._defaultTemperature --;
};
