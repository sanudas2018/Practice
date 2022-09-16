const nums = [1, 2, 3, 4, 5, 6];
// const sum = [];
// for (const num of nums) {
//    const doubled = num * 2;
//    sum.push(doubled);
// }
// console.log(sum)
// .................... 
function getDoubles(nums) {
   const sum = [];
   for (const num of nums) {
      const doubled = num * 2;
      sum.push(doubled);
   };
   return sum;
}
let result = getDoubles(nums);
// console.log(result);
// ............. 
const mapResult = nums.map(num => num * 2);
console.log(mapResult);