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

// 07: Prototype Method

Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
  }
  return this;
}

Number.method('integer', function() {
  return Math[this < 0 ? 'ceiling' : 'floor'](this);
});

console.log((-10 / 3).integer());

String.method('trim', function() {
  return this.replace(/^\s+|\s+$/g, '');
});

console.log('"' + ' neat '.trim() + '"');

// 08: Recursive Call

var hanoi = function(disc, src, aux, dst) {
  if (disc > 0) {
    hanoi(disc - 1, src, dst, aux);
    console.log('Move disc ' + disc + ' from ' + src ' to ' + dst);
    hanoi(disc - 1, aux, src, dst);
  }
}

hanoi(3, 'Src', 'Aux', 'Dst');

var walkTheDOM = function walk(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walk(node, func);
    node = node.nextSibling;
  }
};

var getElementsByAttribute = function (att, value) {
  var results = [];

  walkTheDOM(document.body, function(node) {
    var actual = node.nodeType === 1 && node.getAttribute(att);
    if (typeof actual === 'string' &&
      (actual === value || typeof value !== 'string')
    ) {
      results.push(node);
    }
  });

  return results;
}

var factorial = function(i, a) {
  a = a || 1;
  if (i < 2) {
    return a;
  }
  return factorial(i - 1, a * i);
}

console.log(factorial(4));

// 09: scope

var foo = function() {
  var a = 3, b = 5;
  var bar = function() {
    var b = 7, c = 11;
    a += b + c;
  };
  bar();
};

// 10: Closure

var myObject = function() {
  var value = 0;

  return {
    increment: function(inc) {
      value += typeof inc === 'number' ? inc : 1;
    },
    getValue: function() {
      return value;
    }
  };
};

var quo = function(status) {
  var _status = status;
  return {
  	getStatus: function() {
			return _status;
    }
  };
};

var myQuo = quo('amazed');
document.body.innerHTML = myQuo.getStatus();

var fade = function(node) {
	var level = 1;
  var step = function() {
  	var hex = level.toString(16);
		node.style.backgroundColor = '#FFFF' + hex + hex;
    if (level < 15) {
			level += 1;
      setTimeout(step, 100);
    }
  };
  step();
};

fade(document.body);

// Bad example
var addTheHandlers = function(nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
  	nodes[i].onclick = function(e) {
			console.log(i);
    };
  }
};

// Better example
var addTheHandlers = function(nodes) {
	var i;
  for (i = 0; i < nodes.length; i += 1) {
  	nodes[i].onclick = function(i) {
    	return function(e) { console.log(i) };
    }(i);
  }
};

// 12: Module

String.method('deentityify', function() {
  var entity = {
    quot = '"',
    lt: '<',
    gt: '>'
  };

  return function() {
    return this.replace(/&([^&;]+);/g, function(a, b) {
      var r = entity[b];
      return typeof r === 'string' ? r : a;
    });
  };
});

console.log('&lt;&quot;&gt;'.deentityify());

var serialMaker = function() {
  var prefix = '';
  var seq = 0;
  return {
    setPrefix: function(p) {
      prefix = String(p);
    },
    setSeq: function(s) {
      seq = s;
    },
    gensym: function() {
      var result = prefix + seq;
      seq += 1;
      return result;
    }
  };
};

var seqer = serialMaker();
seqer.setPrefix('Q');
seqer.setSeq(1000);

var unique = seqer.gensyn();

// 14: Curry

Function.method('curry', function() {
  var slice = Array.prototype.slice,
      args = slice.apply(arguments),
      that = this;
  return function() {
    return that.apply(null, args.concat(slice.apply(arguments)));
  };
});

var add1 = add.curry(1);
console.log(add1(6));
