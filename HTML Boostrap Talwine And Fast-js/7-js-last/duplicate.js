const allName = ['sanu', 'sobus', 'joy', 'sanu', 'piya', 'joy', 'piya'];

function dublicateCack(allName) {

   let uniqueName = [];
   for (i = 0; i < allName.length; i++) {
      let element = allName[i];
      if (uniqueName.includes(element) === false) {
         uniqueName.push(element);
      }
   }
   return uniqueName;
}
console.log(dublicateCack(allName));