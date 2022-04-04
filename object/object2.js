// 빈 객체 생성 ㅎ
var person = new Object();

// 프로퍼티 추가
person.name = 'Savege';
person.gender = 'male';
person.sayHello = function() {
    console.log('Hi ! My Name is ' + this.name);
}

console.log(typeof person); //object
console.log(person);

person.sayHello();


