



class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(`${this.name} also roars.`);
  }
}

const bella = new Cat('bella');
bella.speak();
const simba = new Lion("simba");
simba.speak();



class FullName {
  constructor(name) {
    this.name = name;
  }
  result() {
    console.log(this.name, '......')
  }
}
let newName = new FullName("parth")
console.log(newName, newName.result())
setTimeout(newName.result, 2000)



// setTimeout(newName.result.bind(newName), 2000) 


// class FullName {
//     constructor(name) {
//         this.name = name;
//     }
//     result = () => {
//         console.log(this.name)
//     }
// }
// let name = new FullName("parth")
// setTimeout(name.result, 2000)




/////////////////////////



// let dog = {
//     count: 3,
//     jumps: () => {
//         console.log(this)
//         this.count++
//     }
// }

// dog.jumps();

// console.log(dog.count);