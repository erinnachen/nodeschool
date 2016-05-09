var _ = require ('lodash');

var worker = function(users) {
  console.log(users);
  if (Object.getOwnPropertyNames(users).length === 0) {
    return [];
  }
  var filtered = users.filter(function(user) {
    return user['active'] === true;
  });
  return filtered;
}

module.exports = worker;
