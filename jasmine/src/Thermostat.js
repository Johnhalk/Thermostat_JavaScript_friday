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
  if (this._onPSM === true && this.temperature() >= MAX_POWER_SAVING_MODE) {
    return this.temperature();
  } else if (this._onPSM === false && this.temperature() >= MAX_TEMPERATURE) {
    return this.temperature();
  } else {
  this._defaultTemperature ++; }
};

Thermostat.prototype.decreaseTemperature = function(){
  if (this.temperature() <= MIN_TEMPERATURE) {
    return this.temperature();
  };
  this._defaultTemperature --;
};

Thermostat.prototype.isOnPSM = function() {
  return "power saving mode on: " + this._onPSM
};

Thermostat.prototype.switchPSM = function() {
    if(this._onPSM == false && this._defaultTemperature > 25) { this._defaultTemperature = MAX_POWER_SAVING_MODE }
  this._onPSM = !this._onPSM;

};

Thermostat.prototype.resetTemperature = function(){
  this._defaultTemperature = DEFAULT_TEMPERATURE
};

Thermostat.prototype.checkEnergyUsage = function(){
  if(this.temperature() <= 18) { return "low-usage"}
  else if (this.temperature() <= 25) { return "medium-usage" }
  else {
    return "high-usage"
  }
};
