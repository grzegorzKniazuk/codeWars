function isVow(a){
    return a.map(value => {
        if       (value === 97) return 'a';
        else if (value === 101) return 'e';
        else if (value === 105) return 'i';
        else if (value === 111) return 'o';
        else if (value === 117) return 'u';
        else { return value; }
    });
}