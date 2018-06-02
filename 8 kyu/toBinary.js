function toBinary(n){
    if (n === 0) return 0;
    let binary = '';
    while (n !== 0) {
        binary += parseInt(n % 2);
        n = parseInt(n / 2);
    }
    return parseInt(binary.split('').reverse().join(''));
}