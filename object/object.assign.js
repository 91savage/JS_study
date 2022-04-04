//Object.assign(target, ...sources)

// copy
const obj = {a: 1};
const copy = Object.assign({}, obj);
console.log(copy)
console.log(obj == copy);

//merge
const o1= {a:1};
const o2= {b:2};
const o3= {c:3};

const merge1 = Object.assign(o1,o2,o3);

console.log(merge1);
console.log(o1);

//merge
const o4 = {a:1};
const o5 = {b:2};
const o6 = {c:3};

const merge2 = Object.assign({},o4,o5,o6);

console.log(merge2);
console.log(o4);