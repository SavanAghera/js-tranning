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