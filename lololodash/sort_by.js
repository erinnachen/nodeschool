var _ = require('lodash');

var sorted = function(list) {
  return _.sortBy(list, function(obj) {
    return -1*obj.quantity;
  });
};

module.exports = sorted
