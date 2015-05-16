'use strict';

var airports = require('airports');
var find = require('lodash.find');

module.exports = function(code){
  return find(airports, {'iata': code.toUpperCase()});
};
