const glass = {name: 'glass',
     color: 'golden',
      price: 25, 
      isCleaned: true};
console.log(glass);
const keys = Object.keys(glass);
// console.log(keys);

const values = Object.values(glass);
// console.log(values);

const pairs = Object.entries(glass);
// console.log(pairs);
delete glass.isCleaned;
console.log(glass);

const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);


// freeze
Object.seal(glass);
glass.price = 500;
delete glass.name;
glass.source = 'Bangladesh';
console.log(glass);
