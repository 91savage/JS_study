foo: {
    console.log(1);
    break foo;
    console.log(2);
}

console.log('done!');

outer: for(var i=0; i<3; i++){
    for(var j=0; j<3; j++){
        if(i+j ==3) break outer;
    }
}

console.log('Done!');