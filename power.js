function power(x,y){
    if (y === 0) return 1;
    let pow = x;
    for (let i = 1; i < y; i++) {
        pow *= x;
    }
    return pow;
}