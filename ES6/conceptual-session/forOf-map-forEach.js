const nums = [1, 2, 3, 4, 5, 6, 7];
// ....1st...... 
for (let num of nums) {
   // console.log(num);
}
// ....2nd.....
// nums.map(item => console.log(item)) //access korea jai and return kore
const value = nums.map(item => item * 2);
// console.log(value)
// ....3nd.....
// nums.forEach(item => console.log(item)) // access korea jai but return kore na
const value2 = nums.forEach(item => item * 2);
// console.log(value2)

// ............. filter .........
const marks = [2, 10, 20, 3, 1, 50, 6, 77];
const allBigNumber = marks.filter(item => item > 5 && item % 2 === 0);
console.log(allBigNumber);
// ............. filter .........

const firstBigNumber = marks.find(item => item > 5);
console.log(firstBigNumber);