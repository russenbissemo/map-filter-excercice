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
module.exports = median;
