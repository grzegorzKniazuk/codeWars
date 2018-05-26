function remove(s,n){
    let letters = s.split('');
    for (let i = 0, counter = 0; i < letters.length; i++) {
        if (letters[i] === '!' && counter < n) {
            letters.splice(i,1);
            counter++;
            i = -1;
        }
    }
    return letters.join('');
}