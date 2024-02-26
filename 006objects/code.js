let obj = {
    message: "Hello, world!",
    a: [],
    b: {
      c:10
    },
    sayHello: function() {
      console.log(this.message);
    }
  };
  
  obj.sayHello();
  
  let sayHello = obj.sayHello;
  sayHello(); 