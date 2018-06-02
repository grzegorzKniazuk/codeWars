function capitalizeWord(word) {
    let toUpper = word.split('');
    toUpper[0] = toUpper[0].toUpperCase();
    return toUpper.join('');
}