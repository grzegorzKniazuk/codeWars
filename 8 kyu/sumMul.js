function sumMul(n,m){
    let multipler = n, sum = n;
    if (n <= 0 || m <= 0) return 'INVALID';
    while ((n + multipler) < m) {
        console.log('n przed: '+n);
        sum += (n += multipler);
        console.log('n po: '+n);
    }
    return sum;
}