var str = 'string';
// 문자열은 유사배열이다.
for (var i = 0; i < str.length; i++) {
  console.log(str[i]);
}

// 문자열을 변경할 수 없다.
str[0] = 'S';
console.log(str); // string

str += 'test';
console.log(str); 

str =str.substring(0,2);
console.log(str);

var foo = null;
console.log(typeof foo);

console.log(typeof foo == null);
console.log(foo == null);

var key = Symbol('key');
console.log(typeof key);

var obj = {};
obj[key] = 'value';
console.log(obj[key]);

var x = 'xxx';

function foo () {
  var y = 'yyy';

  function bar () {
    var z = 'zzz';
    console.log(x + y + z);
  }
  bar();
}



var x=5
var y=7

console.log(x+=y);

var str = "my name is ";



console.log(str+='kim');

var x=9;
var result = x % 2 ? '홀' : '짝';
console.log(result);

function sum(x,y) {
  return x * y;
}
console.log(sum(100, 2));