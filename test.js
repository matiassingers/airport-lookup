'use strict';

var assert = require('assert');
var airportLookup = require('./');

describe('sample lookup', function(){
  it('should find Copenhagen Kastrup Airport', function() {
    var result = airportLookup('CPH');

    assert.equal(result.iata, 'CPH');
    assert.equal(result.iso, 'DK');
  });
});
