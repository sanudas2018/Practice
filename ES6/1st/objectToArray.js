// Object and Array Destructuring
const fish = {
   name: "Hilish",
   address: "Podma",
   color: "white Golden",
   price: 1000
};
const {
   name,
   address,
   color,
   price
} = fish; // right side object name and // left side property name
console.log(name);
console.log(address);
console.log(price);
// ............ 
const [first, another] = [44, 22, 99];
console.log(first);
console.log(another);
const newArray = ['sanu', 'piya', 'sobus'];
const [my, love, vi] = newArray;
console.log(love) // order anu jai kag korbe
// .............  
function love2() {
   return ['tuli', 'piya', 'mita'];
}
const [past, present, past2] = love2();
console.log(present, past, past2)