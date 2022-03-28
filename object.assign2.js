const user1 ={
    name: 'Lee',
    address: {
        city: 'Seoul'
    }
};

// 새로운 빈 객체에 user1을 copy
const user2 = Object.assign({}, user1);

console.log(user1 ==user2);

user2.name = 'Kim';
console.log(user1.name);
console.log(user2.name);

// 객체 내부의 객체(nested object)는 shallow copy 된다.
console.log(user1.address == user2.address);

user1.address.city = 'Busan';
console.log(user1.address.city);
console.log(user2.address.city);
