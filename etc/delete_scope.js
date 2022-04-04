var x=10;

function foo() {

    y=20;
    console.log(x+y);
}

console.log(window.x);
console.log(window.y);

delete x; // 전역 변수는 삭제되지 않는다.
delete y; // 프로퍼터는 삭제 된다.

console.log(window.x);
console.log(window.y);