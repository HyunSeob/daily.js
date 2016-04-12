var Mammal = require('./Mammal');
var Cat    = require('./Cat');

var myMammal = new Mammal('Herb the Mammal');
console.log(myMammal.getName());

var myCat = new Cat('Henrietta');
console.log(myCat.says());
console.log(myCat.purr(5));
console.log(myCat.getName());
