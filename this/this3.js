var value =1;
var obj ={
    value:100,
    foo: function() {
        var that = this;

        console.log("foo's this: ", this);
        console.log("foo's this.value: ", this.value);

        function bar() {
            console.log("bar's this: ", this);
            console.log("bar's this.value: ", this.value);

            console.log("bar's that: ", that);
            console.log("bar's that.value: ", that.value);
        }
        bar();
    }
};

obj.foo();