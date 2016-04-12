function Mammal(name) {
  this._name = name;
};

Mammal.prototype.getName = function() {
  return this._name;
};

Mammal.prototype.says = function() {
  return this._saying || '';
};

module.exports = Mammal;
