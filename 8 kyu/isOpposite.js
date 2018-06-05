function isOpposite(s1,s2){
    if (s1.length !== s2.length) return false;
    if (s1.toLowerCase() !== s2.toLowerCase()) return false;
    if (s1 === '' || s2 === '') return false;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i].toLowerCase() === s1[i] && s2[i] === s2[i].toLowerCase()) return false;
        if (s1[i].toUpperCase() === s1[i] && s2[i] === s2[i].toUpperCase()) return false;
    }
    return true;
}