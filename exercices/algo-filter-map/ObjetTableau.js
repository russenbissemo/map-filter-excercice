// un de mes clients a besoin d'avoir la liste des options d'un véhicule sous forme d'un tableau à une dimension.
const options = {
  color: "rouge", // chaine de caractères
  light: ["led", "blanc"], // tableau de chaines de caractères
  rims: ["16pouces", "alu"],
};
// nous permet d'avoir la liste de toutes les valeurs de l'objet
console.log(Object.values(options).flat());

//parcourir un objet propriétés par propriétés
const moyennes = {
  rosbain: 33,
  theo: 3,
  patience: 31,
  Tehila: 1,
};
//console.log(moyennes["rosbain"]);
//console.log(moyennes["theo"]);

//for in , une variable et une constante avec l'objet
for (const clef in moyennes) {
  console.log(moyennes[clef]);
}
//itérer dans les objets for in c'est pour les objets et for of pour les tableaux
const Toulouse = {
  name: "Toulouse",
  population: 100000,
  region: "occitanie",
  lang: ["french", "Catalan", "Spanish"],
};
for (const prop in Toulouse) {
  //console.log(Toulouse[prop]);
}
const arrFromObj = Object.entries(Toulouse);
//console.log(arrFromObj);
//arrFromObj.forEach((el) => console.log(el[1]));

// for of pour les tableaux on passe par un destructuring de tableau clé et valeur
//for (const [key, value] of Object.entries(Toulouse)) {
// console.log(key, value);
//}
//console.log(Object.keys(Toulouse));
//console.log(Object.values(Toulouse));

//object.key me donne dans des propriétés énumerables mais getOwnPropertyNames me donne même des propriétés non énumerables

Object.defineProperties(Toulouse, {
  Pont: {
    value: "Pont neuf",
    enumerable: true,
  },

  " Basilique": {
    value: "Saint sernin",
    enumerable: false,
  },
});
console.log(Object.keys(Toulouse));
console.log(Object.getOwnPropertyNames(Toulouse));
const list = [
  {
    avatar:
      "https://fr.freepik.com/photos-gratuite/portrait-bel-homme-souriant-respect-pose-debout-fond-jaune_26727746.htm#query=avatar&position=2&from_view=keyword",
    name: " Franck",
  },
  {
    avatar:
      "https://fr.freepik.com/photos-gratuite/portrait-joyeux-bel-homme-garde-mains-jointes-sourit-largement-vetu-chemise-elegante_10518215.htm#query=avatar&position=1&from_view=keyword#page=1&query=a&from_query=undefined&position=0&from_view=keyword",
    name: " Antoine",
  },
  {
    avatar:
      "https://fr.freepik.com/photos-gratuite/agent-voyages-entend-desirs-clients-portrait-belle-femme-affaires-europeenne-chemisier-bleu-lunettes-se-tenant-main-dans-poches-souriant-etant-sympathique-poli-mur-gris_10292036.htm#query=avatar&position=48&from_view=keyword#page=1&query=a&from_query=undefined&position=0&from_view=keyword",
    name: "Amel",
  },
];
const search = function (list, search) {
search = search.tolowerCase()
return list.filter((el) => el.name.tolowerCase().includes(search));
};
// let i = 0;
// while (i < 10) {
//   console.log("Bonjour");
//   i++;
// }
const notes = [12, 13, 14, 16];
//for (let i = 0; i < notes.length; i++) {
for (let i in notes) {
  console.log(notes[i]);
}
const person = {
  firstName: "Rosbain",
  lastname: "BISSEMO",
};
//for (let i in person) {
// console.log(person[i]);
//}
const greeting = "Bonjour";
for (let letter of greeting) {
  console.log(letter);
}
//let chiffre = prompt("entrer un nombre");
//if (chiffre > 10 || chiffre < 0) {
// console.log("le nombre n'est pas entre 0 et 10");
//} else {
//console.log("le chiffre est entre 0 et 10");
// while (chiffre >= 0) {
// console.log(chiffre);
//}
//}
const arr = [2, 1, 20, 77, 66, 82, 42, 67, 42, 4];
let smallest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < smallest) {
    smallest = arr[i];
  }
}
console.log(smallest);
//const min = Math.min(...arr);
//console.log(min);
function sortedStudents(arr) {
  console.log(
    arr[0].grades.reduce((acc, cur) => acc + cur) / arr[0].grades.length
  );
  return arr.sort((a, b) => {
    return (
      b.grades.reduce((acc, cur) => acc + cur) / b.grades.length -
      a.grades.reduce((acc, cur) => acc + cur) / a.grades.length
    );
  });
}

/* Énoncé */

/*  
  Vous recevez un tableau rempli d'objets représentant les élèves d'une classe et leurs notes.
  Retournez un tableau dont les objets ont été triés par ordre décroissant en fonction de la moyenne de chaque élève.
*/

/* Test à passer */

console.log(
  sortedStudents([
    { name: "Tom", grades: [1, 3, 5, 9, 2, 7] },
    { name: "Jack", grades: [20, 4, 18, 10, 14, 12] },
    { name: "Ana", grades: [11, 14, 3, 14, 12, 14] },
    { name: "Sara", grades: [10, 12, 14, 15, 14, 19] },
  ])
);

/* Returns */

/* 
[
  { name: 'Sara', grades: [ 10, 12, 14, 15, 14, 19 ] },
  { name: 'Jack', grades: [ 20, 4, 18, 10, 14, 12 ] },
  { name: 'Ana', grades: [ 11, 14, 3, 14, 12, 14 ] },
  { name: 'Tom', grades: [ 1, 3, 5, 9, 2, 7 ] }
]
*/
const copenhagen = {
  name: "copenehagen(Kobenhaven)",
  population: 602481,
  founded: 1167,
  area: 180,
};
const props = Object.keys(copenhagen);
// console.log(props);
const basketTeam = {
  john: 195,
  daniel: 197,
  kevin: 189,
  joe: 193,
  kyle: 203,
};
const values = Object.values(basketTeam);
console.log(values);
const filteredHeights = values.filter(height =>height >195)

