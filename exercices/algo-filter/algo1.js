/* FILTER - Exercice 1

Ecrire une fonction getPositiveNumbers qui reçoit comme un argument un tableau de nombres.
En utilisant filter, cette fonction doit renvoyer un tableau ne contenant que des nombres
positifs ou nuls.

Entrée:
  [7, -4, 2, 0, -10, 3, 11]

Sortie attendue:
  [7, 2, 0, 3, 11]
 */

//WRITE YOUR FUNCTION HERE
/*const array =[ 7,-4, 2,0,-10, 3, 11]

const getPositiveNumbers = array =>array.filter(element => element >=0)

//DO NOT TOUCH THIS CODE
console.log(getPositiveNumbers([7, -4, 2, 0, -10, 3, 11]))*/

const user ={
  firstName : 'Rosbain',
  lastName :'Russen',
  old :33,
presentation: () =>  ` Im ${this.firstName}..... ${this.lastName} .....${this.old} `
} 
console.log(user.presentation())

const user1 ={
  firstName1 : 'Rosbain',
  lastName1 :'Russen',
  old1 :33,
presentation: function () { return ` Im ${this.firstName1}..... ${this.lastName1} .....${this.old1} `}
} 
console.log(user1.presentation())