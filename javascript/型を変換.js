let val1 = '888.88abc';
console.log(val1);
// 888.88abc
console.log(Number.parseInt(val1));
// 888
console.log(Number.parseFloat(val1));
// 888.99
console.log(Number(val1));
NaN

let val2 = 'abc888.88';
console.log(val2);
// abc888.88
console.log(Number.parseInt(val2));
// NaN
console.log(Number.parseFloat(val2));
// NaN
console.log(Number(val2));
// NaN

let val3 = 'a8b8c88.8d8';
console.log(val3);
// a8b8c88.8d8
console.log(Number.parseInt(val3));
// NaN
console.log(Number.parseFloat(val3));
// NaN
console.log(Number(val3));
// NaN