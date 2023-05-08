/* FILTER - Exercice 2

Ecrire une fonction getMultiplesOf qui reçoit deux arguments:
1. un tableau de nombres.
2. un nombre.
En utilisant filter, elle doit renvoyer un tableau ne contenant que les
nombres du 1er argument qui sont multiples du nombre passé en 2ème.

Entrée:
    1er argument:  [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27]
    2ème argument: 5

Sortie attendue:
    [-10, 5, 15, 20]
 */

//WRITE YOUR FUNCTION HERE
const array =  [-12, -10, -7, -1, 5, 8, 11, 15, 20, 27]
const nombre = 5 

const getMultiplesOf =array => array.filter(element => element%5 ===0)


//DO NOT TOUCH THIS CODE
console.log(getMultiplesOf([-12, -10, -7, -1, 5, 8, 11, 15, 20, 27],5))