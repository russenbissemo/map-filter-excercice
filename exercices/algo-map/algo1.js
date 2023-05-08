/* MAP - Exercice 1

Ecrire une fonction getStringsLength qui reçoit comme un argument un tableau de chaînes.
En utilisant map, cette fonction doit renvoyer un tableau avec,
pour chaque chaîne CHAINE de longueur N en entrée, la chaîne "CHAINE contains N characters"
en sortie.

Entrée: ['Chicken','Bacon','Tofu','Mayonnaise']

Sortie attendue: ['Chicken contains 7 characters',
                  'Bacon contains 5 characters',
                  'Tofu contains 4 characters',
                  'Mayonnaise contains 10 characters'
                ]
 */

//WRITE YOUR FUNCTION HERE
const getStringsLength =string => string.map((el) => `${el} contains ${el.length} characters`)




//DO NOT TOUCH THIS CODE
console.log(getStringsLength(['Chicken','Bacon','Tofu','Mayonnaise']))