let num = 12;
let str = "Ami vat khi na";
let boo = true;
let ob = {
   name: 'sanu',
   age: 32,
   edu: 'Bsc'
};
let arr = [10, 20, 30];

function add(nam1, nam2) {
   return nam1 + nam2;
}

console.log(typeof (num));
console.log(typeof str);
console.log(typeof boo);
// object 
console.log(typeof ob);
// array 
console.log(Array.isArray(arr));
// function 
console.log(typeof add);
// .......... 
// array check 
console.log(arr.includes(10));
if (arr.indexOf(10) !== -1) {
   console.log('Is on the way')
}
// .......... 
// concat
let friend = ['sanu', 'piya', 'sobus'];
let allFriend = friend.concat(arr);
console.log(allFriend)