function sum (a,b) {
    return a+b
}

let sum2 = function (a,b) {
    return a+b
}

let arrowSum = a => a*34 
let x = sum(1,2);


this.name = 'hello'
function thisExp () {
    console.log(this.name);
}

let arrowExp = () => console.log(this.name);
let obj1 = { 

    a: 1,
    name: 'patel',
}
let obj2 = { 
    a: 2,
    name: 'patel2',
}

obj1.thisExp = thisExp;
obj2.thisExp = thisExp;


obj1.arrowExp = arrowExp;
obj2.arrowExp = arrowExp;

obj1.thisExp();
obj2.thisExp();

obj1.arrowExp();
obj2.arrowExp();