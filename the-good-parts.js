// CHAPTER 4: Functions

// 02: Function literal
var add = function (a, b) {
  return a + b;
}

// 03: Call
// Method call pattern
var myObject = {
  value: 0,
  increment: function(inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
}

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);


// Function call pattern
myObject.double = function() {
  var that = this;
  var helper = function() {
    that.value = add(that.value, that.value);
  }
  helper();
}

myObject.double();
console.log(myObject.value);


// Constructor call pattern
var Quo = function(string) {
  this.status = string;
};

Quo.prototype.getStatus = function() {
  return this.status;
};

var myQuo = new Quo('confused');
console.log(myQuo.getStatus());

var array = [3, 4];
var sum = add.apply(null, array); // `this` is `null`
console.log(sum);

var statusObject = {
  status: 'A-OK'
};

var status = Quo.prototype.getStatus.apply(statusObject);
console.log(status);

// 04: Arguments
var sum = function() {
  var i, sum = 0;
  for (i = 0; i < arguments.length; i += 1) {
    sum += arguments[i];
  }
  return sum;
}

// 06: Exceptions
var add = function(a, b) {
  if (typeof a !== 'number' ||  typeof b !== 'number') {
    throw {
      name: 'TypeError',
      message: 'add needs numbers'
    };
  }
  return a + b;
}

var tryIt = function () {
  try {
    add('seven');
  } catch(e) {
    console.log(e.name + ': ' + e.message);
  }
}

tryIt();
