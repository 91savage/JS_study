var student = {
    name: 'Savage',
    score: 90
};

// student에는 hasOwnProperty 메소드가 없지만 아래 구문은 동작한다.

console.log(student.hasOwnProperty('name'));
console.dir(student);

var student = {
    name: 'Savage',
    score: 80
}
console.log(student.__proto__ == Object.prototype);