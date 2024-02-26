// // function a(params) {
// //     console.log(params);
// // }

// //  function  myMap(array , fun) {
// //     for (let index = 0; index < array.length; index++) {
// //             array[index] = fun(array[index])


// //     }
// //     return array
// //  }
// // let arr = [1,2,3,4,5];

// // function mul(a,i,arr) {
// //     console.log(a,i,arr);
// //     return a*2
// // }

// // console.log(arr.map(mul));

// // class a {
// //     constructor(name) {
// //         this.name = name
// //     }
// // }

// // class b extends a {
// //     constructor(name , lastName) {
// //         super(name)
// //         this.name = name
// //         this.lastName = lastName
// //     }
// // }
// // let aa = new a('c')
// // let bb = new b('a', 'b')
// // console.log(bb.__proto__ , aa);








// let n = 80;
// let s = ''
// for (let i = 0; i <  n; i++) {
//     for (let j = 0; j <  n; j++) {
//         if(i&j) {
//             s+='*'
//         }else {
//             s+=' '
//         }
//     }
//     s+= '\n'
// }
// console.log(s);




















// // class car { 
// //     isTwo =  true;
// //     name = 'a'
// //      hello(params) {
// //         console.log('hello' + this.name + params);
// //     } 
// // }
// // class audi extends car {
// //     name = 'b'
// //     hello () {
// //         console.log('second' , this.name);
// //     }
// // }
// // let a = new car()
// // a.hello();
// // console.log('next line');




// let a = [1,2,{1:11,2:22},{1:{a:11,2:22}}]
// console.log(a['2'][2]);


// let x = 'a'
// let b = {
//     "a":12,
//     'a':11,
//     a: 20,
//     [x]:2
// }
// console.log(b.a, b['a'], b.a);
// console.log(Object.keys(b));

// a = [{age:10, name:'savan'},{age:20, name:'erw'},{age:3 , name :'trs'}]



// let  a = {
//     name : 'hi'
// }

// let x = () => console.log(this);
// function y() {
//     console.log(this);
// }
// x.call(a);
// y.call(a);




// class arr extends Array {
//     name = 'hi'
//     constructor(...args) {
//         console.log(args);
//         super(...args)
//     }   
//     hi() {
//         console.log('hi');
//     }
//     indexOf() {
//         console.log(this);
//         return this['name']
//     }   
// }

// let arr2 = [1,2];
// arr2.name = 'a';
// arr2.push(3)
// console.log(arr2, arr2[2]);
// const aa = new arr(1,2,3)
// console.log(aa.indexOf());





// // a == 1 && a==2 && a==3


// let a = [1,2,{1:11,2:23}]

// console.log(a['2']['1']);

// const  b =  {
//     1: 11,
//     "1":22
// }
// console.log(b[1],b['1']);


// for (let index = 0; index < 5; index++) {
//    setTimeout(() => {
//         console.log(index);
//    }, 0); 

// }



// const add = 
//     ( () =>  {.
//         let counter = 0;
//         return function () {
//             counter += 1;
//             console.log(counter);
//             return counter
//         }
//     })();
// add();


// let a = b => c => b*c;
// console.log(a(3,4)(5));



// function test(params) {

//     params =  [10]
//  }

//  let arr = [1,2,3];
//  test(arr);
//  console.log(arr);



// obj = {
//     a: 10,
//     print: function() {
//         return this.a;
//     }
// }

// function test(fun) {
//     return fun();
// }

// const a = test.bind(obj);

// console.log(a(obj.print)); // 10





// arr = [{num: 10}, {num: 20}, {num: 30}]
// console.log(arr.indexOf(1));




a = [1,2,3,4,5,6,7,8,9];
