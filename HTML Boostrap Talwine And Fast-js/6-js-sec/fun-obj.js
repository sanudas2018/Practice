// let totalMony = 100;

// function calculator(myMony) {
//    let dim = 20;
//    let alu = 50;
//    let cost = dim + alu;
//    let total = myMony - cost;
//    return total;
// }
// let result = calculator(totalMony);
// console.log(result);
// let book = calculator(200);
// console.log(book);

// .......... 

// var myComputer = {
//    name: 'HP',
//    price: 50000,
//    color: 'silver',
//    processor: 'core i 5'
// }

// console.log(myComputer);
// console.log(myComputer.name);
// // ..... 
// console.log(myComputer['color']);
// var propertyName = 'processor';
// var propertyValue = myComputer[propertyName];
// console.log(propertyName, ':', propertyValue);
// // ..... 
// myComputer.name = 'HP-2';
// console.log(myComputer);
// var allKey = Object.keys(myComputer);
// var allKey2 = Object.values(myComputer);
// console.log(allKey);
// console.log(allKey2);

// ......... 
var myComputer = {
   name: 'HP',
   price: 50000,
   color: 'silver',
   processor: 'core i 5'
}
// console.log(myComputer);
var propertyName = Object.keys(myComputer);
var propertyValue = Object.values(myComputer);
// console.log(propertyName, propertyValue);
// for (i = 0; i < propertyName.length; i++) {
//    var keys = propertyName[i];
//    var values = myComputer[keys];
//    console.log(keys, values);
// }
// ............. 
for (let propertyName in myComputer) {
   // console.log(propertyName);
   let value = myComputer[propertyName];
   // console.log(propertyName, ':', value);
}

// ..................... 

color = 'yellow';
// if (color == 'red') {
//    console.log('Ami Lal hoye jabo');
// } else if (color == 'yellow') {
//    console.log('Ami Holod hoye jabo')
// } else {
//    console.log('Ami Kalo hoye jabo')
// }

// .............. 
// switch (color) {
//    case 'red':
//       console.log('Ami Lal hoye jabo');
//       break;
//    case 'yellow':
//       console.log('Ami Holod hoye jabo');
//       break;
//    default:
//       console.log('Ami Kalo hoye jabo');

// }
let array = [10, 20, 30, 40];
let sum = 0;
for (let totalValue of array) {
   sum = sum + totalValue;

}
let totalValue = sum / array.length;
console.log(totalValue);