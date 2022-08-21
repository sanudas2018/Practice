// .............. 
// Factorial number Plus
// 1 + 2 + 3 + 4 + 5
let sum = 0;
for (i = 1; i <= 5; i++) {
   sum += i;
   // console.log(sum)
}
// ... Function .apply.apply.apply. 
function sumNumber(number) {
   let sum = 0;
   for (i = 1; i <= number; i++) {
      sum += i;
      console.log(sum);

   }
   console.log('------------');
   return sum;

}
// let result = sumNumber(5);
// console.log(result);

// .............. 
// Factorial number Multiplication
// 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8
function multiplicationNumber(number) {
   let sum = 1;
   for (i = 1; i <= number; i++) {
      sum *= i;
      console.log(sum);

   }
   console.log('------------');
   return sum;

}
// let result = multiplicationNumber(3);
// console.log(result);

// .............. 
// Factorial number = 3! = 3 * 2 * 1
// n! = n * (n - 1)

function factorialNumber(number) {
   let fac = 1;
   // for (i = number; i >= 1; i--) 
   for (let i = 1; i <= number; i++) {
      fac *= i;
      console.log(i, fac);

   }
   console.log('------------');
   return fac;

}
let result = factorialNumber(12);
console.log(result);