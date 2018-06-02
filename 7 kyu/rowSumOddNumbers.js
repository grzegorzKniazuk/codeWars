function rowSumOddNumbers(n) {
    let result = [], temp = [], k = 1, l = 1;
    for (let i = 0; i < n; i++) { // rows
        for (let j = 0; j <= k; j++, l++) {
            if (l % 2 !== 0) temp.push(l);
        }
        result.push(temp);
        temp = [];
        k+=2;
    }
    return result[result.length-1].reduce((a,b) => { return a+b; });
}