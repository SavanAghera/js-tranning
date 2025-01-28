// n = 9;
// s = ''
// for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//         if(i  > j && n-i - 1 < j) {
//             s += '*'
//         }else {
//             s +=' '
//         }
//     }
//     s += '\n'
// }
// console.log(s);

// class A {
//     static sayHi () {
//         console.log('hi from A');
//     }
// }

// class B {
//     static sayHi () {
//         console.log('hi from B');
//     }
// }

// const obj = {
//     a: A,
//     b: B,
// }
// let  selectFIeld = {
//     value: 'a'  // 'b' 
// };
// obj[selectFIeld.value].sayHi()



// let obj = {
//     a:1,
//     b:10,
//     c:30,
//     d:4,
   
// }

// function filterObj(obj, callback) {
//     let newObj = {};
//     for (let key in obj) {
//         if (callback(obj[key])) {
//             newObj[key] = obj[key];
//         }
//     }
//     return newObj;
// }
// console.log(filterObj(obj,  v => v < 10 ));




let obj = {
    a: [{x:10}, {x:20}],
    b: [{x:30}, {x:40}],
    c: [{x:50},{x:60}],
    d: [{x:70}, {x:80}],
    e: [{x:90}, {x:100}],
    f: [{x:110},{x:120}],
}   

class A  {

}

let obja = new A(obj);
obja.add()
obja.print()
obj.remove()
obj.swap() // swap x value 