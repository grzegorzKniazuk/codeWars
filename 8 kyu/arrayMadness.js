function arrayMadness(a, b) {
    let aSum = a.reduce((a, b) => {
        return a + b ** 2;
    }, 0);
    let bSum = b.reduce((a, b) => {
        return a + b ** 3;
    }, 0);
    return aSum > bSum;
}