// Réalisez la fonction initXY

const posX = [];
const posY = [];



function initXY( x0, y0 )

{for (let i = 0; i<20 ; i++){
  posX[i]= x0 +(i*40)
  posY[i]= y0 +(i*30)
}

}



initXY(100,80)
console.log(posX);
console.log(posY);