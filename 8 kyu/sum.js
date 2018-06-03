function sum (numbers) {
    if (numbers.length > 0) {
        return numbers.reduce((a,b) => {
            return a + b;
        })
    } else {
        return 0;
    }
}