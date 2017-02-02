const DEFAULT_TEMPERATURE = 20;
const MIN_TEMPERATURE = 10;

function Thermostat(){
  this._defaultTemperature = DEFAULT_TEMPERATURE;
  this._minTemperature = MIN_TEMPERATURE;
};

Thermostat.prototype.temperature = function(){
  return this._defaultTemperature;
};

Thermostat.prototype.increaseTemperature = function(){
  this._defaultTemperature ++;
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temperature() <= MIN_TEMPERATURE) {
    throw('Temperature cannot be decreased below 10 degrees');
  };
  this._defaultTemperature --;
};
