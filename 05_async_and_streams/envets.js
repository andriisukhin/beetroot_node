// setImmediate( () =>  console.log('setImmediate'));
// setTimeout( () =>  console.log('setTimeout'), 0);
// process.nextTick( () => console.log('Next tick') );

// (new Promise(resolve => {
//     console.log('promise');
//     resolve('resolve');
// })).then((res) => console.log(res));


// const start = process.hrtime();

// setTimeout(() => {
//     const end = process.hrtime(start);
//     console.log(`timeout callback executed after ${end[0]}s and ${end[1]/Math.pow(10,9)}ms`);
// }, 1000);

// setTimeout(function() {
//     console.log('setTimeout')
// }, 0);
// setImmediate(function() {
//     console.log('setImmediate')
// });


///


// const fs = require('fs');

// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log('timeout')
//     }, 0);
//     setImmediate(() => {
//         console.log('immediate')
//     })
// });

// setImmediate(() => console.log('this is set immediate 1'));
// setImmediate(() => console.log('this is set immediate 2'));
// setImmediate(() => console.log('this is set immediate 3'));

// setTimeout(() => console.log('this is set timeout 1'), 0);
// setTimeout(() => {
//     console.log('this is set timeout 2');
//     process.nextTick(() => console.log('this is process.nextTick added inside setTimeout'));
// }, 0);
// setTimeout(() => console.log('this is set timeout 3'), 0);
// setTimeout(() => console.log('this is set timeout 4'), 0);
// setTimeout(() => console.log('this is set timeout 5'), 0);

// process.nextTick(() => console.log('this is process.nextTick 1'));
// process.nextTick(() => {
//     process.nextTick(console.log.bind(console, 'this is the inner next tick inside next tick'));
// });
// process.nextTick(() => console.log('this is process.nextTick 2'));
// process.nextTick(() => console.log('this is process.nextTick 3'));
// process.nextTick(() => console.log('this is process.nextTick 4'));