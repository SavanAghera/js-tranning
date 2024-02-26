class Student {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  }
}



function Student(name, age) {
  this.name = name;
  this.age = age;
}

console.log(Student.prototype, 'Student.prototype');


const first = new Student('harsh', 23);
console.log(first.__proto__);
console.log(Student.prototype);
console.log(first.__proto__ === Student.prototype)

const second = new Student('parth', 23);
const third = new Student('jay', 22);

Student.prototype.speak = function () {
  console.log(this.name + ' is speaking.....');
}

second.speak();












// /////////////////////////////////////////////


// class Cat {
//     constructor(name) {
//       this.name = name;
//     }

//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }

//   class Lion extends Cat {
//     speak() {
//       super.speak();
//       console.log(`${this.name} also roars.`);
//     }
//   }

//   const bella = new Cat('bella');
//   bella.speak();
//   const simba = new Lion("simba");
//   simba.speak();























function Cat(name) {
  this.name = name
}

Cat.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);

}

function Lion(name) {
  Cat.call(this, name);
  this.speak = function () {
    Cat.prototype.speak.bind(this)();
    console.log(`${this.name} also roars.`);
  }

}
const bella = new Cat('bella');
bella.speak();
const simba = new Lion("simba");
simba.speak();