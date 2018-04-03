function list(names){
    if (names.length === 0) return '';
    let result = names[0].name;
    for (let i = 1; i < names.length; i++) {
        (i < names.length-1)? result += ', '+names[i].name:result += ' & '+names[i].name;
    }
    return result;
}