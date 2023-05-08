let deck = {
  drawPile: [1, 2, 3, 4, 5],
  hand: [6, 7, 8, 9, 10],
  cemetery: [11, 12],
};

let idCardPlayed = 8; // Carte jouée
let drawCard = 0;
let startPlayerTurn = false;

deck.cemetery.push(idCardPlayed);
console.log(deck.cemetery);

deck.hand.splice(deck.hand.indexOf(idCardPlayed), 1);
console.log(deck);
