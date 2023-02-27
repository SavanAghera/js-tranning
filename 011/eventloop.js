//call stack



function tenth() { }

function ninth() { tenth() }

function eigth() { ninth() }

function seventh() { eigth() }

function sixth() { seventh() }

function fifth() { sixth() }

function fourth() { fifth() }

function third() { fourth() }

function second() { third() }

function first() { second() }

first();



//task queue


// setTimeout(function a() {}, 1000);
// setTimeout(function b() {}, 500);
// setTimeout(function c() {}, 0);
// function d() {}
// d();












// function logA() { console.log('A') }
// function logB() { console.log('B') }
// function logC() { console.log('C') }
// function logD() { console.log('D') }


// logA();
// setTimeout(logB, 0);
// Promise.resolve().then(logC);
// logD();











// setTimeout(function a() {console.log('a');}, 1000);

// setTimeout(function b() {console.log('b');}, 500);

// setTimeout(function c() {console.log('c');}, 0);

// function d() {}

// d();


// let ab =10
// while(ab<15) {
//   console.log('a')
//   ab++
// }




function delayedHello() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Hello!");
            // reject('error')
        }, 2000);
    });
}

delayedHello().then(function ab()  {

});
setTimeout(function a(){},0)