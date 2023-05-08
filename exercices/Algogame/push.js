// Réalisez la fonction sortNumbers
function sortNumbers( tInit, tInf, tSup ){
  

    //parcourir chaque element du tableau tInit
    tInit.forEach(function(num) {
      if (num<10){
        //Ajouter l'élement dans le tableau inférieur
        tInf.push(num)
        
        //Ajouter l'élement dans le tableau superieur
      }else{
        tSup.push(num)
      }
    })
    
    }
    const tInit =[10,23,45,100,2,9,99];
    const tInf =[];
      const tSup =[];
    sortNumbers(tInit,tInf,tSup)
    console.log(tInf);
    console.log(tSup);