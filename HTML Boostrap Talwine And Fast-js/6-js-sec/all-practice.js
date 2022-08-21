// inch to Feet 
function inToFeet(inch) {
   let feet = inch / 12;
   return feet;
}
// let result = inToFeet(24);
// console.log(result);

// ......... 
// Miles to Kilometer 
function milesToKilometer(miles) {
   let kilometer = miles * 1.609;
   let fixed = kilometer.toFixed(2);
   return fixed;
}
// let result = milesToKilometer(2);
// console.log(result);

// .......... 
// Even and Odd
function evenAndOdd(number) {
   let value = number % 2;
   if (value == 0) {
      return 'This number is Even = ' + number;
   } else {
      return 'This number is Odd = ' + number;
   }
}
// let result = evenAndOdd(210);
// console.log(result);

// ............ 
// Leap Year
function leapYear(year) {
   if ((year % 4 == 0) && (year % 400 == 0 || year % 100 != 0)) {
      return (year + ' is a leap year ');
   } else {
      return (year + ' is not a leap year ');
   }
}
// let result = leapYear(2021);
// console.log(result);

// .......... 
// sum of all numbers of an array 

function getSumOfArray(myNumber) {
   let sum = 0;
   for (i = 0; i < myNumber.length; i++) {
      let singleValue = myNumber[i];
      sum += singleValue;
   }
   return sum;
}
// let value = [1, 2, 3];
// let result = getSumOfArray(value);
// console.log(result);

// ........... 
// Array to Odd Number Find 
const myNumber = [10, 2, 5, 61];

function arrayToOdd(myNumber) {
   // for (let arryNumber of myNumber) {
   //    let oddNumber = arryNumber % 2;
   //    if (oddNumber == 0) {
   //       // return "This is a Even Number";
   //       console.log('this is even')
   //    } else {
   //       // return "This is a Odd Number";
   //       console.log('this is odd')
   //    }
   // }
   let evenNum = [];
   let oddNum = [];
   for (i = 0; i < myNumber.length; i++) {
      let singleValue = myNumber[i];
      let modules = singleValue % 2;
      // let oddValue = 0;

      if (modules == 0) {
         // return oddValue++;
         console.log('Even Number = ' + singleValue);
         evenNum.push(singleValue);

      } else {
         // return
         console.log('Odd Number = ' + singleValue);
         oddNum.push(singleValue);

      }

   }
   // return {
   //    evenNum,
   //    oddNum
   // };
   return [evenNum, oddNum];

}

// let result = arrayToOdd(myNumber);
// console.log(result);