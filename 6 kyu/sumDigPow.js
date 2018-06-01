function sumDigPow(a, b) {
    let aDigits,
        sumPow = 0,
        result = [];

    while (a <= b) {
        aDigits = a.toString().split('');
        for (let i = 0, x = aDigits.length; i < x; i++) {
            sumPow +=  Math.pow(aDigits[i], i+1);
        }
        if (sumPow === a)result.push(a);
        sumPow = 0;
        a++;
    }
    return result;
}