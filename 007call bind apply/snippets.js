function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}

function setBrand(brand) {
    Car.call(this, "convertible", "petrol");
    this.brand = brand;
    console.log(`Car details = `, this);
}

function definePrice(price) {
    Car.call(this, "convertible", "diesel");
    this.price = price;
    console.log(`Car details = `, this);
}

const newBrand = new setBrand("Brand1");
const newCarPrice = new definePrice(100000);

////////////////////////////////////////////////////////////////

const religion = {
    type: "humanity",
    property: "greatest",
};

function getDetails() {
    console.log(`${this.type} is the ${this.property} religion`);
}

getDetails.call(religion);

  ///////////////////////////////////////////////////////////////

  //   function Car(type, fuelType) {
  //     this.type = type;
  //     this.fuelType = fuelType;
  //   }

  //   function setBrand(brand) {
  //     Car.apply(this, ["convertible", "petrol"]); //Syntax with array literal
  //     this.brand = brand;
  //     console.log(`Car details = `, this);
  //   }

  //   function definePrice(price) {
  //     Car.apply(this, new Array("convertible", "diesel")); //Syntax with array object construction
  //     this.price = price;
  //     console.log(`Car details = `, this);
  //   }

  //   const newBrand = new setBrand("Brand1");
  //   const newCarPrice = new definePrice(100000);

  /////bind()
  //   // Define an object with a method
  //   var obj = {
  //     name: "John",
  //     greet: function () {
  //       console.log("Hello, my name is " + this.name);
  //     },
  //   };

  //   // Bind the greet method to the obj object
  //   var boundGreet = obj.greet.bind(obj);

  //   // Call the bound greet method
  //   boundGreet(); // Output: "Hello, my name is John"