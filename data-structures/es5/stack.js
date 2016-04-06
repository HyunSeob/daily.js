function Stack() {
  this._stack = [];
}

Stack.prototype.isEmpty = function() {
  return this._stack.length === 0;
}

Stack.prototype.size = function() {
  return this._stack.length;
}

Stack.prototype.top = function() {
  if (this.isEmpty()) throw new Error('Stack is empty.');
  return this._stack[this.size() - 1];
}

Stack.prototype.push = function(elem) {
  this._stack.push(elem);
}

Stack.prototype.pop = function() {
  if (this.isEmpty()) throw new Error('Stack is empty.');
  return this._stack.splice(this.size() - 1, 1)[0];
}

module.exports = Stack;
