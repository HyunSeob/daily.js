function Mammal(spec) {
  var that  = {};

  that.getName = function() {
    return spec.name;
  };
  
  that.says = function() {
    return spec.saying || '';
  };

  return that;
}

module.exports = Mammal;
