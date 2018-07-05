function nbDig(n, d) {
    let counter = 0;

    for (let i = 0; i <= n; i++) {
        let digits = Math.pow(i,2).toString().split('');

        for (let j = 0; j < digits.length; j++) {
            if (digits[j] == d) counter++;
        }
    }

    return counter;
}