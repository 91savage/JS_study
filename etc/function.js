var foo = function(a,b) {
    return a*b;
};

var bar = foo;

console.log(foo(10,5));
console.log(bar(10,3));


var square = new Function('number', 'return number * number');

console.log(square(10));