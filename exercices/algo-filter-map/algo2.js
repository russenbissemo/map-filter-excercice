/* MAP & FILTER - Exercice 2

Il s'agit d'écrire une fonction getCampusesTeachingReact, qui reçoit en argument un tableau
d'objets décrivant des campus de la Wild Code School. Chaque campus a ces propriétés:
- city: ville où se trouve le campus
- curriculums: les cursus proposés dans ce campus (PHP/Symfony, JS/React, JS/Angular, etc.)
En utilisant filter puis map, la fonction doit renvoyer les villes des campus qui proposent
un cursus JS/React.

Entrée:
[
  { city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'La Loupe', curriculums: ['JS/Angular'] },
  { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'Marseille', curriculums: ['JS/React'] },
  { city: 'Orléans', curriculums: ['PHP/Symfony'] },
  { city: 'Reims', curriculums: ['JS/React'] },
  { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
]

Sortie attendue:
  ['Bordeaux', 'Lille', 'Marseille', 'Reims', 'Toulouse']
*/

//WRITE YOUR FUNCTION HERE
const array1= [
  { city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'La Loupe', curriculums: ['JS/Angular'] },
  { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'Marseille', curriculums: ['JS/React'] },
  { city: 'Orléans', curriculums: ['PHP/Symfony'] },
  { city: 'Reims', curriculums: ['JS/React'] },
  { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
]

const getCampusesTeachingReact = array1 => array1.filter (element=> element.curriculums.includes('JS/React')).map(element =>element.city)

//DO NOT TOUCH THIS CODE
console.log(getCampusesTeachingReact([{ city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },{ city: 'La Loupe', curriculums: ['JS/Angular'] },{ city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },{ city: 'Marseille', curriculums: ['JS/React'] },{ city: 'Orléans', curriculums: ['PHP/Symfony'] },{ city: 'Reims', curriculums: ['JS/React'] },{ city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }]))