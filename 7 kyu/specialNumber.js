function specialNumber(n){
    let number = n.toString();
    for (let digit of number) {
        if (digit === '6' || digit === '7' || digit === '8' || digit === '9') {
            return 'NOT!!';
        }
    }
    return 'Special!!';
}