let obj = {
    x: 5,
    y: 10,
    showContext: ()=> {
        console.log(this, this.x, this.y);
    }
};


obj.showContext() 


// const newFunction = obj.showContext;

// newFunction();





// let obj = {
//     x: 5,
//     y: 10,
//     showContext: function() {
//         console.log(this, this.x, this.y);
//     }
// };


// obj.showContext() 


// const newFunction = obj.showContext;

// newFunction();

// newFunction.bind(obj)()
// newFunction.call(obj)
// newFunction.apply(obj)





