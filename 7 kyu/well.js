function well(x){
    let good = 0;
    for (let i = 0; i < x.length; i++) {
        for (let j = 0; j < x[i].length; j++) {
            if (x[i][j].toString().toLowerCase() === 'good') good++;
        }
    }
    return good < 1 ? 'Fail!' : good <= 2 ? 'Publish!' : 'I smell a series!';
}