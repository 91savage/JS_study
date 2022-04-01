/* var foo = function(p1,p2){
    console.log(p1,p2);
};

foo(11,3);

console.log(foo);
*/

//call by-value

function foo(primitive) {
    primitive +=1;
    return primitive;
}

var x=0;

console.log(foo(x));
console.log(x);