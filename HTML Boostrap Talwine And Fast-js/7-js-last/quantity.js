function woodCalculator(chair, table, bed) {
   let perChair = 3;
   let perTable = 10;
   let perbed = 50;
   total = (perChair * chair) + (perTable * table) + (perbed * bed);
   return total;
}
let chair = 0;
let table = 0;
let bed = 0;
let result = woodCalculator(chair, table, bed);
console.log(result);
// ................ 