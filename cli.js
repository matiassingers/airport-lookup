#!/usr/bin/env node
'use strict';

var pkg = require('./package.json');
var airportLookup = require('./');
var argv = process.argv.slice(2);

function help() {
  console.log([
    '',
      '  ' + pkg.description,
    '',
    '  Example',
    '    airport-lookup cph',
    '     => { "iata": "CPH",',
    '           "iso": "DK",',
    '           ...',
    ''
  ].join('\n'));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}


console.log(JSON.stringify(airportLookup(argv[0]), null, 4));
