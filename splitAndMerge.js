function splitAndMerge(str,sp){
    let words = str.split(' '),
        resultWords = [];

    for (let i = 0, tempWordLetters = [], tempWord = []; i < words.length; i++) {
        tempWordLetters = words[i].split('');
        for (let j = 0; j < words[i].length; j++) {
            (j+1 !== words[i].length)?tempWord.push(tempWordLetters[j]+sp):tempWord.push(tempWordLetters[j]);
        }
        resultWords.push(tempWord.join(''));
        tempWordLetters = [];
        tempWord = []
    }
    return resultWords.join(' ');
}