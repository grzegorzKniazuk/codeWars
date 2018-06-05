function squareOrSquareRoot(array) {
    return array.map(value => {
        return Math.sqrt(value) === parseInt(Math.sqrt(value)) ? Math.sqrt(value) : Math.pow(value, 2);
    });
}