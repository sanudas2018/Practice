const person = {
   name: 'sanu',
   age: 33
};
const user = {
   name: 'abcdef',
   age: 100
};

// const {
//    name,
//    age
// } = person;
const {
   name: StudentName,
   age
} = person;


console.log('Name:', StudentName, ' Age:', age)