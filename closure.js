function makeFunc() {
  var name = '모질라';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));

var counter = (function() {
  var _counter = 0;
  function changeBy(val) {
    _counter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    get: function() {
      return _counter;
    }
  }
})();

console.log(counter.get());
counter.increment();
counter.increment();
console.log(counter.get());
counter.decrement();
console.log(counter.get());

var makeCounter = function() {
  var _counter = 0;
  function changeBy(val) {
    _counter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    get: function() {
      return _counter;
    }
  };
}

var counter1 = makeCounter();
var counter2 = makeCounter();
console.log(counter1.get());
counter1.increment();
counter1.increment();
console.log(counter1.get());
counter1.decrement();
console.log(counter1.get());
console.log(counter2.get());
