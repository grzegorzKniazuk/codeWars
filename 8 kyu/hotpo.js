var hotpo = function(n){
    let counter = 0;
    while (n !== 1) {
        n = n % 2 === 0 ? n / 2: 3 * n + 1;
        counter++;
    }
    return counter;
};