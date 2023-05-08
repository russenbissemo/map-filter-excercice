//CORRECTION 

//MAP)
//  ALGO1.JS
        const getStringsLength = string => string.map(element => `${element} contains ${element.length} characters`)
//  ALGO2.JS
        const getFoodCategories = array => array.map(element => element.isVegetarian ? `${element.food} is suitable for vegetarians` : `${element.food} is not suitable for vegetarians`)
//  ALGO3.JS
        const getMoviesFreshness = films => films.map(film => ({...film, "label": film.rating < 60 ? "rotten" : film.rating>=60 && film.rating<=75 ? "fresh" : "certified fresh"}))
//  ALGO4.JS
        const multiplyOddIndices = array => array.map((element,index) => index%2===1 ? element*index : element)

//FILTER)
//  ALGO1.JS
        const getPositiveNumbers = array => array.filter(element => element>=0)
//  ALGO2.JS
        const getMultiplesOf = (array, number) => array.filter(element => element%number===0)
//  ALGO3.JS
        const keepStarks = array => array.filter(element => element.includes('Stark'))
//  ALGO4.JS
        const filterOnPrice = (array, maxPrice) => array.filter(element => element.price < maxPrice)
//  ALGO5.JS
        const searchWordFilter = (array, word) => array.filter(element => element.includes(word))

//MAP-FILTER)
//  ALGO1.JS
        const getJediNames = array => array.filter(element => element.side === 'light').map(element => element.name)
//  ALGO2.JS
        const getCampusesTeachingReact = array => array.filter(element => element.curriculums.includes('JS/React')).map(element => element.city)
//  ALGO3.JS

//  ALGO4.JS








