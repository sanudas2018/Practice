const persons = [{
      id: 'ID01',
      name: 'sanu'
   },
   {
      id: 'ID02',
      name: 'piya'
   },
   {
      id: 'ID03',
      name: 'joy'
   },
   {
      id: 'ID04',
      name: 'sobus'
   },
];
// output hobe
// { ID01: 'sanu', ID02: 'piya', ID03: 'joy', ID04: 'sobus' }
const info = {}
// obj.name = 'sanu'
// obj['name'] = 'sanu'
// persons = persons['subject']['english']
persons.map(person => {

   info[person.id] = person.name;
});
console.log(info);
console.log(info.ID02);