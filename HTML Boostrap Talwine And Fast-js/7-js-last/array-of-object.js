const phone = [{
      name: 'iphone',
      price: 100000
   },
   {
      name: 'nokia',
      price: 20000
   },
   {
      name: 'oppo',
      price: 50000
   },
   {
      name: 'hp',
      price: 22560
   },
   {
      name: 'motorola',
      price: 34000
   },
];

function maxPhone(phone) {
   let lowestPhoneDetails = phone[0];
   for (let i = 0; i < phone.length; i++) {
      const element = phone[i];
      if (element.price < lowestPhoneDetails.price) {
         lowestPhoneDetails = element;
      }

   }
   return lowestPhoneDetails;


}
// let result = maxPhone(phone);
// console.log(result);
// ................... 
const shoppingCart = [{
      name: 'Alu',
      price: 10,
      quantity: 2
   },
   {
      name: 'Potol',
      price: 20,
      quantity: 1
   },
   {
      name: 'Kola',
      price: 5,
      quantity: 4
   },
   {
      name: 'tel',
      price: 2,
      quantity: 3
   },
   {
      name: 'dal',
      price: 3,
      quantity: 5
   }
];

function totalCost(product) {
   let sum = 0;
   for (i = 0; i < product.length; i++) {
      let singleProduct = product[i];
      let singleQuantity = singleProduct.quantity;
      sum = sum + singleProduct.price * singleQuantity;

   }
   return sum
}
let total = totalCost(shoppingCart);
console.log(total);