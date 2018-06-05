function contamination(text, char){
    return text ? text.split('').map(value => {
        return char;
    }).join('') : text;
}