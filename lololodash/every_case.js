var _ = require('lodash');

var categorize_city = function(pop) {
  if (pop > 1.0) { return 'big' }
  if (pop > 0.5) { return 'med' }
  return 'small'
}

var mapSize = function(cities) {
  return _.forEach(cities, function(city) {
    city['size'] = categorize_city(city.population);
  });
};

module.exports = mapSize;
