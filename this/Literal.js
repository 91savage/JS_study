//객체 리터럴 방식 Object.prototype

var foo = {
    name: 'foo',
    gender: 'male'
}

console.dir(foo);


//생성자 함수 방식 Person.prototype
function Person(a,b) {
    this.name = a;
    this.gender = b;
}

var me = new Person('Savage', 'male');
console.dir(me); // 'savage, male

var you = new Person('Jinstarr', 'female');
console.dir(you); // jinstarr , female