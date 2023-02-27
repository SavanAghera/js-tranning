let array = ['Hello', 'JavaScript'];
console.log(array);

let newArray = new Array('Hello', 'JavaScript');
console.log(newArray);


























array.push('newItem');
array.pop();

array.unshift('newItem');
array.shift();



console.log(array.indexOf('Hello'));



console.log(array.includes("React"));




let firstArray2 = ['Hello', 'JavaScript'];
let secondArray = ["React", 'angular'];

console.log([...firstArray2 , ...secondArray]);

let newArray2 = firstArray2.concat(secondArray);


console.log(secondArray);
console.log(newArray2);

newArray2.sort();











let arr = [1, 2, 3, 4, 5];

let findElement = arr.find(function (element) {
    return element >= 4
});

console.log(findElement);













let arr2 = [1, 2, 3, 4, 5];

let sliceArray = arr2.slice(0, 2);
console.log("Slice Array: " + sliceArray);
console.log("Original Array: " + arr2);


let spliceArray = arr2.splice(0, 2);
console.log("Slice Array: " + spliceArray);
console.log("Original Array: " + arr2);








let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.length);

let arr4 = arr3;

arr4.push(6)

    // console.log(arr3.length);
    // console.log(arr4.length);