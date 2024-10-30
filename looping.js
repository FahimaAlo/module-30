const numbers = [1, 6, 7, 9]
// for(let i = 0; i < numbers.length; i++){}
for(const num of numbers){
    console.log(num);
}

const nobab = 'jahan ara mam';
for(const car of nobab){
    // console.log(car);
}

const glass = {name: 'glass',
    color: 'golden',
     price: 25, 
     isCleaned: true
    };

    for(const key in glass){
        const value = glass[key];
        console.log(key,value);
    }