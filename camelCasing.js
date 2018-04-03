function solution(string) {
    let left = '',
        right = '',
        i = 0;

    while (string[i] !== string[i].toUpperCase()) {
        left += string[i];
        i++;
    }
    for (let j = i; j < string.length; j++) if(string[i] !== ' ') right += string[j];
    return left+' '+right;
}