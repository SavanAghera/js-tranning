
// function showName(a) {
//     console.log(this.name , a);
// }


// class Display1 {

//     name = "React";
//     displayName() {
//         const a = showName.bind(this); 
//         a('a')
//     }
// }


// class Display2 {

//     name = "Angular";

//     displayName() {
//         showName.call(this)
//     }
// }

// const obj1 = new Display1();
// const obj2 = new Display2();
// obj1.displayName();
// obj2.displayName();














// class Test {
//     constructor(name) {
//         this.name = name
//     }
//     sayHi (newArg1='hello' , newArg2='hi') {
//         console.log(this?.name , newArg1 , newArg2, this , '....');
//     }

//     sayHiArrow  = () => console.log(this , this.name , '....A')

// }

// function hi () {
//     console.log(this);
// }

// const test1 = new Test('savan')

// const sayHiArrow = test1.sayHiArrow;
// const sayHi = test1.sayHi;
// sayHiArrow();
// // sayHi()
// // sayHi.call(test1 , 'h1', 'h2');
// // sayHi.apply(test1 , ['h1', 'h2']);
// // hi()

// const callTest = sayHi.bind(test1);
// callTest('h1', 'h2')





// function Car(type, fuelType) {
//     this.type = type;
//     this.fuelType = fuelType;
// }

// function setBrand(brand) {
//     Car.call(this, "convertible", "petrol");
//     this.brand = brand;
//     console.log(`Car details = `, this);
// }

// function definePrice(price) {
//     Car.call(this, "convertible", "diesel");
//     this.price = price;
//     console.log(`Car details = `, this);
// }

// const newBrand = new setBrand("Brand1");
// const newCarPrice = new definePrice(100000); 

// console.log(newBrand, newCarPrice);




let a = {
    name: 'savan',
    b: {
        a:1
    }
}
let b = {
    name: 'jay'
}

function test() {
    console.log(this);
}

test.call(a)