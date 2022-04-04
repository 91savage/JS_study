
//func.apply(thisArg, [argsArray])

//thisArg : 함수 내부의 this에 바인딩 할 객체
//argsArray : 함수에 전달 할 argument의 배열


var Person = function(name) {
    this.name = name;
};

var foo = {};

//apply 메소드는 생성자함수 Person을 호출한다. 이 떄 this에 객체 foo를 바인딩 한다.

Person.apply(foo, ['Savage']);
console.log(foo); // name 프로퍼티가 동적으로 추가 되고 값이 할당 됨