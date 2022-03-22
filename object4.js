function Person(name,gender){
    var married = true;

    this.name = name;
    this.gender = gender;
    this.sayHello = function(){
        console.log('Hi! My name is ' + this.name);

    }
}

var person = new Person('Savage', 'male');

console.log(typeof person);
console.log(person);

console.log(person.gender);
console.log(person.married);