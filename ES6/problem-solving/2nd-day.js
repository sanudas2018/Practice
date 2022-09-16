/*
1) You have an odd array (array with odd numbers) [1,3,5,7,9]. Now convert this array into an even array (array with even numbers) [2,4,6,8,10].
*/
const numbers = [1, 3, 5, 7, 9];
const evenNumber = numbers.map(number => number + 1);
// console.log(evenNumber);



/*
2) You are given an array say: [33,50,79,78,90,101,30]. Now return/get all the elements which are divisible by 10 using array.filter() method.
*/
const nums = [33, 50, 79, 78, 90, 101, 30];
const dividsibleFilter = nums.filter(num => num % 10 === 0);
// console.log(dividsibleFilter);
/*
3) Now do the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & question 3.
*/
const nums2 = [33, 50, 79, 78, 90, 101, 30];
const dividsibleFind = nums2.find(num => num % 10 === 0);
// console.log(dividsibleFind);
/*
4) You have an array [1,9,17,22]. Add the all elements of this array and give output. Do this using for loop & array.reduce() method.
*/
const sumArray = [1, 9, 17, 22, 1];
const useReduce = sumArray.reduce((pre, curr) => {
   return pre + curr;
}, 0);
// console.log(useReduce);
/*
5) object access (city)
let data= {
   location: [{
      latitude: '34.5 , 37.8',
      city: 'Dhaka',
      country:'Bangladesh'
   }]
}
*/
let data = {
   location: [{
      latitude: '34.5 , 37.8',
      city: 'Dhaka',
      country: 'Bangladesh'
   }, {
      latitude: '34.5 , 37.8',
      city: 'Bagerhat',
      country: 'Bangladesh'
   }]
};

const {
   location
} = data;
for (const loca of location) {
   // console.log(loca);
   let {
      city,
      country
   } = loca;
   console.log(city, country);
}
console.log(location[0].city);

// .............. 
// How do you empty an array?
var array1 = [1, 2, 3, 4, 5, 6, 7]; // Created array
var anotherArray = array1; // Referenced array1 by another variable
array1.length = 0; // Empty the array by setting length to 0
// console.log(anotherArray); // Output []
//................