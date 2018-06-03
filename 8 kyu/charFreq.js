function charFreq(message) {
    message = message.split('');
    let letter = '', counter = 1, obj = {};
    while (message.length) {
        letter = message.shift();
        while (message.includes(letter)) {
            counter++;
            message.splice(message.indexOf(letter),1);
        }
        obj[letter] = counter;
        letter = '';
        counter = 1;
    }
    return obj;
}