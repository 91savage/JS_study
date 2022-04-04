function Person(name) {
    // new 없이 호출하는경우, 전역객체에 name 프로퍼티를 추가 
    this.name = name;
};


//일반 함수로서 호출되었기 떄문에 객체를 암묵적으로 생성하여 반환하지 않는다.
//일반 함수의 this는 전역객체를 가리킨다.
var me = Person('Savage');

console.log(me);
console.log(global.name);


function A(arg) {

    if(!(this instanceof arguments.callee)) {
        return new arguments.callee(arg);
    }

    //삼항 연산자
    this.value = arg ? arg: 0;
}

var a= new A(100);
var b= A(10);

console.log(a.value);
console.log(b.value);
