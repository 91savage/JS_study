function calculateArea(width, height) {
    var area = width * height;
    return area;
}

console.log(calculateArea(3,5));
console.log(calculateArea(8,5));

function getSize(width, height, depth) {
    var area = width * height;
    var volume = width * height * depth;
    return [area, volume];
}

console.log('area is' + getSize(3,2,3)[0]);
console.log('volume is ' + getSize(3,2,3)[1]);

function square(number) {
    return number * number;
}

square.x = 10;
square.y = 20;

console.log(square.x, square.y);

function square(number) {
    return number * number;
}
console.dir(square);

function multiply(x,y){
    console.log(arguments);
    return x * y;
}

multiply();
multiply(1);
multiply(1,2);
multiply(1,2,3);

function sum() {
    var res = 0;

    for (var i=0; i< arguments.length; i++) {
        res += arguments[i];
        }
        
        return res;
}

console.log(sum());
console.log(sum(1,3));
console.log(sum(1,5,7));