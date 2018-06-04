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

function remove(s){
    s = s.split('');
    if (s[s.length-1] === '!') s.pop();
    return s.join('');
}

function remove(s){
    let i = s.length-1;
    s = s.split('');

    while (s[i] === '!') {
        s.pop();
        i--;
    }

    return s.join('');
}