var Cat = require('./Cat');

Object.prototype.super = function(name) {
  var that = this;
  var method = that[name];
  return function() {
    return method.apply(that, arguments);
  };
};

function CoolCat(spec) {
  var that = Cat(spec);
  var getNameSuper = that.super('getName');

  that.getName = function() {
    return 'like ' + getNameSuper() + ' baby';
  };

  return that;
}

module.exports = CoolCat;
