// const friend = ['sanu', 'piya', 'sobus', 'joy', 'amit', 'patho'];
// console.log(friend);
// const slic = friend.slice(2, 4);
// console.log(slic);
// console.log(friend);
// // ................ 
// let spli = friend.splice(2, 3, 'Sobus', 'Joy');
// console.log(spli);
// console.log(friend);
// ............ 
const friends = ['sanu', 'piya', 'piya', 'sobus', 'joy', 'amit', 'patho', 'sanu', 'joy'];

function removeDuplicateName() {
   let uniqueValue = [];
   for (i = 0; i < friends.length; i++) {
      let name = friends[i];
      if (uniqueValue.includes(name) === false) {
         uniqueValue.push(name);
      }
   }
   return uniqueValue;
}
let uniqueName = removeDuplicateName(friends);
console.log(uniqueName);