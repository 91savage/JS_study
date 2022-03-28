const user ={
    name: 'Savege',
    address: {
        city: 'Seoul'
    }
};

Object.freeze(user);

// 프리즈 하여도 객체 내부의 객체 (Nested Object)는 변경 가능 
user.address.city = 'Busan';
console.log(user);