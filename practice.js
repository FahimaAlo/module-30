function multiply(num1, num2, num3){
    return num1 * num2 * num3;
}
// console.log(multiply(2,3,4));
// task:1
const multi = (num1, num2, num3) => (num1  * num2 * num3);
const sum = multi(2,3,4);
// console.log(sum);

// task:2....................................
const student = `I am a web developer. \n
I love to code. \n
I love to eat biryani.
`
// console.log(student);

// task:3........................................
function numbers(num1, num2 = 1){
    const sum = num1 + num2;
    return sum;
}
// console.log(numbers(5));
// task:4............................................................................

const filterEvenLengthNames = (friends) => {
    const evenLengthNames = [];
    friends.forEach(name => {
        if (name.length % 2 === 0) {
            evenLengthNames.push(name);
        }
    });
    
    return evenLengthNames;
};

const friendsList = ['Fahima', 'Lima', 'Munne', 'Jannat', 'Lamia','Samima'];
console.log(filterEvenLengthNames(friendsList));






// task:5.........................................

const findMaxInCombinedArrays = (array1, array2) =>{
    const combinedArray = [...array1, ...array2];
    const maxNumber = Math.max(...combinedArray);
    return maxNumber;
};
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
console.log(findMaxInCombinedArrays(array1, array2)); // Output: 6
