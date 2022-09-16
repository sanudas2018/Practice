const num = [2, 22, 1, 11, 333, 5, 33];
const num2 = [100, 500, 300, 200];

let max = Math.max(...num);
let min = Math.min(...num2);
let mixedArray = Math.max(...num, ...num2);

// console.log(max);
// console.log(min);
// console.log(mixedArray);
// ............. array destaring ........
const [a, b, ...rest] = num;
// console.log(a, b, rest) // 2 22 [ 1, 11, 333, 5, 33 ]

// .................Same Array but Push different way ..... 
// const a1 = [1, 2, 3];
// const b1 = a1;
// // a1.push(4); // OR
// // b1.push(5); // একটিতে পুশ করলে অটোমেটিক অন্যটিতে পুশ হয় যাই
// console.log('a1:', a1);
// console.log('b1:', b1);
// ....problem solving ......
const a1 = [1, 2, 3];
// const b1 = [];
// for (let item of a1) {
//    b1.push(item);
// }
const b1 = [...a1] // sort system

a1.push(88, 99);
b1.push(77)
console.log('a1:', a1);
console.log('b1:', b1);