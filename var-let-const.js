// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

let count = 10;
count = count + 10;
console.log(count);

const numbers = [23, 34, 12, 45,89];
numbers[1] = 45;
numbers.push(4,6,7,9);
console.log(numbers);

// object
const student = {
    name:'Fahima',
    Roll:1,
}
// student = {name:'Alo',}
student.name = 'jannat';
console.log(student);
// loop

let sum = 0;
for(let i = 0; i<10; i++){
    const num = i;
    sum = sum + num;

}
console.log(sum);