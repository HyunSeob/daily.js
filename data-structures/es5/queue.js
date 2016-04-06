function Queue() {
  this._queue = [];
}

Queue.prototype.isEmpty = function() {
  return this._queue.length === 0;
}

Queue.prototype.size = function() {
  return this._queue.length;
}

Queue.prototype.front = function() {
  if (this.isEmpty()) throw new Error('Queue is empty.');
  return this._queue[0];
}

Queue.prototype.back = function() {
  if (this.isEmpty()) throw new Error('Queue is empty.');
  return this._queue[this.size() - 1];
}

Queue.prototype.pushBack = function(elem) {
  this._queue.push(elem);
}

Queue.prototype.popFront = function() {
  if (this.isEmpty()) throw new Error('Queue is empty.');
  return this._queue.splice(0, 1)[0];
}

module.exports = Queue;
