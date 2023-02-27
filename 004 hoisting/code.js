// console.log(x); // Output: undefined
// console.log(y); // Output: ReferenceError: y is not defined
// console.log(z); // Output: ReferenceError: z is not defined

var x = 10;
let y = 20;
const z = 30;

console.log(x);
console.log(y); 
console.log(z);


console.log(sum(x,y));

var sum = (x ,y) => x + y;

function sum(x,y) {
    return x + y;
}



var  x = 11;

function log() {
    console.log('this always works');
}

// var log = () => console.log('this works');
console.log(x);
log();


