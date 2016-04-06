var Stack = require('./stack');
var Queue = require('./queue');

var stack = new Stack();
var queue = new Queue();

// stack.push(1);
// stack.push('2');
// stack.push({ number: 3 });
// stack.push([4]);
//
// console.log(stack.top());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

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
