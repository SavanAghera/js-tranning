function getData(callBack) {
    setTimeout(function () {
        console.log('data fatched');
        callBack();
    }, 2000);
}




getData(function () { console.log('callback called');})

console.log('hello')