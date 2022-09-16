const person = {
   name: 'abul',
   age: 23,
   contact: {
      phone: '0172323232',
      email: 'sanu.das08103@gmail.com'
   },
   education: {
      schoolName: "Bagerhat Boys School",
      subjects: [{
            name: 'bangla',
            mark: 88
         },
         {
            name: 'english',
            mark: 99
         },
      ]
   }
}
const {
   name,
   age
} = person;
console.log(name)
console.log(person.contact.email);
console.log(person.education.subjects[0].name);