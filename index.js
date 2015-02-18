'use strict';

var airportCodes = require('airport-codes');
var find = require('lodash.find');

module.exports = function(code){
  return find(airportCodes, {'iata': code.toUpperCase()});
};
