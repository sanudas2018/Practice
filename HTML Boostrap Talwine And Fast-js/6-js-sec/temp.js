let first = 5;
let second = 7;
console.log(first, second);
// let third = first;
// first = second;
// second = third;
// console.log(first, second);
[first, second] = [second, first];
console.log(first, second);