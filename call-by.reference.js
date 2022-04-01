function changeVal(primitive, obj){
    primitive +=100;
    obj.name = 'Kim';
    obj.gender = 'female';
}

var num =100;
var obj ={
    name: 'Lee',
    gender: 'male'
};

console.log(num);
console.log(obj);
 
changeVal(num, obj);

console.log(num);
console.log(obj);
