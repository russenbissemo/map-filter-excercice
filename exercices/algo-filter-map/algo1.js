/* MAP & FILTER - Exercice 1

Il s'agit d'écrire une fonction getJediNames, qui reçoit en argument un tableau
de personnages de Star Wars (objets), chacun ayant deux propriétés :
- name: nom du personnage
- side: le côté de la Force où il se situe ('light' ou 'dark')
En utilisant filter puis map, la fonction doit renvoyer les noms des Jedis, c'est-à-dire les personnages du côté lumineux (pour ceux qui auraient passé les 40 dernières années dans une caverne en Lozère !)

Entrée:
[
  { name: 'Yoda', side: 'light' },
  { name: 'Count Dooku', side: 'dark' },
  { name: 'Obiwan Kenobi', side: 'light' },
  { name: 'Mace Windu', side: 'light' },
  { name: 'Darth Sidious', side: 'dark' },
  { name: 'Darth Maul', side: 'dark' }
]

Sortie attendue:
  ['Yoda', 'Obiwan Kenobi', 'Mace Windu']
*/

//WRITE YOUR FUNCTION HERE
/*const array1 = [
  { name: 'Yoda', side: 'light' },
  { name: 'Count Dooku', side: 'dark' },
  { name: 'Obiwan Kenobi', side: 'light' },
  { name: 'Mace Windu', side: 'light' },
  { name: 'Darth Sidious', side: 'dark' },
  { name: 'Darth Maul', side: 'dark' }
]
const getJediNames = array1 => array1.filter(element => element.side.includes('light')).map (element=> element.name)


//DO NOT TOUCH THIS CODE
console.log(getJediNames([{ name: 'Yoda', side: 'light' },{ name: 'Count Dooku', side: 'dark' },{ name: 'Obiwan Kenobi', side: 'light' },{ name: 'Mace Windu', side: 'light' },{ name: 'Darth Sidious', side: 'dark' },{ name: 'Darth Maul', side: 'dark' }]))*/

//METHODE SORT
/*const objArr = [
  { city: "Shangai", pop: 24 },
  { city: "Tokyo", pop: 37 },
  { city: "Sao Paulo", pop: 21 },
  { city: "Delhi", pop: 29 },
];
objArr.sort((a, b) => a.pop - b.pop);
console.log(objArr);*/
//(a-b)--> a un indice inferieur à b
//(a-b === 0) -->les positions ne changent pas
//(a-b>0) a un indice supérieur à b

//Convertir en chiffres Romain XVI= 16 et IV = 4
const chiffreRomain = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

// on commence à faire une somme qu'on initialise à 0
function LatinNToInt(myNumber) {
  let sum = 0;

  // on fait une boucle qui va parcourir notre nombre en chiffre romain
  for (let i = 0; i < myNumber.length; i++) {
    if (chiffreRomain[myNumber[i]] < chiffreRomain[myNumber[i + 1]]) {
      sum -= chiffreRomain[myNumber[i]];
    } else {
      sum += chiffreRomain[myNumber[i]];
    }
  }
  return sum;
}
console.log(LatinNToInt("XVI"));
console.log(LatinNToInt("IV"));
console.log(LatinNToInt("XV"));
console.log(LatinNToInt("XL"));

// problème de résolution d'un problème de médiane= partage une distribution en 2 parties égaux , donc j'établis que c'est un tableau que je dois trier et prendre un élement du milieu
const tab1 = [1, 2, 3]; // médiane élément du milieu est 2 pour un tableau paire ça marche
const tab2 = [1, 2, 3, 4]; // la mediane ?
const tab3 = [1, 5, 4, 3, 2]; //le tableau doit être trié avant de calculer la médiane
// on crée une fonction dans laquelle on passe le tableau numbers en parametres
function median(numbers) {
  // on utilise la méthode Sort afin de copier le tableau pour le faire passer en référence afin qu'il ne soit pas modifier dans son ordre
  const sorted = [...numbers].sort((a, b) => a - b);
  // on divise la longueur du tableau par 2 et on l'arrondi à l'inférieur afin de gérer les cas des tableaux impairs
  const middleSorted = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0
    ? (sorted[middle] + sorted[middle - 1]) / 2
    : sorted[middle];
}
