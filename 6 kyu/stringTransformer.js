function stringTransformer(str) {
    let words = str.split(' ').reverse().join(' ').split('');

    for(let i in words) {
        words[i] = (words[i].toUpperCase() === words[i])?words[i].toLowerCase():words[i].toUpperCase();
    }
    return words.join('');
}