const date = new Date()
console.log(
    date,
    date.getTime(),
    date.toDateString(),
    date.toTimeString()
    );

const date2 = new Date('2022/06/12')
console.log(date2);

const d = new Date(2021, 11, 24, 10, 33, 30);
console.log(d);



// January 01 1970

const d2 = new Date(24 * 60 * 60 * 1000);
console.log(d2);


let date3 = new Date("January 16, 2022 12:00:00");
let est = date3.toLocaleString('en-US', {timeZone: 'America/New_York'});
console.log(est);