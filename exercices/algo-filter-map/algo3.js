/* MAP & FILTER - Exercice 3

Variation sur l'exercice précédent: la fonction getStudentsPerCurriculum reçoit cette fois deux arguments.
1. Encore un tableau d'objets, décrivant des campus de la Wild Code School.
Les noms des propriétés restent les mêmes, mais le contenu du tableau curriculums change.
- city: ville où se trouve le campus
- curriculums: tableau d'objets, ayant chacun une propriété name ('JS/Angular', etc.) et
une propriété numStudents indiquant le nombre d'élèves pour ce cursus
2. Le nom d'un cursus
En utilisant filter et map, la fonction doit d'abord éliminer les campus
qui ne proposent pas le cursus donné par le 2ème argument, puis renvoyer,
pour chaque campus gardé, un objet sous la forme : { VILLE: NB_ELEVES }.

Entrée:
1. Tableau des campus: */

const campuses = [
  {
    city: "Bordeaux",
    curriculums: [
      { name: "PHP/Symfony", numStudents: 12 },
      { name: "JS/React", numStudents: 29 },
    ],
  },
  {
    city: "La Loupe",
    curriculums: [{ name: "JS/Angular", numStudents: 32 }],
  },
  {
    city: "Lille",
    curriculums: [
      { name: "PHP/Symfony", numStudents: 12 },
      { name: "JS/React", numStudents: 10 },
    ],
  },
  {
    city: "Marseille",
    curriculums: [{ name: "JS/React", numStudents: 16 }],
  },
];
/*2. Nom du cursus: 'PHP/Symfony'

Sortie attendue:
  [{ Bordeaux: 12 }, { Lille: 12 }]*/

// WRITE YOUR FUNCTION HERE

let getStudentsPerCurriculum = (campuses, curriculums) => {
  return campuses.filter((campus) => {
    for (let i = 0; i < campus.curriculums.length; i++) {
      if (campus.curriculums[i].name === "PHP/Symfony") {
        return campus.curriculums[i].numStudents[i];
      }
    }
  });
};
console.log(
  getStudentsPerCurriculum(
    [
      {
        city: "Bordeaux",
        curriculums: [
          { name: "PHP/Symfony", numStudents: 12 },
          { name: "JS/React", numStudents: 29 },
        ],
      },
      {
        city: "La Loupe",
        curriculums: [{ name: "JS/Angular", numStudents: 32 }],
      },
      {
        city: "Lille",
        curriculums: [
          { name: "PHP/Symfony", numStudents: 12 },
          { name: "JS/React", numStudents: 10 },
        ],
      },
      {
        city: "Marseille",
        curriculums: [{ name: "JS/React", numStudents: 16 }],
      },
    ],
    "PHP/Symfony"
  )
);
