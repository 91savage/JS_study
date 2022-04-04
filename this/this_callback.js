var value =1;

var obj ={
    value: 100,
    foo: function() {
        setTimeout(function() {
            console.log("callback's this: ", this);
            console.log("callback's this.value: ", this.value);
        }, 100);
    }
};

obj.foo();

