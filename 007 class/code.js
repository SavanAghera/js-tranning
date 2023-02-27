// let a = 'outer a'
class BasicClass {
  a = 'hello';

  saySomething() {
    console.log(this.a);
  }
}

let classObj = new BasicClass();

classObj.saySomething()

