var Stack = require('./stack');
var Queue = require('./queue');
var List  = require('./linked-list');

function Tester() {
  this._stack = function() {
    var stack = new Stack();

    stack.push(1);
    stack.push('2');
    stack.push({ number: 3 });
    stack.push([4]);

    console.log(stack.top());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
  };

  this._queue = function() {
    var queue = new Queue();

    queue.pushBack(1);
    queue.pushBack('2');
    queue.pushBack({ number: 3 });
    queue.pushBack([4]);

    console.log(queue.front());
    console.log(queue.back());
    console.log(queue.popFront());
    console.log(queue.popFront());
    console.log(queue.front());
    console.log(queue.popFront());
    console.log(queue.popFront());
    console.log(queue.front());
  };

  this._list = function() {
    var list  = new List();

    list.pushBack(1);
    list.pushBack('2');
    list.pushBack({ number: 3 });
    list.pushBack([4]);

    console.log(list.get(0));

    var iter = list.getIterator();

    while (iter.hasNext()) {
      console.log(iter.next());
    }
  };

  this.test = function(target) {
    this['_' + target]();
  };
}

var tester = new Tester();
tester.test('list');
