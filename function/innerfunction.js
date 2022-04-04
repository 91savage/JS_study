function parent(param) {
    var parentVar = param;
    function child() {
        var childVar = 'Savage';
        console.log(parentVar + '' + childVar);
}
child();
console.log(parentVar + ''+childVar);
}
parent('Hello');

