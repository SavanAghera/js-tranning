// let obj = {
//     message: "Hello, world!",
//     a: [],
//     b: {
//       c:10
//     },
//     sayHello: function() {
//       console.log(this.message);
//     }
//   };
  
//   obj.sayHello();
  
//   let sayHello = obj.sayHello;
//   sayHello(); 


let obj = {
  name: 'savan',
}
let sayHello   = () => {
  console.log(this.name);
} 
function sayHello2() {
  console.log(this.name);
}
