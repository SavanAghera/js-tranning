let obj = {
    message: "Hello, world!",
    sayHello: function() {
      console.log(this.message);
    }
  };
  
  obj.sayHello();
  
  let sayHello = obj.sayHello;
  sayHello(); 