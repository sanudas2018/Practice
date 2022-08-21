for (i = 0; i <= 50; i++) {
   // console.log(i);
   if (i % 3 === 0 && i % 5 === 0) {
      console.log('All Divide by 3 and 5 ' + i);
   } else if (i % 5 === 0) {
      console.log('Bar ' + i);
   } else if (i % 3 === 0) {
      console.log('Foo ' + i);
   } else {
      console.log(i);
   }
}