let obj = { x: 1, y: 2, z: 3 };
console.log(Object.keys(obj)); 
console.log(Object.values(obj)); 
console.log(Object.entries(obj));



let obj1 = { x: 1, y: 2 };
let obj2 = { y: 3, z: 4 };

let obj3 = Object.assign(obj2, obj1);
console.log(obj3, obj2); 


// let prototype = { x: 1 };
// let obj = Object.create(prototype);
// console.log(obj.x); // Output: 1
// console.log(Object.getPrototypeOf(obj) === prototype); // Output: true


// let obj = { x: 1, y: 2 };
// Object.freeze(obj);
// obj.x = 3;
// obj.z = 4;
// console.log(obj); 


// let obj = { x: 1, y: 2 };
// Object.seal(obj);
// obj.x = 3;
// console.log(obj); 

