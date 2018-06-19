function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    return parseInt(Math.sqrt(Object.values(arguments).map(value => value * value).reduce((a,b) => a + b,0)) / 2);
}