function sayHello(name){
    var text='Hello' + name;
    var logHello = function() { console.log(text);}
    logHello();
}

sayHello('kim');
logHello('lee');