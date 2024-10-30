const actor = {
    name: 'ananto',
    age: 19,
    phone: '0128355766',
    money: 1288888,
}
const {phone,name,age:boyos} = actor


// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;
console.log(phone);
console.log(name);
console.log(boyos);
console.log(actor.phone);

const numbers = [45, 99]
const [first, second] = numbers;
const [x, y] = [12 ,45];


// 
function doubleThem(a, b){
    return [a*2, b*2];
}
const [prothom,ditiyo] = doubleThem(7, 9);
console.log(prothom, ditiyo);