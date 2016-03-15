// This is just a example code for `apply` practice from followed url:
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0)
    throw RangeError('Cannot create product "' + name + '" with a negative price');

  return this;
}

function Food(name, price) {
  Product.apply(this, arguments);
  this.category = 'food';
}
Food.prototype = new Product();

function Toy(name, price) {
  Product.apply(this, arguments);
  this.category = 'toy';
}
Toy.prototype = new Product();

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);

console.log('Cheese:', cheese);
console.log('Fun:', fun);
