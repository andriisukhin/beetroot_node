const Person = require("./person")

require('./person')

const p1 = new Person('Andrey', 'Poltava')
const p2 = new Person('Maks', 'Kyiv')
const p3 = new Person('Sergey', 'Harkiv')

console.log(p1.getInfo());
console.log(p2.getInfo());
console.log(p3.getInfo());