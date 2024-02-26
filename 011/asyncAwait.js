
// function delayedHello1() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             // resolve("Hello! 1");
//             reject('error')
//         }, 2000);
//     });
// }
// function delayedHello2() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             resolve("Hello! 2");
//             // reject('error')
//         }, 2000);
//     });
// }
// function delayedError() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             reject('error')
//         }, 2000);
//     });
// }


// let pro = new Promise((res, rej) => {res('resolve')});


// pro.then((value) => console.log(value)).catch(e => console.log(e));

// delayedHello().then( (abc) =>  console.log('sucess', abc))
//   .catch( (e) =>  console.log('error', e))



// delayedHello()
//     .then(response => {
//         delayedHello1().then(v => {
//             console.log(v);
//         }).catch(e => console.log(e))
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });




// delayedHello().then((value) => {
//     console.log(value);
//     delayedHello1().then(value1 => {
//         console.log(value1);
//         delayedHello2().then(value2 => {
//             console.log(value2);
//         })
//     })
// })


// return promise
// async function  test() {
//     try{
//     let a = await delayedHello();
//     console.log(a);
//     let b = await delayedHello1();
//     console.log(b);
//     let c = await delayedHello2();
//     console.log(c);
//     }catch (e) {
//         console.log(e);
//     }
//     console.log('finished');
// }


// test();




// delayedHello().then((value) => {
//     console.log(value);
//     return delayedHello1()
// }).then((value) => {
//     console.log(value);
//     return delayedHello2()
// }).then((value) => {
//     console.log(value);
//     return 4
// }).then(v => console.log(v)).catch(e => console.log(e));


// delayedHello().then(console.log('hello'))
///////////////////////////////////////////

// let promise = createOrder();
// promise.then(function (result) {
//         console.log(result);
//         return proceedToPayment();
//     }).catch(function (error) {
//         console.log('Show Error', error);
//     })
//     .then(function (result) {
//         console.log(result);
//         return updateWallet();
//     })
//     .then(function (result) {
//         console.log(result);
//         return showOrderSummary();
//     })
//     .then(function(r) {
//         console.log(r);
//     })
//     .finally(() => console.log('always run'))


// function createOrder() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('Order Created');
//         }, 2000)
//     });
//     return promise;
// }
// function proceedToPayment() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             reject('Payment success');
//         }, 2000)
//     });
// }
// function updateWallet() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('Wallet Updated');
//         }, 2000)
//     });
//     return promise;
// }
// function showOrderSummary() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('Order Summary');
//         }, 2000)
//     });
//     return promise;
// }
// function handleAsynOperation(result) {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(result);
//         }, 2000)
//     });
//     return promise;
// }



//////////////////////////////////////////


// getUserList()
//     .then(function (users) {
//         getProfileList().then(function(profiles) {
//             console.log('--------------------------');
//             console.log(users);
//             console.log(profiles);
//         });
//     })
//     .catch(function (error) {
//         console.log('Show Error', error);
//     })
// function getUserList() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve([
//                 {id:1, name: 'Vimal'},
//                 {id:2, name: 'Savan'}
//             ]);
//             // reject('Failed');        
//         }, 3000)
//     });
//     return promise;
// }
// function getProfileList() {
//     let promise = new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve([
//                 {id:1, name: 'Admin'},
//                 {id:2, name: 'Standard'}
//             ]);
//         }, 0)
//     });
//     return promise;
// }
// Promise.all([
//         getProfileList(),
//         getUserList()
//     ]).then(function(response) {
//             console.log('response:', response);
//     }).catch(function(err){
//             console.log('Catch Error:', err);
//     });



// async function callHello() {
//     try {
//         let response = await delayedError();
//         console.log(response);
//         let response2 = await delayedHello();
//         console.log(response2);
//     } catch (error) {
//         console.log(error);
//     }
 


// }

// callHello();
// console.log('1');





//  async function handleAsync() {
//      await callHello();
//     console.log('inside function');
// }
// handleAsync();
// console.log('outside function');
















    // try {
    //     let response = await delayedHello();
    //     console.log(response);
    // } catch (error) {
    //     console.log(error);
    // }




//     let promise5 =  () =>  new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('Promise 5');
//         }, 5000)
//     });

//     let promise10 =  () =>  new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve('Promise 10');
//         }, 10000)
//     });


//     async function handleAsyncProcess() {
//         try {
//             console.log('hello') 
//             let response = await promise5();
//             console.log(response);
            
//             let response2 = await promise10();
//             console.log(response2);
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     handleAsyncProcess();
// console.log('hi');


    // async function handleAsyncProcess() {
    //     return 2 
    // }
    // console.log(handleAsyncProcess());