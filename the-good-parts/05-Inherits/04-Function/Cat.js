var Mammal = require('./Mammal');

function Cat(spec) {
  spec.saying = spec.saying || 'meow';
  var that = Mammal(spec);

  that.purr = function(n) {
    var s = ''
    while (n--) {
      if (s) s += '-';
      s += 'r';
    }
    return s;
  };

  that.getName = function() {
    return that.says() + ' ' + spec.name + ' ' + that.says();
  };

  return that;
}

module.exports = Cat;
