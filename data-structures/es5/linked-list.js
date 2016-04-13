function Node(data) {
  this._data = data;
  this._next = null;
}

Node.prototype.getData = function() {
  return data;
};

Node.prototype.getNext = function() {
  return next;
};

Node.prototype.setNext = function(node) {
  this._next = node;
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
  if (!this._tail) this._tail = node;
  else this._tail.setNext(node);
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
