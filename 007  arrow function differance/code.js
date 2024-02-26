// function testa(a) {
//     return a*2
// }
// const test2 = a =>  a*2;
// const aa = (a, b) =>  a*b


// const obj = {
//     a: 5,
//     sayThis () {
//         console.log(this, this.a);
//     },
//     sayThisArrow: () => {
//         console.log(this , this.a);
//     }
// }
// obj.sayThis();
// obj.sayThisArrow();
// console.log(this);





function name(params) {
   a = 5;
    console.log(this);
    console.log('==========================');
    function abc () {
        c = 7;
        return x = () => {
            b = 6;
            return this;
        };
    }
    let s = abc();
    console.log(s());
}

name();
console.log(this);



// function name(params) {
//     a = 5;
//     console.log(this);
//     console.log('==========================');
//     function abc () {
//         c = 7;
//         return x = () => {
//             b = 6;
//             return this;
//         };
//     }
//     s = abc();
//     console.log(s.x());
// }

// name();