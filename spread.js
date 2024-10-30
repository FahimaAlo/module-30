const max = Math.max(4, 5, 7, 9)
const numbers = [2, 4, 5,99, 90,20]
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax);

// use spread operator to copy
const friends = [4, 5, 56, 80];
const bondhu = friends;
const dosto = [...friends];
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);
console.log(bondhu);

const sonkha = [...friends ,88]
console.log(sonkha);