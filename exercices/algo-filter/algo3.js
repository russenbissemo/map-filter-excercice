/* FILTER - Exercice 3

Ecrire une fonction keepStarks, qui prend en arguments un tableau de chaînes
(plus spécifiquement, des noms de personnages de Game of Thrones).
La fonction doit renvoyer un tableau ne contenant que les membres de la famille Stark.
Il y a plusieurs façons d'écrire cette fonction, et outre filter, tu auras probablement
besoin d'une de ces méthodes de String: endsWith ou split.

Entrée:
  [
    'Bran Stark',
    'Cersei Lannister',
    'Sandor Clegane',
    'Arya Stark',
    'Yara Greyjoy',
    'Sansa Stark'
  ]

Sortie attendue:
  ['Bran Stark', 'Arya Stark', 'Sansa Stark']
 */

//WRITE YOUR FUNCTION HERE
const array = [
  'Bran Stark',
  'Cersei Lannister',
  'Sandor Clegane',
  'Arya Stark',
  'Yara Greyjoy',
  'Sansa Stark'
]

const keepStarks = array => array.filter(element => element.includes('Stark'));
//DO NOT TOUCH THIS CODE
console.log(keepStarks(['Bran Stark','Cersei Lannister','Sandor Clegane','Arya Stark','Yara Greyjoy','Sansa Stark']))