/*function Person(name) {
    this.name =name;
}

Person.prototype.getName = function() {
    return this.name;
}

var me = new Person('Savage');
console.log(me.getName());

Person.prototype.name ="Kim";
console.log(Person.prototype.getName());
*/

function Person(name) {
    // 생성자 함수 코드 실행 전 -------- 1
    this.name = name;  // --------- 2
    // 생성된 함수 반환 -------------- 3
  }
  
  var me = new Person('Lee');
  console.log(me.name);