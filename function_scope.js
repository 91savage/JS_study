/**var x = 'global';

function foo() {
    var x= 'local';
    console.log(x);
}

foo();
console.log(x);

**/
/**
var x = 'global';

function foo() {
    var x= 'local';
    console.log(x);

    function bar() {
        console.log(x);
    }

    bar();
}

foo();
console.log(x);
**/

/*   100 100
var x=10;

function foo() {
    x= 100;
    console.log(x);
}
foo();
console.log(x);

*/

var x=10;

function foo() {
    var x=100;
    console.log(x);

    function bar(){
    x=1000;
    console.log(x);
    }
    bar();
}
foo();
console.log(x);
