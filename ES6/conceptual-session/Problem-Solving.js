// // ........ Problem-Solving .....
// 1. find SCIC student using Filter 
// 2. find stable jamal using Filter method

const students = [{
      name: 'sanu',
      email: 'sanu@gmail.com',
      avg: 56,
      fiftyPercent: true
   },
   {
      name: 'piys',
      email: 'piys@gmail.com',
      avg: 57,
      fiftyPercent: false
   },
   {
      name: 'joy',
      email: 'joy@gmail.com',
      avg: 42,
      fiftyPercent: false
   },
   {
      name: 'amit',
      email: 'amit@gmail.com',
      avg: 52,
      fiftyPercent: true
   },
   {
      name: 'patho',
      email: 'patho@gmail.com',
      avg: 32,
      fiftyPercent: false
   },
   {
      name: 'anondo',
      email: 'anondo@gmail.com',
      avg: 37,
      fiftyPercent: true
   },
   {
      name: 'kanji',
      email: 'kanji@gmail.com',
      avg: 57,
      fiftyPercent: true
   }
];
const {
   name,
   email,
   avg,
   fiftyPercent
} = students;
const averageStudent = students.filter(student => student.avg >= 50 && student.fiftyPercent === true);
// console.log(averageStudent)
const sciResult = averageStudent.map(scicStudent => {
   // let stuName = scicStudent.name;
   // let stuEmail = scicStudent.email;
   // let stuAvg = scicStudent.avg;
   const {
      name,
      email,
      avg
   } = scicStudent;
   let data = `
      Name : ${name}, Email : ${email}, Avg : ${avg},
   `;
   return data;
});
console.log(sciResult);