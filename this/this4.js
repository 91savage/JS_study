var value =1;

var obj = {
    value: 100,
    foo: function() {
        console.log("foo_this : ", this);
        console.log("foo_this.value: ", this.value);

        function bar(a, b){
            console.log("bar_this: ", this);
            console.log("bar_this.value: ", this.value);
            console.log("bar's arguments: ", arguments);
        }
        bar.apply(obj, [1, 2]);
        bar.call(obj, 1, 2)
        bar.bind(obj)(1, 2);
    }
};

obj.foo();