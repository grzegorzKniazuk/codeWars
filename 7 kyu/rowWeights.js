function rowWeights(array){
    return [array.filter((value, index) => index % 2 === 0).reduce((a,b) => a + b, 0),
        array.filter((value, index) => index % 2 !== 0).reduce((a,b) => a + b, 0)];
}