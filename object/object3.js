//생성자 함수
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log('Hi! My name is ' + this.name);
    }
}


//인스터스의 생성
var person1 =new Person('Savage', 'male');
var person2 =new Person('Jinstar', 'female');

console.log('person1: ', typeof person1);
console.log('person2: ', typeof person2);
console.log('person1: ', person1);
console.log('person2: ', person2);

person1.sayHello();
person2.sayHello();