var Mammal  = require('./Mammal');
var Cat     = require('./Cat');
var CoolCat = require('./CoolCat');

var myMammal = Mammal({ name: 'Herb the Mammal' });
console.log(myMammal.getName());

var myCat = Cat({ name: 'Henrietta' });
console.log(myCat.purr(5));
console.log(myCat.getName());

var myCoolCat = CoolCat({ name: 'Bix' });
console.log(myCoolCat.getName());
