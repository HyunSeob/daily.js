var Stack = require('./stack');

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
