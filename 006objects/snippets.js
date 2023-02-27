let obj = {
  message: "Hello, world!",
  sayHello: function () {
    console.log(this.message);
  }
};

obj.sayHello();


console.log(obj.message, obj['message']);


// let sayHello = obj.sayHello;
// sayHello();


const o1 = {
  a:1,
  b:[1,2,3],
  c:11
}
const o2 = o1;
o2.a= 2 ;
console.log(o1,o2);

const o3 = Object.assign({}, o1)

o3.a= 3 ;
console.log(o1.a,o2.a, o3.a);

o3.b.push(4);
console.log(o1.b,o2.b, o3.b);






// const o4 = structuredClone(o1);

// o4.b.push(4);
// console.log(o1.b,o2.b, o3.b, o4.b);






let obj1 = {
  x: 2,
  get y() {
    return this.x * 2;
  },
  set y(val) {
    this.x = val * 2;
}
}
console.log(obj1.y)

obj1.y = 3;
console.log(obj1.y , obj1.x);





let newObj = {
  a: 1,
  b:2,
  c:3
}
let b = 'c'
console.log(newObj[b]);









let num = 1;

let obj3 = {}

function addProp(value) {
  obj3['prop'+num] = value;
  num++;
  console.log(obj3);
}


addProp('1')
addProp('2')
addProp('3')
addProp('4')










let obj5 = { 'x': 1, y: 2, z: 3 };
for (let prop in obj5) {
    console.log(prop);
    console.log(obj5[prop])
}

let arr = [1, 2, 3];
for (let val of arr) {
    console.log(val); 
}




//////////////////////////////////////////
let x;
x = 0
let y;
// if ((x === undefined || x === null)) {
//     y = 10;
// }else {
//   y = x
// }

// y = x || 10
y = x ?? 10
console.log(y);







const a = [0,1,2,3,4,5];
let s = '';
for (const i of a) {
  for (const j of a) {
    if(i==j && 5-j==i) {
      s+='*'
    }else {
      s+=' '
    }
  }
  s+= '\n'
}
console.log(s);