const difference = (x, y) => x - y;

// single parameter
const getAge = (person) => person.age;
const student = {name:'Fahima', age:19};
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([5, 6,7,8]);
console.log(third);

// no  parameter
const getPI = () => Math.PI
console.log(getPI());

// large arrow function

const doMath = (x, y, z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}
const result = doMath(2,3,5);
console.log(result);
