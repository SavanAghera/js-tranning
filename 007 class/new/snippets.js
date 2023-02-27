// It creates a new, empty object.
// It binds this to our newly created object.
// It adds a property onto our newly created object called “__proto__” which points to the constructor function’s prototype object.
// It adds a return this to the end of the function, so that the object that is created is returned from the function.



class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
  
}

console.log(Student.prototype , 'Student.prototype');


const first = new Student('harsh', 23);
console.log(first.__proto__);
console.log(Student.prototype);
console.log(first.__proto__ === Student.prototype)







// function Student(name, age) {
//     this.name = name;
//     this.age = age;
// }
// console.log(Student.prototype , 'Student.prototype');

// const first = new Student('harsh', 23);
// console.log(first.__proto__);
// console.log(Student.prototype);
// console.log(first.__proto__ === Student.prototype)