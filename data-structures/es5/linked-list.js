function Node(data) {
  this._data = data;
  this._next = null;
}

Node.prototype.getData = function() {
  return this._data;
};

Node.prototype.getNext = function() {
  return this._next;
};

Node.prototype.setNext = function(node) {
  this._next = node;
};

function Iterator(start) {
  this._curr = start;
}

Iterator.prototype.next = function() {
  this._curr = this._curr.getNext();
  return this._curr.getData();
};

Iterator.prototype.hasNext = function() {
  return this._curr.getNext() !== null;
};

function LinkedList() {
  this._head = null;
  this._tail = null;
}

LinkedList.prototype.isEmpty = function() {
  return this._head === null;
};

LinkedList.prototype.pushBack = function(data) {
  var node = new Node(data);
  if (!this._head) this._head = node;
  if (this._tail) this._tail.setNext(node);
  this._tail = node;
};

LinkedList.prototype.get = function(index) {
  var curr = this._head;
  while (index--) {
    curr = curr.getNext();
  }
  return curr.getData();
};

LinkedList.prototype.indexOf = function(data) {
  if (this.isEmpty()) throw new Error('List is empty.');

  var curr = this._head;
  var index = 0;

  while (curr) {
    if (curr.getData() === data) return index;
    curr = curr.getNext();
    index++;
  }

  return -1; // Not found
}

LinkedList.prototype.remove = function(data) {
  if (this.isEmpty()) throw new Error('List is empty.');

  var prev = this._head;
  var curr = this._head;

  while (curr) {
    if (curr.getData() === data) {
      if (curr === this._head) this._head = curr.getNext();
      else if (curr === this._tail) this._tail = prev;
      else prev.setNext(curr.getNext());
      return true;
    }
    prev = curr;
    curr = curr.getNext();
  }

  return false;
}

LinkedList.prototype.getIterator = function() {
  return new Iterator(this._head);
};

module.exports = LinkedList;
