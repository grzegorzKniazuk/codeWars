function addLength(str) {
    let words = str.split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] += ` ${words[i].length}`;
    }
    return words;
}