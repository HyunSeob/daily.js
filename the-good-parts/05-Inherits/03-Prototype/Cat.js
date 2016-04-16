var Mammal = require('./Mammal');

function Cat(name) {
  this._name = name;
  this._saying = 'meow';
}

Cat.prototype = new Mammal();

Cat.prototype.purr = function(n) {
  var i, s = '';
  for (i = 0; i < n; i += 1) {
    if (s) {
      s += '-';
    }
    s += 'r';
  }
  return s;
};

Cat.prototype.getName = function() {
  return this.says() + ' ' + this._name + ' ' + this.says();
};

module.exports = Cat;
