const max = Math.max(10, 22, 9, 14, 199, 2, 1, 4)
// console.log(max); 
const number = [12, 85, 99, 11];
const lagest = Math.max(...number); //split Operator (number kore dibe)
// console.log(lagest);

const number2 = [...number];
const number3 = [22, 33, ...number, 100, 200];
number.push(77);
number2.push(77777); // (new array kore tar vitore push korbe)
console.log(number);
console.log(number2);
console.log(number3);