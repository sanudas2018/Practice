function sum(n1, n2) {
   const plus = n1 + n2;
   return plus;
}
// console.log(sum(1, 2));
// ,,,,,,,,,,,,,,, 
const plus = function sum(n1, n2) {
   const plus = n1 + n2;
   return plus;
}
// console.log(sum(1, 2));
// console.log(plus(1, 2));
const plus2 = (n1, n2) => n1 + n2;
// console.log(plus2(2, 2));
const plus3 = (n1, n2) => {
   return n1 + n2;
}
console.log(plus2(2, 2));