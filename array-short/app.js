const peopel = [{
      id: 1,
      view: 100,
      name: 'sanu'
   },
   {
      id: 2,
      view: 400,
      name: 'sanu'
   },
   {
      id: 3,
      view: 500,
      name: 'sanu'
   },
   {
      id: 4,
      view: 200,
      name: 'sanu'
   },
   {
      id: 5,
      view: 5000,
      name: 'sanu'
   },
];

console.log(peopel);
const peopel2 = [...peopel].sort((a, b) => b.view - a.view);
console.log(peopel2);