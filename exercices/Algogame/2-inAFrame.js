// Pour ce kata vous allez devoir écrire
// une fonction qui prend en paramètre
// une chaîne de caractères et qui, à
// la manière d'un beau cadeau, affiche
// dans la console cette même chaîne de
// caractères entourée d'un cadre fait
// d'étoiles (comme ceci : *). Chaque
// mot s'affiche sur une ligne distincte,
// et les dimensions du cadre ne doivent
// pas être affectées par la longueur
// des différents mots...

// Happy coding!

const arr = [2, 1, 20, 77, 66, 82, 42, 67, 42, -1];
const smallest = Math.min(...arr);
// let smallest = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }

console.log(smallest);

const inAFrame = (str) => {
  const word = str.split(" ");
  const motLePlusLong = word.reduce((acc, cur) =>
    cur.length > acc.length ? cur : acc
  );
  const cadreLong = motLePlusLong.length + 4;
  const cadre = "*".repeat(cadreLong);
  console.log(cadre);

  // let motLePlusLong = word[0];
  // for (let i = 1; i < word.length; i++) {
  //   if (word[i].length > motLePlusLong.length) {
  //     motLePlusLong = word[i];
  //   }
  // }
  for (let test of word) {
    console.log(`* ${test.padEnd(motLePlusLong.length)} *`);
  }
  console.log(cadre);
};

inAFrame("Hakuna matata mais quelle phrase magnifique");
// Le résultat attendu :
//
// **************
// * Hakuna     *
// * matata     *
// * mais       *
// * quelle     *
// * phrase     *
// * magnifique *
// **************
