export function generateRandomNumbers(maxVal: number, count: number) {
    let haveIt: number[] = []
    for (var i = 0; i < count; i ++) {

        generateUniqueRandom(maxVal)
    }
    return haveIt
    function generateUniqueRandom(maxNr: number) {
        //Generate random number
        let random = (Math.random() * maxNr).toFixed();
    
        //Coerce to number by boxing
        var random2: number = Number(random);
    
        if(!haveIt.includes(random2)) {
            haveIt.push(random2);
            return random;
        } else {
            if(haveIt.length < maxNr) {
              //Recursively generate number
             return  generateUniqueRandom(maxNr);
            } else {
              console.log('No more numbers available.')
              return false;
            }
        }
    }
}

