function convertArgsToArray() {
    console.log(arguments);

//arguments 객체를 배열로 변환.
var arr = Array.prototype.slice.apply(arguments);

console.log(arr);

}

convertArgsToArray(1,2,3);