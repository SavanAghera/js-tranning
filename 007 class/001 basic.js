// let a = 'outer a'
class BasicClass {
    a = 'hello';

    saySomething() {
        console.log(this.a);
    }
}

let classObj = new BasicClass();

classObj.saySomething()






// // const classObj2 = new BasicClass();
// // classObj2.a = 'new hello'
// // classObj2.b = 'new prop'
// // classObj2.saySomething();

// // console.log(classObj2.b);
// // console.log(classObj.b);









// // class Rectangle {
// //     constructor(height, width) {
// //         this.height = height;
// //         this.width = width;
// //     }
// // }


// // Expression; the class is anonymous but assigned to a variable
// const Rectangle = class {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };

// // Expression; the class has its own name
// // const Rectangle = class Rectangle2 {
// //     constructor(height, width) {
// //         this.height = height;
// //         this.width = width;
// //     }
// //     getArea () {
// //         console.log( this.height * this.width)
// //     }
// // };
// // const rect = new Rectangle2(5,7);
// // rect.getArea()



// /// get set 



// class language {
//     languages = [];
//     get current () {
//         console.log(this.languages[this.languages.length - 1])
//     }
//     set current (val) {
//         this.languages.push(val);
//     }

// }

// const l = new language();

// l.current = 'en'
// l.current = 'guj'
// console.log(l.languages);
// l.current



// //static 



// class StaticExample { 
//     name = 'jay';
//     static staticName = 'parth'

//     static sayName() { 
//         console.log(this.staticName, StaticExample.staticName);
//     }

// }

// const s = new StaticExample();
// console.log(s.name);
// console.log(s.staticName);
// console.log(StaticExample.staticName);
// StaticExample.sayName()










// class ConstructorClass {
//     b = 'input name';
//     name = 'default name'
//     constructor(name) {
//         this.name = name
//     }

//     sayName() {
//         console.log('my name is:' + this.name);
//     }
// }

// // let constructorClass = new ConstructorClass('parth');
// // constructorClass.sayName();

// class InheritedConstructorClass extends ConstructorClass {
//     world = 'earth'
//     constructor(name, world) {
//         super(name);
//         this.world = world;
//     }
//     sayName() {
//         super.sayName();
//         console.log('world is:' + this.world);
//     }
// }
// const inheritedConstructorClass = new InheritedConstructorClass('savan', 'moon');
// inheritedConstructorClass.sayName();





// private 

class ClassWithPrivateField {
    #privateField;
  
    constructor() {
      this.#privateField = 42;
    }
    logPrivateField() {
        console.log(this.#privateField);
    }
  }
  
  class SubClass extends ClassWithPrivateField {
    #subPrivateField;
    field = 11
    constructor() {
      super();
      this.#subPrivateField = 23;
    //   console.log(this.#privateField);
    }
  }
  
const subClass = new SubClass();
// console.log(subClass.#subPrivateField);
console.log(subClass.field);
// console.log(subClass.#privateField);
subClass.logPrivateField();
  





class Protected1 {
    _protectedProp = 0
    set protectedProp(value) {
        if (value > 100) {
          value = 0;
        }
        this._protectedProp = value;
      }
    
      get protectedProp() {
        return this._protectedProp;
      }
      
}


let prop = new Protected1();
prop.protectedProp = 20;
console.log(prop._protectedProp);



class readOnly {
    _readOnlyProp = 10; 
    get readOnlyProp() {
        return this._readOnlyProp;
    }
}

let prop2 = new readOnly();
prop2.readOnlyProp = 20;
console.log(prop2.readOnlyProp);