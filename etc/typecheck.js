

function getType(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
  }

function sum(a,b) {
    //a와 b가 number 타입인지 체크
if (getType(a) !== 'Number' || getType(b) !== 'Number') {
    throw new TypeError('파라미터에 number 타입이 아닌 값이 할당되었습니다.');
}
return a+b;
}

console.log(sum(10,20));
console.log(sum('10',20));