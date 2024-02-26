let arr = [1,2,3,4,5,6,7,8,9,10,11]

// arr.forEach((value,index, array) => {
//     console.log(value,index,array);
// });




function test(val,index,arr) {
    console.log(val,index,arr);
}


arr.forEach(test);










let arr2 = [1,2,3,4,5,6,7,8,9,10,11]

const result  = arr2.map((value,index, array) => {
    console.log(value,index);
    return value*2;
});

console.log(result);






let arr3 = [1,2,3,4,5,6,7,8,9,10,11]

const result2  = arr3.filter((value,index, array) => {
    console.log(value,index);
    // return value%2==0;
});

console.log(result2);






let arr4 = [1,2,3,4,5,6,7,8,9,10,11]

const result3  = arr4.reduce((accumulator, currentValue ,index, array) => {
    console.log(accumulator,currentValue,index);
    return accumulator+currentValue;
},0);

console.log(result3);





// class PowerArray extends Array {
//     isEmpty() {
//     console.log(this);
//       return this.length === 0;
//     }
  
//     static get [Symbol.species]() {
//       return Array;
//     }
//   }
  
//   let arr5 = new PowerArray(1, 2, 5, 10, 50);
//   console.log(arr5.isEmpty()); // false
  
//   let filteredArr = arr5.filter(item => item >= 10);
  
//   console.log(filteredArr.isEmpty());





  

