// find even friend name
const friendsAll = ['Amit', 'Patho', 'Alip', 'Ashraful', 'chondon', 'nayan', 'ABC', 'ABCD'];

const evenFriend = (friends) => {

   let newEvenFriend = [];
   for (const friend of friends) {
      const evenNumber = friend.length;

      if (evenNumber % 2 == 0) {
         newEvenFriend.push(friend);
      }
   }
   return newEvenFriend;
};

const friendOutPut = evenFriend(friendsAll);
// console.log(friendOutPut);

// .................... 
const numbers = [1, 2, 3, 4, 5];
const average = (numbers) => {
   // Square each array element
   const newArray = [];
   for (const number of numbers) {
      let sqrt = Math.pow(number, 2);
      newArray.push(sqrt);

   }
   // Calculate the sum of the squared elements
   // let sum = 0;
   // for (i = 0; i < newArray.length; i++) {
   //    let element = newArray[i];
   //    sum += element;

   // };

   const sum = newArray.reduce((partialSum, a) => partialSum + a, 0);
   // Return the average of the sum of the squared elements
   let averageValue = sum / newArray.length;
   let averageValueSquared = Math.pow(averageValue, 2);
   return averageValueSquared;



};
let averageNumber = average(numbers);
// console.log(averageNumber);

// ............. 
/* Write an arrow function where it will do the following:
   a) It will take two array inputs
   b) Combine the two arrays and assign them in a new array
   c) Find the maximum number from the new array and return the result

*/
const number = [99, 1000, 12, 222222, 40, 66];
const number2 = [100, 2, 12000, 21, 340000];


const maximumNumber = (num1, num2) => {
   let arrayFirst = [...num1, ...num2];
   // let maxValue = Math.max.apply(null, arrayFirst);
   let maxValue = Math.max(...arrayFirst);
   return maxValue;
};
let result = maximumNumber(number, number2);
console.log(result);

// ............. 
// const [a, b] = [1,2,3,4,45,5]; 
// console.log(a+b);