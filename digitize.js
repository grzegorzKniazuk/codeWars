function digitize(n) {
    return n.toString().split('').reverse().map(value => {
        return parseInt(value);
    });
}