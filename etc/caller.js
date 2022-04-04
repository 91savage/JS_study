
function foo(func) {
    var res = func();
    return res;
}

function bar() {
    return 'caller : ' + bar.caller;
}

console.log(foo(bar));
console.log(bar());

//caller 프로퍼티는 자신을 호출한 함수 의미