const numbers = [10, 20, 30, 40, 50, 60];
// for (let i = 0; i < numbers.length; i++) {
//    // console.log(i);
//    let element = numbers[i];
//    console.log(i, '= ', element);
// }
// for (let number of numbers) {
//    console.log(number);
// }
const products = [{
   id: 1,
   name: 'Nokia phone',
   price: 1000
}, {
   id: 2,
   name: 'leptop hp',
   price: 2000
}, {
   id: 3,
   name: 'Dell',
   price: 3000
}, {
   id: 4,
   name: 'iPhone phone',
   price: 4000
}];

function matchPhone(products, match) {
   let search = [];
   for (let product of products) {
      if (product.name.includes(match)) {
         search.push(product);
      }

   }
   return search;
}
let result = matchPhone(products, 'Dell');
console.log(result);