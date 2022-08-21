var allFriendName = ['Manabendradas', 'Sanu', 'Sobus', 'Piya', 'Sarothi', 'Swapan', '123', '12'];

function oddFriend(allFriendName) {
   if (allFriendName.length == 0) {
      // Array can never be left blank.not allow:[], allow:EX:['programming-hero']
      return "Not allow empty array. please input the string value your friends name";
   } else {
      var allOddfriendsName = [];
      for (var i = 0; i < allFriendName.length; i++) {
         var singleFriendName = allFriendName[i];
         // The length of the name of 1 friend has been found out.
         var singleFriendNameLength = singleFriendName.length;
         if (typeof (singleFriendName) != 'string') {
            //number not allow, only for srting value.not allow:[123], EX:['programming-hero']
            return "Only input string value";
         } else if (singleFriendNameLength % 2 != 0) {
            allOddfriendsName.push(singleFriendName);
         }
      }
      return allOddfriendsName;
   }
}
// const oddFriendOutput = oddFriend(allFriendName);
// console.log(oddFriendOutput);
// ...................... 
let friends = ['sanu ', 'sobus das', 'piya', 'manabendra das'];

function bestFried(friends) {
   let largeNumber = friends[0];
   for (i = 0; i < friends.length; i++) {
      let singleFriend = friends[i];
      if (singleFriend.length > largeNumber.length) {
         largeNumber = singleFriend;
      }
   }
   return largeNumber;

}
// let result = bestFried(friends);
// console.log(result);

// ................. 
let allNumber = [10, 20, 30, 40, 50, 60, -61, 70];

function onlyPositive(allNumber) {
   let newArray = [];
   for (i = 0; i < allNumber.length; i++) {
      let singleNumber = allNumber[i];
      if (singleNumber >= 0) {
         newArray.push(singleNumber);
      } else {
         break;
      }
   }
   return newArray;
};
let result = onlyPositive(allNumber);
console.log(result);