function countWords(str) {
    return str.trim().split(' ').filter(value => value !== '').length;
}