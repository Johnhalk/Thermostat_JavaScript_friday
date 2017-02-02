"use strict";

const DEFAULT_TEMPERATURE = 20;
const MIN_TEMPERATURE = 10;
const MAX_POWER_SAVING_MODE = 25;
const MAX_TEMPERATURE = 32;

function Thermostat(){
  this._defaultTemperature = DEFAULT_TEMPERATURE;
  this._minTemperature = MIN_TEMPERATURE;
  this._onPSM = true;
};

Thermostat.prototype.temperature = function(){
  return this._defaultTemperature;
};

Thermostat.prototype.increaseTemperature = function(){
  if (this.isOnPSM() && this.temperature() >= MAX_POWER_SAVING_MODE) {
    throw('Maximum temperature on PSM is 25 degrees');
  } else if (!this.isOnPSM() && this.temperature() >= MAX_TEMPERATURE) {
    throw('Maximum temperature is 32 degrees');
  };
  this._defaultTemperature ++;
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temperature() <= MIN_TEMPERATURE) {
    throw('Temperature cannot be decreased below 10 degrees');
  };
  this._defaultTemperature --;
};

Thermostat.prototype.isOnPSM = function() {
  return this._onPSM
};

Thermostat.prototype.switchPSM = function() {
  this._onPSM = !this._onPSM;
};

Thermostat.prototype.resetTemperature = function(){
  this._defaultTemperature = DEFAULT_TEMPERATURE
};

Thermostat.prototype.checkEnergyUsage = function(){
  if(this.temperature() <= 18) return "low-usage";
  else if (this.temperature() <= 25) return "medium-usage";
  else {
    return "high-usage"
  }
};
