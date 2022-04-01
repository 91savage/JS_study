
//기명 함수 표현식
var nameFunc = function multiply(a,b) {
    return a* b;
};

//익명 함수 표현식
var anonymousFunc = function(a,b) {
    return a * b;
};


console.log(nameFunc.name);
console.log(anonymousFunc.name);