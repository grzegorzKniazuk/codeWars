function sumMix(x){
    return parseInt(x.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    }));
}