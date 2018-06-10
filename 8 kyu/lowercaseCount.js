function lowercaseCount(str){
    return str.split('').filter(value => value !== value.toUpperCase()).length;
}