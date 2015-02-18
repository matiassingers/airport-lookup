# airport-lookup [![Build Status](http://img.shields.io/travis/matiassingers/airport-lookup.svg?style=flat-square)](https://travis-ci.org/matiassingers/airport-lookup) [![Dependency Status](http://img.shields.io/gemnasium/matiassingers/airport-lookup.svg?style=flat-square)](https://gemnasium.com/matiassingers/airport-lookup)
> lookup airport details by IATA codes

## Install

```sh
$ npm install --save airport-lookup
```


## Usage

```js
var airportLookup = require('airport-lookup');

console.log(airportLookup('CPH'));
// => {iata: 'CPH', iso: 'DK', ... }
```


## CLI

```sh
$ npm install --global airport-lookup
```

```sh
$ airport-lookup --help
  lookup airport details by IATA codes

  Example
    airport-lookup cph
     => { "iata": "CPH",
           "iso": "DK",
           ...

```


## License

MIT © [Matias Singers](http://mts.io)
