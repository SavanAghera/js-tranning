// function getThis() {
//     return this;
// }

// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };

// obj1.getThis = getThis;
// obj2.getThis = getThis;


// console.log(getThis());
// console.log(obj1.getThis()); 
// console.log(obj2.getThis());



// const  getThis = () =>  {
//     return this;
// }

// const obj1 = { name: "obj1" };
// const obj2 = { name: "obj2" };

// obj1.getThis = getThis;
// obj2.getThis = getThis;



// console.log(obj1.getThis()); 
// console.log(obj2.getThis())




// function test(x) {
//     return x * 2;
// }

// const testArrow = (x) => { return x * 2 }






// ----------------------- Second Example




// var student = {
//     name: "patel",
//     display: function () {
//         console.log(this);
//         console.log(this.name);

//     },
//     displayWithArrow: () => {
//         console.log(this);
//         console.log(this.name);
//     }
// };

// student.display();

// student.displayWithArrow();






// ----------------------- Third Example




// function testingScenario() {
//     this.name = "Savan";
//     this.age = 25;
//     var student = {
//         name: "patel",
//         age: 20,
//         display: function () {
//             console.log(this);
//             console.log('Name: ', this.name);

//             console.log('Age: ', this.age);

//         },
//         displayWithArrow: () => {
//             // console.log(this);
//             console.log('Name: ', this.name);
//             console.log('Age: ', this.age);
//         }

//     };
//     student.display();
//     console.log('\n-------With Arrow Function-------\n');
//     student.displayWithArrow();
// }

// testingScenario();
// console.log(this);











// ----------------------- Fourth Example




let testingArrowFunction = () =>  {
    // this.name = "Savan";
    // this.age = 25;
    var student = {
        name: "patel",
        display: function () {
            console.log('Name: ', this.name);
            console.log('Age: ', this.age);
            console.log('city: ', this.city);
        },

        displayWithArrow: () => {

            console.log('Name: ', this.name);
            console.log('Age: ', this.age);
            console.log('city: ', this.city);

        }

    };
    student.display();
    console.log('\n-------With Arrow Function1-------\n');
    student.displayWithArrow();
}
function wrapperFunction() {
     this.city = 'Ahmedabad';
    testingArrowFunction();

}

wrapperFunction();











// ----------------------- Fifth Example




// function testingFifthScenario() {

//     this.name = "Savan"
//     this.age = 25;

//     var student = {
//         name: "patel",

//         display: function () {
//             console.log('Outer', this);
//             const test = () => {
//                 console.log(this);
//                 console.log(this.name);
//                 console.log(this.age);
//             }
//             test();
//         },


//         displayWithArrow: () => {
//             console.log('Outer', this);
//             const test = () => {
//                 console.log(this);
//                 console.log(this.name);
//                 console.log(this.age);
//             }
//             test();
//         }
//     };


//     student.display();
//     console.log('\n\n');
//     student.displayWithArrow();

// }




// testingFifthScenario();