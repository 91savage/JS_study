function sum() {
    if(!arguments.length) return 0;

    // arguments 객체를 배열로 변환

    var array = Array.prototype.slice.call(arguments);
    return array.reduce(function (pre, cur){
        return pre + cur;
    });
}

console.log(sum(1,2,3,4,5));