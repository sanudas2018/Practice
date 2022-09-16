const nums = [12, 5, 33, 22, 88, 99, 11, 46];
const bigNumbers = nums.filter(num => num > 33);
// console.log(bigNumbers);

const products = [{
      id: 1,
      name: 'laptop',
      price: 4500
   },
   {
      id: 2,
      name: 'mobile',
      price: 1500
   },
   {
      id: 3,
      name: 'watch',
      price: 450000
   },
   {
      id: 1,
      name: 'tablet',
      price: 55500
   },
];
const expensive = products.filter(product => product.price < 10000)
console.log(expensive)



// ............. 
const friends = ["Moushumi", "abcde", "Misha", "Manna", "mimi", "mahiya"];
let nameFriend = friends.find(friend => friend.length == 5);
// console.log(nameFriend);
// ....................... 
// How will you get the price from the product object? 

const product = {
   name: 'Laptop',
   model: 'Yoga 3',
   price: 49000,
   dusk: '512SSD'
}
const {
   price
} = product.price;
console.log(price);
// console.log(name);