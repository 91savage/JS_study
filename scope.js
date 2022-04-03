var x = 'global';

function foo() {
    var x = 'function scope';
    console.log(x);
}

foo();
console.log(x);
//
var x = 0;
{
    var x=1;
    console.log(x);
}
console.log(x);

let y=0;
{
    let y=1;
    console.log(y);
}
console.log(y);
//
var global = 'global';

function foo() {
    var local = 'local';
    console.log(global);
    console.log(local);
}
foo();

console.log(global);
console.log(local);