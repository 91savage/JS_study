function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);

    props.forEach((name)=> {
        const prop = obj[name];
        if(typeof prop == 'object' && prop !== null) {
            deepFreeze(prop);
        }
    });
    return Object.freeze(obj);
}

const user = {
    name:'Savage',
    address: {
        city: 'Seoul'
    }
};

deepFreeze(user);

user.name = 'kim';
user.address.city = 'busan';

console.log(user);
