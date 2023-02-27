let testArray = [1,2,3];


// console.log(testArray.__proto__ === Array.prototype);


console.log(testArray.__proto__.__proto__ === Object.prototype);
console.log(testArray.__proto__.__proto__.__proto__);




// Array.prototype.myNewFunction = function ()  {
//     console.log('this is my new function ');
// }


// testArray.__proto__.myNewFunction()
// testArray.myNewFunction()







const obj = {
    test: 'test'
}

function testFun() {

}




class Test {
    name = 'hi'
    sayHi() {
        console.log('hi');
    }
 }


 class InheritedClass extends Test {
    world = 'earth'

    newSayHi() {
        console.log('new sayHi');
    }
 }

 const sayHello = new InheritedClass();
sayHello.sayHi();
sayHello.newSayHi()
 console.log(sayHello.__proto__);
 console.log(Test.prototype);
 console.log(sayHello.__proto__.__proto__ === Test.prototype);