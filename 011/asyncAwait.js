function delayedHello() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Hello!");
            // reject('error')
        }, 2000);
    });
}
function delayedError() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject('error')
        }, 2000);
    });
}
// delayedHello()
//     .then(response => {
//         console.log(response);
//     })
//     .catch(error => {
//         console.log(error);
//     });


























async function callHello() {
    try {
        let response = await delayedHello();
        console.log(response);
        await delayedError();
        let response2 = await delayedHello();
        console.log(response2);
    } catch (error) {
        console.log(error);
    }
 


}

// callHello();
// console.log('1');





async function handleAsync() {
    await callHello();
    console.log('inside function');
}
handleAsync();
console.log('outside function');
















    // try {
    //     let response = await delayedHello();
    //     console.log(response);
    // } catch (error) {
    //     console.log(error);
    // }