// var x=1;

// function foo() {
//     var x= 10;
//     bar(); 
// }

// function bar() {
//     console.log(x);
// }

// foo();
// bar();

// var x= 10;

// function foo() {
//     y=20;
//     console.log(x+y);
// }

// foo();


// y는 호이스팅이 일어나지 않는다.
console.log(x);
console.log(y);

var x=10;

function foo() {
    y=20;
    console.log(x+y);
}
foo();