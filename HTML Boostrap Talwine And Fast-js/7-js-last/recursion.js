// let sum = 0;
// for (i = 0; i <= 5; i++) {
//    sum += i;
// }
// console.log(sum);

// let sum = 0;
// for (i = 5; i >= 1; i--) {
//    sum += i;
// }
// console.log(sum);
// function sum(i) {
//    if (i == 1) {
//       return 1;
//    }
//    return i + sum(i - 1);
// }
// console.log(sum(5));
// .............. 
// let factorial = 1;
// for (let i = 5; i >= 1; i--) {
//    factorial = factorial * i;
// }
// console.log(factorial);
function factorial(i) {
   if (i == 1) {
      return 1;
   }
   return i * factorial(i - 1);
}
console.log(factorial(5));