function getNumberFromString(s) {
    let result = s.split('').filter(value => {
        return Number.isInteger(parseInt(value));
    });
    return parseInt(result.join(''));
}