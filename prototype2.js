function Person(name) {
    this.name = name;
}
var foo = new Person('Savage');

console.dir(Person); // prototype 프로퍼터가 있음
console.dir(foo);   // 프로토타입 프로퍼터가 없음.

console.log(Person.name);
console.log(foo.name);

console.log(Person.__proto__ === Function.prototype);
console.log(Person.__proto__ === foo.prototype);