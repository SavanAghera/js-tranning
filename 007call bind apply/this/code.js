class Test {
    constructor(name) {
        this.name = name
    }
    sayHi () {
        setTimeout( function()  {
            console.log(this.name , this);
        },1000)
    
    }
    sayHello () {
        setTimeout( () =>   {
            console.log(this.name , this);
        },1000)
    
    }

}

const test1 = new Test('savan')

test1.sayHi();
test1.sayHello();



// test2.sayHi();

// test1.sayHiArrow();
// test2.sayHiArrow();


// // console.log(test2);
// const test2Arrow = test2.sayHiArrow;
// const test2Fun = test2.sayHi;
// test2Arrow();
// test2Fun();



// let obj = {
//     x: 5,
//     y: 10,
//     showContext: function() {
//         console.log(this, this.x, this.y);
//     }
// };

// console.log(this)
// obj.showContext() 


// const newFunction = obj.showContext;
// newFunction();