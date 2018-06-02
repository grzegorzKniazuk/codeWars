function odds(values){
    return values.filter(a => {
        return a % 2 !== 0;
    });
}