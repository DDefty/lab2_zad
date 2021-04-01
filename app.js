const _ = require('lodash');

const user = {
    name: 'Imie',
    surname: 'Nazwisko',
    allGrades:[
       {
       subjectName: 'Name1',
       grades: [5, 4, 3, 5, 2],
       weight: 3
       },
       {
       subjectName: 'Name2',
       grades: [3, 3.5, 2],
       weight: 1
       },
       {
       subjectName: 'Name3',
       grades: [4, 3, 3.5],
       weight: 5
       }
    ]
}
function average(){
  const { allGrades } = user;

let sum = 0;
let average = 0;
let wage = 0;
for(let i = 0; i < allGrades.length; i++) {
  for(let j = 0; j < allGrades[i].grades.length; j++) {
    sum += allGrades[i].grades[j] * allGrades[i].weight;
  }
  wage += allGrades[i].grades.length * allGrades[i].weight;
}
average = sum / wage;
console.log(average.toFixed(2));
}
const { allGrades } = user;
console.log(_.find(allGrades, ['weight', 1] ));